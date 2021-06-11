var gdjs;
(function(gdjs2) {
  const VariablesContainer2 = class {
    constructor(initialVariablesData) {
      this._variablesArray = [];
      this._variables = new Hashtable();
      if (initialVariablesData !== void 0) {
        this.initFrom(initialVariablesData);
      }
    }
    initFrom(data, keepOldVariables) {
      if (keepOldVariables === void 0) {
        keepOldVariables = false;
      }
      if (!keepOldVariables) {
        VariablesContainer2._deletedVars = VariablesContainer2._deletedVars || [];
        this._variables.keys(VariablesContainer2._deletedVars);
      }
      const that = this;
      let i = 0;
      for (let j = 0; j < data.length; ++j) {
        const varData = data[j];
        if (!varData.name)
          continue;
        const variable = that.get(varData.name);
        variable.reinitialize(varData);
        if (!keepOldVariables) {
          if (i < that._variablesArray.length) {
            that._variablesArray[i] = variable;
          } else {
            that._variablesArray.push(variable);
          }
          ++i;
          const idx = VariablesContainer2._deletedVars.indexOf(varData.name);
          if (idx !== -1) {
            VariablesContainer2._deletedVars[idx] = void 0;
          }
        }
      }
      if (!keepOldVariables) {
        this._variablesArray.length = i;
        for (let i2 = 0, len = VariablesContainer2._deletedVars.length; i2 < len; ++i2) {
          const variableName = VariablesContainer2._deletedVars[i2];
          if (variableName !== void 0) {
            this._variables.get(variableName).setUndefinedInContainer();
          }
        }
      }
    }
    add(name, newVariable) {
      const oldVariable = this._variables.get(name);
      this._variables.put(name, newVariable);
      if (oldVariable) {
        const variableIndex = this._variablesArray.indexOf(oldVariable);
        if (variableIndex !== -1) {
          this._variablesArray[variableIndex] = newVariable;
        }
      }
    }
    remove(name) {
      const variable = this._variables.get(name);
      if (variable) {
        variable.setUndefinedInContainer();
      }
    }
    get(name) {
      let variable = this._variables.get(name);
      if (!variable) {
        variable = new gdjs2.Variable();
        this._variables.put(name, variable);
      } else {
        if (variable.isUndefinedInContainer()) {
          variable.reinitialize();
        }
      }
      return variable;
    }
    getFromIndex(id) {
      if (id >= this._variablesArray.length) {
        let variable = new gdjs2.Variable();
        this._variables.put("", variable);
        return variable;
      } else {
        let variable = this._variablesArray[id];
        if (variable.isUndefinedInContainer()) {
          variable.reinitialize();
        }
        return variable;
      }
    }
    has(name) {
      const variable = this._variables.get(name);
      return variable && !variable.isUndefinedInContainer();
    }
  };
  let VariablesContainer = VariablesContainer2;
  VariablesContainer._deletedVars = [];
  VariablesContainer.badVariablesContainer = {
    _variables: new Hashtable(),
    _variablesArray: [],
    has: function() {
      return false;
    },
    getFromIndex: function() {
      return VariablesContainer2.badVariable;
    },
    get: function() {
      return VariablesContainer2.badVariable;
    },
    remove: function() {
      return;
    },
    add: function() {
      return;
    },
    initFrom: function() {
      return;
    }
  };
  VariablesContainer.badVariable = {
    _type: "number",
    _bool: false,
    _children: {},
    _childrenArray: [],
    _str: "",
    _undefinedInContainer: true,
    _value: 0,
    reinitialize: () => {
    },
    addChild: () => gdjs2.VariablesContainer.badVariable,
    castTo: () => {
    },
    clearChildren: () => {
    },
    clone: () => gdjs2.VariablesContainer.badVariable,
    getChildrenCount: () => 0,
    replaceChildren: () => {
    },
    replaceChildrenArray: () => {
    },
    getType: function() {
      return "number";
    },
    isPrimitive: function() {
      return true;
    },
    setValue: () => {
    },
    getValue: () => 0,
    getChild: () => gdjs2.VariablesContainer.badVariable,
    getChildAt: () => gdjs2.VariablesContainer.badVariable,
    hasChild: function() {
      return false;
    },
    isStructure: function() {
      return false;
    },
    isNumber: function() {
      return true;
    },
    removeChild: function() {
      return;
    },
    setNumber: function() {
      return;
    },
    setString: function() {
      return;
    },
    setBoolean: function() {
      return;
    },
    getAsString: function() {
      return "0";
    },
    getAsNumber: function() {
      return 0;
    },
    getAsBoolean: function() {
      return false;
    },
    getAllChildren: function() {
      return {};
    },
    getAllChildrenArray: function() {
      return [];
    },
    pushVariableCopy: () => {
    },
    pushValue: () => {
    },
    removeAtIndex: function() {
      return;
    },
    add: function() {
      return;
    },
    sub: function() {
      return;
    },
    mul: function() {
      return;
    },
    div: function() {
      return;
    },
    concatenate: function() {
      return;
    },
    concatenateString: function() {
      return;
    },
    setUndefinedInContainer: function() {
      return;
    },
    isUndefinedInContainer: function() {
      return true;
    }
  };
  gdjs2.VariablesContainer = VariablesContainer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=variablescontainer.js.map
