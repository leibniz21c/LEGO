var gdjs;
(function(gdjs2) {
  class TextRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, textObjectData) {
      super(runtimeScene, textObjectData);
      this._useGradient = false;
      this._gradient = [];
      this._gradientType = "";
      this.opacity = 255;
      this._textAlign = "left";
      this._wrapping = false;
      this._wrappingWidth = 1;
      this._outlineThickness = 0;
      this._outlineColor = [255, 255, 255];
      this._shadow = false;
      this._shadowColor = [0, 0, 0];
      this._shadowDistance = 1;
      this._shadowBlur = 1;
      this._shadowAngle = 0;
      this._padding = 5;
      this._scaleX = 1;
      this._scaleY = 1;
      this._characterSize = Math.max(1, textObjectData.characterSize);
      this._fontName = textObjectData.font;
      this._bold = textObjectData.bold;
      this._italic = textObjectData.italic;
      this._underlined = textObjectData.underlined;
      this._color = [
        textObjectData.color.r,
        textObjectData.color.g,
        textObjectData.color.b
      ];
      this._str = textObjectData.string;
      this._renderer = new gdjs2.TextRuntimeObjectRenderer(this, runtimeScene);
      this.onCreated();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      if (oldObjectData.characterSize !== newObjectData.characterSize) {
        this.setCharacterSize(newObjectData.characterSize);
      }
      if (oldObjectData.font !== newObjectData.font) {
        this.setFontName(newObjectData.font);
      }
      if (oldObjectData.bold !== newObjectData.bold) {
        this.setBold(newObjectData.bold);
      }
      if (oldObjectData.italic !== newObjectData.italic) {
        this.setItalic(newObjectData.italic);
      }
      if (oldObjectData.color.r !== newObjectData.color.r || oldObjectData.color.g !== newObjectData.color.g || oldObjectData.color.b !== newObjectData.color.b) {
        this.setColor("" + newObjectData.color.r + ";" + newObjectData.color.g + ";" + newObjectData.color.b);
      }
      if (oldObjectData.string !== newObjectData.string) {
        this.setString(newObjectData.string);
      }
      if (oldObjectData.underlined !== newObjectData.underlined) {
        return false;
      }
      return true;
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    update() {
      this._renderer.ensureUpToDate();
    }
    extraInitializationFromInitialInstance(initialInstanceData) {
      if (initialInstanceData.customSize) {
        this.setWrapping(true);
        this.setWrappingWidth(initialInstanceData.width);
      } else {
        this.setWrapping(false);
      }
    }
    _updateTextPosition() {
      this.hitBoxesDirty = true;
      this._renderer.updatePosition();
    }
    setX(x) {
      super.setX(x);
      this._updateTextPosition();
    }
    setY(y) {
      super.setY(y);
      this._updateTextPosition();
    }
    setAngle(angle) {
      super.setAngle(angle);
      this._renderer.updateAngle();
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
    getString() {
      return this._str;
    }
    setString(str) {
      if (str === this._str) {
        return;
      }
      this._str = str;
      this._renderer.updateString();
      this._updateTextPosition();
    }
    getCharacterSize() {
      return this._characterSize;
    }
    setCharacterSize(newSize) {
      if (newSize <= 1) {
        newSize = 1;
      }
      this._characterSize = newSize;
      this._renderer.updateStyle();
    }
    setFontName(fontResourceName) {
      this._fontName = fontResourceName;
      this._renderer.updateStyle();
    }
    isBold() {
      return this._bold;
    }
    setBold(enable) {
      this._bold = enable;
      this._renderer.updateStyle();
    }
    isItalic() {
      return this._italic;
    }
    setItalic(enable) {
      this._italic = enable;
      this._renderer.updateStyle();
    }
    getWidth() {
      return this._renderer.getWidth();
    }
    getHeight() {
      return this._renderer.getHeight();
    }
    getScale() {
      return (Math.abs(this._scaleX) + Math.abs(this._scaleY)) / 2;
    }
    getScaleX() {
      return this._scaleX;
    }
    getScaleY() {
      return this._scaleY;
    }
    setScale(newScale) {
      if (this._scaleX === newScale && this._scaleY === newScale)
        return;
      this._scaleX = newScale;
      this._scaleY = newScale;
      this._renderer.setScale(newScale);
      this.hitBoxesDirty = true;
    }
    setScaleX(newScale) {
      if (this._scaleX === newScale)
        return;
      this._scaleX = newScale;
      this._renderer.setScaleX(newScale);
      this.hitBoxesDirty = true;
    }
    setScaleY(newScale) {
      if (this._scaleY === newScale)
        return;
      this._scaleY = newScale;
      this._renderer.setScaleY(newScale);
      this.hitBoxesDirty = true;
    }
    setColor(str) {
      const color = str.split(";");
      if (color.length < 3) {
        return;
      }
      this._color[0] = parseInt(color[0], 10);
      this._color[1] = parseInt(color[1], 10);
      this._color[2] = parseInt(color[2], 10);
      this._useGradient = false;
      this._renderer.updateStyle();
    }
    getColor() {
      return this._color[0] + ";" + this._color[1] + ";" + this._color[2];
    }
    setTextAlignment(alignment) {
      this._textAlign = alignment;
      this._renderer.updateStyle();
    }
    getTextAlignment() {
      return this._textAlign;
    }
    isWrapping() {
      return this._wrapping;
    }
    setWrapping(enable) {
      if (this._wrapping === enable)
        return;
      this._wrapping = enable;
      this._renderer.updateStyle();
      this.hitBoxesDirty = true;
    }
    getWrappingWidth() {
      return this._wrappingWidth;
    }
    setWrappingWidth(width) {
      if (width <= 1) {
        width = 1;
      }
      if (this._wrappingWidth === width)
        return;
      this._wrappingWidth = width;
      this._renderer.updateStyle();
      this.hitBoxesDirty = true;
    }
    setOutline(str, thickness) {
      const color = str.split(";");
      if (color.length < 3) {
        return;
      }
      this._outlineColor[0] = parseInt(color[0], 10);
      this._outlineColor[1] = parseInt(color[1], 10);
      this._outlineColor[2] = parseInt(color[2], 10);
      this._outlineThickness = thickness;
      this._renderer.updateStyle();
    }
    setShadow(str, distance, blur, angle) {
      const color = str.split(";");
      if (color.length < 3) {
        return;
      }
      this._shadowColor[0] = parseInt(color[0], 10);
      this._shadowColor[1] = parseInt(color[1], 10);
      this._shadowColor[2] = parseInt(color[2], 10);
      this._shadowDistance = distance;
      this._shadowBlur = blur;
      this._shadowAngle = angle;
      this._shadow = true;
      this._renderer.updateStyle();
    }
    setGradient(strGradientType, strFirstColor, strSecondColor, strThirdColor, strFourthColor) {
      const colorFirst = strFirstColor.split(";");
      const colorSecond = strSecondColor.split(";");
      const colorThird = strThirdColor.split(";");
      const colorFourth = strFourthColor.split(";");
      this._gradient = [];
      if (colorFirst.length == 3) {
        this._gradient.push([
          parseInt(colorFirst[0], 10),
          parseInt(colorFirst[1], 10),
          parseInt(colorFirst[2], 10)
        ]);
      }
      if (colorSecond.length == 3) {
        this._gradient.push([
          parseInt(colorSecond[0], 10),
          parseInt(colorSecond[1], 10),
          parseInt(colorSecond[2], 10)
        ]);
      }
      if (colorThird.length == 3) {
        this._gradient.push([
          parseInt(colorThird[0], 10),
          parseInt(colorThird[1], 10),
          parseInt(colorThird[2], 10)
        ]);
      }
      if (colorFourth.length == 3) {
        this._gradient.push([
          parseInt(colorFourth[0], 10),
          parseInt(colorFourth[1], 10),
          parseInt(colorFourth[2], 10)
        ]);
      }
      this._gradientType = strGradientType;
      this._useGradient = this._gradient.length > 1 ? true : false;
      this._renderer.updateStyle();
    }
    showShadow(enable) {
      this._shadow = enable;
      this._renderer.updateStyle();
    }
    getPadding() {
      return this._padding;
    }
    setPadding(value) {
      this._padding = value;
      this._renderer.updateStyle();
    }
  }
  gdjs2.TextRuntimeObject = TextRuntimeObject;
  gdjs2.registerObject("TextObject::Text", gdjs2.TextRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=textruntimeobject.js.map
