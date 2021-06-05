var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let network;
    (function(network2) {
      network2.sendAsyncRequest = function(url, body, method, contentType, responseVar, errorVar) {
        const onError = (err) => {
          errorVar.setString("" + err);
        };
        try {
          const request = new XMLHttpRequest();
          request.onerror = onError;
          request.ontimeout = onError;
          request.onabort = onError;
          request.onreadystatechange = () => {
            if (request.readyState === 4) {
              if (request.status >= 400) {
                onError("" + request.status);
              }
              responseVar.setString(request.responseText);
            }
          };
          request.open(method, url);
          request.setRequestHeader("Content-Type", contentType === "" ? "application/x-www-form-urlencoded" : contentType);
          request.send(body);
        } catch (err) {
          onError(err);
        }
      };
      network2.sendDeprecatedSynchronousRequest = function(host, uri, body, method, contentType, responseVar) {
        try {
          let xhr;
          if (typeof XMLHttpRequest !== "undefined") {
            xhr = new XMLHttpRequest();
          } else {
            const versions = [
              "MSXML2.XmlHttp.5.0",
              "MSXML2.XmlHttp.4.0",
              "MSXML2.XmlHttp.3.0",
              "MSXML2.XmlHttp.2.0",
              "Microsoft.XmlHttp"
            ];
            for (let i = 0, len = versions.length; i < len; i++) {
              try {
                xhr = new ActiveXObject(versions[i]);
                break;
              } catch (e) {
              }
            }
          }
          if (xhr === void 0) {
            return;
          }
          xhr.open(method, host + uri, false);
          xhr.setRequestHeader("Content-Type", contentType === "" ? "application/x-www-form-urlencoded" : contentType);
          xhr.send(body);
          responseVar.setString(xhr.responseText);
        } catch (e) {
        }
      };
      network2.enableMetrics = function(runtimeScene, enable) {
        runtimeScene.getGame().enableMetrics(enable);
      };
      network2.variableStructureToJSON = function(variable) {
        if (variable.isPrimitive()) {
          return JSON.stringify(variable.getValue());
        } else if (variable.getType() === "array") {
          let str = "[";
          let firstChild = true;
          const children = variable.getAllChildren();
          for (const p in children) {
            if (children.hasOwnProperty(p)) {
              if (!firstChild) {
                str += ",";
              }
              str += network2.variableStructureToJSON(children[p]);
              firstChild = false;
            }
          }
          str += "]";
          return str;
        } else if (variable.getType() === "structure") {
          let str = "{";
          let firstChild = true;
          const children = variable.getAllChildren();
          for (const p in children) {
            if (children.hasOwnProperty(p)) {
              if (!firstChild) {
                str += ",";
              }
              str += JSON.stringify(p) + ": " + network2.variableStructureToJSON(children[p]);
              firstChild = false;
            }
          }
          str += "}";
          return str;
        }
        console.error("JSON conversion error: Variable type not recognized");
        return "";
      };
      network2.objectVariableStructureToJSON = function(object, variable) {
        return gdjs2.evtTools.network.variableStructureToJSON(variable);
      };
      network2._objectToVariable = function(obj, variable) {
        if (obj === null) {
          variable.setString("null");
        } else if (typeof obj === "number") {
          if (Number.isNaN(obj)) {
            console.warn("Variables cannot be set to NaN, setting it to 0.");
            variable.setNumber(0);
          } else {
            variable.setNumber(obj);
          }
        } else if (typeof obj === "string") {
          variable.setString(obj);
        } else if (typeof obj === "undefined") {
        } else if (typeof obj === "boolean") {
          variable.setBoolean(obj);
        } else if (Array.isArray(obj)) {
          variable.castTo("array");
          variable.clearChildren();
          for (const i in obj) {
            network2._objectToVariable(obj[i], variable.getChild(i));
          }
        } else if (typeof obj === "object") {
          variable.castTo("structure");
          variable.clearChildren();
          for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
              network2._objectToVariable(obj[p], variable.getChild(p));
            }
          }
        } else if (typeof obj === "symbol") {
          variable.setString(obj.toString());
        } else if (typeof obj === "bigint") {
          if (obj > Number.MAX_SAFE_INTEGER)
            console.warn("Integers bigger than " + Number.MAX_SAFE_INTEGER + " aren't supported by variables, it will be reduced to that size.");
          variable.setNumber(parseInt(obj, 10));
        } else if (typeof obj === "function") {
          console.error("Error: Impossible to set variable value to a function.");
        } else {
          console.error("Cannot identify type of object:", obj);
        }
      };
      network2.jsonToVariableStructure = function(jsonStr, variable) {
        if (jsonStr.length === 0) {
          return false;
        }
        try {
          const obj = JSON.parse(jsonStr);
          gdjs2.evtTools.network._objectToVariable(obj, variable);
          return true;
        } catch (e) {
          return false;
        }
      };
      network2.jsonToObjectVariableStructure = function(jsonStr, object, variable) {
        gdjs2.evtTools.network.jsonToVariableStructure(jsonStr, variable);
      };
    })(network = evtTools2.network || (evtTools2.network = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=networktools.js.map
