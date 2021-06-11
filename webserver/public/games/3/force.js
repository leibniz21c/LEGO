var gdjs;
(function(gdjs2) {
  class Force {
    constructor(x, y, multiplier) {
      this._dirty = false;
      this._x = x || 0;
      this._y = y || 0;
      this._angle = Math.atan2(y, x) * 180 / Math.PI;
      this._length = Math.sqrt(x * x + y * y);
      this._multiplier = multiplier;
    }
    getX() {
      return this._x;
    }
    getY() {
      return this._y;
    }
    setX(x) {
      this._x = x;
      this._dirty = true;
    }
    setY(y) {
      this._y = y;
      this._dirty = true;
    }
    setAngle(angle) {
      if (this._dirty) {
        this._length = Math.sqrt(this._x * this._x + this._y * this._y);
        this._dirty = false;
      }
      this._angle = angle;
      const angleInRadians = angle / 180 * Math.PI;
      this._x = Math.cos(angleInRadians) * this._length;
      this._y = Math.sin(angleInRadians) * this._length;
    }
    setLength(len) {
      if (this._dirty) {
        this._angle = Math.atan2(this._y, this._x) * 180 / Math.PI;
        this._dirty = false;
      }
      this._length = len;
      const angleInRadians = this._angle / 180 * Math.PI;
      this._x = Math.cos(angleInRadians) * this._length;
      this._y = Math.sin(angleInRadians) * this._length;
    }
    getAngle() {
      if (this._dirty) {
        this._angle = Math.atan2(this._y, this._x) * 180 / Math.PI;
        this._length = Math.sqrt(this._x * this._x + this._y * this._y);
        this._dirty = false;
      }
      return this._angle;
    }
    getLength() {
      if (this._dirty) {
        this._angle = Math.atan2(this._y, this._x) * 180 / Math.PI;
        this._length = Math.sqrt(this._x * this._x + this._y * this._y);
        this._dirty = false;
      }
      return this._length;
    }
    getMultiplier() {
      return this._multiplier;
    }
    setMultiplier(multiplier) {
      this._multiplier = multiplier;
    }
  }
  gdjs2.Force = Force;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=force.js.map
