var gdjs;
(function(gdjs2) {
  class JsonManager {
    constructor(resources) {
      this._loadedJsons = {};
      this._resources = resources;
    }
    setResources(resources) {
      this._resources = resources;
    }
    preloadJsons(onProgress, onComplete) {
      const resources = this._resources;
      const jsonResources = resources.filter(function(resource) {
        return resource.kind === "json" && !resource.disablePreload;
      });
      if (jsonResources.length === 0) {
        return onComplete(jsonResources.length);
      }
      let loaded = 0;
      const onLoad = function(error) {
        if (error) {
          console.error("Error while preloading a json resource:" + error);
        }
        loaded++;
        if (loaded === jsonResources.length) {
          onComplete(jsonResources.length);
        } else {
          onProgress(loaded, jsonResources.length);
        }
      };
      for (let i = 0; i < jsonResources.length; ++i) {
        this.loadJson(jsonResources[i].name, onLoad);
      }
    }
    loadJson(resourceName, callback) {
      const resource = this._resources.find(function(resource2) {
        return resource2.kind === "json" && resource2.name === resourceName;
      });
      if (!resource) {
        callback(new Error(`Can't find resource with name: "` + resourceName + '" (or is not a json resource).'), null);
        return;
      }
      if (this._loadedJsons[resourceName]) {
        callback(null, this._loadedJsons[resourceName]);
        return;
      }
      const that = this;
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("GET", resource.file);
      xhr.onload = function() {
        if (xhr.status !== 200) {
          callback(new Error("HTTP error: " + xhr.status + "(" + xhr.statusText + ")"), null);
          return;
        }
        that._loadedJsons[resourceName] = xhr.response;
        callback(null, xhr.response);
      };
      xhr.onerror = function() {
        callback(new Error("Network error"), null);
      };
      xhr.onabort = function() {
        callback(new Error("Request aborted"), null);
      };
      xhr.send();
    }
    isJsonLoaded(resourceName) {
      return !!this._loadedJsons[resourceName];
    }
    getLoadedJson(resourceName) {
      return this._loadedJsons[resourceName] || null;
    }
  }
  gdjs2.JsonManager = JsonManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=jsonmanager.js.map
