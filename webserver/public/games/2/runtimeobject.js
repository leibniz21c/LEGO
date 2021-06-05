var gdjs;
(function(gdjs2) {
  const computeSqBoundingRadius = (width, height, centerX, centerY) => {
    const radiusX = Math.max(centerX, width - centerX);
    const radiusY = Math.max(centerY, height - centerY);
    return Math.pow(radiusX, 2) + Math.pow(radiusY, 2);
  };
  const RuntimeObject2 = class {
    constructor(runtimeScene, objectData) {
      this.x = 0;
      this.y = 0;
      this.angle = 0;
      this.zOrder = 0;
      this.hidden = false;
      this.layer = "";
      this._livingOnScene = true;
      this.persistentUuid = null;
      this.pick = false;
      this._defaultHitBoxes = [];
      this.hitBoxesDirty = true;
      this.aabb = {min: [0, 0], max: [0, 0]};
      this._forces = [];
      this._behaviors = [];
      this.getVariableNumber = RuntimeObject2.getVariableNumber;
      this.returnVariable = RuntimeObject2.returnVariable;
      this.getVariableString = RuntimeObject2.getVariableString;
      this.setVariableNumber = RuntimeObject2.setVariableNumber;
      this.setVariableString = RuntimeObject2.setVariableString;
      this.getVariableBoolean = RuntimeObject2.getVariableBoolean;
      this.setVariableBoolean = RuntimeObject2.setVariableBoolean;
      this.toggleVariableBoolean = RuntimeObject2.toggleVariableBoolean;
      this.variableChildExists = RuntimeObject2.variableChildExists;
      this.variableRemoveChild = RuntimeObject2.variableRemoveChild;
      this.variableClearChildren = RuntimeObject2.variableClearChildren;
      this.variablePushCopy = RuntimeObject2.variablePushCopy;
      this.valuePush = RuntimeObject2.valuePush;
      this.variableRemoveAt = RuntimeObject2.variableRemoveAt;
      this.getSqDistanceTo = RuntimeObject2.prototype.getSqDistanceToPosition;
      this.name = objectData.name || "";
      this.type = objectData.type || "";
      this._nameId = RuntimeObject2.getNameIdentifier(this.name);
      this.id = runtimeScene.createNewUniqueId();
      this._runtimeScene = runtimeScene;
      this._defaultHitBoxes.push(gdjs2.Polygon.createRectangle(0, 0));
      this.hitBoxes = this._defaultHitBoxes;
      this._variables = new gdjs2.VariablesContainer(objectData ? objectData.variables : void 0);
      this._averageForce = new gdjs2.Force(0, 0, 0);
      this._behaviorsTable = new Hashtable();
      for (let i = 0, len = objectData.behaviors.length; i < len; ++i) {
        const autoData = objectData.behaviors[i];
        const Ctor = gdjs2.getBehaviorConstructor(autoData.type);
        this._behaviors.push(new Ctor(runtimeScene, autoData, this));
        this._behaviorsTable.put(autoData.name, this._behaviors[i]);
      }
      this._timers = new Hashtable();
    }
    onCreated() {
      for (let i = 0; i < this._behaviors.length; ++i) {
        this._behaviors[i].onCreated();
      }
    }
    reinitialize(objectData) {
      const runtimeScene = this._runtimeScene;
      this.x = 0;
      this.y = 0;
      this.angle = 0;
      this.zOrder = 0;
      this.hidden = false;
      this.layer = "";
      this._livingOnScene = true;
      this.id = runtimeScene.createNewUniqueId();
      this.persistentUuid = null;
      this.pick = false;
      this.hitBoxesDirty = true;
      this.aabb.min[0] = 0;
      this.aabb.min[1] = 0;
      this.aabb.max[0] = 0;
      this.aabb.max[1] = 0;
      this._variables = new gdjs2.VariablesContainer(objectData.variables);
      this.clearForces();
      this._behaviorsTable.clear();
      let i = 0;
      for (const len = objectData.behaviors.length; i < len; ++i) {
        const behaviorData = objectData.behaviors[i];
        const Ctor = gdjs2.getBehaviorConstructor(behaviorData.type);
        if (i < this._behaviors.length) {
          this._behaviors[i] = new Ctor(runtimeScene, behaviorData, this);
        } else {
          this._behaviors.push(new Ctor(runtimeScene, behaviorData, this));
        }
        this._behaviorsTable.put(behaviorData.name, this._behaviors[i]);
      }
      this._behaviors.length = i;
      this._timers.clear();
    }
    getElapsedTime(runtimeScene) {
      const theLayer = runtimeScene.getLayer(this.layer);
      return theLayer.getElapsedTime();
    }
    update(runtimeScene) {
    }
    updatePreRender(runtimeScene) {
    }
    extraInitializationFromInitialInstance(initialInstanceData) {
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      return false;
    }
    deleteFromScene(runtimeScene) {
      if (this._livingOnScene) {
        runtimeScene.markObjectForDeletion(this);
        this._livingOnScene = false;
      }
    }
    onDestroyFromScene(runtimeScene) {
      const theLayer = runtimeScene.getLayer(this.layer);
      const rendererObject = this.getRendererObject();
      if (rendererObject) {
        theLayer.getRenderer().removeRendererObject(rendererObject);
      }
      for (let j = 0, lenj = this._behaviors.length; j < lenj; ++j) {
        this._behaviors[j].onDestroy();
      }
    }
    getRendererObject() {
      return void 0;
    }
    getName() {
      return this.name;
    }
    getNameId() {
      return this._nameId;
    }
    getUniqueId() {
      return this.id;
    }
    setPosition(x, y) {
      this.setX(x);
      this.setY(y);
    }
    setX(x) {
      if (x === this.x) {
        return;
      }
      this.x = x;
      this.hitBoxesDirty = true;
    }
    getX() {
      return this.x;
    }
    setY(y) {
      if (y === this.y) {
        return;
      }
      this.y = y;
      this.hitBoxesDirty = true;
    }
    getY() {
      return this.y;
    }
    getDrawableX() {
      return this.getX();
    }
    getDrawableY() {
      return this.getY();
    }
    rotateTowardPosition(x, y, speed, scene) {
      this.rotateTowardAngle(gdjs2.toDegrees(Math.atan2(y - (this.getDrawableY() + this.getCenterY()), x - (this.getDrawableX() + this.getCenterX()))), speed, scene);
    }
    rotateTowardAngle(angle, speed, runtimeScene) {
      if (speed === 0) {
        this.setAngle(angle);
        return;
      }
      const angularDiff = gdjs2.evtTools.common.angleDifference(this.getAngle(), angle);
      const diffWasPositive = angularDiff >= 0;
      let newAngle = this.getAngle() + (diffWasPositive ? -1 : 1) * speed * this.getElapsedTime(runtimeScene) / 1e3;
      if (gdjs2.evtTools.common.angleDifference(newAngle, angle) > 0 ^ diffWasPositive) {
        newAngle = angle;
      }
      this.setAngle(newAngle);
      if (this.getAngle() !== newAngle) {
        this.setAngle(angle);
      }
    }
    rotate(speed, runtimeScene) {
      this.setAngle(this.getAngle() + speed * this.getElapsedTime(runtimeScene) / 1e3);
    }
    setAngle(angle) {
      if (this.angle === angle) {
        return;
      }
      this.angle = angle;
      this.hitBoxesDirty = true;
    }
    getAngle() {
      return this.angle;
    }
    setLayer(layer) {
      if (layer === this.layer) {
        return;
      }
      const oldLayer = this._runtimeScene.getLayer(this.layer);
      this.layer = layer;
      const newLayer = this._runtimeScene.getLayer(this.layer);
      const rendererObject = this.getRendererObject();
      if (rendererObject) {
        oldLayer.getRenderer().removeRendererObject(rendererObject);
        newLayer.getRenderer().addRendererObject(rendererObject, this.zOrder);
      }
    }
    getLayer() {
      return this.layer;
    }
    isOnLayer(layer) {
      return this.layer === layer;
    }
    setZOrder(z) {
      if (z === this.zOrder) {
        return;
      }
      this.zOrder = z;
      if (this.getRendererObject()) {
        const theLayer = this._runtimeScene.getLayer(this.layer);
        theLayer.getRenderer().changeRendererObjectZOrder(this.getRendererObject(), z);
      }
    }
    getZOrder() {
      return this.zOrder;
    }
    getVariables() {
      return this._variables;
    }
    static getVariableNumber(variable) {
      return variable.getAsNumber();
    }
    static returnVariable(variable) {
      return variable;
    }
    static getVariableString(variable) {
      return variable.getAsString();
    }
    static getVariableChildCount(variable) {
      if (variable.isStructure() == false) {
        return 0;
      }
      return Object.keys(variable.getAllChildren()).length;
    }
    static setVariableNumber(variable, newValue) {
      variable.setNumber(newValue);
    }
    static setVariableString(variable, newValue) {
      variable.setString(newValue);
    }
    static variableChildExists(variable, childName) {
      return variable.hasChild(childName);
    }
    static variableRemoveChild(variable, childName) {
      variable.removeChild(childName);
    }
    static variableClearChildren(variable) {
      variable.clearChildren();
    }
    hasVariable(name) {
      return this._variables.has(name);
    }
    hide(enable) {
      if (enable === void 0) {
        enable = true;
      }
      this.hidden = enable;
    }
    isVisible() {
      return !this.hidden;
    }
    isHidden() {
      return this.hidden;
    }
    setWidth(width) {
    }
    setHeight(height) {
    }
    getWidth() {
      return 0;
    }
    getHeight() {
      return 0;
    }
    getCenterX() {
      return this.getWidth() / 2;
    }
    getCenterY() {
      return this.getHeight() / 2;
    }
    getCenterXInScene() {
      return this.getDrawableX() + this.getCenterX();
    }
    getCenterYInScene() {
      return this.getDrawableY() + this.getCenterY();
    }
    setCenterPositionInScene(x, y) {
      this.setX(x + this.x - (this.getDrawableX() + this.getCenterX()));
      this.setY(y + this.y - (this.getDrawableY() + this.getCenterY()));
    }
    setCenterXInScene(x) {
      this.setX(x + this.x - (this.getDrawableX() + this.getCenterX()));
    }
    setCenterYInScene(y) {
      this.setY(y + this.y - (this.getDrawableY() + this.getCenterY()));
    }
    _getRecycledForce(x, y, multiplier) {
      if (RuntimeObject2.forcesGarbage.length === 0) {
        return new gdjs2.Force(x, y, multiplier);
      } else {
        const recycledForce = RuntimeObject2.forcesGarbage.pop();
        recycledForce.setX(x);
        recycledForce.setY(y);
        recycledForce.setMultiplier(multiplier);
        return recycledForce;
      }
    }
    addForce(x, y, multiplier) {
      this._forces.push(this._getRecycledForce(x, y, multiplier));
    }
    addPolarForce(angle, len, multiplier) {
      const angleInRadians = gdjs2.toRad(angle);
      const forceX = Math.cos(angleInRadians) * len;
      const forceY = Math.sin(angleInRadians) * len;
      this._forces.push(this._getRecycledForce(forceX, forceY, multiplier));
    }
    addForceTowardPosition(x, y, len, multiplier) {
      const angleInRadians = Math.atan2(y - (this.getDrawableY() + this.getCenterY()), x - (this.getDrawableX() + this.getCenterX()));
      const forceX = Math.cos(angleInRadians) * len;
      const forceY = Math.sin(angleInRadians) * len;
      this._forces.push(this._getRecycledForce(forceX, forceY, multiplier));
    }
    addForceTowardObject(object, len, multiplier) {
      if (object == null) {
        return;
      }
      this.addForceTowardPosition(object.getDrawableX() + object.getCenterX(), object.getDrawableY() + object.getCenterY(), len, multiplier);
    }
    clearForces() {
      RuntimeObject2.forcesGarbage.push.apply(RuntimeObject2.forcesGarbage, this._forces);
      this._forces.length = 0;
    }
    hasNoForces() {
      return this._forces.length === 0;
    }
    updateForces(elapsedTime) {
      for (let i = 0; i < this._forces.length; ) {
        const force = this._forces[i];
        const multiplier = force.getMultiplier();
        if (multiplier === 1) {
          ++i;
        } else {
          if (multiplier === 0 || force.getLength() <= 1e-3) {
            RuntimeObject2.forcesGarbage.push(force);
            this._forces.splice(i, 1);
          } else {
            force.setLength(force.getLength() - force.getLength() * (1 - multiplier) * elapsedTime);
            ++i;
          }
        }
      }
    }
    getAverageForce() {
      let averageX = 0;
      let averageY = 0;
      for (let i = 0, len = this._forces.length; i < len; ++i) {
        averageX += this._forces[i].getX();
        averageY += this._forces[i].getY();
      }
      this._averageForce.setX(averageX);
      this._averageForce.setY(averageY);
      return this._averageForce;
    }
    averageForceAngleIs(angle, toleranceInDegrees) {
      let averageAngle = this.getAverageForce().getAngle();
      if (averageAngle < 0) {
        averageAngle += 360;
      }
      return Math.abs(angle - averageAngle) < toleranceInDegrees / 2;
    }
    getHitBoxes() {
      if (this.hitBoxesDirty) {
        this.updateHitBoxes();
        this.updateAABB();
        this.hitBoxesDirty = false;
      }
      return this.hitBoxes;
    }
    updateHitBoxes() {
      this.hitBoxes = this._defaultHitBoxes;
      const width = this.getWidth();
      const height = this.getHeight();
      const centerX = this.getCenterX();
      const centerY = this.getCenterY();
      if (centerX === width / 2 && centerY === height / 2) {
        this.hitBoxes[0].vertices[0][0] = -centerX;
        this.hitBoxes[0].vertices[0][1] = -centerY;
        this.hitBoxes[0].vertices[1][0] = +centerX;
        this.hitBoxes[0].vertices[1][1] = -centerY;
        this.hitBoxes[0].vertices[2][0] = +centerX;
        this.hitBoxes[0].vertices[2][1] = +centerY;
        this.hitBoxes[0].vertices[3][0] = -centerX;
        this.hitBoxes[0].vertices[3][1] = +centerY;
      } else {
        this.hitBoxes[0].vertices[0][0] = 0 - centerX;
        this.hitBoxes[0].vertices[0][1] = 0 - centerY;
        this.hitBoxes[0].vertices[1][0] = width - centerX;
        this.hitBoxes[0].vertices[1][1] = 0 - centerY;
        this.hitBoxes[0].vertices[2][0] = width - centerX;
        this.hitBoxes[0].vertices[2][1] = height - centerY;
        this.hitBoxes[0].vertices[3][0] = 0 - centerX;
        this.hitBoxes[0].vertices[3][1] = height - centerY;
      }
      this.hitBoxes[0].rotate(gdjs2.toRad(this.getAngle()));
      this.hitBoxes[0].move(this.getDrawableX() + centerX, this.getDrawableY() + centerY);
    }
    getAABB() {
      if (this.hitBoxesDirty) {
        this.updateHitBoxes();
        this.updateAABB();
        this.hitBoxesDirty = false;
      }
      return this.aabb;
    }
    getVisibilityAABB() {
      return this.getAABB();
    }
    updateAABB() {
      if (this.getAngle() === 0) {
        this.aabb.min[0] = this.getDrawableX();
        this.aabb.min[1] = this.getDrawableY();
        this.aabb.max[0] = this.aabb.min[0] + this.getWidth();
        this.aabb.max[1] = this.aabb.min[1] + this.getHeight();
      } else {
        let first = true;
        for (let i = 0; i < this.hitBoxes.length; i++) {
          for (let j = 0; j < this.hitBoxes[i].vertices.length; j++) {
            const vertex = this.hitBoxes[i].vertices[j];
            if (first) {
              this.aabb.min[0] = vertex[0];
              this.aabb.max[0] = vertex[0];
              this.aabb.min[1] = vertex[1];
              this.aabb.max[1] = vertex[1];
              first = false;
            } else {
              this.aabb.min[0] = Math.min(this.aabb.min[0], vertex[0]);
              this.aabb.max[0] = Math.max(this.aabb.max[0], vertex[0]);
              this.aabb.min[1] = Math.min(this.aabb.min[1], vertex[1]);
              this.aabb.max[1] = Math.max(this.aabb.max[1], vertex[1]);
            }
          }
        }
      }
    }
    stepBehaviorsPreEvents(runtimeScene) {
      for (let i = 0, len = this._behaviors.length; i < len; ++i) {
        this._behaviors[i].stepPreEvents(runtimeScene);
      }
    }
    stepBehaviorsPostEvents(runtimeScene) {
      for (let i = 0, len = this._behaviors.length; i < len; ++i) {
        this._behaviors[i].stepPostEvents(runtimeScene);
      }
    }
    notifyBehaviorsObjectHotReloaded() {
      for (let i = 0, len = this._behaviors.length; i < len; ++i) {
        this._behaviors[i].onObjectHotReloaded();
      }
    }
    getBehavior(name) {
      return this._behaviorsTable.get(name);
    }
    hasBehavior(name) {
      return this._behaviorsTable.containsKey(name);
    }
    activateBehavior(name, enable) {
      if (this._behaviorsTable.containsKey(name)) {
        this._behaviorsTable.get(name).activate(enable);
      }
    }
    behaviorActivated(name) {
      if (this._behaviorsTable.containsKey(name)) {
        return this._behaviorsTable.get(name).activated();
      }
      return false;
    }
    removeBehavior(name) {
      const behavior = this._behaviorsTable.get(name);
      if (!behavior) {
        return false;
      }
      behavior.onDestroy();
      const behaviorIndex = this._behaviors.indexOf(behavior);
      if (behaviorIndex !== -1) {
        this._behaviors.splice(behaviorIndex, 1);
      }
      this._behaviorsTable.remove(name);
      return true;
    }
    addNewBehavior(behaviorData) {
      const Ctor = gdjs2.getBehaviorConstructor(behaviorData.type);
      if (!Ctor) {
        return false;
      }
      const newRuntimeBehavior = new Ctor(this._runtimeScene, behaviorData, this);
      this._behaviors.push(newRuntimeBehavior);
      this._behaviorsTable.put(behaviorData.name, newRuntimeBehavior);
      return true;
    }
    updateTimers(elapsedTime) {
      for (const name in this._timers.items) {
        if (this._timers.items.hasOwnProperty(name)) {
          this._timers.items[name].updateTime(elapsedTime);
        }
      }
    }
    timerElapsedTime(timerName, timeInSeconds) {
      if (!this._timers.containsKey(timerName)) {
        this._timers.put(timerName, new gdjs2.Timer(timerName));
        return false;
      }
      return this.getTimerElapsedTimeInSeconds(timerName) >= timeInSeconds;
    }
    timerPaused(timerName) {
      if (!this._timers.containsKey(timerName)) {
        return false;
      }
      return this._timers.get(timerName).isPaused();
    }
    resetTimer(timerName) {
      if (!this._timers.containsKey(timerName)) {
        this._timers.put(timerName, new gdjs2.Timer(timerName));
      }
      this._timers.get(timerName).reset();
    }
    pauseTimer(timerName) {
      if (!this._timers.containsKey(timerName)) {
        this._timers.put(timerName, new gdjs2.Timer(timerName));
      }
      this._timers.get(timerName).setPaused(true);
    }
    unpauseTimer(timerName) {
      if (!this._timers.containsKey(timerName)) {
        this._timers.put(timerName, new gdjs2.Timer(timerName));
      }
      this._timers.get(timerName).setPaused(false);
    }
    removeTimer(timerName) {
      if (this._timers.containsKey(timerName)) {
        this._timers.remove(timerName);
      }
    }
    getTimerElapsedTimeInSeconds(timerName) {
      if (!this._timers.containsKey(timerName)) {
        return 0;
      }
      return this._timers.get(timerName).getTime() / 1e3;
    }
    separateFromObjects(objects, ignoreTouchingEdges) {
      let moved = false;
      let xMove = 0;
      let yMove = 0;
      const hitBoxes = this.getHitBoxes();
      for (let i = 0, len = objects.length; i < len; ++i) {
        if (objects[i].id != this.id) {
          const otherHitBoxes = objects[i].getHitBoxes();
          for (let k = 0, lenk = hitBoxes.length; k < lenk; ++k) {
            for (let l = 0, lenl = otherHitBoxes.length; l < lenl; ++l) {
              const result = gdjs2.Polygon.collisionTest(hitBoxes[k], otherHitBoxes[l], ignoreTouchingEdges);
              if (result.collision) {
                xMove += result.move_axis[0];
                yMove += result.move_axis[1];
                moved = true;
              }
            }
          }
        }
      }
      this.setPosition(this.getX() + xMove, this.getY() + yMove);
      return moved;
    }
    separateFromObjectsList(objectsLists, ignoreTouchingEdges) {
      let moved = false;
      let xMove = 0;
      let yMove = 0;
      const hitBoxes = this.getHitBoxes();
      for (const name in objectsLists.items) {
        if (objectsLists.items.hasOwnProperty(name)) {
          const objects = objectsLists.items[name];
          for (let i = 0, len = objects.length; i < len; ++i) {
            if (objects[i].id != this.id) {
              const otherHitBoxes = objects[i].getHitBoxes();
              for (let k = 0, lenk = hitBoxes.length; k < lenk; ++k) {
                for (let l = 0, lenl = otherHitBoxes.length; l < lenl; ++l) {
                  const result = gdjs2.Polygon.collisionTest(hitBoxes[k], otherHitBoxes[l], ignoreTouchingEdges);
                  if (result.collision) {
                    xMove += result.move_axis[0];
                    yMove += result.move_axis[1];
                    moved = true;
                  }
                }
              }
            }
          }
        }
      }
      this.setPosition(this.getX() + xMove, this.getY() + yMove);
      return moved;
    }
    getDistanceToObject(otherObject) {
      return Math.sqrt(this.getSqDistanceToObject(otherObject));
    }
    getSqDistanceToObject(otherObject) {
      if (otherObject === null) {
        return 0;
      }
      const x = this.getDrawableX() + this.getCenterX() - (otherObject.getDrawableX() + otherObject.getCenterX());
      const y = this.getDrawableY() + this.getCenterY() - (otherObject.getDrawableY() + otherObject.getCenterY());
      return x * x + y * y;
    }
    getDistanceToPosition(targetX, targetY) {
      return Math.sqrt(this.getSqDistanceToPosition(targetX, targetY));
    }
    getSqDistanceToPosition(targetX, targetY) {
      const x = this.getDrawableX() + this.getCenterX() - targetX;
      const y = this.getDrawableY() + this.getCenterY() - targetY;
      return x * x + y * y;
    }
    getAngleToObject(otherObject) {
      if (otherObject === null) {
        return 0;
      }
      const x = this.getDrawableX() + this.getCenterX() - (otherObject.getDrawableX() + otherObject.getCenterX());
      const y = this.getDrawableY() + this.getCenterY() - (otherObject.getDrawableY() + otherObject.getCenterY());
      return gdjs2.toDegrees(Math.atan2(-y, -x));
    }
    getXFromAngleAndDistance(angle, distance) {
      return this.getDrawableX() + this.getCenterX() + distance * Math.cos(gdjs2.toRad(angle));
    }
    getYFromAngleAndDistance(angle, distance) {
      return this.getDrawableY() + this.getCenterY() + distance * Math.sin(gdjs2.toRad(angle));
    }
    getAngleToPosition(targetX, targetY) {
      const x = this.getDrawableX() + this.getCenterX() - targetX;
      const y = this.getDrawableY() + this.getCenterY() - targetY;
      return gdjs2.toDegrees(Math.atan2(-y, -x));
    }
    putAround(x, y, distance, angleInDegrees) {
      const angleInRadians = gdjs2.toRad(angleInDegrees);
      this.setCenterXInScene(x + Math.cos(angleInRadians) * distance);
      this.setCenterYInScene(y + Math.sin(angleInRadians) * distance);
    }
    putAroundObject(obj, distance, angleInDegrees) {
      this.putAround(obj.getDrawableX() + obj.getCenterX(), obj.getDrawableY() + obj.getCenterY(), distance, angleInDegrees);
    }
    separateObjectsWithoutForces(objectsLists) {
      const objects = gdjs2.staticArray(RuntimeObject2.prototype.separateObjectsWithoutForces);
      objects.length = 0;
      const lists = gdjs2.staticArray2(RuntimeObject2.prototype.separateObjectsWithoutForces);
      objectsLists.values(lists);
      for (let i = 0, len = lists.length; i < len; ++i) {
        objects.push.apply(objects, lists[i]);
      }
      for (let i = 0, len = objects.length; i < len; ++i) {
        if (objects[i].id != this.id) {
          if (this.getDrawableX() < objects[i].getDrawableX()) {
            this.setX(objects[i].getDrawableX() - this.getWidth());
          } else {
            if (this.getDrawableX() + this.getWidth() > objects[i].getDrawableX() + objects[i].getWidth()) {
              this.setX(objects[i].getDrawableX() + objects[i].getWidth());
            }
          }
          if (this.getDrawableY() < objects[i].getDrawableY()) {
            this.setY(objects[i].getDrawableY() - this.getHeight());
          } else {
            if (this.getDrawableY() + this.getHeight() > objects[i].getDrawableY() + objects[i].getHeight()) {
              this.setY(objects[i].getDrawableY() + objects[i].getHeight());
            }
          }
        }
      }
    }
    separateObjectsWithForces(objectsLists) {
      const objects = gdjs2.staticArray(RuntimeObject2.prototype.separateObjectsWithForces);
      objects.length = 0;
      const lists = gdjs2.staticArray2(RuntimeObject2.prototype.separateObjectsWithForces);
      objectsLists.values(lists);
      for (let i = 0, len = lists.length; i < len; ++i) {
        objects.push.apply(objects, lists[i]);
      }
      for (let i = 0, len = objects.length; i < len; ++i) {
        if (objects[i].id != this.id) {
          if (this.getDrawableX() + this.getCenterX() < objects[i].getDrawableX() + objects[i].getCenterX()) {
            let av = this.hasNoForces() ? 0 : this.getAverageForce().getX();
            this.addForce(-av - 10, 0, 0);
          } else {
            let av = this.hasNoForces() ? 0 : this.getAverageForce().getX();
            this.addForce(-av + 10, 0, 0);
          }
          if (this.getDrawableY() + this.getCenterY() < objects[i].getDrawableY() + objects[i].getCenterY()) {
            let av = this.hasNoForces() ? 0 : this.getAverageForce().getY();
            this.addForce(0, -av - 10, 0);
          } else {
            let av = this.hasNoForces() ? 0 : this.getAverageForce().getY();
            this.addForce(0, -av + 10, 0);
          }
        }
      }
    }
    static collisionTest(obj1, obj2, ignoreTouchingEdges) {
      const o1centerX = obj1.getCenterX();
      const o1centerY = obj1.getCenterY();
      const obj1BoundingRadius = Math.sqrt(computeSqBoundingRadius(obj1.getWidth(), obj1.getHeight(), o1centerX, o1centerY));
      const o2centerX = obj2.getCenterX();
      const o2centerY = obj2.getCenterY();
      const obj2BoundingRadius = Math.sqrt(computeSqBoundingRadius(obj2.getWidth(), obj2.getHeight(), o2centerX, o2centerY));
      const diffX = obj1.getDrawableX() + o1centerX - (obj2.getDrawableX() + o2centerX);
      const diffY = obj1.getDrawableY() + o1centerY - (obj2.getDrawableY() + o2centerY);
      if (Math.sqrt(diffX * diffX + diffY * diffY) > obj1BoundingRadius + obj2BoundingRadius) {
        return false;
      }
      const hitBoxes1 = obj1.getHitBoxes();
      const hitBoxes2 = obj2.getHitBoxes();
      for (let k = 0, lenBoxes1 = hitBoxes1.length; k < lenBoxes1; ++k) {
        for (let l = 0, lenBoxes2 = hitBoxes2.length; l < lenBoxes2; ++l) {
          if (gdjs2.Polygon.collisionTest(hitBoxes1[k], hitBoxes2[l], ignoreTouchingEdges).collision) {
            return true;
          }
        }
      }
      return false;
    }
    raycastTest(x, y, endX, endY, closest) {
      const objCenterX = this.getCenterX();
      const objCenterY = this.getCenterY();
      const objSqBoundingRadius = computeSqBoundingRadius(this.getWidth(), this.getHeight(), objCenterX, objCenterY);
      const rayCenterWorldX = (x + endX) / 2;
      const rayCenterWorldY = (y + endY) / 2;
      const raySqBoundingRadius = (endX - x) * (endX - x) + (endY - y) * (endY - y);
      const diffX = this.getDrawableX() + objCenterX - rayCenterWorldX;
      const diffY = this.getDrawableY() + objCenterY - rayCenterWorldY;
      let result = gdjs2.Polygon.raycastTestStatics.result;
      result.collision = false;
      if (diffX * diffX + diffY * diffY > objSqBoundingRadius + raySqBoundingRadius + 2 * Math.sqrt(raySqBoundingRadius * objSqBoundingRadius)) {
        return result;
      }
      let testSqDist = closest ? raySqBoundingRadius : 0;
      const hitBoxes = this.getHitBoxes();
      for (let i = 0; i < hitBoxes.length; i++) {
        const res = gdjs2.Polygon.raycastTest(hitBoxes[i], x, y, endX, endY);
        if (res.collision) {
          if (closest && res.closeSqDist < testSqDist) {
            testSqDist = res.closeSqDist;
            result = res;
          } else {
            if (!closest && res.farSqDist > testSqDist && res.farSqDist <= raySqBoundingRadius) {
              testSqDist = res.farSqDist;
              result = res;
            }
          }
        }
      }
      return result;
    }
    insideObject(x, y) {
      if (this.hitBoxesDirty) {
        this.updateHitBoxes();
        this.updateAABB();
        this.hitBoxesDirty = false;
      }
      return this.aabb.min[0] <= x && this.aabb.max[0] >= x && this.aabb.min[1] <= y && this.aabb.max[1] >= y;
    }
    static distanceTest(obj1, obj2, distance) {
      return obj1.getSqDistanceToObject(obj2) <= distance;
    }
    cursorOnObject(runtimeScene) {
      const inputManager = runtimeScene.getGame().getInputManager();
      const layer = runtimeScene.getLayer(this.layer);
      const mousePos = layer.convertCoords(inputManager.getMouseX(), inputManager.getMouseY());
      if (this.insideObject(mousePos[0], mousePos[1])) {
        return true;
      }
      const touchIds = inputManager.getAllTouchIdentifiers();
      for (let i = 0; i < touchIds.length; ++i) {
        const touchPos = layer.convertCoords(inputManager.getTouchX(touchIds[i]), inputManager.getTouchY(touchIds[i]));
        if (this.insideObject(touchPos[0], touchPos[1])) {
          return true;
        }
      }
      return false;
    }
    isCollidingWithPoint(pointX, pointY) {
      const hitBoxes = this.getHitBoxes();
      for (let i = 0; i < this.hitBoxes.length; ++i) {
        if (gdjs2.Polygon.isPointInside(hitBoxes[i], pointX, pointY)) {
          return true;
        }
      }
      return false;
    }
    static getNameIdentifier(name) {
      if (RuntimeObject2._identifiers.containsKey(name)) {
        return RuntimeObject2._identifiers.get(name);
      }
      RuntimeObject2._newId = (RuntimeObject2._newId || 0) + 1;
      const newIdentifier = RuntimeObject2._newId;
      RuntimeObject2._identifiers.put(name, newIdentifier);
      return newIdentifier;
    }
  };
  let RuntimeObject = RuntimeObject2;
  RuntimeObject.supportsReinitialization = false;
  RuntimeObject.setVariableBoolean = function(variable, newValue) {
    variable.setBoolean(newValue);
  };
  RuntimeObject.getVariableBoolean = function(variable, compareWith) {
    return gdjs2.evtTools.common.getVariableBoolean(variable, compareWith);
  };
  RuntimeObject.toggleVariableBoolean = function(variable) {
    gdjs2.evtTools.common.toggleVariableBoolean(variable);
  };
  RuntimeObject.variablePushCopy = function(array, variable) {
    array.pushVariableCopy(variable);
  };
  RuntimeObject.valuePush = function(array, value) {
    array.pushValue(value);
  };
  RuntimeObject.variableRemoveAt = function(array, index) {
    array.removeAtIndex(index);
  };
  RuntimeObject._identifiers = new Hashtable();
  RuntimeObject._newId = 0;
  RuntimeObject.forcesGarbage = [];
  gdjs2.RuntimeObject = RuntimeObject;
  gdjs2.registerObject("", gdjs2.RuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimeobject.js.map
