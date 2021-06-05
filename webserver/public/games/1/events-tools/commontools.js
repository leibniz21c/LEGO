var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let common;
    (function(common2) {
      common2.getVariableNumber = function(variable) {
        return variable.getAsNumber();
      };
      common2.getVariableString = function(variable) {
        return variable.getAsString();
      };
      common2.getVariableBoolean = function(variable, compareWith) {
        return variable.getAsBoolean() === compareWith;
      };
      common2.setVariableBoolean = function(variable, newValue) {
        variable.setBoolean(newValue);
      };
      common2.toggleVariableBoolean = function(variable) {
        variable.setBoolean(!variable.getAsBoolean());
      };
      common2.sceneVariableExists = function(runtimeScene, variableName) {
        return runtimeScene.getVariables().has(variableName);
      };
      common2.globalVariableExists = function(runtimeScene, variableName) {
        return runtimeScene.getGame().getVariables().has(variableName);
      };
      common2.variableChildExists = function(variable, childName) {
        return variable.hasChild(childName);
      };
      common2.variableRemoveChild = function(variable, childName) {
        variable.removeChild(childName);
      };
      common2.variableClearChildren = function(variable) {
        variable.clearChildren();
      };
      common2.variablePushCopy = function(array, variable) {
        array.pushVariableCopy(variable);
      };
      common2.valuePush = function(array, value) {
        array.pushValue(value);
      };
      common2.variableRemoveAt = function(array, index) {
        array.removeAtIndex(index);
      };
      common2.getVariableChildCount = function(variable) {
        return variable.getChildrenCount();
      };
      common2.toNumber = function(str) {
        return parseFloat(str);
      };
      common2.toString = function(num) {
        return "" + num;
      };
      common2.logicalNegation = function(bool) {
        return !bool;
      };
      common2.normalize = function(val, min, max) {
        return min === max ? max : (val - min) / (max - min);
      };
      common2.clamp = function(x, min, max) {
        return Math.min(Math.max(x, min), max);
      };
      common2.acosh = function(arg) {
        return Math.log(arg + Math.sqrt(arg * arg - 1));
      };
      common2.asinh = function(arg) {
        return Math.log(arg + Math.sqrt(arg * arg + 1));
      };
      common2.atanh = function(arg) {
        return 0.5 * Math.log((1 + arg) / (1 - arg));
      };
      common2.cosh = function(arg) {
        return (Math.exp(arg) + Math.exp(-arg)) / 2;
      };
      common2.sinh = function(arg) {
        return (Math.exp(arg) - Math.exp(-arg)) / 2;
      };
      common2.tanh = function(arg) {
        return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
      };
      common2.cot = function(arg) {
        return 1 / Math.tan(arg);
      };
      common2.csc = function(arg) {
        return 1 / Math.sin(arg);
      };
      common2.sec = function(arg) {
        return 1 / Math.cos(arg);
      };
      common2.log10 = function(arg) {
        return Math.log(arg) / Math.LN10;
      };
      common2.log2 = function(arg) {
        return Math.log(arg) / Math.LN2;
      };
      common2.sign = function(arg) {
        if (arg === 0) {
          return 0;
        }
        return arg > 0 ? 1 : -1;
      };
      common2.cbrt = function(x) {
        return Math.pow(x, 1 / 3);
      };
      common2.nthroot = function(x, n) {
        return Math.pow(x, 1 / n);
      };
      common2.mod = function(x, y) {
        return x - y * Math.floor(x / y);
      };
      common2.angleDifference = function(angle1, angle2) {
        return gdjs2.evtTools.common.mod(gdjs2.evtTools.common.mod(angle1 - angle2, 360) + 180, 360) - 180;
      };
      common2.angleBetweenPositions = function(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      };
      common2.distanceBetweenPositions = function(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
      };
      common2.lerp = function(a, b, x) {
        return a + (b - a) * x;
      };
      common2.trunc = function(x) {
        return x | 0;
      };
      common2.getXFromAngleAndDistance = function(angle, distance) {
        return distance * Math.cos(gdjs2.toRad(angle));
      };
      common2.getYFromAngleAndDistance = function(angle, distance) {
        return distance * Math.sin(gdjs2.toRad(angle));
      };
    })(common = evtTools2.common || (evtTools2.common = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=commontools.js.map
