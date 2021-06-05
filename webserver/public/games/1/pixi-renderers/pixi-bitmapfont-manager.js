var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  const defaultBitmapFontKey = "GDJS-DEFAULT-BITMAP-FONT";
  const uninstallCacheSize = 5;
  const patchInstalledBitmapFont = (bitmapFont, bitmapFontInstallKey) => {
    const defaultName = bitmapFont.font;
    bitmapFont.font = bitmapFontInstallKey;
    PIXI.BitmapFont.available[bitmapFontInstallKey] = bitmapFont;
    delete PIXI.BitmapFont.available[defaultName];
    return PIXI.BitmapFont.available[bitmapFontInstallKey];
  };
  class PixiBitmapFontManager {
    constructor(resources, imageManager) {
      this._pixiBitmapFontsInUse = {};
      this._pixiBitmapFontsToUninstall = [];
      this._loadedFontsData = {};
      this._defaultSlugFontName = null;
      this._resources = resources;
      this._imageManager = imageManager;
    }
    getDefaultBitmapFont() {
      if (this._defaultSlugFontName !== null) {
        return PIXI.BitmapFont.available[this._defaultSlugFontName];
      }
      const fontFamily = "Arial";
      const bitmapFontStyle = new PIXI.TextStyle({
        fontFamily,
        fontSize: 20,
        padding: 5,
        align: "left",
        fill: "#ffffff",
        wordWrap: true,
        lineHeight: 20
      });
      const defaultBitmapFont = patchInstalledBitmapFont(PIXI.BitmapFont.from(fontFamily, bitmapFontStyle, {
        chars: [[" ", "~"]]
      }), defaultBitmapFontKey);
      this._defaultSlugFontName = defaultBitmapFont.font;
      return defaultBitmapFont;
    }
    setResources(resources) {
      this._resources = resources;
    }
    _markBitmapFontAsUsed(bitmapFontInstallKey) {
      this._pixiBitmapFontsInUse[bitmapFontInstallKey] = this._pixiBitmapFontsInUse[bitmapFontInstallKey] || {
        objectsUsingTheFont: 0
      };
      this._pixiBitmapFontsInUse[bitmapFontInstallKey].objectsUsingTheFont++;
      for (let i = 0; i < this._pixiBitmapFontsToUninstall.length; ) {
        if (this._pixiBitmapFontsToUninstall[i] === bitmapFontInstallKey) {
          this._pixiBitmapFontsToUninstall.splice(i, 1);
        } else {
          i++;
        }
      }
    }
    releaseBitmapFont(bitmapFontInstallKey) {
      if (bitmapFontInstallKey === defaultBitmapFontKey) {
        return;
      }
      if (!this._pixiBitmapFontsInUse[bitmapFontInstallKey]) {
        console.error("BitmapFont with name " + bitmapFontInstallKey + " was tried to be released but was never marked as used.");
        return;
      }
      this._pixiBitmapFontsInUse[bitmapFontInstallKey].objectsUsingTheFont--;
      if (this._pixiBitmapFontsInUse[bitmapFontInstallKey].objectsUsingTheFont === 0) {
        delete this._pixiBitmapFontsInUse[bitmapFontInstallKey];
        if (!this._pixiBitmapFontsToUninstall.includes(bitmapFontInstallKey)) {
          this._pixiBitmapFontsToUninstall.push(bitmapFontInstallKey);
        }
        if (this._pixiBitmapFontsToUninstall.length > uninstallCacheSize) {
          const oldestUnloadedPixiBitmapFontName = this._pixiBitmapFontsToUninstall.shift();
          PIXI.BitmapFont.uninstall(oldestUnloadedPixiBitmapFontName);
          console.log('Uninstalled BitmapFont "' + oldestUnloadedPixiBitmapFontName + '" from memory.');
        }
      }
    }
    obtainBitmapFont(bitmapFontResourceName, textureAtlasResourceName) {
      const bitmapFontInstallKey = bitmapFontResourceName + "@" + textureAtlasResourceName;
      if (PIXI.BitmapFont.available[bitmapFontInstallKey]) {
        this._markBitmapFontAsUsed(bitmapFontInstallKey);
        return PIXI.BitmapFont.available[bitmapFontInstallKey];
      }
      const fontData = this._loadedFontsData[bitmapFontResourceName];
      if (!fontData) {
        console.warn('Could not find Bitmap Font for resource named "' + bitmapFontResourceName + '". The default font will be used.');
        return this.getDefaultBitmapFont();
      }
      const texture = this._imageManager.getPIXITexture(textureAtlasResourceName);
      try {
        const bitmapFont = patchInstalledBitmapFont(PIXI.BitmapFont.install(fontData, texture), bitmapFontInstallKey);
        this._markBitmapFontAsUsed(bitmapFontInstallKey);
        return bitmapFont;
      } catch (error) {
        console.warn('Could not load the Bitmap Font for resource named "' + bitmapFontResourceName + '". The default font will be used. Error is: ' + error);
        return this.getDefaultBitmapFont();
      }
    }
    loadBitmapFontData(onProgress) {
      const bitmapFontResources = this._resources.filter((resource) => resource.kind === "bitmapFont" && !resource.disablePreload);
      if (bitmapFontResources.length === 0) {
        return Promise.resolve([]);
      }
      let loadedCount = 0;
      return Promise.all(bitmapFontResources.map((bitmapFontResource) => {
        return fetch(bitmapFontResource.file).then((response) => response.text()).then((fontData) => {
          this._loadedFontsData[bitmapFontResource.name] = fontData;
        }).catch((error) => {
          console.error("Can't fetch the bitmap font file " + bitmapFontResource.file + ", error: " + error);
        }).then(() => {
          loadedCount++;
          onProgress(loadedCount, bitmapFontResources.length);
        });
      }));
    }
  }
  gdjs2.PixiBitmapFontManager = PixiBitmapFontManager;
  gdjs2.BitmapFontManager = gdjs2.PixiBitmapFontManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-bitmapfont-manager.js.map
