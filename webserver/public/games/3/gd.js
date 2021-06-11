var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    const thisIsUnusedButEnsureTheNamespaceIsDeclared = true;
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
  gdjs2.objectsTypes = new Hashtable();
  gdjs2.behaviorsTypes = new Hashtable();
  gdjs2.callbacksFirstRuntimeSceneLoaded = [];
  gdjs2.callbacksRuntimeSceneLoaded = [];
  gdjs2.callbacksRuntimeScenePreEvents = [];
  gdjs2.callbacksRuntimeScenePostEvents = [];
  gdjs2.callbacksRuntimeScenePaused = [];
  gdjs2.callbacksRuntimeSceneResumed = [];
  gdjs2.callbacksRuntimeSceneUnloading = [];
  gdjs2.callbacksRuntimeSceneUnloaded = [];
  gdjs2.callbacksObjectDeletedFromScene = [];
  gdjs2.rgbToHex = function(r, g, b) {
    return "" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  gdjs2.hexToRGBColor = function(hexString) {
    var hexNumber = parseInt(hexString.replace("#", ""), 16);
    return [
      hexNumber >> 16 & 255,
      hexNumber >> 8 & 255,
      hexNumber & 255
    ];
  };
  gdjs2.rgbToHexNumber = function(r, g, b) {
    return (r << 16) + (g << 8) + b;
  };
  gdjs2.hexNumberToRGB = (hexNumber) => {
    return {
      r: hexNumber >> 16 & 255,
      g: hexNumber >> 8 & 255,
      b: hexNumber & 255,
      a: 255
    };
  };
  gdjs2.random = function(max) {
    if (max <= 0)
      return 0;
    return Math.floor(Math.random() * (max + 1));
  };
  gdjs2.randomInRange = function(min, max) {
    return min + gdjs2.random(max - min);
  };
  gdjs2.randomFloat = function(max) {
    if (max <= 0)
      return 0;
    return Math.random() * max;
  };
  gdjs2.randomFloatInRange = function(min, max) {
    return min + gdjs2.randomFloat(max - min);
  };
  gdjs2.randomWithStep = function(min, max, step) {
    if (step <= 0)
      return min + gdjs2.random(max - min);
    return min + gdjs2.random(Math.floor((max - min) / step)) * step;
  };
  gdjs2.toRad = function(angleInDegrees) {
    return angleInDegrees / 180 * Math.PI;
  };
  gdjs2.toDegrees = function(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
  };
  gdjs2.registerObject = function(objectTypeName, Ctor) {
    gdjs2.objectsTypes.put(objectTypeName, Ctor);
  };
  gdjs2.registerBehavior = function(behaviorTypeName, Ctor) {
    gdjs2.behaviorsTypes.put(behaviorTypeName, Ctor);
  };
  gdjs2.registerFirstRuntimeSceneLoadedCallback = function(callback) {
    gdjs2.callbacksFirstRuntimeSceneLoaded.push(callback);
  };
  gdjs2.registerRuntimeSceneLoadedCallback = function(callback) {
    gdjs2.callbacksRuntimeSceneLoaded.push(callback);
  };
  gdjs2.registerRuntimeScenePreEventsCallback = function(callback) {
    gdjs2.callbacksRuntimeScenePreEvents.push(callback);
  };
  gdjs2.registerRuntimeScenePostEventsCallback = function(callback) {
    gdjs2.callbacksRuntimeScenePostEvents.push(callback);
  };
  gdjs2.registerRuntimeScenePausedCallback = function(callback) {
    gdjs2.callbacksRuntimeScenePaused.push(callback);
  };
  gdjs2.registerRuntimeSceneResumedCallback = function(callback) {
    gdjs2.callbacksRuntimeSceneResumed.push(callback);
  };
  gdjs2.registerRuntimeSceneUnloadingCallback = function(callback) {
    gdjs2.callbacksRuntimeSceneUnloading.push(callback);
  };
  gdjs2.registerRuntimeSceneUnloadedCallback = function(callback) {
    gdjs2.callbacksRuntimeSceneUnloaded.push(callback);
  };
  gdjs2.registerObjectDeletedFromSceneCallback = function(callback) {
    gdjs2.callbacksObjectDeletedFromScene.push(callback);
  };
  gdjs2.registerGlobalCallbacks = function() {
    console.warn("You're calling gdjs.registerGlobalCallbacks. This method is now useless and you must not call it anymore.");
  };
  gdjs2.clearGlobalCallbacks = function() {
    gdjs2.callbacksFirstRuntimeSceneLoaded.length = 0;
    gdjs2.callbacksRuntimeSceneLoaded.length = 0;
    gdjs2.callbacksRuntimeScenePreEvents.length = 0;
    gdjs2.callbacksRuntimeScenePostEvents.length = 0;
    gdjs2.callbacksRuntimeScenePaused.length = 0;
    gdjs2.callbacksRuntimeSceneResumed.length = 0;
    gdjs2.callbacksRuntimeSceneUnloading.length = 0;
    gdjs2.callbacksRuntimeSceneUnloaded.length = 0;
    gdjs2.callbacksObjectDeletedFromScene.length = 0;
  };
  gdjs2.getObjectConstructor = function(name) {
    if (name !== void 0 && gdjs2.objectsTypes.containsKey(name))
      return gdjs2.objectsTypes.get(name);
    console.warn('Object type "' + name + '" was not found.');
    return gdjs2.objectsTypes.get("");
  };
  gdjs2.getBehaviorConstructor = function(name) {
    if (name !== void 0 && gdjs2.behaviorsTypes.containsKey(name))
      return gdjs2.behaviorsTypes.get(name);
    console.warn('Behavior type "' + name + '" was not found.');
    return gdjs2.behaviorsTypes.get("");
  };
  gdjs2.staticArray = function(owner) {
    owner._staticArray = owner._staticArray || [];
    return owner._staticArray;
  };
  gdjs2.staticArray2 = function(owner) {
    owner._staticArray2 = owner._staticArray2 || [];
    return owner._staticArray2;
  };
  gdjs2.staticObject = function(owner) {
    owner._staticObject = owner._staticObject || {};
    return owner._staticObject;
  };
  gdjs2.objectsListsToArray = function(objectsLists) {
    var lists = gdjs2.staticArray(gdjs2.objectsListsToArray);
    objectsLists.values(lists);
    var result = [];
    for (var i = 0; i < lists.length; ++i) {
      var arr = lists[i];
      for (var k = 0; k < arr.length; ++k) {
        result.push(arr[k]);
      }
    }
    return result;
  };
  gdjs2.copyArray = function(src, dst) {
    var len = src.length;
    for (var i = 0; i < len; ++i) {
      dst[i] = src[i];
    }
    dst.length = len;
  };
  gdjs2.makeUuid = function() {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      const makeMathRandomUuid = (a) => {
        return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ("" + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, makeMathRandomUuid);
      };
      return makeMathRandomUuid();
    }
    if (!gdjs2.makeUuid.hex) {
      gdjs2.makeUuid.hex = [];
      for (var i = 0; i < 256; i++) {
        gdjs2.makeUuid.hex[i] = (i < 16 ? "0" : "") + i.toString(16);
      }
    }
    const hex = gdjs2.makeUuid.hex;
    var r = crypto.getRandomValues(new Uint8Array(16));
    r[6] = r[6] & 15 | 64;
    r[8] = r[8] & 63 | 128;
    return hex[r[0]] + hex[r[1]] + hex[r[2]] + hex[r[3]] + "-" + hex[r[4]] + hex[r[5]] + "-" + hex[r[6]] + hex[r[7]] + "-" + hex[r[8]] + hex[r[9]] + "-" + hex[r[10]] + hex[r[11]] + hex[r[12]] + hex[r[13]] + hex[r[14]] + hex[r[15]];
  };
})(gdjs || (gdjs = {}));
console.warn = console.warn || console.log;
console.error = console.error || console.log;
//# sourceMappingURL=gd.js.map
