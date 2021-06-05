var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class TiledSpriteRuntimeObjectPixiRenderer {
    constructor(runtimeObject, runtimeScene, textureName) {
      this._object = runtimeObject;
      const texture = runtimeScene.getGame().getImageManager().getPIXITexture(textureName);
      this._tiledSprite = new PIXI.TilingSprite(texture, 1024, 1024);
      runtimeScene.getLayer("").getRenderer().addRendererObject(this._tiledSprite, runtimeObject.getZOrder());
      this.updatePosition();
      this.updateAngle();
      this.updateXOffset();
      this.updateYOffset();
    }
    getRendererObject() {
      return this._tiledSprite;
    }
    updateOpacity() {
      this._tiledSprite.alpha = this._object.opacity / 255;
    }
    updatePosition() {
      this._tiledSprite.position.x = this._object.x + this._tiledSprite.width / 2;
      this._tiledSprite.position.y = this._object.y + this._tiledSprite.height / 2;
    }
    setTexture(textureName, runtimeScene) {
      const texture = runtimeScene.getGame().getImageManager().getPIXITexture(textureName);
      this._tiledSprite.texture = texture;
      this.updatePosition();
    }
    updateAngle() {
      this._tiledSprite.rotation = gdjs2.toRad(this._object.angle);
    }
    getWidth() {
      return this._tiledSprite.width;
    }
    getHeight() {
      return this._tiledSprite.height;
    }
    setWidth(width) {
      this._tiledSprite.width = width;
      this._tiledSprite.pivot.x = width / 2;
      this.updatePosition();
    }
    setHeight(height) {
      this._tiledSprite.height = height;
      this._tiledSprite.pivot.y = height / 2;
      this.updatePosition();
    }
    updateXOffset() {
      this._tiledSprite.tilePosition.x = -this._object._xOffset;
    }
    updateYOffset() {
      this._tiledSprite.tilePosition.y = -this._object._yOffset;
    }
    setColor(rgbColor) {
      const colors = rgbColor.split(";");
      if (colors.length < 3) {
        return;
      }
      this._tiledSprite.tint = "0x" + gdjs2.rgbToHex(parseInt(colors[0], 10), parseInt(colors[1], 10), parseInt(colors[2], 10));
    }
    getColor() {
      const rgb = PIXI.utils.hex2rgb(this._tiledSprite.tint);
      return Math.floor(rgb[0] * 255) + ";" + Math.floor(rgb[1] * 255) + ";" + Math.floor(rgb[2] * 255);
    }
    getTextureWidth() {
      return this._tiledSprite.texture.width;
    }
    getTextureHeight() {
      return this._tiledSprite.texture.height;
    }
  }
  gdjs2.TiledSpriteRuntimeObjectRenderer = TiledSpriteRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tiledspriteruntimeobject-pixi-renderer.js.map
