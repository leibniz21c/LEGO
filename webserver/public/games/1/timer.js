var gdjs;
(function(gdjs2) {
  class Timer {
    constructor(name) {
      this._time = 0;
      this._paused = false;
      this._name = name;
    }
    getName() {
      return this._name;
    }
    getTime() {
      return this._time;
    }
    updateTime(time) {
      if (!this._paused) {
        this._time += time;
      }
    }
    setTime(time) {
      this._time = time;
    }
    reset() {
      this.setTime(0);
    }
    setPaused(enable) {
      this._paused = enable;
    }
    isPaused() {
      return this._paused;
    }
  }
  gdjs2.Timer = Timer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=timer.js.map
