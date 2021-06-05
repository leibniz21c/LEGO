var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class SpriteRuntimeObjectPixiRenderer {
    constructor(runtimeObject, runtimeScene) {
      this._spriteDirty = true;
      this._textureDirty = true;
      this._cachedWidth = 0;
      this._cachedHeight = 0;
      this._object = runtimeObject;
      if (this._sprite === void 0) {
        this._sprite = new PIXI.Sprite(runtimeScene.getGame().getImageManager().getInvalidPIXITexture());
      }
      const layer = runtimeScene.getLayer("");
      if (layer) {
        layer.getRenderer().addRendererObject(this._sprite, runtimeObject.getZOrder());
      }
    }
    reinitialize(runtimeObject, runtimeScene) {
      this._object = runtimeObject;
      this._spriteDirty = true;
      this._textureDirty = true;
      const layer = runtimeScene.getLayer("");
      if (layer) {
        layer.getRenderer().addRendererObject(this._sprite, runtimeObject.getZOrder());
      }
    }
    getRendererObject() {
      return this._sprite;
    }
    _updatePIXISprite() {
      if (this._object._animationFrame !== null) {
        this._sprite.anchor.x = this._object._animationFrame.center.x / this._sprite.texture.frame.width;
        this._sprite.anchor.y = this._object._animationFrame.center.y / this._sprite.texture.frame.height;
        this._sprite.position.x = this._object.x + (this._object._animationFrame.center.x - this._object._animationFrame.origin.x) * Math.abs(this._object._scaleX);
        this._sprite.position.y = this._object.y + (this._object._animationFrame.center.y - this._object._animationFrame.origin.y) * Math.abs(this._object._scaleY);
        this._sprite.rotation = gdjs2.toRad(this._object.angle);
        this._sprite.visible = !this._object.hidden;
        this._sprite.blendMode = this._object._blendMode;
        this._sprite.alpha = this._object.opacity / 255;
        this._sprite.scale.x = this._object._scaleX;
        this._sprite.scale.y = this._object._scaleY;
        this._cachedWidth = Math.abs(this._sprite.width);
        this._cachedHeight = Math.abs(this._sprite.height);
      } else {
        this._sprite.visible = false;
        this._sprite.alpha = 0;
        this._cachedWidth = 0;
        this._cachedHeight = 0;
      }
      this._spriteDirty = false;
    }
    ensureUpToDate() {
      if (this._spriteDirty) {
        this._updatePIXISprite();
      }
    }
    updateFrame(animationFrame) {
      this._spriteDirty = true;
      this._sprite.texture = animationFrame.texture;
    }
    update() {
      this._spriteDirty = true;
    }
    updateX() {
      const animationFrame = this._object._animationFrame;
      this._sprite.position.x = this._object.x + (animationFrame.center.x - animationFrame.origin.x) * Math.abs(this._object._scaleX);
    }
    updateY() {
      const animationFrame = this._object._animationFrame;
      this._sprite.position.y = this._object.y + (animationFrame.center.y - animationFrame.origin.y) * Math.abs(this._object._scaleY);
    }
    updateAngle() {
      this._sprite.rotation = gdjs2.toRad(this._object.angle);
    }
    updateOpacity() {
      this._sprite.alpha = this._object.opacity / 255;
    }
    updateVisibility() {
      this._sprite.visible = !this._object.hidden;
    }
    setColor(rgbColor) {
      const colors = rgbColor.split(";");
      if (colors.length < 3) {
        return;
      }
      this._sprite.tint = "0x" + gdjs2.rgbToHex(parseInt(colors[0], 10), parseInt(colors[1], 10), parseInt(colors[2], 10));
    }
    getColor() {
      const rgb = PIXI.utils.hex2rgb(this._sprite.tint);
      return Math.floor(rgb[0] * 255) + ";" + Math.floor(rgb[1] * 255) + ";" + Math.floor(rgb[2] * 255);
    }
    getWidth() {
      if (this._spriteDirty) {
        this._updatePIXISprite();
      }
      return this._cachedWidth;
    }
    getHeight() {
      if (this._spriteDirty) {
        this._updatePIXISprite();
      }
      return this._cachedHeight;
    }
    getUnscaledWidth() {
      return this._sprite.texture.frame.width;
    }
    getUnscaledHeight() {
      return this._sprite.texture.frame.height;
    }
    static getAnimationFrame(imageManager, imageName) {
      return imageManager.getPIXITexture(imageName);
    }
    static getAnimationFrameWidth(pixiTexture) {
      return pixiTexture.width;
    }
    static getAnimationFrameHeight(pixiTexture) {
      return pixiTexture.height;
    }
  }
  gdjs2.SpriteRuntimeObjectPixiRenderer = SpriteRuntimeObjectPixiRenderer;
  gdjs2.SpriteRuntimeObjectRenderer = SpriteRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=spriteruntimeobject-pixi-renderer.js.map
