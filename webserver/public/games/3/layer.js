var gdjs;
(function(gdjs2) {
  class Layer {
    constructor(layerData, runtimeScene) {
      this._cameraRotation = 0;
      this._zoomFactor = 1;
      this._timeScale = 1;
      this._defaultZOrder = 0;
      this._name = layerData.name;
      this._hidden = !layerData.visibility;
      this._initialEffectsData = layerData.effects || [];
      this._cameraX = runtimeScene.getGame().getGameResolutionWidth() / 2;
      this._cameraY = runtimeScene.getGame().getGameResolutionHeight() / 2;
      this._cachedGameResolutionWidth = runtimeScene.getGame().getGameResolutionWidth();
      this._cachedGameResolutionHeight = runtimeScene.getGame().getGameResolutionHeight();
      this._runtimeScene = runtimeScene;
      this._isLightingLayer = layerData.isLightingLayer;
      this._followBaseLayerCamera = layerData.followBaseLayerCamera;
      this._clearColor = [
        layerData.ambientLightColorR / 255,
        layerData.ambientLightColorG / 255,
        layerData.ambientLightColorB / 255,
        1
      ];
      this._renderer = new gdjs2.LayerRenderer(this, runtimeScene.getRenderer());
      this.show(!this._hidden);
      for (let i = 0; i < layerData.effects.length; ++i) {
        this.addEffect(layerData.effects[i]);
      }
    }
    getRenderer() {
      return this._renderer;
    }
    getDefaultZOrder() {
      return this._defaultZOrder;
    }
    setDefaultZOrder(defaultZOrder) {
      this._defaultZOrder = defaultZOrder;
    }
    onGameResolutionResized() {
      const oldGameResolutionWidth = this._cachedGameResolutionWidth;
      const oldGameResolutionHeight = this._cachedGameResolutionHeight;
      this._cachedGameResolutionWidth = this._runtimeScene.getGame().getGameResolutionWidth();
      this._cachedGameResolutionHeight = this._runtimeScene.getGame().getGameResolutionHeight();
      this._cameraX += (this._cachedGameResolutionWidth - oldGameResolutionWidth) / 2;
      this._cameraY += (this._cachedGameResolutionHeight - oldGameResolutionHeight) / 2;
      this._renderer.updatePosition();
    }
    getRuntimeScene() {
      return this._runtimeScene;
    }
    update(runtimeScene) {
      if (this._followBaseLayerCamera) {
        this.followBaseLayer();
      }
      return this._renderer.update();
    }
    getName() {
      return this._name;
    }
    getCameraX(cameraId) {
      return this._cameraX;
    }
    getCameraY(cameraId) {
      return this._cameraY;
    }
    setCameraX(x, cameraId) {
      this._cameraX = x;
      this._renderer.updatePosition();
    }
    setCameraY(y, cameraId) {
      this._cameraY = y;
      this._renderer.updatePosition();
    }
    getCameraWidth(cameraId) {
      return +this._cachedGameResolutionWidth * 1 / this._zoomFactor;
    }
    getCameraHeight(cameraId) {
      return +this._cachedGameResolutionHeight * 1 / this._zoomFactor;
    }
    show(enable) {
      this._hidden = !enable;
      this._renderer.updateVisibility(enable);
    }
    isVisible() {
      return !this._hidden;
    }
    setCameraZoom(newZoom, cameraId) {
      this._zoomFactor = newZoom;
      this._renderer.updatePosition();
    }
    getCameraZoom(cameraId) {
      return this._zoomFactor;
    }
    getCameraRotation(cameraId) {
      return this._cameraRotation;
    }
    setCameraRotation(rotation, cameraId) {
      this._cameraRotation = rotation;
      this._renderer.updatePosition();
    }
    convertCoords(x, y, cameraId) {
      x -= this._cachedGameResolutionWidth / 2;
      y -= this._cachedGameResolutionHeight / 2;
      x /= Math.abs(this._zoomFactor);
      y /= Math.abs(this._zoomFactor);
      const angleInRadians = this._cameraRotation / 180 * Math.PI;
      const tmp = x;
      const cosValue = Math.cos(angleInRadians);
      const sinValue = Math.sin(angleInRadians);
      x = cosValue * x - sinValue * y;
      y = sinValue * tmp + cosValue * y;
      return [x + this.getCameraX(cameraId), y + this.getCameraY(cameraId)];
    }
    convertInverseCoords(x, y, cameraId) {
      x -= this.getCameraX(cameraId);
      y -= this.getCameraY(cameraId);
      const angleInRadians = this._cameraRotation / 180 * Math.PI;
      const tmp = x;
      const cosValue = Math.cos(-angleInRadians);
      const sinValue = Math.sin(-angleInRadians);
      x = cosValue * x - sinValue * y;
      y = sinValue * tmp + cosValue * y;
      x *= Math.abs(this._zoomFactor);
      y *= Math.abs(this._zoomFactor);
      return [
        x + this._cachedGameResolutionWidth / 2,
        y + this._cachedGameResolutionHeight / 2
      ];
    }
    getWidth() {
      return this._cachedGameResolutionWidth;
    }
    getHeight() {
      return this._cachedGameResolutionHeight;
    }
    getInitialEffectsData() {
      return this._initialEffectsData;
    }
    addEffect(effectData) {
      this._renderer.addEffect(effectData);
      for (let name in effectData.doubleParameters) {
        this.setEffectDoubleParameter(effectData.name, name, effectData.doubleParameters[name]);
      }
      for (let name in effectData.stringParameters) {
        this.setEffectStringParameter(effectData.name, name, effectData.stringParameters[name]);
      }
      for (let name in effectData.booleanParameters) {
        this.setEffectBooleanParameter(effectData.name, name, effectData.booleanParameters[name]);
      }
    }
    removeEffect(effectName) {
      this._renderer.removeEffect(effectName);
    }
    setEffectDoubleParameter(name, parameterName, value) {
      return this._renderer.setEffectDoubleParameter(name, parameterName, value);
    }
    setEffectStringParameter(name, parameterName, value) {
      return this._renderer.setEffectStringParameter(name, parameterName, value);
    }
    setEffectBooleanParameter(name, parameterName, value) {
      return this._renderer.setEffectBooleanParameter(name, parameterName, value);
    }
    enableEffect(name, enable) {
      this._renderer.enableEffect(name, enable);
    }
    isEffectEnabled(name) {
      return this._renderer.isEffectEnabled(name);
    }
    hasEffect(name) {
      return this._renderer.hasEffect(name);
    }
    setTimeScale(timeScale) {
      if (timeScale >= 0) {
        this._timeScale = timeScale;
      }
    }
    getTimeScale() {
      return this._timeScale;
    }
    getElapsedTime() {
      return this._runtimeScene.getTimeManager().getElapsedTime() * this._timeScale;
    }
    followBaseLayer() {
      const baseLayer = this._runtimeScene.getLayer("");
      this.setCameraX(baseLayer.getCameraX());
      this.setCameraY(baseLayer.getCameraY());
      this.setCameraRotation(baseLayer.getCameraRotation());
      this.setCameraZoom(baseLayer.getCameraZoom());
    }
    getClearColor() {
      return this._clearColor;
    }
    setClearColor(r, g, b) {
      if (r) {
        this._clearColor[0] = r / 255;
      }
      if (g) {
        this._clearColor[1] = g / 255;
      }
      if (b) {
        this._clearColor[2] = b / 255;
      }
      this._renderer.updateClearColor();
    }
    setFollowBaseLayerCamera(follow) {
      this._followBaseLayerCamera = follow;
    }
    isLightingLayer() {
      return this._isLightingLayer;
    }
  }
  gdjs2.Layer = Layer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=layer.js.map
