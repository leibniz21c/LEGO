var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let input;
    (function(input2) {
      input2.lastTouchId = 0;
      input2.lastEndedTouchId = 0;
      input2.keysNameToCode = {
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        Num0: 48,
        Num1: 49,
        Num2: 50,
        Num3: 51,
        Num4: 52,
        Num5: 53,
        Num6: 54,
        Num7: 55,
        Num8: 56,
        Num9: 57,
        Numpad0: 96,
        Numpad1: 97,
        Numpad2: 98,
        Numpad3: 99,
        Numpad4: 100,
        Numpad5: 101,
        Numpad6: 102,
        Numpad7: 103,
        Numpad8: 104,
        Numpad9: 105,
        LShift: 1016,
        RShift: 2016,
        LControl: 1017,
        RControl: 2017,
        LAlt: 1018,
        RAlt: 2018,
        LSystem: 1091,
        RSystem: 2091,
        Space: 32,
        Back: 8,
        Tab: 9,
        Delete: 46,
        Insert: 45,
        Escape: 27,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        Return: 13,
        NumpadPageUp: 3033,
        NumpadPageDown: 3034,
        NumpadEnd: 3035,
        NumpadHome: 3036,
        NumpadReturn: 3013,
        Add: 107,
        Subtract: 109,
        Multiply: 106,
        Divide: 111,
        NumpadAdd: 3107,
        NumpadSubtract: 3109,
        NumpadMultiply: 3106,
        NumpadDivide: 3111,
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40,
        NumpadLeft: 3037,
        NumpadUp: 3038,
        NumpadRight: 3039,
        NumpadDown: 3040,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        Pause: 19
      };
      const keysCodeToName = {};
      for (const p in input2.keysNameToCode) {
        if (input2.keysNameToCode.hasOwnProperty(p)) {
          keysCodeToName[input2.keysNameToCode[p]] = p;
        }
      }
      input2.isKeyPressed = function(runtimeScene, key) {
        if (gdjs2.evtTools.input.keysNameToCode.hasOwnProperty(key)) {
          return runtimeScene.getGame().getInputManager().isKeyPressed(gdjs2.evtTools.input.keysNameToCode[key]);
        }
        return false;
      };
      input2.wasKeyReleased = function(runtimeScene, key) {
        if (gdjs2.evtTools.input.keysNameToCode.hasOwnProperty(key)) {
          return runtimeScene.getGame().getInputManager().wasKeyReleased(gdjs2.evtTools.input.keysNameToCode[key]);
        }
        return false;
      };
      input2.lastPressedKey = function(runtimeScene) {
        const keyCode = runtimeScene.getGame().getInputManager().getLastPressedKey();
        if (keysCodeToName.hasOwnProperty(keyCode)) {
          return keysCodeToName[keyCode];
        }
        return "";
      };
      input2.anyKeyPressed = function(runtimeScene) {
        return runtimeScene.getGame().getInputManager().anyKeyPressed();
      };
      input2.anyKeyReleased = function(runtimeScene) {
        return runtimeScene.getGame().getInputManager().anyKeyReleased();
      };
      input2.isMouseButtonPressed = function(runtimeScene, button) {
        if (button === "Left") {
          return runtimeScene.getGame().getInputManager().isMouseButtonPressed(0);
        }
        if (button === "Right") {
          return runtimeScene.getGame().getInputManager().isMouseButtonPressed(1);
        }
        if (button === "Middle") {
          return runtimeScene.getGame().getInputManager().isMouseButtonPressed(2);
        }
        return false;
      };
      input2.isMouseButtonReleased = function(runtimeScene, button) {
        if (button === "Left") {
          return runtimeScene.getGame().getInputManager().isMouseButtonReleased(0);
        }
        if (button === "Right") {
          return runtimeScene.getGame().getInputManager().isMouseButtonReleased(1);
        }
        if (button === "Middle") {
          return runtimeScene.getGame().getInputManager().isMouseButtonReleased(2);
        }
        return false;
      };
      input2.hideCursor = function(runtimeScene) {
        runtimeScene.getRenderer().hideCursor();
      };
      input2.showCursor = function(runtimeScene) {
        runtimeScene.getRenderer().showCursor();
      };
      input2.getMouseWheelDelta = function(runtimeScene) {
        return runtimeScene.getGame().getInputManager().getMouseWheelDelta();
      };
      input2.isScrollingUp = function(runtimeScene) {
        return runtimeScene.getGame().getInputManager().isScrollingUp();
      };
      input2.isScrollingDown = function(runtimeScene) {
        return runtimeScene.getGame().getInputManager().isScrollingDown();
      };
      input2.getMouseX = function(runtimeScene, layer, camera) {
        return runtimeScene.getLayer(layer).convertCoords(runtimeScene.getGame().getInputManager().getMouseX(), runtimeScene.getGame().getInputManager().getMouseY())[0];
      };
      input2.getMouseY = function(runtimeScene, layer, camera) {
        return runtimeScene.getLayer(layer).convertCoords(runtimeScene.getGame().getInputManager().getMouseX(), runtimeScene.getGame().getInputManager().getMouseY())[1];
      };
      input2._cursorIsOnObject = function(obj, runtimeScene) {
        return obj.cursorOnObject(runtimeScene);
      };
      input2.cursorOnObject = function(objectsLists, runtimeScene, accurate, inverted) {
        return gdjs2.evtTools.object.pickObjectsIf(gdjs2.evtTools.input._cursorIsOnObject, objectsLists, inverted, runtimeScene);
      };
      input2.getTouchX = function(runtimeScene, identifier, layer, camera) {
        return runtimeScene.getLayer(layer).convertCoords(runtimeScene.getGame().getInputManager().getTouchX(identifier), runtimeScene.getGame().getInputManager().getTouchY(identifier))[0];
      };
      input2.getTouchY = function(runtimeScene, identifier, layer, camera) {
        return runtimeScene.getLayer(layer).convertCoords(runtimeScene.getGame().getInputManager().getTouchX(identifier), runtimeScene.getGame().getInputManager().getTouchY(identifier))[1];
      };
      input2.getLastTouchId = function() {
        return gdjs2.evtTools.input.lastTouchId || 0;
      };
      input2.getLastEndedTouchId = function() {
        return gdjs2.evtTools.input.lastEndedTouchId || 0;
      };
      input2.popStartedTouch = function(runtimeScene) {
        const startedTouchId = runtimeScene.getGame().getInputManager().popStartedTouch();
        if (startedTouchId !== void 0) {
          gdjs2.evtTools.input.lastTouchId = startedTouchId;
          return true;
        }
        return false;
      };
      input2.popEndedTouch = function(runtimeScene) {
        const endedTouchId = runtimeScene.getGame().getInputManager().popEndedTouch();
        if (endedTouchId !== void 0) {
          gdjs2.evtTools.input.lastEndedTouchId = endedTouchId;
          return true;
        }
        return false;
      };
      input2.touchSimulateMouse = function(runtimeScene, enable) {
        runtimeScene.getGame().getInputManager().touchSimulateMouse(enable);
      };
    })(input = evtTools2.input || (evtTools2.input = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=inputtools.js.map
