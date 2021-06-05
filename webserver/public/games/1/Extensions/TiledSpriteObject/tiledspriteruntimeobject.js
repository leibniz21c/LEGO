var gdjs;
(function(gdjs2) {
  class TiledSpriteRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, tiledSpriteObjectData) {
      super(runtimeScene, tiledSpriteObjectData);
      this._xOffset = 0;
      this._yOffset = 0;
      this.opacity = 255;
      this._renderer = new gdjs2.TiledSpriteRuntimeObjectRenderer(this, runtimeScene, tiledSpriteObjectData.texture);
      this._width = 0;
      this._height = 0;
      this.setWidth(tiledSpriteObjectData.width);
      this.setHeight(tiledSpriteObjectData.height);
      this.onCreated();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      if (oldObjectData.texture !== newObjectData.texture) {
        this.setTexture(newObjectData.texture, this._runtimeScene);
      }
      if (oldObjectData.width !== newObjectData.width) {
        this.setWidth(newObjectData.width);
      }
      if (oldObjectData.height !== newObjectData.height) {
        this.setHeight(newObjectData.height);
      }
      return true;
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    onDestroyFromScene(runtimeScene) {
      super.onDestroyFromScene(runtimeScene);
      if (this._renderer.onDestroy) {
        this._renderer.onDestroy();
      }
    }
    extraInitializationFromInitialInstance(initialInstanceData) {
      if (initialInstanceData.customSize) {
        this.setWidth(initialInstanceData.width);
        this.setHeight(initialInstanceData.height);
      }
    }
    setX(x) {
      super.setX(x);
      this._renderer.updatePosition();
    }
    setY(y) {
      super.setY(y);
      this._renderer.updatePosition();
    }
    setTexture(textureName, runtimeScene) {
      this._renderer.setTexture(textureName, runtimeScene);
    }
    setAngle(angle) {
      super.setAngle(angle);
      this._renderer.updateAngle();
    }
    getWidth() {
      return this._width;
    }
    getHeight() {
      return this._height;
    }
    setWidth(width) {
      if (this._width === width)
        return;
      this._width = width;
      this._renderer.setWidth(width);
      this.hitBoxesDirty = true;
    }
    setHeight(height) {
      if (this._height === height)
        return;
      this._height = height;
      this._renderer.setHeight(height);
      this.hitBoxesDirty = true;
    }
    setXOffset(xOffset) {
      this._xOffset = xOffset;
      this._renderer.updateXOffset();
    }
    setYOffset(yOffset) {
      this._yOffset = yOffset;
      this._renderer.updateYOffset();
    }
    getXOffset() {
      return this._xOffset;
    }
    getYOffset() {
      return this._yOffset;
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
    setColor(rgbColor) {
      this._renderer.setColor(rgbColor);
    }
    getColor() {
      return this._renderer.getColor();
    }
    getScale() {
      return (this.getScaleX() + this.getScaleY()) / 2;
    }
    getScaleX() {
      return this._width / this._renderer.getTextureWidth();
    }
    getScaleY() {
      return this._height / this._renderer.getTextureHeight();
    }
    setScale(newScale) {
      this.setWidth(this._renderer.getTextureWidth() * newScale);
      this.setHeight(this._renderer.getTextureHeight() * newScale);
    }
    setScaleX(newScale) {
      this.setWidth(this._renderer.getTextureWidth() * newScale);
    }
    setScaleY(newScale) {
      this.setHeight(this._renderer.getTextureHeight() * newScale);
    }
  }
  gdjs2.TiledSpriteRuntimeObject = TiledSpriteRuntimeObject;
  gdjs2.registerObject("TiledSpriteObject::TiledSprite", gdjs2.TiledSpriteRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tiledspriteruntimeobject.js.map
