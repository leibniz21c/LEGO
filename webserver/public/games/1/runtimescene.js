var gdjs;
(function(gdjs2) {
  class RuntimeScene {
    constructor(runtimeGame) {
      this._eventsFunction = null;
      this._lastId = 0;
      this._name = "";
      this._gameStopRequested = false;
      this._requestedScene = "";
      this._isLoaded = false;
      this._isJustResumed = false;
      this._backgroundColor = 0;
      this._allInstancesList = [];
      this._layersCameraCoordinates = {};
      this._instancesRemoved = [];
      this._profiler = null;
      this._debugDrawEnabled = false;
      this._debugDrawShowHiddenInstances = false;
      this._debugDrawShowPointsNames = false;
      this._debugDrawShowCustomPoints = false;
      this._onProfilerStopped = null;
      this._instances = new Hashtable();
      this._instancesCache = new Hashtable();
      this._objects = new Hashtable();
      this._objectsCtor = new Hashtable();
      this._layers = new Hashtable();
      this._initialBehaviorSharedData = new Hashtable();
      this._renderer = new gdjs2.RuntimeSceneRenderer(this, runtimeGame ? runtimeGame.getRenderer() : null);
      this._variables = new gdjs2.VariablesContainer();
      this._runtimeGame = runtimeGame;
      this._timeManager = new gdjs2.TimeManager();
      this._requestedChange = SceneChangeRequest.CONTINUE;
      this._onceTriggers = new gdjs2.OnceTriggers();
      this.onGameResolutionResized();
    }
    enableDebugDraw(enableDebugDraw, showHiddenInstances, showPointsNames, showCustomPoints) {
      if (this._debugDrawEnabled && !enableDebugDraw) {
        this.getRenderer().clearDebugDraw();
      }
      this._debugDrawEnabled = enableDebugDraw;
      this._debugDrawShowHiddenInstances = showHiddenInstances;
      this._debugDrawShowPointsNames = showPointsNames;
      this._debugDrawShowCustomPoints = showCustomPoints;
    }
    onGameResolutionResized() {
      for (const name in this._layers.items) {
        if (this._layers.items.hasOwnProperty(name)) {
          const theLayer = this._layers.items[name];
          theLayer.onGameResolutionResized();
        }
      }
      this._renderer.onGameResolutionResized();
    }
    loadFromScene(sceneData) {
      if (!sceneData) {
        console.error("loadFromScene was called without a scene");
        return;
      }
      if (this._isLoaded) {
        this.unloadScene();
      }
      if (this._runtimeGame) {
        this._runtimeGame.getRenderer().setWindowTitle(sceneData.title);
      }
      this._name = sceneData.name;
      this.setBackgroundColor(sceneData.r, sceneData.v, sceneData.b);
      for (let i = 0, len = sceneData.layers.length; i < len; ++i) {
        this.addLayer(sceneData.layers[i]);
      }
      this._variables = new gdjs2.VariablesContainer(sceneData.variables);
      for (let i = 0, len = sceneData.behaviorsSharedData.length; i < len; ++i) {
        const behaviorSharedData = sceneData.behaviorsSharedData[i];
        this.setInitialSharedDataForBehavior(behaviorSharedData.name, behaviorSharedData);
      }
      const initialGlobalObjectsData = this.getGame().getInitialObjectsData();
      for (let i = 0, len = initialGlobalObjectsData.length; i < len; ++i) {
        this.registerObject(initialGlobalObjectsData[i]);
      }
      for (let i = 0, len = sceneData.objects.length; i < len; ++i) {
        this.registerObject(sceneData.objects[i]);
      }
      this.createObjectsFrom(sceneData.instances, 0, 0, true);
      this._setLayerDefaultZOrders();
      this.setEventsGeneratedCodeFunction(sceneData);
      this._onceTriggers = new gdjs2.OnceTriggers();
      if (this._runtimeGame && !this._runtimeGame.wasFirstSceneLoaded()) {
        for (let i = 0; i < gdjs2.callbacksFirstRuntimeSceneLoaded.length; ++i) {
          gdjs2.callbacksFirstRuntimeSceneLoaded[i](this);
        }
      }
      for (let i = 0; i < gdjs2.callbacksRuntimeSceneLoaded.length; ++i) {
        gdjs2.callbacksRuntimeSceneLoaded[i](this);
      }
      if (sceneData.stopSoundsOnStartup && this._runtimeGame) {
        this._runtimeGame.getSoundManager().clearAll();
      }
      this._isLoaded = true;
      this._timeManager.reset();
    }
    isObjectRegistered(objectName) {
      return this._objects.containsKey(objectName) && this._instances.containsKey(objectName) && this._objectsCtor.containsKey(objectName);
    }
    registerObject(objectData) {
      this._objects.put(objectData.name, objectData);
      this._instances.put(objectData.name, []);
      const Ctor = gdjs2.getObjectConstructor(objectData.type);
      this._objectsCtor.put(objectData.name, Ctor);
      if (Ctor.supportsReinitialization) {
        this._instancesCache.put(objectData.name, []);
      }
    }
    updateObject(objectData) {
      if (!this.isObjectRegistered(objectData.name)) {
        console.warn("Tried to call updateObject for an object that was not registered (" + objectData.name + "). Call registerObject first.");
      }
      this._objects.put(objectData.name, objectData);
    }
    unregisterObject(objectName) {
      const instances = this._instances.get(objectName);
      if (instances) {
        const instancesToRemove = instances.slice();
        for (let i = 0; i < instancesToRemove.length; i++) {
          this.markObjectForDeletion(instancesToRemove[i]);
        }
        this._cacheOrClearRemovedInstances();
      }
      this._objects.remove(objectName);
      this._instances.remove(objectName);
      this._instancesCache.remove(objectName);
      this._objectsCtor.remove(objectName);
    }
    onPause() {
      for (let i = 0; i < gdjs2.callbacksRuntimeScenePaused.length; ++i) {
        gdjs2.callbacksRuntimeScenePaused[i](this);
      }
    }
    onResume() {
      this._isJustResumed = true;
      for (let i = 0; i < gdjs2.callbacksRuntimeSceneResumed.length; ++i) {
        gdjs2.callbacksRuntimeSceneResumed[i](this);
      }
    }
    unloadScene() {
      if (!this._isLoaded) {
        return;
      }
      if (this._profiler) {
        this.stopProfiler();
      }
      for (let i = 0; i < gdjs2.callbacksRuntimeSceneUnloading.length; ++i) {
        gdjs2.callbacksRuntimeSceneUnloading[i](this);
      }
      this._constructListOfAllInstances();
      for (let i = 0, len = this._allInstancesList.length; i < len; ++i) {
        const object = this._allInstancesList[i];
        object.onDestroyFromScene(this);
      }
      if (this._renderer) {
        this._renderer.onSceneUnloaded();
      }
      for (let i = 0; i < gdjs2.callbacksRuntimeSceneUnloaded.length; ++i) {
        gdjs2.callbacksRuntimeSceneUnloaded[i](this);
      }
      this._layers = new Hashtable();
      this._variables = new gdjs2.VariablesContainer();
      this._initialBehaviorSharedData = new Hashtable();
      this._objects = new Hashtable();
      this._instances = new Hashtable();
      this._instancesCache = new Hashtable();
      this._eventsFunction = null;
      this._objectsCtor = new Hashtable();
      this._allInstancesList = [];
      this._instancesRemoved = [];
      this._lastId = 0;
      this._onceTriggers = null;
      this._isLoaded = false;
      this.onGameResolutionResized();
    }
    createObjectsFrom(data, xPos, yPos, trackByPersistentUuid) {
      for (let i = 0, len = data.length; i < len; ++i) {
        const instanceData = data[i];
        const objectName = instanceData.name;
        const newObject = this.createObject(objectName);
        if (newObject !== null) {
          if (trackByPersistentUuid) {
            newObject.persistentUuid = instanceData.persistentUuid || null;
          }
          newObject.setPosition(instanceData.x + xPos, instanceData.y + yPos);
          newObject.setZOrder(instanceData.zOrder);
          newObject.setAngle(instanceData.angle);
          newObject.setLayer(instanceData.layer);
          newObject.getVariables().initFrom(instanceData.initialVariables, true);
          newObject.extraInitializationFromInitialInstance(instanceData);
        }
      }
    }
    _setLayerDefaultZOrders() {
      if (this._runtimeGame.getGameData().properties.useDeprecatedZeroAsDefaultZOrder) {
        return;
      }
      const layerHighestZOrders = {};
      const allInstances = this.getAdhocListOfAllInstances();
      for (let i = 0, len = allInstances.length; i < len; ++i) {
        const object = allInstances[i];
        let layerName = object.getLayer();
        const zOrder = object.getZOrder();
        if (layerHighestZOrders[layerName] === void 0 || layerHighestZOrders[layerName] < zOrder) {
          layerHighestZOrders[layerName] = zOrder;
        }
      }
      for (let layerName in layerHighestZOrders) {
        this.getLayer(layerName).setDefaultZOrder(layerHighestZOrders[layerName] + 1);
      }
    }
    setEventsGeneratedCodeFunction(sceneData) {
      const module = gdjs2[sceneData.mangledName + "Code"];
      if (module && module.func) {
        this._eventsFunction = module.func;
      } else {
        console.log("Warning: no function found for running logic of scene " + this._name);
        this._eventsFunction = function() {
        };
      }
    }
    setEventsFunction(func) {
      this._eventsFunction = func;
    }
    renderAndStep(elapsedTime) {
      if (this._profiler) {
        this._profiler.beginFrame();
      }
      this._requestedChange = SceneChangeRequest.CONTINUE;
      this._timeManager.update(elapsedTime, this._runtimeGame.getMinimalFramerate());
      if (this._profiler) {
        this._profiler.begin("objects (pre-events)");
      }
      this._updateObjectsPreEvents();
      if (this._profiler) {
        this._profiler.end("objects (pre-events)");
      }
      if (this._profiler) {
        this._profiler.begin("callbacks and extensions (pre-events)");
      }
      for (let i = 0; i < gdjs2.callbacksRuntimeScenePreEvents.length; ++i) {
        gdjs2.callbacksRuntimeScenePreEvents[i](this);
      }
      if (this._profiler) {
        this._profiler.end("callbacks and extensions (pre-events)");
      }
      if (this._profiler) {
        this._profiler.begin("events");
      }
      if (this._eventsFunction !== null)
        this._eventsFunction(this);
      if (this._profiler) {
        this._profiler.end("events");
      }
      if (this._profiler) {
        this._profiler.begin("objects (post-events)");
      }
      this._updateObjectsPostEvents();
      if (this._profiler) {
        this._profiler.end("objects (post-events)");
      }
      if (this._profiler) {
        this._profiler.begin("callbacks and extensions (post-events)");
      }
      for (let i = 0; i < gdjs2.callbacksRuntimeScenePostEvents.length; ++i) {
        gdjs2.callbacksRuntimeScenePostEvents[i](this);
      }
      if (this._profiler) {
        this._profiler.end("callbacks and extensions (post-events)");
      }
      if (this._profiler) {
        this._profiler.begin("objects (pre-render)");
      }
      this._updateObjectsPreRender();
      if (this._profiler) {
        this._profiler.end("objects (pre-render)");
      }
      if (this._profiler) {
        this._profiler.begin("layers (effects update)");
      }
      this._updateLayers();
      if (this._profiler) {
        this._profiler.end("layers (effects update)");
      }
      if (this._profiler) {
        this._profiler.begin("render");
      }
      if (this._debugDrawEnabled && this._layersCameraCoordinates) {
        this._updateLayersCameraCoordinates(1);
        this.getRenderer().renderDebugDraw(this._allInstancesList, this._layersCameraCoordinates, this._debugDrawShowHiddenInstances, this._debugDrawShowPointsNames, this._debugDrawShowCustomPoints);
      }
      this._isJustResumed = false;
      this.render();
      if (this._profiler) {
        this._profiler.end("render");
      }
      if (this._profiler) {
        this._profiler.endFrame();
      }
      return !!this.getRequestedChange();
    }
    render() {
      this._renderer.render();
    }
    _updateLayersCameraCoordinates(scale) {
      this._layersCameraCoordinates = this._layersCameraCoordinates || {};
      for (const name in this._layers.items) {
        if (this._layers.items.hasOwnProperty(name)) {
          const theLayer = this._layers.items[name];
          this._layersCameraCoordinates[name] = this._layersCameraCoordinates[name] || [0, 0, 0, 0];
          this._layersCameraCoordinates[name][0] = theLayer.getCameraX() - theLayer.getCameraWidth() / 2 * scale;
          this._layersCameraCoordinates[name][1] = theLayer.getCameraY() - theLayer.getCameraHeight() / 2 * scale;
          this._layersCameraCoordinates[name][2] = theLayer.getCameraX() + theLayer.getCameraWidth() / 2 * scale;
          this._layersCameraCoordinates[name][3] = theLayer.getCameraY() + theLayer.getCameraHeight() / 2 * scale;
        }
      }
    }
    _updateLayers() {
      for (const name in this._layers.items) {
        if (this._layers.items.hasOwnProperty(name)) {
          const theLayer = this._layers.items[name];
          theLayer.update(this);
        }
      }
    }
    _updateObjectsPreRender() {
      if (this._timeManager.isFirstFrame()) {
        this._constructListOfAllInstances();
        for (let i = 0, len = this._allInstancesList.length; i < len; ++i) {
          const object = this._allInstancesList[i];
          const rendererObject = object.getRendererObject();
          if (rendererObject) {
            object.getRendererObject().visible = !object.isHidden();
          }
          object.updatePreRender(this);
        }
        return;
      } else {
        this._updateLayersCameraCoordinates(2);
        this._constructListOfAllInstances();
        for (let i = 0, len = this._allInstancesList.length; i < len; ++i) {
          const object = this._allInstancesList[i];
          const cameraCoords = this._layersCameraCoordinates[object.getLayer()];
          const rendererObject = object.getRendererObject();
          if (!cameraCoords || !rendererObject) {
            continue;
          }
          if (object.isHidden()) {
            rendererObject.visible = false;
          } else {
            const aabb = object.getVisibilityAABB();
            if (aabb && (aabb.min[0] > cameraCoords[2] || aabb.min[1] > cameraCoords[3] || aabb.max[0] < cameraCoords[0] || aabb.max[1] < cameraCoords[1])) {
              rendererObject.visible = false;
            } else {
              rendererObject.visible = true;
            }
          }
          object.updatePreRender(this);
        }
      }
    }
    _cacheOrClearRemovedInstances() {
      for (let k = 0, lenk = this._instancesRemoved.length; k < lenk; ++k) {
        const cache = this._instancesCache.get(this._instancesRemoved[k].getName());
        if (cache) {
          if (cache.length < 128) {
            cache.push(this._instancesRemoved[k]);
          }
        }
      }
      this._instancesRemoved.length = 0;
    }
    _constructListOfAllInstances() {
      let currentListSize = 0;
      for (const name in this._instances.items) {
        if (this._instances.items.hasOwnProperty(name)) {
          const list = this._instances.items[name];
          const oldSize = currentListSize;
          currentListSize += list.length;
          for (let j = 0, lenj = list.length; j < lenj; ++j) {
            if (oldSize + j < this._allInstancesList.length) {
              this._allInstancesList[oldSize + j] = list[j];
            } else {
              this._allInstancesList.push(list[j]);
            }
          }
        }
      }
      this._allInstancesList.length = currentListSize;
    }
    _updateObjectsPreEvents() {
      this._constructListOfAllInstances();
      for (let i = 0, len = this._allInstancesList.length; i < len; ++i) {
        const obj = this._allInstancesList[i];
        const elapsedTime = obj.getElapsedTime(this);
        if (!obj.hasNoForces()) {
          const averageForce = obj.getAverageForce();
          const elapsedTimeInSeconds = elapsedTime / 1e3;
          obj.setX(obj.getX() + averageForce.getX() * elapsedTimeInSeconds);
          obj.setY(obj.getY() + averageForce.getY() * elapsedTimeInSeconds);
          obj.update(this);
          obj.updateForces(elapsedTimeInSeconds);
        } else {
          obj.update(this);
        }
        obj.updateTimers(elapsedTime);
        this._allInstancesList[i].stepBehaviorsPreEvents(this);
      }
      this._cacheOrClearRemovedInstances();
    }
    _updateObjectsPostEvents() {
      this._cacheOrClearRemovedInstances();
      this._constructListOfAllInstances();
      for (let i = 0, len = this._allInstancesList.length; i < len; ++i) {
        this._allInstancesList[i].stepBehaviorsPostEvents(this);
      }
      this._cacheOrClearRemovedInstances();
    }
    setBackgroundColor(r, g, b) {
      this._backgroundColor = parseInt(gdjs2.rgbToHex(r, g, b), 16);
    }
    getBackgroundColor() {
      return this._backgroundColor;
    }
    getName() {
      return this._name;
    }
    updateObjectsForces() {
      for (const name in this._instances.items) {
        if (this._instances.items.hasOwnProperty(name)) {
          const list = this._instances.items[name];
          for (let j = 0, listLen = list.length; j < listLen; ++j) {
            const obj = list[j];
            if (!obj.hasNoForces()) {
              const averageForce = obj.getAverageForce();
              const elapsedTimeInSeconds = obj.getElapsedTime(this) / 1e3;
              obj.setX(obj.getX() + averageForce.getX() * elapsedTimeInSeconds);
              obj.setY(obj.getY() + averageForce.getY() * elapsedTimeInSeconds);
              obj.updateForces(elapsedTimeInSeconds);
            }
          }
        }
      }
    }
    addObject(obj) {
      if (!this._instances.containsKey(obj.name)) {
        this._instances.put(obj.name, []);
      }
      this._instances.get(obj.name).push(obj);
    }
    getObjects(name) {
      if (!this._instances.containsKey(name)) {
        console.log('RuntimeScene.getObjects: No instances called "' + name + '"! Adding it.');
        this._instances.put(name, []);
      }
      return this._instances.get(name);
    }
    createObject(objectName) {
      if (!this._objectsCtor.containsKey(objectName) || !this._objects.containsKey(objectName)) {
        return null;
      }
      const cache = this._instancesCache.get(objectName);
      const ctor = this._objectsCtor.get(objectName);
      let obj;
      if (!cache || cache.length === 0) {
        obj = new ctor(this, this._objects.get(objectName));
      } else {
        obj = cache.pop();
        obj.reinitialize(this._objects.get(objectName));
      }
      this.addObject(obj);
      return obj;
    }
    markObjectForDeletion(obj) {
      if (this._instancesRemoved.indexOf(obj) === -1) {
        this._instancesRemoved.push(obj);
      }
      if (this._instances.containsKey(obj.getName())) {
        const objId = obj.id;
        const allInstances = this._instances.get(obj.getName());
        for (let i = 0, len = allInstances.length; i < len; ++i) {
          if (allInstances[i].id == objId) {
            allInstances.splice(i, 1);
            break;
          }
        }
      }
      obj.onDestroyFromScene(this);
      for (let j = 0; j < gdjs2.callbacksObjectDeletedFromScene.length; ++j) {
        gdjs2.callbacksObjectDeletedFromScene[j](this, obj);
      }
      return;
    }
    createNewUniqueId() {
      this._lastId++;
      return this._lastId;
    }
    getRenderer() {
      return this._renderer;
    }
    getGame() {
      return this._runtimeGame;
    }
    getVariables() {
      return this._variables;
    }
    getInitialSharedDataForBehavior(name) {
      const behaviorSharedData = this._initialBehaviorSharedData.get(name);
      if (behaviorSharedData) {
        return behaviorSharedData;
      }
      console.error("Can't find shared data for behavior with name:", name);
      return null;
    }
    setInitialSharedDataForBehavior(name, sharedData) {
      this._initialBehaviorSharedData.put(name, sharedData);
    }
    getLayer(name) {
      if (this._layers.containsKey(name)) {
        return this._layers.get(name);
      }
      return this._layers.get("");
    }
    hasLayer(name) {
      return this._layers.containsKey(name);
    }
    addLayer(layerData) {
      this._layers.put(layerData.name, new gdjs2.Layer(layerData, this));
    }
    removeLayer(layerName) {
      const allInstances = this.getAdhocListOfAllInstances();
      for (let i = 0; i < allInstances.length; ++i) {
        const runtimeObject = allInstances[i];
        if (runtimeObject.getLayer() === layerName) {
          runtimeObject.setLayer("");
        }
      }
      this._layers.remove(layerName);
    }
    setLayerIndex(layerName, index) {
      const layer = this._layers.get(layerName);
      if (!layer) {
        return;
      }
      this._renderer.setLayerIndex(layer, index);
    }
    getAllLayerNames(result) {
      this._layers.keys(result);
    }
    getTimeManager() {
      return this._timeManager;
    }
    getSoundManager() {
      return this._runtimeGame.getSoundManager();
    }
    getRequestedChange() {
      return this._requestedChange;
    }
    getRequestedScene() {
      return this._requestedScene;
    }
    requestChange(change, sceneName) {
      this._requestedChange = change;
      if (sceneName)
        this._requestedScene = sceneName;
    }
    getProfiler() {
      return this._profiler;
    }
    startProfiler(onProfilerStopped) {
      if (this._profiler) {
        return;
      }
      this._profiler = new gdjs2.Profiler();
      this._onProfilerStopped = onProfilerStopped;
    }
    stopProfiler() {
      if (!this._profiler) {
        return;
      }
      const oldProfiler = this._profiler;
      const onProfilerStopped = this._onProfilerStopped;
      this._profiler = null;
      this._onProfilerStopped = null;
      if (onProfilerStopped) {
        onProfilerStopped(oldProfiler);
      }
    }
    getOnceTriggers() {
      return this._onceTriggers;
    }
    getAdhocListOfAllInstances() {
      this._constructListOfAllInstances();
      return this._allInstancesList;
    }
    sceneJustResumed() {
      return this._isJustResumed;
    }
  }
  gdjs2.RuntimeScene = RuntimeScene;
  let SceneChangeRequest;
  (function(SceneChangeRequest2) {
    SceneChangeRequest2[SceneChangeRequest2["CONTINUE"] = 0] = "CONTINUE";
    SceneChangeRequest2[SceneChangeRequest2["PUSH_SCENE"] = 1] = "PUSH_SCENE";
    SceneChangeRequest2[SceneChangeRequest2["POP_SCENE"] = 2] = "POP_SCENE";
    SceneChangeRequest2[SceneChangeRequest2["REPLACE_SCENE"] = 3] = "REPLACE_SCENE";
    SceneChangeRequest2[SceneChangeRequest2["CLEAR_SCENES"] = 4] = "CLEAR_SCENES";
    SceneChangeRequest2[SceneChangeRequest2["STOP_GAME"] = 5] = "STOP_GAME";
  })(SceneChangeRequest = gdjs2.SceneChangeRequest || (gdjs2.SceneChangeRequest = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimescene.js.map
