var gdjs;
(function(gdjs2) {
  class Variable {
    constructor(varData) {
      this._type = "number";
      this._value = 0;
      this._str = "0";
      this._bool = false;
      this._children = {};
      this._childrenArray = [];
      this._undefinedInContainer = false;
      this.concatenate = gdjs2.Variable.prototype.concatenateString;
      this.reinitialize(varData);
    }
    reinitialize(varData) {
      this._type = "number";
      this._value = 0;
      this._str = "0";
      this._bool = false;
      this._children = {};
      this._childrenArray = [];
      this._undefinedInContainer = false;
      if (varData !== void 0) {
        this._type = varData.type || "number";
        if (this._type === "number") {
          this._value = parseFloat(varData.value || "0");
          if (this._value !== this._value)
            this._value = 0;
        } else if (this._type === "string") {
          this._str = "" + varData.value || "0";
        } else if (this._type === "boolean") {
          this._bool = !!varData.value;
        } else if (this._type === "structure") {
          if (varData.children !== void 0) {
            for (var i = 0, len = varData.children.length; i < len; ++i) {
              var childData = varData.children[i];
              if (childData.name === void 0)
                continue;
              this._children[childData.name] = new gdjs2.Variable(childData);
            }
          }
        } else if (this._type === "array" && varData.children) {
          for (const childData2 of varData.children)
            this._childrenArray.push(new gdjs2.Variable(childData2));
        }
      }
    }
    static isPrimitive(type) {
      return type === "string" || type === "number" || type === "boolean";
    }
    static copy(source, target, merge) {
      if (!merge)
        target.clearChildren();
      target.castTo(source.getType());
      if (source.isPrimitive()) {
        target.setValue(source.getValue());
      } else if (source.getType() === "structure") {
        const children = source.getAllChildren();
        for (const p in children) {
          if (children.hasOwnProperty(p))
            target.addChild(p, children[p].clone());
        }
      } else if (source.getType() === "array") {
        for (const p of source.getAllChildrenArray())
          target.pushVariableCopy(p);
      }
      return target;
    }
    isPrimitive() {
      return gdjs2.Variable.isPrimitive(this._type);
    }
    clone() {
      return gdjs2.Variable.copy(this, new gdjs2.Variable());
    }
    setUndefinedInContainer() {
      this._undefinedInContainer = true;
    }
    isUndefinedInContainer() {
      return this._undefinedInContainer;
    }
    castTo(newType) {
      if (newType === "string")
        this.setString(this.getAsString());
      else if (newType === "number")
        this.setNumber(this.getAsNumber());
      else if (newType === "boolean")
        this.setBoolean(this.getAsBoolean());
      else if (newType === "structure") {
        if (this._type === "structure")
          return;
        this._children = this.getAllChildren();
        this._type = "structure";
      } else if (newType === "array") {
        if (this._type === "array")
          return;
        this._childrenArray = this.getAllChildrenArray();
        this._type = "array";
      }
    }
    getChild(childName) {
      if (this.isPrimitive())
        this.castTo("structure");
      if (this._type === "array")
        return this.getChildAt(parseInt(childName, 10) || 0);
      if (this._children[childName] === void 0 || this._children[childName] === null)
        this._children[childName] = new gdjs2.Variable();
      return this._children[childName];
    }
    addChild(childName, childVariable) {
      this.castTo("structure");
      this._children[childName] = childVariable;
      return this;
    }
    hasChild(childName) {
      return this._type === "structure" && this._children.hasOwnProperty(childName);
    }
    removeChild(childName) {
      if (this._type !== "structure")
        return;
      delete this._children[childName];
    }
    clearChildren() {
      this._children = {};
      this._childrenArray = [];
    }
    replaceChildren(newChildren) {
      this._type = "structure";
      this._children = newChildren;
    }
    replaceChildrenArray(newChildren) {
      this._type = "array";
      this._childrenArray = newChildren;
    }
    getAsNumber() {
      if (this._type !== "number") {
        let number = 0;
        if (this._type === "string")
          number = parseFloat(this._str);
        else if (this._type === "boolean")
          number = this._bool ? 1 : 0;
        return number === number ? number : 0;
      }
      return this._value;
    }
    setNumber(newValue) {
      this._type = "number";
      newValue = parseFloat(newValue);
      this._value = newValue === newValue ? newValue : 0;
    }
    getAsString() {
      if (this._type !== "string") {
        if (this._type === "number")
          return this._value.toString();
        else if (this._type === "boolean")
          return this._bool ? "true" : "false";
        else if (this._type === "structure")
          return "[Structure]";
        else if (this._type === "array")
          return "[Array]";
        else
          return "";
      }
      return this._str;
    }
    setString(newValue) {
      this._type = "string";
      this._str = "" + newValue;
    }
    getAsBoolean() {
      if (this._type !== "boolean") {
        if (this._type === "number")
          return this._value !== 0;
        else if (this._type === "string")
          return this._str !== "0" && this._str !== "" && this._str !== "false";
        else
          return true;
      }
      return this._bool;
    }
    setBoolean(newValue) {
      this._type = "boolean";
      this._bool = !!newValue;
    }
    setValue(newValue) {
      if (this._type === "string")
        this.setString(newValue);
      else if (this._type === "number")
        this.setNumber(newValue);
      else if (this._type === "boolean")
        this.setBoolean(newValue);
    }
    getValue() {
      return this._type === "number" ? this.getAsNumber() : this._type === "boolean" ? this.getAsBoolean() : this.getAsString();
    }
    isStructure() {
      return this._type === "structure";
    }
    isNumber() {
      return this._type === "number";
    }
    getType() {
      return this._type;
    }
    getAllChildren() {
      return this._type === "structure" ? this._children : this._type === "array" ? Object.assign({}, this._childrenArray) : {};
    }
    getAllChildrenArray() {
      return this._type === "structure" ? Object.values(this._children) : this._type === "array" ? this._childrenArray : [];
    }
    getChildrenCount() {
      if (this.isPrimitive())
        return 0;
      return this.getAllChildrenArray().length;
    }
    add(val) {
      this.setNumber(this.getAsNumber() + val);
    }
    sub(val) {
      this.setNumber(this.getAsNumber() - val);
    }
    mul(val) {
      this.setNumber(this.getAsNumber() * val);
    }
    div(val) {
      this.setNumber(this.getAsNumber() / val);
    }
    concatenateString(str) {
      this.setString(this.getAsString() + str);
    }
    getChildAt(index) {
      this.castTo("array");
      if (this._childrenArray[index] === void 0 || this._childrenArray[index] === null)
        this._childrenArray[index] = new gdjs2.Variable();
      return this._childrenArray[index];
    }
    removeAtIndex(index) {
      if (this._type === "array")
        this._childrenArray.splice(index, 1);
    }
    pushVariableCopy(variable) {
      this.castTo("array");
      this._childrenArray.push(variable.clone());
    }
    pushValue(value) {
      this.castTo("array");
      this._childrenArray.push(new gdjs2.Variable({
        type: typeof value,
        value
      }));
    }
  }
  gdjs2.Variable = Variable;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=variable.js.map
