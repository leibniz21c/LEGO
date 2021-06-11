var gdjs;
(function(gdjs2) {
  class SpriteAnimationFrame {
    constructor(imageManager, frameData) {
      this.center = {x: 0, y: 0};
      this.origin = {x: 0, y: 0};
      this.hasCustomHitBoxes = false;
      this.customHitBoxes = [];
      this.image = frameData ? frameData.image : "";
      this.texture = gdjs2.SpriteRuntimeObjectRenderer.getAnimationFrame(imageManager, this.image);
      this.points = new Hashtable();
      this.reinitialize(imageManager, frameData);
    }
    reinitialize(imageManager, frameData) {
      this.points.clear();
      for (let i = 0, len = frameData.points.length; i < len; ++i) {
        const ptData = frameData.points[i];
        const point = {x: ptData.x, y: ptData.y};
        this.points.put(ptData.name, point);
      }
      const origin = frameData.originPoint;
      this.origin.x = origin.x;
      this.origin.y = origin.y;
      const center = frameData.centerPoint;
      if (center.automatic !== true) {
        this.center.x = center.x;
        this.center.y = center.y;
      } else {
        this.center.x = gdjs2.SpriteRuntimeObjectRenderer.getAnimationFrameWidth(this.texture) / 2;
        this.center.y = gdjs2.SpriteRuntimeObjectRenderer.getAnimationFrameHeight(this.texture) / 2;
      }
      if (frameData.hasCustomCollisionMask) {
        this.hasCustomHitBoxes = true;
        let i = 0;
        for (let len = frameData.customCollisionMask.length; i < len; ++i) {
          const polygonData = frameData.customCollisionMask[i];
          if (i >= this.customHitBoxes.length) {
            this.customHitBoxes.push(new gdjs2.Polygon());
          }
          let j = 0;
          for (const len2 = polygonData.length; j < len2; ++j) {
            const pointData = polygonData[j];
            if (j >= this.customHitBoxes[i].vertices.length) {
              this.customHitBoxes[i].vertices.push([0, 0]);
            }
            this.customHitBoxes[i].vertices[j][0] = pointData.x;
            this.customHitBoxes[i].vertices[j][1] = pointData.y;
          }
          this.customHitBoxes[i].vertices.length = j;
        }
        this.customHitBoxes.length = i;
      } else {
        this.customHitBoxes.length = 0;
      }
    }
    getPoint(name) {
      if (name === "Centre" || name === "Center") {
        return this.center;
      } else {
        if (name === "Origin") {
          return this.origin;
        }
      }
      return this.points.containsKey(name) ? this.points.get(name) : this.origin;
    }
  }
  gdjs2.SpriteAnimationFrame = SpriteAnimationFrame;
  class SpriteAnimationDirection {
    constructor(imageManager, directionData) {
      this.frames = [];
      this.timeBetweenFrames = directionData ? directionData.timeBetweenFrames : 1;
      this.loop = !!directionData.looping;
      this.reinitialize(imageManager, directionData);
    }
    reinitialize(imageManager, directionData) {
      this.timeBetweenFrames = directionData ? directionData.timeBetweenFrames : 1;
      this.loop = !!directionData.looping;
      let i = 0;
      for (const len = directionData.sprites.length; i < len; ++i) {
        const frameData = directionData.sprites[i];
        if (i < this.frames.length) {
          this.frames[i].reinitialize(imageManager, frameData);
        } else {
          this.frames.push(new gdjs2.SpriteAnimationFrame(imageManager, frameData));
        }
      }
      this.frames.length = i;
    }
  }
  gdjs2.SpriteAnimationDirection = SpriteAnimationDirection;
  class SpriteAnimation {
    constructor(imageManager, animData) {
      this.directions = [];
      this.hasMultipleDirections = !!animData.useMultipleDirections;
      this.name = animData.name || "";
      this.reinitialize(imageManager, animData);
    }
    reinitialize(imageManager, animData) {
      this.hasMultipleDirections = !!animData.useMultipleDirections;
      this.name = animData.name || "";
      let i = 0;
      for (const len = animData.directions.length; i < len; ++i) {
        const directionData = animData.directions[i];
        if (i < this.directions.length) {
          this.directions[i].reinitialize(imageManager, directionData);
        } else {
          this.directions.push(new gdjs2.SpriteAnimationDirection(imageManager, directionData));
        }
      }
      this.directions.length = i;
    }
  }
  gdjs2.SpriteAnimation = SpriteAnimation;
  class SpriteRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, spriteObjectData) {
      super(runtimeScene, spriteObjectData);
      this._currentAnimation = 0;
      this._currentDirection = 0;
      this._currentFrame = 0;
      this._frameElapsedTime = 0;
      this._animationSpeedScale = 1;
      this._animationPaused = false;
      this._scaleX = 1;
      this._scaleY = 1;
      this._blendMode = 0;
      this._flippedX = false;
      this._flippedY = false;
      this.opacity = 255;
      this._animations = [];
      this._animationFrame = null;
      this._updateIfNotVisible = !!spriteObjectData.updateIfNotVisible;
      for (let i = 0, len = spriteObjectData.animations.length; i < len; ++i) {
        this._animations.push(new gdjs2.SpriteAnimation(runtimeScene.getGame().getImageManager(), spriteObjectData.animations[i]));
      }
      this._renderer = new gdjs2.SpriteRuntimeObjectRenderer(this, runtimeScene);
      this._updateAnimationFrame();
      this.onCreated();
    }
    reinitialize(spriteObjectData) {
      super.reinitialize(spriteObjectData);
      const runtimeScene = this._runtimeScene;
      this._currentAnimation = 0;
      this._currentDirection = 0;
      this._currentFrame = 0;
      this._frameElapsedTime = 0;
      this._animationSpeedScale = 1;
      this._animationPaused = false;
      this._scaleX = 1;
      this._scaleY = 1;
      this._blendMode = 0;
      this._flippedX = false;
      this._flippedY = false;
      this.opacity = 255;
      this._updateIfNotVisible = !!spriteObjectData.updateIfNotVisible;
      let i = 0;
      for (const len = spriteObjectData.animations.length; i < len; ++i) {
        const animData = spriteObjectData.animations[i];
        if (i < this._animations.length) {
          this._animations[i].reinitialize(runtimeScene.getGame().getImageManager(), animData);
        } else {
          this._animations.push(new gdjs2.SpriteAnimation(runtimeScene.getGame().getImageManager(), animData));
        }
      }
      this._animations.length = i;
      this._animationFrame = null;
      this._renderer.reinitialize(this, runtimeScene);
      this._updateAnimationFrame();
      this.onCreated();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      const runtimeScene = this._runtimeScene;
      let i = 0;
      for (const len = newObjectData.animations.length; i < len; ++i) {
        const animData = newObjectData.animations[i];
        if (i < this._animations.length) {
          this._animations[i].reinitialize(runtimeScene.getGame().getImageManager(), animData);
        } else {
          this._animations.push(new gdjs2.SpriteAnimation(runtimeScene.getGame().getImageManager(), animData));
        }
      }
      this._animations.length = i;
      this._updateAnimationFrame();
      if (!this._animationFrame) {
        this.setAnimation(0);
      }
      this.hitBoxesDirty = true;
      return true;
    }
    extraInitializationFromInitialInstance(initialInstanceData) {
      if (initialInstanceData.numberProperties) {
        for (let i = 0, len = initialInstanceData.numberProperties.length; i < len; ++i) {
          const extraData = initialInstanceData.numberProperties[i];
          if (extraData.name === "animation") {
            this.setAnimation(extraData.value);
          }
        }
      }
      if (initialInstanceData.customSize) {
        this.setWidth(initialInstanceData.width);
        this.setHeight(initialInstanceData.height);
      }
    }
    update(runtimeScene) {
      if (!this._updateIfNotVisible && !this._renderer.getRendererObject().visible) {
        return;
      }
      if (this._currentAnimation >= this._animations.length || this._currentDirection >= this._animations[this._currentAnimation].directions.length) {
        return;
      }
      const direction = this._animations[this._currentAnimation].directions[this._currentDirection];
      const oldFrame = this._currentFrame;
      if (!direction.loop && this._currentFrame >= direction.frames.length) {
      } else {
        const elapsedTime = this.getElapsedTime(runtimeScene) / 1e3;
        this._frameElapsedTime += this._animationPaused ? 0 : elapsedTime * this._animationSpeedScale;
        if (this._frameElapsedTime > direction.timeBetweenFrames) {
          const count = Math.floor(this._frameElapsedTime / direction.timeBetweenFrames);
          this._currentFrame += count;
          this._frameElapsedTime = this._frameElapsedTime - count * direction.timeBetweenFrames;
          if (this._frameElapsedTime < 0) {
            this._frameElapsedTime = 0;
          }
        }
        if (this._currentFrame >= direction.frames.length) {
          this._currentFrame = direction.loop ? this._currentFrame % direction.frames.length : direction.frames.length - 1;
        }
        if (this._currentFrame < 0) {
          this._currentFrame = 0;
        }
      }
      if (oldFrame !== this._currentFrame || this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (oldFrame !== this._currentFrame) {
        this.hitBoxesDirty = true;
      }
      this._renderer.ensureUpToDate();
    }
    updatePreRender(runtimeScene) {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      this._renderer.ensureUpToDate();
    }
    _updateAnimationFrame() {
      this._animationFrameDirty = false;
      if (this._currentAnimation < this._animations.length && this._currentDirection < this._animations[this._currentAnimation].directions.length) {
        const direction = this._animations[this._currentAnimation].directions[this._currentDirection];
        if (this._currentFrame < direction.frames.length) {
          this._animationFrame = direction.frames[this._currentFrame];
          if (this._animationFrame !== null) {
            this._renderer.updateFrame(this._animationFrame);
          }
          return;
        }
      }
      this._animationFrame = null;
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    updateHitBoxes() {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (this._animationFrame === null) {
        return;
      }
      if (!this._animationFrame.hasCustomHitBoxes) {
        return super.updateHitBoxes();
      }
      for (let i = 0; i < this._animationFrame.customHitBoxes.length; ++i) {
        if (i >= this.hitBoxes.length) {
          this.hitBoxes.push(new gdjs2.Polygon());
        }
        for (let j = 0; j < this._animationFrame.customHitBoxes[i].vertices.length; ++j) {
          if (j >= this.hitBoxes[i].vertices.length) {
            this.hitBoxes[i].vertices.push([0, 0]);
          }
          this._transformToGlobal(this._animationFrame.customHitBoxes[i].vertices[j][0], this._animationFrame.customHitBoxes[i].vertices[j][1], this.hitBoxes[i].vertices[j]);
        }
        this.hitBoxes[i].vertices.length = this._animationFrame.customHitBoxes[i].vertices.length;
      }
      this.hitBoxes.length = this._animationFrame.customHitBoxes.length;
    }
    setAnimation(newAnimation) {
      newAnimation = newAnimation | 0;
      if (newAnimation < this._animations.length && this._currentAnimation !== newAnimation && newAnimation >= 0) {
        this._currentAnimation = newAnimation;
        this._currentFrame = 0;
        this._frameElapsedTime = 0;
        this._renderer.update();
        this._animationFrameDirty = true;
        this.hitBoxesDirty = true;
      }
    }
    setAnimationName(newAnimationName) {
      if (!newAnimationName) {
        return;
      }
      for (let i = 0; i < this._animations.length; ++i) {
        if (this._animations[i].name === newAnimationName) {
          return this.setAnimation(i);
        }
      }
    }
    getAnimation() {
      return this._currentAnimation;
    }
    getAnimationName() {
      if (this._currentAnimation >= this._animations.length) {
        return "";
      }
      return this._animations[this._currentAnimation].name;
    }
    isCurrentAnimationName(name) {
      return this.getAnimationName() === name;
    }
    setDirectionOrAngle(newValue) {
      if (this._currentAnimation >= this._animations.length) {
        return;
      }
      const anim = this._animations[this._currentAnimation];
      if (!anim.hasMultipleDirections) {
        if (this.angle === newValue) {
          return;
        }
        this.angle = newValue;
        this.hitBoxesDirty = true;
        this._renderer.updateAngle();
      } else {
        newValue = newValue | 0;
        if (newValue === this._currentDirection || newValue >= anim.directions.length || anim.directions[newValue].frames.length === 0) {
          return;
        }
        this._currentDirection = newValue;
        this._currentFrame = 0;
        this._frameElapsedTime = 0;
        this.angle = 0;
        this._renderer.update();
        this._animationFrameDirty = true;
        this.hitBoxesDirty = true;
      }
    }
    getDirectionOrAngle() {
      if (this._currentAnimation >= this._animations.length) {
        return 0;
      }
      if (!this._animations[this._currentAnimation].hasMultipleDirections) {
        return this.angle;
      } else {
        return this._currentDirection;
      }
    }
    setAnimationFrame(newFrame) {
      if (this._currentAnimation >= this._animations.length || this._currentDirection >= this._animations[this._currentAnimation].directions.length) {
        return;
      }
      const direction = this._animations[this._currentAnimation].directions[this._currentDirection];
      if (newFrame >= 0 && newFrame < direction.frames.length && newFrame !== this._currentFrame) {
        this._currentFrame = newFrame;
        this._animationFrameDirty = true;
        this.hitBoxesDirty = true;
      }
    }
    getAnimationFrame() {
      return this._currentFrame;
    }
    hasAnimationEnded() {
      if (this._currentAnimation >= this._animations.length || this._currentDirection >= this._animations[this._currentAnimation].directions.length) {
        return true;
      }
      const direction = this._animations[this._currentAnimation].directions[this._currentDirection];
      if (direction.loop) {
        return false;
      }
      return this._currentFrame === direction.frames.length - 1;
    }
    animationPaused() {
      return this._animationPaused;
    }
    pauseAnimation() {
      this._animationPaused = true;
    }
    playAnimation() {
      this._animationPaused = false;
    }
    getAnimationSpeedScale() {
      return this._animationSpeedScale;
    }
    setAnimationSpeedScale(ratio) {
      this._animationSpeedScale = ratio;
    }
    getPointX(name) {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (name.length === 0 || this._animationFrame === null) {
        return this.getX();
      }
      const pt = this._animationFrame.getPoint(name);
      const pos = gdjs2.staticArray(SpriteRuntimeObject.prototype.getPointX);
      this._transformToGlobal(pt.x, pt.y, pos);
      return pos[0];
    }
    getPointY(name) {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (name.length === 0 || this._animationFrame === null) {
        return this.getY();
      }
      const pt = this._animationFrame.getPoint(name);
      const pos = gdjs2.staticArray(SpriteRuntimeObject.prototype.getPointY);
      this._transformToGlobal(pt.x, pt.y, pos);
      return pos[1];
    }
    getPointPosition(name) {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (name.length === 0 || this._animationFrame === null) {
        return [this.getX(), this.getY()];
      }
      const pt = this._animationFrame.getPoint(name);
      const pos = gdjs2.staticArray(SpriteRuntimeObject.prototype.getPointX);
      this._transformToGlobal(pt.x, pt.y, pos);
      return [pos[0], pos[1]];
    }
    _transformToGlobal(x, y, result) {
      const animationFrame = this._animationFrame;
      let cx = animationFrame.center.x;
      let cy = animationFrame.center.y;
      if (this._flippedX) {
        x = x + (cx - x) * 2;
      }
      if (this._flippedY) {
        y = y + (cy - y) * 2;
      }
      const absScaleX = Math.abs(this._scaleX);
      const absScaleY = Math.abs(this._scaleY);
      x *= absScaleX;
      y *= absScaleY;
      cx *= absScaleX;
      cy *= absScaleY;
      const oldX = x;
      const angleInRadians = this.angle / 180 * Math.PI;
      const cosValue = Math.cos(angleInRadians);
      const sinValue = Math.sin(angleInRadians);
      const xToCenterXDelta = x - cx;
      const yToCenterYDelta = y - cy;
      x = cx + cosValue * xToCenterXDelta - sinValue * yToCenterYDelta;
      y = cy + sinValue * xToCenterXDelta + cosValue * yToCenterYDelta;
      result.length = 2;
      result[0] = x + (this.x - animationFrame.origin.x * absScaleX);
      result[1] = y + (this.y - animationFrame.origin.y * absScaleY);
    }
    getDrawableX() {
      if (this._animationFrame === null) {
        return this.x;
      }
      const absScaleX = Math.abs(this._scaleX);
      if (!this._flippedX) {
        return this.x - this._animationFrame.origin.x * absScaleX;
      } else {
        return this.x + (-this._animationFrame.origin.x - this._renderer.getUnscaledWidth() + 2 * this._animationFrame.center.x) * absScaleX;
      }
    }
    getDrawableY() {
      if (this._animationFrame === null) {
        return this.y;
      }
      const absScaleY = Math.abs(this._scaleY);
      if (!this._flippedY) {
        return this.y - this._animationFrame.origin.y * absScaleY;
      } else {
        return this.y + (-this._animationFrame.origin.y - this._renderer.getUnscaledHeight() + 2 * this._animationFrame.center.y) * absScaleY;
      }
    }
    getCenterX() {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (this._animationFrame === null) {
        return 0;
      }
      if (!this._flippedX) {
        return this._animationFrame.center.x * Math.abs(this._scaleX);
      } else {
        return (this._renderer.getUnscaledWidth() - this._animationFrame.center.x) * Math.abs(this._scaleX);
      }
    }
    getCenterY() {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      if (this._animationFrame === null) {
        return 0;
      }
      if (!this._flippedY) {
        return this._animationFrame.center.y * Math.abs(this._scaleY);
      } else {
        return (this._renderer.getUnscaledHeight() - this._animationFrame.center.y) * Math.abs(this._scaleY);
      }
    }
    setX(x) {
      if (x === this.x) {
        return;
      }
      this.x = x;
      if (this._animationFrame !== null) {
        this.hitBoxesDirty = true;
        this._renderer.updateX();
      }
    }
    setY(y) {
      if (y === this.y) {
        return;
      }
      this.y = y;
      if (this._animationFrame !== null) {
        this.hitBoxesDirty = true;
        this._renderer.updateY();
      }
    }
    setAngle(angle) {
      if (this._currentAnimation >= this._animations.length) {
        return;
      }
      if (!this._animations[this._currentAnimation].hasMultipleDirections) {
        if (this.angle === angle) {
          return;
        }
        this.angle = angle;
        this._renderer.updateAngle();
        this.hitBoxesDirty = true;
      } else {
        angle = angle % 360;
        if (angle < 0) {
          angle += 360;
        }
        this.setDirectionOrAngle(Math.round(angle / 45) % 8);
      }
    }
    getAngle() {
      if (this._currentAnimation >= this._animations.length) {
        return 0;
      }
      if (!this._animations[this._currentAnimation].hasMultipleDirections) {
        return this.angle;
      } else {
        return this._currentDirection * 45;
      }
    }
    setBlendMode(newMode) {
      if (this._blendMode === newMode) {
        return;
      }
      this._blendMode = newMode;
      this._renderer.update();
    }
    getBlendMode() {
      return this._blendMode;
    }
    setOpacity(opacity) {
      if (opacity < 0) {
        opacity = 0;
      }
      if (opacity > 255) {
        opacity = 255;
      }
      this.opacity = opacity;
      this._renderer.updateOpacity();
    }
    getOpacity() {
      return this.opacity;
    }
    hide(enable) {
      if (enable === void 0) {
        enable = true;
      }
      this.hidden = enable;
      this._renderer.updateVisibility();
    }
    setColor(rgbColor) {
      this._renderer.setColor(rgbColor);
    }
    getColor() {
      return this._renderer.getColor();
    }
    flipX(enable) {
      if (enable !== this._flippedX) {
        this._scaleX *= -1;
        this._flippedX = enable;
        this.hitBoxesDirty = true;
        this._renderer.update();
      }
    }
    flipY(enable) {
      if (enable !== this._flippedY) {
        this._scaleY *= -1;
        this._flippedY = enable;
        this.hitBoxesDirty = true;
        this._renderer.update();
      }
    }
    isFlippedX() {
      return this._flippedX;
    }
    isFlippedY() {
      return this._flippedY;
    }
    getWidth() {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      return this._renderer.getWidth();
    }
    getHeight() {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      return this._renderer.getHeight();
    }
    setWidth(newWidth) {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      const unscaledWidth = this._renderer.getUnscaledWidth();
      if (unscaledWidth !== 0) {
        this.setScaleX(newWidth / unscaledWidth);
      }
    }
    setHeight(newHeight) {
      if (this._animationFrameDirty) {
        this._updateAnimationFrame();
      }
      const unscaledHeight = this._renderer.getUnscaledHeight();
      if (unscaledHeight !== 0) {
        this.setScaleY(newHeight / unscaledHeight);
      }
    }
    setScale(newScale) {
      if (newScale < 0) {
        newScale = 0;
      }
      if (newScale === Math.abs(this._scaleX) && newScale === Math.abs(this._scaleY)) {
        return;
      }
      this._scaleX = newScale * (this._flippedX ? -1 : 1);
      this._scaleY = newScale * (this._flippedY ? -1 : 1);
      this._renderer.update();
      this.hitBoxesDirty = true;
    }
    setScaleX(newScale) {
      if (newScale < 0) {
        newScale = 0;
      }
      if (newScale === Math.abs(this._scaleX)) {
        return;
      }
      this._scaleX = newScale * (this._flippedX ? -1 : 1);
      this._renderer.update();
      this.hitBoxesDirty = true;
    }
    setScaleY(newScale) {
      if (newScale < 0) {
        newScale = 0;
      }
      if (newScale === Math.abs(this._scaleY)) {
        return;
      }
      this._scaleY = newScale * (this._flippedY ? -1 : 1);
      this._renderer.update();
      this.hitBoxesDirty = true;
    }
    getScale() {
      return (Math.abs(this._scaleX) + Math.abs(this._scaleY)) / 2;
    }
    getScaleY() {
      return Math.abs(this._scaleY);
    }
    getScaleX() {
      return Math.abs(this._scaleX);
    }
    turnTowardObject(obj, scene) {
      if (obj === null) {
        return;
      }
      this.rotateTowardPosition(obj.getDrawableX() + obj.getCenterX(), obj.getDrawableY() + obj.getCenterY(), 0, scene);
    }
  }
  gdjs2.SpriteRuntimeObject = SpriteRuntimeObject;
  gdjs2.registerObject("Sprite", gdjs2.SpriteRuntimeObject);
  SpriteRuntimeObject.supportsReinitialization = true;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=spriteruntimeobject.js.map
