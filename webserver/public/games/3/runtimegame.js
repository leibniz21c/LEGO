var gdjs;
(function(gdjs2) {
  class RuntimeGame {
    constructor(data, options) {
      this._notifyScenesForGameResolutionResize = false;
      this._paused = false;
      this._sessionMetricsInitialized = false;
      this._disableMetrics = false;
      this._options = options || {};
      this._variables = new gdjs2.VariablesContainer(data.variables);
      this._data = data;
      this._imageManager = new gdjs2.ImageManager(this._data.resources.resources);
      this._soundManager = new gdjs2.SoundManager(this._data.resources.resources);
      this._fontManager = new gdjs2.FontManager(this._data.resources.resources);
      this._jsonManager = new gdjs2.JsonManager(this._data.resources.resources);
      this._bitmapFontManager = new gdjs2.BitmapFontManager(this._data.resources.resources, this._imageManager);
      this._maxFPS = this._data ? this._data.properties.maxFPS : 60;
      this._minFPS = this._data ? this._data.properties.minFPS : 15;
      this._gameResolutionWidth = this._data.properties.windowWidth;
      this._gameResolutionHeight = this._data.properties.windowHeight;
      this._originalWidth = this._gameResolutionWidth;
      this._originalHeight = this._gameResolutionHeight;
      this._resizeMode = this._data.properties.sizeOnStartupMode;
      this._adaptGameResolutionAtRuntime = this._data.properties.adaptGameResolutionAtRuntime;
      this._scaleMode = data.properties.scaleMode || "linear";
      this._renderer = new gdjs2.RuntimeGameRenderer(this, this._options.forceFullscreen || false);
      this._sceneStack = new gdjs2.SceneStack(this);
      this._inputManager = new gdjs2.InputManager();
      this._injectExternalLayout = this._options.injectExternalLayout || "";
      this._debuggerClient = gdjs2.DebuggerClient ? new gdjs2.DebuggerClient(this) : null;
      this._isPreview = this._options.isPreview || false;
    }
    setProjectData(projectData) {
      this._data = projectData;
      this._imageManager.setResources(this._data.resources.resources);
      this._soundManager.setResources(this._data.resources.resources);
      this._fontManager.setResources(this._data.resources.resources);
      this._jsonManager.setResources(this._data.resources.resources);
      this._bitmapFontManager.setResources(this._data.resources.resources);
    }
    getAdditionalOptions() {
      return this._options;
    }
    getRenderer() {
      return this._renderer;
    }
    getVariables() {
      return this._variables;
    }
    getSoundManager() {
      return this._soundManager;
    }
    getImageManager() {
      return this._imageManager;
    }
    getFontManager() {
      return this._fontManager;
    }
    getBitmapFontManager() {
      return this._bitmapFontManager;
    }
    getInputManager() {
      return this._inputManager;
    }
    getJsonManager() {
      return this._jsonManager;
    }
    getGameData() {
      return this._data;
    }
    getSceneData(sceneName) {
      let scene = null;
      for (let i = 0, len = this._data.layouts.length; i < len; ++i) {
        const sceneData = this._data.layouts[i];
        if (sceneName === void 0 || sceneData.name === sceneName) {
          scene = sceneData;
          break;
        }
      }
      if (scene === null) {
        console.warn('The game has no scene called "' + sceneName + '"');
      }
      return scene;
    }
    hasScene(sceneName) {
      let isTrue = false;
      for (let i = 0, len = this._data.layouts.length; i < len; ++i) {
        const sceneData = this._data.layouts[i];
        if (sceneName === void 0 || sceneData.name == sceneName) {
          isTrue = true;
          break;
        }
      }
      return isTrue;
    }
    getExternalLayoutData(name) {
      let externalLayout = null;
      for (let i = 0, len = this._data.externalLayouts.length; i < len; ++i) {
        const layoutData = this._data.externalLayouts[i];
        if (layoutData.name === name) {
          externalLayout = layoutData;
          break;
        }
      }
      return externalLayout;
    }
    getInitialObjectsData() {
      return this._data.objects || [];
    }
    getOriginalWidth() {
      return this._originalWidth;
    }
    getOriginalHeight() {
      return this._originalHeight;
    }
    getGameResolutionWidth() {
      return this._gameResolutionWidth;
    }
    getGameResolutionHeight() {
      return this._gameResolutionHeight;
    }
    setGameResolutionSize(width, height) {
      this._gameResolutionWidth = width;
      this._gameResolutionHeight = height;
      if (this._adaptGameResolutionAtRuntime) {
        if (gdjs2.RuntimeGameRenderer && gdjs2.RuntimeGameRenderer.getWindowInnerWidth && gdjs2.RuntimeGameRenderer.getWindowInnerHeight) {
          const windowInnerWidth = gdjs2.RuntimeGameRenderer.getWindowInnerWidth();
          const windowInnerHeight = gdjs2.RuntimeGameRenderer.getWindowInnerHeight();
          let width2 = this._gameResolutionWidth;
          let height2 = this._gameResolutionHeight;
          if (this._resizeMode === "adaptWidth") {
            this._gameResolutionWidth = this._gameResolutionHeight * windowInnerWidth / windowInnerHeight;
          } else {
            if (this._resizeMode === "adaptHeight") {
              this._gameResolutionHeight = this._gameResolutionWidth * windowInnerHeight / windowInnerWidth;
            }
          }
        }
      } else {
      }
      this._renderer.updateRendererSize();
      this._notifyScenesForGameResolutionResize = true;
    }
    setGameResolutionResizeMode(resizeMode) {
      this._resizeMode = resizeMode;
      this._forceGameResolutionUpdate();
    }
    getGameResolutionResizeMode() {
      return this._resizeMode;
    }
    setAdaptGameResolutionAtRuntime(enable) {
      this._adaptGameResolutionAtRuntime = enable;
      this._forceGameResolutionUpdate();
    }
    getAdaptGameResolutionAtRuntime() {
      return this._adaptGameResolutionAtRuntime;
    }
    getMinimalFramerate() {
      return this._minFPS;
    }
    getScaleMode() {
      return this._scaleMode;
    }
    pause(enable) {
      this._paused = enable;
    }
    loadAllAssets(callback, progressCallback) {
      const loadingScreen = new gdjs2.LoadingScreenRenderer(this.getRenderer(), this._data.properties.loadingScreen);
      const allAssetsTotal = this._data.resources.resources.length;
      const that = this;
      this._imageManager.loadTextures(function(count, total) {
        const percent = Math.floor(count / allAssetsTotal * 100);
        loadingScreen.render(percent);
        if (progressCallback) {
          progressCallback(percent);
        }
      }, function(texturesTotalCount) {
        that._soundManager.preloadAudio(function(count, total) {
          const percent = Math.floor((texturesTotalCount + count) / allAssetsTotal * 100);
          loadingScreen.render(percent);
          if (progressCallback) {
            progressCallback(percent);
          }
        }, function(audioTotalCount) {
          that._fontManager.loadFonts(function(count, total) {
            const percent = Math.floor((texturesTotalCount + audioTotalCount + count) / allAssetsTotal * 100);
            loadingScreen.render(percent);
            if (progressCallback) {
              progressCallback(percent);
            }
          }, function(fontTotalCount) {
            that._jsonManager.preloadJsons(function(count, total) {
              const percent = Math.floor((texturesTotalCount + audioTotalCount + fontTotalCount + count) / allAssetsTotal * 100);
              loadingScreen.render(percent);
              if (progressCallback) {
                progressCallback(percent);
              }
            }, function(jsonTotalCount) {
              that._bitmapFontManager.loadBitmapFontData((count) => {
                var percent = Math.floor((texturesTotalCount + audioTotalCount + fontTotalCount + jsonTotalCount + count) / allAssetsTotal * 100);
                loadingScreen.render(percent);
                if (progressCallback)
                  progressCallback(percent);
              }).then(() => {
                loadingScreen.unload();
                callback();
              });
            });
          });
        });
      });
    }
    startGameLoop() {
      if (!this.hasScene()) {
        console.log("The game has no scene.");
        return;
      }
      this._forceGameResolutionUpdate();
      const firstSceneName = this._data.firstLayout;
      this._sceneStack.push(this.hasScene(firstSceneName) ? firstSceneName : this.getSceneData().name, this._injectExternalLayout);
      const that = this;
      let accumulatedElapsedTime = 0;
      this._renderer.startGameLoop(function(lastCallElapsedTime) {
        if (that._paused) {
          return true;
        }
        accumulatedElapsedTime += lastCallElapsedTime;
        if (that._maxFPS > 0 && 1e3 / accumulatedElapsedTime > that._maxFPS + 7) {
          return true;
        }
        const elapsedTime = accumulatedElapsedTime;
        accumulatedElapsedTime = 0;
        if (that._notifyScenesForGameResolutionResize) {
          that._sceneStack.onGameResolutionResized();
          that._notifyScenesForGameResolutionResize = false;
        }
        if (that._sceneStack.step(elapsedTime)) {
          that.getInputManager().onFrameEnded();
          return true;
        }
        return false;
      });
      setTimeout(() => {
        this._setupSessionMetrics();
      }, 1e4);
    }
    enableMetrics(enable) {
      this._disableMetrics = !enable;
      if (enable) {
        this._setupSessionMetrics();
      }
    }
    _setupSessionMetrics() {
      if (this._sessionMetricsInitialized) {
        return;
      }
      if (this._disableMetrics) {
        return;
      }
      if (this.isPreview()) {
        return;
      }
      if (typeof fetch === "undefined") {
        return;
      }
      if (!this._data.properties.projectUuid) {
        return;
      }
      const baseUrl = "https://api.gdevelop-app.com/analytics";
      const playerId = this._makePlayerUuid();
      let sessionId = null;
      let lastSessionHitTime = Date.now();
      fetch(baseUrl + "/session", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          gameId: this._data.properties.projectUuid,
          playerId,
          game: {
            name: this._data.properties.name || "",
            packageName: this._data.properties.packageName || "",
            version: this._data.properties.version || "",
            location: window.location.href
          },
          platform: {
            isCordova: !!window.cordova,
            devicePlatform: typeof device !== "undefined" ? device.platform || "" : "",
            navigatorPlatform: typeof navigator !== "undefined" ? navigator.platform : "",
            hasTouch: typeof navigator !== "undefined" ? !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2 : false
          }
        })
      }).then((response) => response.text()).then((returnedSessionId) => {
        sessionId = returnedSessionId;
      }).catch(() => {
      });
      const sendSessionHit = () => {
        if (!sessionId) {
          return;
        }
        if (Date.now() - lastSessionHitTime < 3 * 1e3) {
          return;
        }
        lastSessionHitTime = Date.now();
        navigator.sendBeacon(baseUrl + "/session-hit", JSON.stringify({
          gameId: this._data.properties.projectUuid,
          playerId,
          sessionId
        }));
      };
      if (typeof navigator !== "undefined" && typeof document !== "undefined") {
        document.addEventListener("visibilitychange", () => {
          sendSessionHit();
        });
        window.addEventListener("pagehide", () => {
          sendSessionHit();
        }, false);
        const isSafari = typeof safari === "object" && safari.pushNotification;
        const isElectron = /electron/i.test(navigator.userAgent);
        if (isSafari || isElectron) {
          window.addEventListener("beforeunload", () => {
            sendSessionHit();
          });
        }
      }
      this._sessionMetricsInitialized = true;
    }
    _makePlayerUuid() {
      try {
        const key = "GDJS-internal-player-uuid";
        const existingPlayerUuid = localStorage.getItem(key);
        if (existingPlayerUuid) {
          return existingPlayerUuid;
        }
        const newPlayerUuid = gdjs2.makeUuid();
        localStorage.setItem(key, newPlayerUuid);
        return newPlayerUuid;
      } catch (err) {
        return gdjs2.makeUuid();
      }
    }
    onWindowInnerSizeChanged() {
      this._forceGameResolutionUpdate();
    }
    _forceGameResolutionUpdate() {
      this.setGameResolutionSize(this._gameResolutionWidth, this._gameResolutionHeight);
    }
    startCurrentSceneProfiler(onProfilerStopped) {
      const currentScene = this._sceneStack.getCurrentScene();
      if (!currentScene) {
        return false;
      }
      currentScene.startProfiler(onProfilerStopped);
      return true;
    }
    stopCurrentSceneProfiler() {
      const currentScene = this._sceneStack.getCurrentScene();
      if (!currentScene) {
        return;
      }
      currentScene.stopProfiler();
    }
    wasFirstSceneLoaded() {
      return this._sceneStack.wasFirstSceneLoaded();
    }
    getSceneStack() {
      return this._sceneStack;
    }
    isPreview() {
      return this._isPreview;
    }
    getExtensionProperty(extensionName, propertyName) {
      for (let property of this._data.properties.extensionProperties) {
        if (property.extension === extensionName && property.property === propertyName) {
          return property.value;
        }
      }
      return null;
    }
  }
  gdjs2.RuntimeGame = RuntimeGame;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame.js.map
