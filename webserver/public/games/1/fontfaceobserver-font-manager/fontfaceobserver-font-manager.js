var gdjs;
(function(gdjs2) {
  class FontFaceObserverFontManager {
    constructor(resources) {
      this._loadedFontFamily = {};
      this._loadedFonts = {};
      this._filenameToFontFamily = {};
      this._resources = resources;
    }
    setResources(resources) {
      this._resources = resources;
    }
    getFontFamily(resourceName) {
      if (this._loadedFontFamily[resourceName]) {
        return this._loadedFontFamily[resourceName];
      }
      return "Arial";
    }
    getFontFile(resourceName) {
      if (this._loadedFonts[resourceName]) {
        return this._loadedFonts[resourceName].file || "";
      }
      return resourceName;
    }
    _getFontFamilyFromFilename(filename) {
      if (this._filenameToFontFamily[filename]) {
        return this._filenameToFontFamily[filename];
      }
      let baseSlugifiedName = "gdjs_font_" + filename.toLowerCase().replace(/[^\w]/gi, "-");
      const slugifiedName = baseSlugifiedName;
      let uniqueSuffix = 2;
      while (!!this._filenameToFontFamily[baseSlugifiedName]) {
        baseSlugifiedName = baseSlugifiedName + "-" + uniqueSuffix;
        uniqueSuffix++;
      }
      return this._filenameToFontFamily[filename] = slugifiedName;
    }
    static _loadFont(fontFamily, src) {
      const descriptors = {};
      const srcWithUrl = "url(" + encodeURI(src) + ")";
      if (typeof FontFace !== "undefined") {
        const fontFace = new FontFace(fontFamily, srcWithUrl, descriptors);
        document.fonts.add(fontFace);
        return fontFace.load();
      } else {
        const newStyle = document.createElement("style");
        newStyle.appendChild(document.createTextNode("@font-face { font-family: '" + fontFamily + "'; src: " + srcWithUrl + "; }"));
        document.head.appendChild(newStyle);
        return new FontFaceObserver(fontFamily, descriptors).load();
      }
    }
    loadFonts(onProgress, onComplete) {
      const resources = this._resources;
      const filesResources = {};
      for (let i = 0, len = resources.length; i < len; ++i) {
        const res = resources[i];
        if (res.file && res.kind === "font") {
          if (!!this._loadedFonts[res.name]) {
            continue;
          }
          filesResources[res.file] = filesResources[res.file] ? filesResources[res.file].concat(res) : [res];
        }
      }
      const totalCount = Object.keys(filesResources).length;
      if (totalCount === 0) {
        return onComplete(totalCount);
      }
      let loadingCount = 0;
      const that = this;
      function onFontLoaded(fontFamily, fontResources) {
        fontResources.forEach(function(resource) {
          that._loadedFontFamily[resource.name] = fontFamily;
          that._loadedFonts[resource.name] = resource;
        });
        loadingCount++;
        onProgress(loadingCount, totalCount);
        if (loadingCount === totalCount) {
          onComplete(totalCount);
        }
      }
      Object.keys(filesResources).forEach(function(file) {
        const fontFamily = that._getFontFamilyFromFilename(file);
        const fontResources = filesResources[file];
        FontFaceObserverFontManager._loadFont(fontFamily, file).then(function() {
          onFontLoaded(fontFamily, fontResources);
        }, function(error) {
          console.error('Error loading font resource "' + fontResources[0].name + '" (file: ' + file + "): " + (error.message || "Unknown error"));
          onFontLoaded(fontFamily, fontResources);
        });
      });
    }
  }
  gdjs2.FontFaceObserverFontManager = FontFaceObserverFontManager;
  gdjs2.FontManager = FontFaceObserverFontManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=fontfaceobserver-font-manager.js.map
