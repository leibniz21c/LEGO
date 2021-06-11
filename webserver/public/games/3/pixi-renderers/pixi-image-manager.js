var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class PixiImageManager {
    constructor(resources) {
      this._resources = resources;
      this._invalidTexture = PIXI.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQoU2P8z/D/PwMewDgyFAAApMMX8Zi0uXAAAAAASUVORK5CYIIA");
      this._loadedTextures = new Hashtable();
    }
    setResources(resources) {
      this._resources = resources;
    }
    getPIXITexture(resourceName) {
      if (this._loadedTextures.containsKey(resourceName)) {
        const texture = this._loadedTextures.get(resourceName);
        if (texture.valid) {
          return texture;
        } else {
          console.error("Texture for " + resourceName + " is not valid anymore.");
        }
      }
      if (resourceName === "") {
        return this._invalidTexture;
      }
      if (this._resources) {
        let texture = null;
        for (let i = 0, len = this._resources.length; i < len; ++i) {
          const res = this._resources[i];
          if (res.name === resourceName && res.kind === "image") {
            texture = PIXI.Texture.from(res.file);
            break;
          }
        }
        if (texture !== null) {
          console.log('Loaded texture for resource "' + resourceName + '".');
          this._loadedTextures.put(resourceName, texture);
          return texture;
        }
      }
      console.warn('Unable to find texture for resource "' + resourceName + '".');
      return this._invalidTexture;
    }
    getPIXIVideoTexture(resourceName) {
      if (this._loadedTextures.containsKey(resourceName)) {
        return this._loadedTextures.get(resourceName);
      }
      if (resourceName === "") {
        return this._invalidTexture;
      }
      if (this._resources) {
        let texture = null;
        for (let i = 0, len = this._resources.length; i < len; ++i) {
          const res = this._resources[i];
          if (res.name === resourceName && res.kind === "video") {
            texture = PIXI.Texture.from(res.file);
            break;
          }
        }
        if (texture !== null) {
          console.log('Loaded video texture for resource "' + resourceName + '".');
          this._loadedTextures.put(resourceName, texture);
          return texture;
        }
      }
      console.warn('Unable to find video texture for resource "' + resourceName + '".');
      return this._invalidTexture;
    }
    getInvalidPIXITexture() {
      return this._invalidTexture;
    }
    loadTextures(onProgress, onComplete) {
      const resources = this._resources;
      const files = {};
      for (let i = 0, len = resources.length; i < len; ++i) {
        const res = resources[i];
        if (res.file && res.kind === "image") {
          if (this._loadedTextures.containsKey(res.name)) {
            continue;
          }
          files[res.file] = files[res.file] ? files[res.file].concat(res) : [res];
        }
      }
      const totalCount = Object.keys(files).length;
      if (totalCount === 0) {
        return onComplete(totalCount);
      }
      const loader = PIXI.Loader.shared;
      const that = this;
      let loadingCount = 0;
      const progressCallbackId = loader.onProgress.add(function() {
        loadingCount++;
        onProgress(loadingCount, totalCount);
      });
      for (const file in files) {
        if (files.hasOwnProperty(file)) {
          loader.add(file, file);
        }
      }
      loader.load(function(loader2, loadedFiles) {
        loader2.onProgress.detach(progressCallbackId);
        for (const file in loadedFiles) {
          if (loadedFiles.hasOwnProperty(file)) {
            if (!files.hasOwnProperty(file)) {
              continue;
            }
            files[file].forEach(function(res) {
              that._loadedTextures.put(res.name, loadedFiles[file].texture);
              if (!res.smoothed) {
                loadedFiles[file].texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
              }
            });
          }
        }
        onComplete(totalCount);
      });
    }
  }
  gdjs2.PixiImageManager = PixiImageManager;
  gdjs2.ImageManager = gdjs2.PixiImageManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-image-manager.js.map
