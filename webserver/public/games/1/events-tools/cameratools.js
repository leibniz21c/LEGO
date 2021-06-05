var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let camera;
    (function(camera2) {
      camera2.setCameraX = function(runtimeScene, x, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        runtimeScene.getLayer(layer).setCameraX(x, cameraId);
      };
      camera2.setCameraY = function(runtimeScene, y, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        runtimeScene.getLayer(layer).setCameraY(y, cameraId);
      };
      camera2.getCameraX = function(runtimeScene, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getCameraX();
      };
      camera2.getCameraY = function(runtimeScene, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getCameraY();
      };
      camera2.getCameraWidth = function(runtimeScene, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getCameraWidth();
      };
      camera2.getCameraHeight = function(runtimeScene, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getCameraHeight();
      };
      camera2.showLayer = function(runtimeScene, layer) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).show(true);
      };
      camera2.hideLayer = function(runtimeScene, layer) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).show(false);
      };
      camera2.layerIsVisible = function(runtimeScene, layer) {
        return runtimeScene.hasLayer(layer) && runtimeScene.getLayer(layer).isVisible();
      };
      camera2.setCameraRotation = function(runtimeScene, rotation, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setCameraRotation(rotation, cameraId);
      };
      camera2.getCameraRotation = function(runtimeScene, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getCameraRotation(cameraId);
      };
      camera2.getCameraZoom = function(runtimeScene, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getCameraZoom(cameraId);
      };
      camera2.setCameraZoom = function(runtimeScene, newZoom, layer, cameraId) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setCameraZoom(newZoom, cameraId);
      };
      camera2.centerCamera = function(runtimeScene, object, anticipateMove, layerName, cameraId) {
        if (!runtimeScene.hasLayer(layerName) || object == null) {
          return;
        }
        const layer = runtimeScene.getLayer(layerName);
        let xOffset = 0;
        let yOffset = 0;
        if (anticipateMove && !object.hasNoForces()) {
          const objectAverageForce = object.getAverageForce();
          const elapsedTimeInSeconds = object.getElapsedTime(runtimeScene) / 1e3;
          xOffset = objectAverageForce.getX() * elapsedTimeInSeconds;
          yOffset = objectAverageForce.getY() * elapsedTimeInSeconds;
        }
        layer.setCameraX(object.getDrawableX() + object.getCenterX(), cameraId);
        layer.setCameraY(object.getDrawableY() + object.getCenterY(), cameraId);
      };
      camera2.centerCameraWithinLimits = function(runtimeScene, object, left, top, right, bottom, anticipateMove, layerName, cameraId) {
        if (!runtimeScene.hasLayer(layerName) || object == null) {
          return;
        }
        const layer = runtimeScene.getLayer(layerName);
        let xOffset = 0;
        let yOffset = 0;
        if (anticipateMove && !object.hasNoForces()) {
          const objectAverageForce = object.getAverageForce();
          const elapsedTimeInSeconds = object.getElapsedTime(runtimeScene) / 1e3;
          xOffset = objectAverageForce.getX() * elapsedTimeInSeconds;
          yOffset = objectAverageForce.getY() * elapsedTimeInSeconds;
        }
        let newX = object.getDrawableX() + object.getCenterX() + xOffset;
        if (newX < left + layer.getCameraWidth(cameraId) / 2) {
          newX = left + layer.getCameraWidth(cameraId) / 2;
        }
        if (newX > right - layer.getCameraWidth(cameraId) / 2) {
          newX = right - layer.getCameraWidth(cameraId) / 2;
        }
        let newY = object.getDrawableY() + object.getCenterY() + yOffset;
        if (newY < top + layer.getCameraHeight(cameraId) / 2) {
          newY = top + layer.getCameraHeight(cameraId) / 2;
        }
        if (newY > bottom - layer.getCameraHeight(cameraId) / 2) {
          newY = bottom - layer.getCameraHeight(cameraId) / 2;
        }
        layer.setCameraX(newX, cameraId);
        layer.setCameraY(newY, cameraId);
      };
      camera2.setLayerEffectDoubleParameter = function(runtimeScene, layer, effect, parameter, value) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setEffectDoubleParameter(effect, parameter, value);
      };
      camera2.setLayerEffectStringParameter = function(runtimeScene, layer, effect, parameter, value) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setEffectStringParameter(effect, parameter, value);
      };
      camera2.setLayerEffectBooleanParameter = function(runtimeScene, layer, effect, parameter, value) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setEffectBooleanParameter(effect, parameter, value);
      };
      camera2.enableLayerEffect = function(runtimeScene, layer, effect, enabled) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        runtimeScene.getLayer(layer).enableEffect(effect, enabled);
      };
      camera2.layerEffectEnabled = function(runtimeScene, layer, effect) {
        if (!runtimeScene.hasLayer(layer)) {
          return true;
        }
        return runtimeScene.getLayer(layer).isEffectEnabled(effect);
      };
      camera2.setLayerTimeScale = function(runtimeScene, layer, timeScale) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setTimeScale(timeScale);
      };
      camera2.getLayerTimeScale = function(runtimeScene, layer) {
        if (!runtimeScene.hasLayer(layer)) {
          return 1;
        }
        return runtimeScene.getLayer(layer).getTimeScale();
      };
      camera2.setLayerDefaultZOrder = function(runtimeScene, layer, defaultZOrder) {
        if (!runtimeScene.hasLayer(layer)) {
          return;
        }
        return runtimeScene.getLayer(layer).setDefaultZOrder(defaultZOrder);
      };
      camera2.getLayerDefaultZOrder = function(runtimeScene, layer) {
        if (!runtimeScene.hasLayer(layer)) {
          return 0;
        }
        return runtimeScene.getLayer(layer).getDefaultZOrder();
      };
      camera2.setLayerAmbientLightColor = function(runtimeScene, layerName, rgbColor) {
        if (!runtimeScene.hasLayer(layerName)) {
          return;
        }
        if (!runtimeScene.getLayer(layerName).isLightingLayer()) {
          return;
        }
        const colors = rgbColor.split(";");
        if (colors.length < 3) {
          return;
        }
        return runtimeScene.getLayer(layerName).setClearColor(parseInt(colors[0]), parseInt(colors[1]), parseInt(colors[2]));
      };
    })(camera = evtTools2.camera || (evtTools2.camera = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=cameratools.js.map
