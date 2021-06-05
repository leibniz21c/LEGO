var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let storage;
    (function(storage2) {
      let localStorage = null;
      try {
        if (typeof cc !== "undefined") {
          localStorage = cc.sys.localStorage;
        } else {
          if (typeof window !== "undefined") {
            localStorage = window.localStorage;
          }
        }
      } catch (error) {
        console.warn("Unable to get access to the localStorage: ", error);
      }
      if (!localStorage) {
        console.warn("Storage actions won't work as no localStorage was found.");
      }
      const loadedObjects = new Hashtable();
      storage2.loadJSONFileFromStorage = (name) => {
        if (loadedObjects.containsKey(name)) {
          return;
        }
        let serializedString = null;
        try {
          if (localStorage) {
            serializedString = localStorage.getItem("GDJS_" + name);
          }
        } catch (error) {
          console.warn('Unable to load data from localStorage for "' + name + '":', error);
        }
        let jsObject = {};
        try {
          if (serializedString) {
            jsObject = JSON.parse(serializedString);
          }
        } catch (error) {
          console.warn('Unable to load data from "' + name + '" - data is not valid JSON:', error);
        }
        loadedObjects.put(name, jsObject);
      };
      storage2.unloadJSONFile = (name) => {
        if (!loadedObjects.containsKey(name)) {
          return;
        }
        const jsObject = loadedObjects.get(name);
        const serializedString = JSON.stringify(jsObject);
        try {
          if (localStorage) {
            localStorage.setItem("GDJS_" + name, serializedString);
          }
        } catch (error) {
          console.warn('Unable to save data to localStorage for "' + name + '":', error);
        }
        loadedObjects.remove(name);
      };
      const loadObject = (name, cb) => {
        let notPermanentlyLoaded = false;
        if (!loadedObjects.containsKey(name)) {
          notPermanentlyLoaded = true;
          storage2.loadJSONFileFromStorage(name);
        }
        const returnValue = cb(loadedObjects.get(name));
        if (notPermanentlyLoaded) {
          storage2.unloadJSONFile(name);
        }
        return returnValue;
      };
      storage2.clearJSONFile = (name) => {
        return loadObject(name, (jsObject) => {
          for (const p in jsObject) {
            if (jsObject.hasOwnProperty(p)) {
              delete jsObject[p];
            }
          }
          return true;
        });
      };
      storage2.elementExistsInJSONFile = (name, elementPath) => {
        return loadObject(name, (jsObject) => {
          const pathSegments = elementPath.split("/");
          let currentElem = jsObject;
          for (let i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            currentElem = currentElem[pathSegments[i]];
          }
          return true;
        });
      };
      storage2.deleteElementFromJSONFile = (name, elementPath) => {
        return loadObject(name, (jsObject) => {
          const pathSegments = elementPath.split("/");
          let currentElem = jsObject;
          for (let i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            if (i === pathSegments.length - 1) {
              delete currentElem[pathSegments[i]];
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.writeNumberInJSONFile = (name, elementPath, val) => {
        return loadObject(name, (jsObject) => {
          const pathSegments = elementPath.split("/");
          let currentElem = jsObject;
          for (let i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              currentElem[pathSegments[i]] = {};
            }
            if (i === pathSegments.length - 1) {
              currentElem[pathSegments[i]].value = val;
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.writeStringInJSONFile = (name, elementPath, str) => {
        return loadObject(name, (jsObject) => {
          const pathSegments = elementPath.split("/");
          let currentElem = jsObject;
          for (let i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              currentElem[pathSegments[i]] = {};
            }
            if (i === pathSegments.length - 1) {
              currentElem[pathSegments[i]].str = str;
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.readNumberFromJSONFile = (name, elementPath, runtimeScene, variable) => {
        return loadObject(name, (jsObject) => {
          const pathSegments = elementPath.split("/");
          let currentElem = jsObject;
          for (let i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            if (i === pathSegments.length - 1 && typeof currentElem[pathSegments[i]].value !== "undefined") {
              variable.setNumber(currentElem[pathSegments[i]].value);
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
      storage2.readStringFromJSONFile = (name, elementPath, runtimeScene, variable) => {
        return loadObject(name, (jsObject) => {
          const pathSegments = elementPath.split("/");
          let currentElem = jsObject;
          for (let i = 0; i < pathSegments.length; ++i) {
            if (!currentElem[pathSegments[i]]) {
              return false;
            }
            if (i === pathSegments.length - 1 && typeof currentElem[pathSegments[i]].str !== "undefined") {
              variable.setString(currentElem[pathSegments[i]].str);
            } else {
              currentElem = currentElem[pathSegments[i]];
            }
          }
          return true;
        });
      };
    })(storage = evtTools2.storage || (evtTools2.storage = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=storagetools.js.map
