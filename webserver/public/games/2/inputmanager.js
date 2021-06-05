var gdjs;
(function(gdjs2) {
  const InputManager2 = class {
    constructor() {
      this._lastPressedKey = 0;
      this._mouseX = 0;
      this._mouseY = 0;
      this._mouseWheelDelta = 0;
      this._startedTouches = [];
      this._endedTouches = [];
      this._touchSimulateMouse = true;
      this._pressedKeys = new Hashtable();
      this._releasedKeys = new Hashtable();
      this._pressedMouseButtons = new Array(5);
      this._releasedMouseButtons = new Array(5);
      this._touches = new Hashtable();
    }
    _getLocationAwareKeyCode(keyCode, location) {
      if (location) {
        if (96 <= keyCode && keyCode <= 105) {
          return keyCode;
        }
        return keyCode + 1e3 * location;
      }
      if (InputManager2._DEFAULT_LEFT_VARIANT_KEYS.indexOf(keyCode) !== -1) {
        return keyCode + 1e3;
      }
      return keyCode;
    }
    onKeyPressed(keyCode, location) {
      const locationAwareKeyCode = this._getLocationAwareKeyCode(keyCode, location);
      this._pressedKeys.put(locationAwareKeyCode, true);
      this._lastPressedKey = locationAwareKeyCode;
    }
    onKeyReleased(keyCode, location) {
      const locationAwareKeyCode = this._getLocationAwareKeyCode(keyCode, location);
      this._pressedKeys.put(locationAwareKeyCode, false);
      this._releasedKeys.put(locationAwareKeyCode, true);
    }
    getLastPressedKey() {
      return this._lastPressedKey;
    }
    isKeyPressed(locationAwareKeyCode) {
      return this._pressedKeys.containsKey(locationAwareKeyCode) && this._pressedKeys.get(locationAwareKeyCode);
    }
    wasKeyReleased(locationAwareKeyCode) {
      return this._releasedKeys.containsKey(locationAwareKeyCode) && this._releasedKeys.get(locationAwareKeyCode);
    }
    anyKeyPressed() {
      for (const keyCode in this._pressedKeys.items) {
        if (this._pressedKeys.items.hasOwnProperty(keyCode)) {
          if (this._pressedKeys.items[keyCode]) {
            return true;
          }
        }
      }
      return false;
    }
    anyKeyReleased() {
      for (const keyCode in this._releasedKeys.items) {
        if (this._releasedKeys.items.hasOwnProperty(keyCode)) {
          if (this._releasedKeys.items[keyCode]) {
            return true;
          }
        }
      }
      return false;
    }
    onMouseMove(x, y) {
      this._mouseX = x;
      this._mouseY = y;
    }
    getMouseX() {
      return this._mouseX;
    }
    getMouseY() {
      return this._mouseY;
    }
    onMouseButtonPressed(buttonCode) {
      this._pressedMouseButtons[buttonCode] = true;
      this._releasedMouseButtons[buttonCode] = false;
    }
    onMouseButtonReleased(buttonCode) {
      this._pressedMouseButtons[buttonCode] = false;
      this._releasedMouseButtons[buttonCode] = true;
    }
    isMouseButtonPressed(buttonCode) {
      return this._pressedMouseButtons[buttonCode] !== void 0 && this._pressedMouseButtons[buttonCode];
    }
    isMouseButtonReleased(buttonCode) {
      return this._releasedMouseButtons[buttonCode] !== void 0 && this._releasedMouseButtons[buttonCode];
    }
    onMouseWheel(wheelDelta) {
      this._mouseWheelDelta = wheelDelta;
    }
    getMouseWheelDelta() {
      return this._mouseWheelDelta;
    }
    getTouchX(identifier) {
      if (!this._touches.containsKey(identifier)) {
        return 0;
      }
      return this._touches.get(identifier).x;
    }
    getTouchY(identifier) {
      if (!this._touches.containsKey(identifier)) {
        return 0;
      }
      return this._touches.get(identifier).y;
    }
    getAllTouchIdentifiers() {
      InputManager2._allTouchIds.length = 0;
      for (const id in this._touches.items) {
        if (this._touches.items.hasOwnProperty(id)) {
          InputManager2._allTouchIds.push(parseInt(id, 10));
        }
      }
      return InputManager2._allTouchIds;
    }
    onTouchStart(identifier, x, y) {
      this._startedTouches.push(identifier);
      this._touches.put(identifier, {x, y, justEnded: false});
      if (this._touchSimulateMouse) {
        this.onMouseMove(x, y);
        this.onMouseButtonPressed(InputManager2.MOUSE_LEFT_BUTTON);
      }
    }
    onTouchMove(identifier, x, y) {
      const touch = this._touches.get(identifier);
      if (!touch) {
        return;
      }
      touch.x = x;
      touch.y = y;
      if (this._touchSimulateMouse) {
        this.onMouseMove(x, y);
      }
    }
    onTouchEnd(identifier) {
      this._endedTouches.push(identifier);
      if (this._touches.containsKey(identifier)) {
        this._touches.get(identifier).justEnded = true;
      }
      if (this._touchSimulateMouse) {
        this.onMouseButtonReleased(InputManager2.MOUSE_LEFT_BUTTON);
      }
    }
    getStartedTouchIdentifiers() {
      return this._startedTouches;
    }
    popStartedTouch() {
      return this._startedTouches.shift();
    }
    popEndedTouch() {
      return this._endedTouches.shift();
    }
    touchSimulateMouse(enable) {
      if (enable === void 0) {
        enable = true;
      }
      this._touchSimulateMouse = enable;
    }
    onFrameEnded() {
      for (const id in this._touches.items) {
        if (this._touches.items.hasOwnProperty(id)) {
          const touch = this._touches.items[id];
          if (touch.justEnded) {
            this._touches.remove(id);
          }
        }
      }
      this._startedTouches.length = 0;
      this._endedTouches.length = 0;
      this._releasedKeys.clear();
      this._releasedMouseButtons.length = 0;
      this._mouseWheelDelta = 0;
    }
    isScrollingUp() {
      return this.getMouseWheelDelta() > 0;
    }
    isScrollingDown() {
      return this.getMouseWheelDelta() < 0;
    }
  };
  let InputManager = InputManager2;
  InputManager.MOUSE_LEFT_BUTTON = 0;
  InputManager.MOUSE_RIGHT_BUTTON = 1;
  InputManager.MOUSE_MIDDLE_BUTTON = 2;
  InputManager._DEFAULT_LEFT_VARIANT_KEYS = [16, 17, 18, 91];
  InputManager._allTouchIds = [];
  gdjs2.InputManager = InputManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=inputmanager.js.map
