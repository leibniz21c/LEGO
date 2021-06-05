var gdjs;
(function(gdjs2) {
  class PlatformerObjectRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._ignoreTouchingEdges = true;
      this._currentFallSpeed = 0;
      this._currentSpeed = 0;
      this._canJump = false;
      this._leftKey = false;
      this._rightKey = false;
      this._ladderKey = false;
      this._upKey = false;
      this._downKey = false;
      this._jumpKey = false;
      this._releaseKey = false;
      this._hasReallyMoved = false;
      this._slopeClimbingFactor = 1;
      this._requestedDeltaX = 0;
      this._requestedDeltaY = 0;
      this._lastDeltaY = 0;
      this._roundCoordinates = behaviorData.roundCoordinates;
      this._gravity = behaviorData.gravity;
      this._maxFallingSpeed = behaviorData.maxFallingSpeed;
      this._ladderClimbingSpeed = behaviorData.ladderClimbingSpeed || 150;
      this._acceleration = behaviorData.acceleration;
      this._deceleration = behaviorData.deceleration;
      this._maxSpeed = behaviorData.maxSpeed;
      this._jumpSpeed = behaviorData.jumpSpeed;
      this._canGrabPlatforms = behaviorData.canGrabPlatforms || false;
      this._yGrabOffset = behaviorData.yGrabOffset || 0;
      this._xGrabTolerance = behaviorData.xGrabTolerance || 10;
      this._jumpSustainTime = behaviorData.jumpSustainTime || 0;
      this._ignoreDefaultControls = behaviorData.ignoreDefaultControls;
      this._potentialCollidingObjects = [];
      this._overlappedJumpThru = [];
      this._slopeMaxAngle = 0;
      this.setSlopeMaxAngle(behaviorData.slopeMaxAngle);
      this._manager = gdjs2.PlatformObjectsManager.getManager(runtimeScene);
      this._falling = new Falling(this);
      this._onFloor = new OnFloor(this);
      this._jumping = new Jumping(this);
      this._grabbingPlatform = new GrabbingPlatform(this);
      this._onLadder = new OnLadder(this);
      this._state = this._falling;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.roundCoordinates !== newBehaviorData.roundCoordinates) {
        this._roundCoordinates = newBehaviorData.roundCoordinates;
      }
      if (oldBehaviorData.gravity !== newBehaviorData.gravity) {
        this.setGravity(newBehaviorData.gravity);
      }
      if (oldBehaviorData.maxFallingSpeed !== newBehaviorData.maxFallingSpeed) {
        this.setMaxFallingSpeed(newBehaviorData.maxFallingSpeed);
      }
      if (oldBehaviorData.acceleration !== newBehaviorData.acceleration) {
        this.setAcceleration(newBehaviorData.acceleration);
      }
      if (oldBehaviorData.deceleration !== newBehaviorData.deceleration) {
        this.setDeceleration(newBehaviorData.deceleration);
      }
      if (oldBehaviorData.maxSpeed !== newBehaviorData.maxSpeed) {
        this.setMaxSpeed(newBehaviorData.maxSpeed);
      }
      if (oldBehaviorData.jumpSpeed !== newBehaviorData.jumpSpeed) {
        this.setJumpSpeed(newBehaviorData.jumpSpeed);
      }
      if (oldBehaviorData.canGrabPlatforms !== newBehaviorData.canGrabPlatforms) {
        this.setCanGrabPlatforms(newBehaviorData.canGrabPlatforms);
      }
      if (oldBehaviorData.yGrabOffset !== newBehaviorData.yGrabOffset) {
        this._yGrabOffset = newBehaviorData.yGrabOffset;
      }
      if (oldBehaviorData.xGrabTolerance !== newBehaviorData.xGrabTolerance) {
        this._xGrabTolerance = newBehaviorData.xGrabTolerance;
      }
      if (oldBehaviorData.jumpSustainTime !== newBehaviorData.jumpSustainTime) {
        this.setJumpSustainTime(newBehaviorData.jumpSustainTime);
      }
      return true;
    }
    doStepPreEvents(runtimeScene) {
      const LEFTKEY = 37;
      const UPKEY = 38;
      const RIGHTKEY = 39;
      const DOWNKEY = 40;
      const LSHIFTKEY = 1016;
      const RSHIFTKEY = 2016;
      const SPACEKEY = 32;
      const object = this.owner;
      const timeDelta = this.owner.getElapsedTime(runtimeScene) / 1e3;
      this._requestedDeltaX = 0;
      this._requestedDeltaY = 0;
      const inputManager = runtimeScene.getGame().getInputManager();
      this._leftKey || (this._leftKey = !this._ignoreDefaultControls && inputManager.isKeyPressed(LEFTKEY));
      this._rightKey || (this._rightKey = !this._ignoreDefaultControls && inputManager.isKeyPressed(RIGHTKEY));
      this._jumpKey || (this._jumpKey = !this._ignoreDefaultControls && (inputManager.isKeyPressed(LSHIFTKEY) || inputManager.isKeyPressed(RSHIFTKEY) || inputManager.isKeyPressed(SPACEKEY)));
      this._ladderKey || (this._ladderKey = !this._ignoreDefaultControls && inputManager.isKeyPressed(UPKEY));
      this._upKey || (this._upKey = !this._ignoreDefaultControls && inputManager.isKeyPressed(UPKEY));
      this._downKey || (this._downKey = !this._ignoreDefaultControls && inputManager.isKeyPressed(DOWNKEY));
      this._releaseKey || (this._releaseKey = !this._ignoreDefaultControls && inputManager.isKeyPressed(DOWNKEY));
      this._requestedDeltaX += this._updateSpeed(timeDelta);
      this._state.beforeUpdatingObstacles(timeDelta);
      this._onFloor._oldHeight = object.getHeight();
      this._updatePotentialCollidingObjects(Math.max(this._requestedDeltaX, this._maxFallingSpeed * timeDelta));
      this._updateOverlappedJumpThru();
      this._state.checkTransitionBeforeX();
      this._state.beforeMovingX();
      if (this._separateFromPlatforms(this._potentialCollidingObjects, true)) {
        this._canJump = true;
      }
      const oldX = object.getX();
      this._moveX();
      this._state.checkTransitionBeforeY(timeDelta);
      this._state.beforeMovingY(timeDelta, oldX);
      const oldY = object.getY();
      this._moveY();
      this._updateOverlappedJumpThru();
      if (this._state !== this._onLadder) {
        this._checkTransitionOnFloorOrFalling();
      }
      this._leftKey = false;
      this._rightKey = false;
      this._ladderKey = false;
      this._upKey = false;
      this._downKey = false;
      this._releaseKey = false;
      this._jumpKey = false;
      this._hasReallyMoved = Math.abs(object.getX() - oldX) >= 1;
      this._lastDeltaY = object.getY() - oldY;
    }
    doStepPostEvents(runtimeScene) {
    }
    _updateSpeed(timeDelta) {
      if (this._leftKey) {
        this._currentSpeed -= this._acceleration * timeDelta;
      }
      if (this._rightKey) {
        this._currentSpeed += this._acceleration * timeDelta;
      }
      if (this._leftKey === this._rightKey) {
        const wasPositive = this._currentSpeed > 0;
        this._currentSpeed -= this._deceleration * timeDelta * (wasPositive ? 1 : -1);
        if (wasPositive && this._currentSpeed < 0) {
          this._currentSpeed = 0;
        }
        if (!wasPositive && this._currentSpeed > 0) {
          this._currentSpeed = 0;
        }
      }
      if (this._currentSpeed > this._maxSpeed) {
        this._currentSpeed = this._maxSpeed;
      }
      if (this._currentSpeed < -this._maxSpeed) {
        this._currentSpeed = -this._maxSpeed;
      }
      return this._currentSpeed * timeDelta;
    }
    _moveX() {
      const object = this.owner;
      const oldX = object.getX();
      if (this._requestedDeltaX !== 0) {
        const floorPlatformId = this._onFloor.getFloorPlatform() !== null ? this._onFloor.getFloorPlatform().owner.id : null;
        object.setX(object.getX() + this._requestedDeltaX);
        let tryRounding = true;
        while (this._isCollidingWith(this._potentialCollidingObjects, floorPlatformId, true)) {
          if (this._requestedDeltaX > 0 && object.getX() <= oldX || this._requestedDeltaX < 0 && object.getX() >= oldX) {
            object.setX(oldX);
            break;
          }
          if (this._state === this._onFloor) {
            object.setY(object.getY() - 1);
            if (!this._isCollidingWith(this._potentialCollidingObjects, floorPlatformId, true)) {
              break;
            }
            object.setY(object.getY() + 1);
          }
          if (tryRounding) {
            object.setX(Math.round(object.getX()));
            tryRounding = false;
          } else {
            object.setX(Math.round(object.getX()) + (this._requestedDeltaX > 0 ? -1 : 1));
          }
          this._currentSpeed = 0;
        }
      }
    }
    _moveY() {
      const object = this.owner;
      if (this._requestedDeltaY !== 0) {
        let oldY = object.getY();
        object.setY(object.getY() + this._requestedDeltaY);
        while (this._requestedDeltaY < 0 && this._isCollidingWith(this._potentialCollidingObjects, null, true) || this._requestedDeltaY > 0 && this._isCollidingWithExcluding(this._potentialCollidingObjects, this._overlappedJumpThru)) {
          if (this._state === this._jumping) {
            this._setFalling();
          }
          if (this._requestedDeltaY > 0 && object.getY() <= oldY || this._requestedDeltaY < 0 && object.getY() >= oldY) {
            object.setY(oldY);
            break;
          }
          object.setY(Math.floor(object.getY()) + (this._requestedDeltaY > 0 ? -1 : 1));
        }
      }
    }
    _setFalling() {
      this._state.leave();
      this._state = this._falling;
      this._falling.enter();
    }
    _setOnFloor(collidingPlatform) {
      this._state.leave();
      this._state = this._onFloor;
      this._onFloor.enter(collidingPlatform);
    }
    _setJumping() {
      this._state.leave();
      const from = this._state;
      this._state = this._jumping;
      this._jumping.enter(from);
    }
    _setGrabbingPlatform(grabbedPlatform) {
      this._state.leave();
      this._state = this._grabbingPlatform;
      this._grabbingPlatform.enter(grabbedPlatform);
    }
    _setOnLadder() {
      this._state.leave();
      this._state = this._onLadder;
      this._onLadder.enter();
    }
    _checkTransitionOnLadder() {
      if (this._ladderKey && this._isOverlappingLadder()) {
        this._setOnLadder();
      }
    }
    _checkTransitionJumping() {
      if (this._canJump && this._jumpKey) {
        this._setJumping();
      }
    }
    _checkGrabPlatform() {
      const object = this.owner;
      let tryGrabbingPlatform = false;
      object.setX(object.getX() + (this._requestedDeltaX > 0 ? this._xGrabTolerance : -this._xGrabTolerance));
      let collidingPlatform = this._getCollidingPlatform();
      if (collidingPlatform !== null && this._canGrab(collidingPlatform)) {
        tryGrabbingPlatform = true;
      }
      object.setX(object.getX() + (this._requestedDeltaX > 0 ? -this._xGrabTolerance : this._xGrabTolerance));
      if (tryGrabbingPlatform) {
        let oldY = object.getY();
        object.setY(collidingPlatform.owner.getY() + collidingPlatform.getYGrabOffset() - this._yGrabOffset);
        if (!this._isCollidingWith(this._potentialCollidingObjects, null, true)) {
          this._setGrabbingPlatform(collidingPlatform);
          this._requestedDeltaY = 0;
        } else {
          object.setY(oldY);
        }
      }
    }
    _checkTransitionOnFloorOrFalling() {
      const object = this.owner;
      let oldY = object.getY();
      object.setY(object.getY() + 1);
      if (this._state === this._onFloor && gdjs2.RuntimeObject.collisionTest(object, this._onFloor.getFloorPlatform().owner, this._ignoreTouchingEdges)) {
        this._onFloor.updateFloorPosition();
      } else {
        const canLand = this._requestedDeltaY >= 0;
        let collidingPlatform = this._getCollidingPlatform();
        if (canLand && collidingPlatform !== null) {
          this._setOnFloor(collidingPlatform);
        } else if (this._state === this._onFloor) {
          this._setFalling();
        }
      }
      object.setY(oldY);
    }
    _fall(timeDelta) {
      this._currentFallSpeed += this._gravity * timeDelta;
      if (this._currentFallSpeed > this._maxFallingSpeed) {
        this._currentFallSpeed = this._maxFallingSpeed;
      }
      this._requestedDeltaY += this._currentFallSpeed * timeDelta;
      this._requestedDeltaY = Math.min(this._requestedDeltaY, this._maxFallingSpeed * timeDelta);
    }
    _canGrab(platform) {
      const y1 = this.owner.getY() + this._yGrabOffset - this._lastDeltaY;
      const y2 = this.owner.getY() + this._yGrabOffset;
      const platformY = platform.owner.getY() + platform.getYGrabOffset();
      return platform.canBeGrabbed() && (y1 < platformY && platformY < y2 || y2 < platformY && platformY < y1);
    }
    _releaseGrabbedPlatform() {
      if (this._state === this._grabbingPlatform) {
        this._setFalling();
      }
    }
    _isCollidingWith(candidates, exceptThisOne, excludeJumpThrus) {
      excludeJumpThrus = !!excludeJumpThrus;
      for (let i = 0; i < candidates.length; ++i) {
        const platform = candidates[i];
        if (platform.owner.id === exceptThisOne) {
          continue;
        }
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (excludeJumpThrus && platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.JUMPTHRU) {
          continue;
        }
        if (gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return true;
        }
      }
      return false;
    }
    _separateFromPlatforms(candidates, excludeJumpThrus) {
      excludeJumpThrus = !!excludeJumpThrus;
      const objects = gdjs2.staticArray(PlatformerObjectRuntimeBehavior.prototype._separateFromPlatforms);
      objects.length = 0;
      for (let i = 0; i < candidates.length; ++i) {
        const platform = candidates[i];
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (excludeJumpThrus && platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.JUMPTHRU) {
          continue;
        }
        objects.push(platform.owner);
      }
      return this.owner.separateFromObjects(objects, this._ignoreTouchingEdges);
    }
    _isCollidingWithExcluding(candidates, exceptTheseOnes) {
      for (let i = 0; i < candidates.length; ++i) {
        const platform = candidates[i];
        if (exceptTheseOnes && this._isIn(exceptTheseOnes, platform.owner.id)) {
          continue;
        }
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return true;
        }
      }
      return false;
    }
    _getCollidingPlatform() {
      for (let i = 0; i < this._potentialCollidingObjects.length; ++i) {
        const platform = this._potentialCollidingObjects[i];
        if (platform.getPlatformType() !== gdjs2.PlatformRuntimeBehavior.LADDER && !this._isIn(this._overlappedJumpThru, platform.owner.id) && gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return platform;
        }
      }
      return null;
    }
    _updateOverlappedJumpThru() {
      this._overlappedJumpThru.length = 0;
      for (let i = 0; i < this._potentialCollidingObjects.length; ++i) {
        const platform = this._potentialCollidingObjects[i];
        if (platform.getPlatformType() === gdjs2.PlatformRuntimeBehavior.JUMPTHRU && gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          this._overlappedJumpThru.push(platform);
        }
      }
    }
    _isOverlappingLadder() {
      for (let i = 0; i < this._potentialCollidingObjects.length; ++i) {
        const platform = this._potentialCollidingObjects[i];
        if (platform.getPlatformType() !== gdjs2.PlatformRuntimeBehavior.LADDER) {
          continue;
        }
        if (gdjs2.RuntimeObject.collisionTest(this.owner, platform.owner, this._ignoreTouchingEdges)) {
          return true;
        }
      }
      return false;
    }
    _isIn(platformArray, id) {
      for (let i = 0; i < platformArray.length; ++i) {
        if (platformArray[i].owner.id === id) {
          return true;
        }
      }
      return false;
    }
    _updatePotentialCollidingObjects(maxMovementLength) {
      this._manager.getAllPlatformsAround(this.owner, maxMovementLength, this._potentialCollidingObjects);
      for (let i = 0; i < this._potentialCollidingObjects.length; ) {
        if (this._potentialCollidingObjects[i].owner === this.owner) {
          this._potentialCollidingObjects.splice(i, 1);
        } else {
          i++;
        }
      }
    }
    simulateControl(input) {
      if (input === "Left") {
        this._leftKey = true;
      } else if (input === "Right") {
        this._rightKey = true;
      } else if (input === "Up") {
        this._upKey = true;
      } else if (input === "Down") {
        this._downKey = true;
      } else if (input === "Ladder") {
        this._ladderKey = true;
      } else if (input === "Jump") {
        this._jumpKey = true;
      } else if (input === "Release") {
        this._releaseKey = true;
      }
    }
    getGravity() {
      return this._gravity;
    }
    getMaxFallingSpeed() {
      return this._maxFallingSpeed;
    }
    getLadderClimbingSpeed() {
      return this._ladderClimbingSpeed;
    }
    getAcceleration() {
      return this._acceleration;
    }
    getDeceleration() {
      return this._deceleration;
    }
    getMaxSpeed() {
      return this._maxSpeed;
    }
    getJumpSpeed() {
      return this._jumpSpeed;
    }
    getJumpSustainTime() {
      return this._jumpSustainTime;
    }
    getCurrentFallSpeed() {
      return this._currentFallSpeed;
    }
    getCurrentSpeed() {
      return this._currentSpeed;
    }
    getCurrentJumpSpeed() {
      return this._jumping.getCurrentJumpSpeed();
    }
    canGrabPlatforms() {
      return this._canGrabPlatforms;
    }
    canJump() {
      return this._canJump;
    }
    setGravity(gravity) {
      this._gravity = gravity;
    }
    setMaxFallingSpeed(maxFallingSpeed) {
      this._maxFallingSpeed = maxFallingSpeed;
    }
    setLadderClimbingSpeed(ladderClimbingSpeed) {
      this._ladderClimbingSpeed = ladderClimbingSpeed;
    }
    setAcceleration(acceleration) {
      this._acceleration = acceleration;
    }
    setDeceleration(deceleration) {
      this._deceleration = deceleration;
    }
    setMaxSpeed(maxSpeed) {
      this._maxSpeed = maxSpeed;
    }
    setJumpSpeed(jumpSpeed) {
      this._jumpSpeed = jumpSpeed;
    }
    setJumpSustainTime(jumpSustainTime) {
      this._jumpSustainTime = jumpSustainTime;
    }
    setSlopeMaxAngle(slopeMaxAngle) {
      if (slopeMaxAngle < 0 || slopeMaxAngle >= 90) {
        return;
      }
      this._slopeMaxAngle = slopeMaxAngle;
      if (slopeMaxAngle === 45) {
        this._slopeClimbingFactor = 1;
      } else {
        this._slopeClimbingFactor = Math.tan(slopeMaxAngle * 3.1415926 / 180);
      }
    }
    setCanJump() {
      this._canJump = true;
    }
    setCanGrabPlatforms(enable) {
      this._canGrabPlatforms = enable;
      if (!this._canGrabPlatforms) {
        this._releaseGrabbedPlatform();
      }
    }
    ignoreDefaultControls(ignore) {
      this._ignoreDefaultControls = ignore;
    }
    simulateLeftKey() {
      this._leftKey = true;
    }
    simulateRightKey() {
      this._rightKey = true;
    }
    simulateLadderKey() {
      this._ladderKey = true;
    }
    simulateUpKey() {
      this._upKey = true;
    }
    simulateDownKey() {
      this._downKey = true;
    }
    simulateJumpKey() {
      this._jumpKey = true;
    }
    simulateReleaseKey() {
      this._releaseKey = true;
    }
    isOnFloor() {
      return this._state === this._onFloor;
    }
    isOnLadder() {
      return this._state === this._onLadder;
    }
    isJumping() {
      return this._state === this._jumping;
    }
    isGrabbingPlatform() {
      return this._state === this._grabbingPlatform;
    }
    isFallingWithoutJumping() {
      return this._state === this._falling;
    }
    isFalling() {
      return this._state === this._falling || this._state === this._jumping && this._currentFallSpeed > this._jumping.getCurrentJumpSpeed();
    }
    isMoving() {
      return this._hasReallyMoved && this._currentSpeed !== 0 || this._jumping.getCurrentJumpSpeed() !== 0 || this._currentFallSpeed !== 0;
    }
  }
  gdjs2.PlatformerObjectRuntimeBehavior = PlatformerObjectRuntimeBehavior;
  class OnFloor {
    constructor(behavior) {
      this._floorPlatform = null;
      this._floorLastX = 0;
      this._floorLastY = 0;
      this._oldHeight = 0;
      this._behavior = behavior;
    }
    getFloorPlatform() {
      return this._floorPlatform;
    }
    enter(floorPlatform) {
      this._floorPlatform = floorPlatform;
      this.updateFloorPosition();
      this._behavior._canJump = true;
      this._behavior._currentFallSpeed = 0;
    }
    leave() {
      this._floorPlatform = null;
    }
    updateFloorPosition() {
      this._floorLastX = this._floorPlatform.owner.getX();
      this._floorLastY = this._floorPlatform.owner.getY();
    }
    beforeUpdatingObstacles(timeDelta) {
      const object = this._behavior.owner;
      if (this._oldHeight !== object.getHeight()) {
        object.setY(this._floorLastY - object.getHeight() + (object.getY() - object.getDrawableY()) - 1);
      }
    }
    checkTransitionBeforeX() {
      const behavior = this._behavior;
      if (!behavior._isIn(behavior._potentialCollidingObjects, this._floorPlatform.owner.id)) {
        behavior._setFalling();
      }
    }
    beforeMovingX() {
      const behavior = this._behavior;
      behavior._requestedDeltaX += this._floorPlatform.owner.getX() - this._floorLastX;
      behavior._requestedDeltaY += this._floorPlatform.owner.getY() - this._floorLastY;
    }
    checkTransitionBeforeY(timeDelta) {
      const behavior = this._behavior;
      behavior._checkTransitionOnLadder();
      behavior._checkTransitionJumping();
    }
    beforeMovingY(timeDelta, oldX) {
      const behavior = this._behavior;
      const object = behavior.owner;
      if (gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, behavior._ignoreTouchingEdges)) {
        let oldY = object.getY();
        let step = 0;
        let stillInFloor = false;
        do {
          if (step >= Math.floor(Math.abs(behavior._requestedDeltaX * behavior._slopeClimbingFactor))) {
            object.setY(object.getY() - (Math.abs(behavior._requestedDeltaX * behavior._slopeClimbingFactor) - step));
            if (gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, behavior._ignoreTouchingEdges)) {
              stillInFloor = true;
            }
            break;
          }
          object.setY(object.getY() - 1);
          step++;
        } while (gdjs2.RuntimeObject.collisionTest(object, this._floorPlatform.owner, behavior._ignoreTouchingEdges));
        if (stillInFloor) {
          object.setY(oldY);
          object.setX(oldX);
        }
      } else {
        let oldY = object.getY();
        const tentativeStartY = object.getY() + 1;
        object.setY(behavior._roundCoordinates ? Math.round(tentativeStartY) : tentativeStartY);
        let step = 0;
        let noMoreOnFloor = false;
        while (!behavior._isCollidingWith(behavior._potentialCollidingObjects)) {
          if (step > Math.abs(behavior._requestedDeltaX * behavior._slopeClimbingFactor)) {
            noMoreOnFloor = true;
            break;
          }
          object.setY(object.getY() + 1);
          step++;
        }
        if (noMoreOnFloor) {
          object.setY(oldY);
        } else {
          object.setY(object.getY() - 1);
        }
      }
    }
    toString() {
      return "OnFloor";
    }
  }
  class Falling {
    constructor(behavior) {
      this._behavior = behavior;
    }
    enter() {
      this._behavior._canJump = false;
    }
    leave() {
    }
    beforeUpdatingObstacles(timeDelta) {
    }
    checkTransitionBeforeX() {
    }
    beforeMovingX() {
    }
    checkTransitionBeforeY(timeDelta) {
      const behavior = this._behavior;
      behavior._checkTransitionOnLadder();
      behavior._checkTransitionJumping();
      if (behavior._canGrabPlatforms && behavior._requestedDeltaX !== 0) {
        behavior._checkGrabPlatform();
      }
    }
    beforeMovingY(timeDelta, oldX) {
      this._behavior._fall(timeDelta);
    }
    toString() {
      return "Falling";
    }
  }
  class Jumping {
    constructor(behavior) {
      this._currentJumpSpeed = 0;
      this._timeSinceCurrentJumpStart = 0;
      this._jumpKeyHeldSinceJumpStart = false;
      this._jumpingFirstDelta = false;
      this._behavior = behavior;
    }
    getCurrentJumpSpeed() {
      return this._currentJumpSpeed;
    }
    enter(from) {
      const behavior = this._behavior;
      this._timeSinceCurrentJumpStart = 0;
      this._jumpKeyHeldSinceJumpStart = true;
      if (from !== behavior._jumping && from !== behavior._falling) {
        this._jumpingFirstDelta = true;
      }
      behavior._canJump = false;
      this._currentJumpSpeed = behavior._jumpSpeed;
      behavior._currentFallSpeed = 0;
    }
    leave() {
      this._currentJumpSpeed = 0;
    }
    beforeUpdatingObstacles(timeDelta) {
    }
    checkTransitionBeforeX() {
    }
    beforeMovingX() {
    }
    checkTransitionBeforeY(timeDelta) {
      const behavior = this._behavior;
      behavior._checkTransitionOnLadder();
      behavior._checkTransitionJumping();
      if (behavior._canGrabPlatforms && behavior._requestedDeltaX !== 0 && behavior._lastDeltaY >= 0) {
        behavior._checkGrabPlatform();
      }
    }
    beforeMovingY(timeDelta, oldX) {
      const behavior = this._behavior;
      if (!this._jumpingFirstDelta) {
        behavior._fall(timeDelta);
      }
      this._jumpingFirstDelta = false;
      if (!behavior._jumpKey) {
        this._jumpKeyHeldSinceJumpStart = false;
      }
      this._timeSinceCurrentJumpStart += timeDelta;
      behavior._requestedDeltaY -= this._currentJumpSpeed * timeDelta;
      const sustainJumpSpeed = this._jumpKeyHeldSinceJumpStart && this._timeSinceCurrentJumpStart < behavior._jumpSustainTime;
      if (!sustainJumpSpeed) {
        this._currentJumpSpeed -= behavior._gravity * timeDelta;
      }
      if (this._currentJumpSpeed < 0) {
        behavior._setFalling();
      }
    }
    toString() {
      return "Jumping";
    }
  }
  class GrabbingPlatform {
    constructor(behavior) {
      this._grabbedPlatform = null;
      this._behavior = behavior;
    }
    enter(grabbedPlatform) {
      this._grabbedPlatform = grabbedPlatform;
      this._behavior._canJump = true;
      this._behavior._currentFallSpeed = 0;
    }
    leave() {
      this._grabbedPlatform = null;
    }
    beforeUpdatingObstacles(timeDelta) {
    }
    checkTransitionBeforeX() {
      const behavior = this._behavior;
      if (!behavior._isIn(behavior._potentialCollidingObjects, this._grabbedPlatform.owner.id)) {
        behavior._releaseGrabbedPlatform();
      }
    }
    beforeMovingX() {
      const behavior = this._behavior;
      behavior._requestedDeltaX = this._grabbedPlatform.owner.getX() - this._grabbedPlatformLastX;
      behavior._requestedDeltaY = this._grabbedPlatform.owner.getY() - this._grabbedPlatformLastY;
    }
    checkTransitionBeforeY(timeDelta) {
      const behavior = this._behavior;
      behavior._checkTransitionOnLadder();
      if (behavior._releaseKey) {
        behavior._releaseGrabbedPlatform();
      }
      behavior._checkTransitionJumping();
    }
    beforeMovingY(timeDelta, oldX) {
      const behavior = this._behavior;
      this._grabbedPlatformLastX = this._grabbedPlatform.owner.getX();
      this._grabbedPlatformLastY = this._grabbedPlatform.owner.getY();
    }
    toString() {
      return "GrabbingPlatform";
    }
  }
  class OnLadder {
    constructor(behavior) {
      this._behavior = behavior;
    }
    enter() {
      this._behavior._canJump = true;
      this._behavior._currentFallSpeed = 0;
    }
    leave() {
    }
    beforeUpdatingObstacles(timeDelta) {
    }
    checkTransitionBeforeX() {
    }
    beforeMovingX() {
    }
    checkTransitionBeforeY(timeDelta) {
      const behavior = this._behavior;
      if (!behavior._isOverlappingLadder()) {
        behavior._setFalling();
      }
      behavior._checkTransitionJumping();
    }
    beforeMovingY(timeDelta, oldX) {
      const behavior = this._behavior;
      if (behavior._upKey) {
        behavior._requestedDeltaY -= behavior._ladderClimbingSpeed * timeDelta;
      }
      if (behavior._downKey) {
        behavior._requestedDeltaY += behavior._ladderClimbingSpeed * timeDelta;
      }
    }
    toString() {
      return "OnLadder";
    }
  }
  gdjs2.registerBehavior("PlatformBehavior::PlatformerObjectBehavior", gdjs2.PlatformerObjectRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=platformerobjectruntimebehavior.js.map
