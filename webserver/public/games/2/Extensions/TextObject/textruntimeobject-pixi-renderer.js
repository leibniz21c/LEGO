var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class TextRuntimeObjectPixiRenderer {
    constructor(runtimeObject, runtimeScene) {
      this._justCreated = true;
      this._object = runtimeObject;
      this._fontManager = runtimeScene.getGame().getFontManager();
      this._text = new PIXI.Text(" ", {align: "left"});
      this._text.anchor.x = 0.5;
      this._text.anchor.y = 0.5;
      runtimeScene.getLayer("").getRenderer().addRendererObject(this._text, runtimeObject.getZOrder());
      this._text.text = runtimeObject._str.length === 0 ? " " : runtimeObject._str;
      this.updateStyle();
      this.updatePosition();
    }
    getRendererObject() {
      return this._text;
    }
    ensureUpToDate() {
      if (this._justCreated) {
        this._text.updateText(false);
        this.updatePosition();
        this._justCreated = false;
      }
    }
    updateStyle() {
      const fontName = '"' + this._fontManager.getFontFamily(this._object._fontName) + '"';
      const style = this._text.style;
      style.fontStyle = this._object._italic ? "italic" : "normal";
      style.fontWeight = this._object._bold ? "bold" : "normal";
      style.fontSize = this._object._characterSize;
      style.fontFamily = fontName;
      if (this._object._useGradient) {
        style.fill = this._getGradientHex();
      } else {
        style.fill = this._getColorHex();
      }
      if (this._object._gradientType === "LINEAR_VERTICAL") {
        style.fillGradientType = PIXI.TEXT_GRADIENT.LINEAR_VERTICAL;
      } else {
        style.fillGradientType = PIXI.TEXT_GRADIENT.LINEAR_HORIZONTAL;
      }
      style.align = this._object._textAlign;
      style.wordWrap = this._object._wrapping;
      style.wordWrapWidth = this._object._wrappingWidth;
      style.breakWords = true;
      style.stroke = gdjs2.rgbToHexNumber(this._object._outlineColor[0], this._object._outlineColor[1], this._object._outlineColor[2]);
      style.strokeThickness = this._object._outlineThickness;
      style.dropShadow = this._object._shadow;
      style.dropShadowColor = gdjs2.rgbToHexNumber(this._object._shadowColor[0], this._object._shadowColor[1], this._object._shadowColor[2]);
      style.dropShadowBlur = this._object._shadowBlur;
      style.dropShadowAngle = this._object._shadowAngle;
      style.dropShadowDistance = this._object._shadowDistance;
      style.padding = this._object._padding;
      style.miterLimit = 3;
      this.updatePosition();
      this._text.dirty = true;
    }
    updatePosition() {
      this._text.position.x = this._object.x + this._text.width / 2;
      this._text.position.y = this._object.y + this._text.height / 2;
    }
    updateAngle() {
      this._text.rotation = gdjs2.toRad(this._object.angle);
    }
    updateOpacity() {
      this._text.alpha = this._object.opacity / 255;
    }
    updateString() {
      this._text.text = this._object._str.length === 0 ? " " : this._object._str;
      this._text.updateText(false);
    }
    getWidth() {
      return this._text.width;
    }
    getHeight() {
      return this._text.height;
    }
    _getColorHex() {
      return gdjs2.rgbToHexNumber(this._object._color[0], this._object._color[1], this._object._color[2]);
    }
    _getGradientHex() {
      const gradient = [];
      for (let colorIndex = 0; colorIndex < this._object._gradient.length; colorIndex++) {
        gradient.push("#" + gdjs2.rgbToHex(this._object._gradient[colorIndex][0], this._object._gradient[colorIndex][1], this._object._gradient[colorIndex][2]));
      }
      return gradient;
    }
    getScaleX() {
      return this._text.scale.x;
    }
    getScaleY() {
      return this._text.scale.y;
    }
    setScale(newScale) {
      this._text.scale.x = newScale;
      this._text.scale.y = newScale;
    }
    setScaleX(newScale) {
      this._text.scale.x = newScale;
    }
    setScaleY(newScale) {
      this._text.scale.y = newScale;
    }
  }
  gdjs2.TextRuntimeObjectRenderer = TextRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=textruntimeobject-pixi-renderer.js.map
