
gdjs.evtsExt__SineMovement__SineMovement = gdjs.evtsExt__SineMovement__SineMovement || {};

/**
 * Behavior generated from Sine Movement
 */
gdjs.evtsExt__SineMovement__SineMovement.SineMovement = class SineMovement extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.HorizontalSpeed = behaviorData.HorizontalSpeed !== undefined ? behaviorData.HorizontalSpeed : Number("60") || 0;
    this._behaviorData.VerticalSpeed = behaviorData.VerticalSpeed !== undefined ? behaviorData.VerticalSpeed : Number("60") || 0;
    this._behaviorData.HorizontalDistance = behaviorData.HorizontalDistance !== undefined ? behaviorData.HorizontalDistance : Number("100") || 0;
    this._behaviorData.VerticalDistance = behaviorData.VerticalDistance !== undefined ? behaviorData.VerticalDistance : Number("0") || 0;
    this._behaviorData.CenterPointX = behaviorData.CenterPointX !== undefined ? behaviorData.CenterPointX : Number("0") || 0;
    this._behaviorData.CenterPointY = behaviorData.CenterPointY !== undefined ? behaviorData.CenterPointY : Number("0") || 0;
    this._behaviorData.SineProgressX = Number("0") || 0;
    this._behaviorData.SineProgressY = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HorizontalSpeed !== newBehaviorData.HorizontalSpeed)
      this._behaviorData.HorizontalSpeed = newBehaviorData.HorizontalSpeed;
    if (oldBehaviorData.VerticalSpeed !== newBehaviorData.VerticalSpeed)
      this._behaviorData.VerticalSpeed = newBehaviorData.VerticalSpeed;
    if (oldBehaviorData.HorizontalDistance !== newBehaviorData.HorizontalDistance)
      this._behaviorData.HorizontalDistance = newBehaviorData.HorizontalDistance;
    if (oldBehaviorData.VerticalDistance !== newBehaviorData.VerticalDistance)
      this._behaviorData.VerticalDistance = newBehaviorData.VerticalDistance;
    if (oldBehaviorData.CenterPointX !== newBehaviorData.CenterPointX)
      this._behaviorData.CenterPointX = newBehaviorData.CenterPointX;
    if (oldBehaviorData.CenterPointY !== newBehaviorData.CenterPointY)
      this._behaviorData.CenterPointY = newBehaviorData.CenterPointY;
    if (oldBehaviorData.SineProgressX !== newBehaviorData.SineProgressX)
      this._behaviorData.SineProgressX = newBehaviorData.SineProgressX;
    if (oldBehaviorData.SineProgressY !== newBehaviorData.SineProgressY)
      this._behaviorData.SineProgressY = newBehaviorData.SineProgressY;

    return true;
  }

  // Properties:
  
  _getHorizontalSpeed() {
    return this._behaviorData.HorizontalSpeed !== undefined ? this._behaviorData.HorizontalSpeed : Number("60") || 0;
  }
  _setHorizontalSpeed(newValue) {
    this._behaviorData.HorizontalSpeed = newValue;
  }
  _getVerticalSpeed() {
    return this._behaviorData.VerticalSpeed !== undefined ? this._behaviorData.VerticalSpeed : Number("60") || 0;
  }
  _setVerticalSpeed(newValue) {
    this._behaviorData.VerticalSpeed = newValue;
  }
  _getHorizontalDistance() {
    return this._behaviorData.HorizontalDistance !== undefined ? this._behaviorData.HorizontalDistance : Number("100") || 0;
  }
  _setHorizontalDistance(newValue) {
    this._behaviorData.HorizontalDistance = newValue;
  }
  _getVerticalDistance() {
    return this._behaviorData.VerticalDistance !== undefined ? this._behaviorData.VerticalDistance : Number("0") || 0;
  }
  _setVerticalDistance(newValue) {
    this._behaviorData.VerticalDistance = newValue;
  }
  _getCenterPointX() {
    return this._behaviorData.CenterPointX !== undefined ? this._behaviorData.CenterPointX : Number("0") || 0;
  }
  _setCenterPointX(newValue) {
    this._behaviorData.CenterPointX = newValue;
  }
  _getCenterPointY() {
    return this._behaviorData.CenterPointY !== undefined ? this._behaviorData.CenterPointY : Number("0") || 0;
  }
  _setCenterPointY(newValue) {
    this._behaviorData.CenterPointY = newValue;
  }
  _getSineProgressX() {
    return this._behaviorData.SineProgressX !== undefined ? this._behaviorData.SineProgressX : Number("0") || 0;
  }
  _setSineProgressX(newValue) {
    this._behaviorData.SineProgressX = newValue;
  }
  _getSineProgressY() {
    return this._behaviorData.SineProgressY !== undefined ? this._behaviorData.SineProgressY : Number("0") || 0;
  }
  _setSineProgressY(newValue) {
    this._behaviorData.SineProgressY = newValue;
  }
}

// Methods:
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX() == 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY() == 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointX((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointY((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance() != 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()) + Math.cos(gdjs.toRad((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressX()))) * (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance() != 0 ) {
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()) + Math.sin(gdjs.toRad((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressY()))) * (gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance()));
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressX(gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressX() + ((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressY(gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressY() + ((gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressY()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSineProgressX()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SineProgressXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalSpeed()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalSpeed()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHorizontalDistance()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.HorizontalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVerticalDistance()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistance = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.VerticalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointX()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterPointY()); }}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.CenterYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterYContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterPointX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetCenterXContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalDistance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalDistance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistance = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHorizontalSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetHorizontalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setVerticalSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.SetVerticalSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext = {};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1= [];
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects2= [];

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSineProgressY(0);
}
}}

}


};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCounters = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SineMovement__SineMovement.SineMovement.prototype.ResetSineCountersContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("SineMovement::SineMovement", gdjs.evtsExt__SineMovement__SineMovement.SineMovement);
