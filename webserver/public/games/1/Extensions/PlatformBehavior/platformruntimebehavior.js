var gdjs;
(function(gdjs2) {
  class PlatformObjectsManager {
    constructor(runtimeScene) {
      this._platformRBush = new rbush(9, [
        ".owner.getAABB().min[0]",
        ".owner.getAABB().min[1]",
        ".owner.getAABB().max[0]",
        ".owner.getAABB().max[1]"
      ]);
    }
    static getManager(runtimeScene) {
      if (!runtimeScene.platformsObjectsManager) {
        runtimeScene.platformsObjectsManager = new gdjs2.PlatformObjectsManager(runtimeScene);
      }
      return runtimeScene.platformsObjectsManager;
    }
    addPlatform(platformBehavior) {
      this._platformRBush.insert(platformBehavior);
    }
    removePlatform(platformBehavior) {
      this._platformRBush.remove(platformBehavior);
    }
    getAllPlatformsAround(object, maxMovementLength, result) {
      const ow = object.getWidth();
      const oh = object.getHeight();
      const x = object.getDrawableX() + object.getCenterX();
      const y = object.getDrawableY() + object.getCenterY();
      const searchArea = gdjs2.staticObject(PlatformObjectsManager.prototype.getAllPlatformsAround);
      searchArea.minX = x - ow / 2 - maxMovementLength;
      searchArea.minY = y - oh / 2 - maxMovementLength;
      searchArea.maxX = x + ow / 2 + maxMovementLength;
      searchArea.maxY = y + oh / 2 + maxMovementLength;
      const nearbyPlatforms = this._platformRBush.search(searchArea);
      result.length = 0;
      result.push.apply(result, nearbyPlatforms);
    }
  }
  gdjs2.PlatformObjectsManager = PlatformObjectsManager;
  const PlatformRuntimeBehavior2 = class extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._oldX = 0;
      this._oldY = 0;
      this._oldWidth = 0;
      this._oldHeight = 0;
      this._registeredInManager = false;
      this._platformType = behaviorData.platformType;
      if (behaviorData.platformType === "Ladder") {
        this._platformType = PlatformRuntimeBehavior2.LADDER;
      } else if (behaviorData.platformType === "Jumpthru") {
        this._platformType = PlatformRuntimeBehavior2.JUMPTHRU;
      } else {
        this._platformType = PlatformRuntimeBehavior2.NORMALPLAFTORM;
      }
      this._canBeGrabbed = behaviorData.canBeGrabbed || false;
      this._yGrabOffset = behaviorData.yGrabOffset || 0;
      this._manager = PlatformObjectsManager.getManager(runtimeScene);
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.platformType !== newBehaviorData.platformType) {
        this.changePlatformType(newBehaviorData.platformType);
      }
      if (oldBehaviorData.canBeGrabbed !== newBehaviorData.canBeGrabbed) {
        this._canBeGrabbed = newBehaviorData.canBeGrabbed;
      }
      if (oldBehaviorData.yGrabOffset !== newBehaviorData.yGrabOffset) {
        this._yGrabOffset = newBehaviorData.yGrabOffset;
      }
      return true;
    }
    onDestroy() {
      if (this._manager && this._registeredInManager) {
        this._manager.removePlatform(this);
      }
    }
    doStepPreEvents(runtimeScene) {
      if (!this.activated() && this._registeredInManager) {
        this._manager.removePlatform(this);
        this._registeredInManager = false;
      } else {
        if (this.activated() && !this._registeredInManager) {
          this._manager.addPlatform(this);
          this._registeredInManager = true;
        }
      }
      if (this._oldX !== this.owner.getX() || this._oldY !== this.owner.getY() || this._oldWidth !== this.owner.getWidth() || this._oldHeight !== this.owner.getHeight()) {
        if (this._registeredInManager) {
          this._manager.removePlatform(this);
          this._manager.addPlatform(this);
        }
        this._oldX = this.owner.getX();
        this._oldY = this.owner.getY();
        this._oldWidth = this.owner.getWidth();
        this._oldHeight = this.owner.getHeight();
      }
    }
    doStepPostEvents(runtimeScene) {
    }
    onActivate() {
      if (this._registeredInManager) {
        return;
      }
      this._manager.addPlatform(this);
      this._registeredInManager = true;
    }
    onDeActivate() {
      if (!this._registeredInManager) {
        return;
      }
      this._manager.removePlatform(this);
      this._registeredInManager = false;
    }
    changePlatformType(platformType) {
      if (platformType === "Ladder") {
        this._platformType = PlatformRuntimeBehavior2.LADDER;
      } else if (platformType === "Jumpthru") {
        this._platformType = PlatformRuntimeBehavior2.JUMPTHRU;
      } else {
        this._platformType = PlatformRuntimeBehavior2.NORMALPLAFTORM;
      }
    }
    getPlatformType() {
      return this._platformType;
    }
    canBeGrabbed() {
      return this._canBeGrabbed;
    }
    getYGrabOffset() {
      return this._yGrabOffset;
    }
  };
  let PlatformRuntimeBehavior = PlatformRuntimeBehavior2;
  PlatformRuntimeBehavior.NORMALPLAFTORM = 0;
  PlatformRuntimeBehavior.JUMPTHRU = 1;
  PlatformRuntimeBehavior.LADDER = 2;
  gdjs2.PlatformRuntimeBehavior = PlatformRuntimeBehavior;
  gdjs2.registerBehavior("PlatformBehavior::PlatformBehavior", gdjs2.PlatformRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=platformruntimebehavior.js.map
