var gdjs;
(function(gdjs2) {
  class TimeManager {
    constructor() {
      this._elapsedTime = 0;
      this._timeScale = 1;
      this._timeFromStart = 0;
      this._firstFrame = true;
      this._timers = new Hashtable();
      this._firstUpdateDone = false;
      this.reset();
    }
    reset() {
      this._elapsedTime = 0;
      this._timeScale = 1;
      this._timeFromStart = 0;
      this._firstFrame = true;
      this._timers = new Hashtable();
    }
    update(elapsedTime, minimumFPS) {
      if (this._firstUpdateDone) {
        this._firstFrame = false;
      }
      this._firstUpdateDone = true;
      this._elapsedTime = Math.min(elapsedTime, 1e3 / minimumFPS);
      this._elapsedTime *= this._timeScale;
      for (const name in this._timers.items) {
        if (this._timers.items.hasOwnProperty(name)) {
          this._timers.items[name].updateTime(this._elapsedTime);
        }
      }
      this._timeFromStart += this._elapsedTime;
    }
    setTimeScale(timeScale) {
      if (timeScale >= 0) {
        this._timeScale = timeScale;
      }
    }
    getTimeScale() {
      return this._timeScale;
    }
    getTimeFromStart() {
      return this._timeFromStart;
    }
    isFirstFrame() {
      return this._firstFrame;
    }
    getElapsedTime() {
      return this._elapsedTime;
    }
    addTimer(name) {
      this._timers.put(name, new gdjs2.Timer(name));
    }
    hasTimer(name) {
      return this._timers.containsKey(name);
    }
    getTimer(name) {
      return this._timers.get(name);
    }
    removeTimer(name) {
      if (this._timers.containsKey(name)) {
        this._timers.remove(name);
      }
    }
  }
  gdjs2.TimeManager = TimeManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=timemanager.js.map
