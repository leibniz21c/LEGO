var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let window;
    (function(window2) {
      window2.setMargins = function(runtimeScene, top, right, bottom, left) {
        runtimeScene.getGame().getRenderer().setMargins(top, right, bottom, left);
      };
      window2.setFullScreen = function(runtimeScene, enable, keepAspectRatio) {
        runtimeScene.getGame().getRenderer().keepAspectRatio(keepAspectRatio);
        runtimeScene.getGame().getRenderer().setFullScreen(enable);
      };
      window2.isFullScreen = function(runtimeScene) {
        return runtimeScene.getGame().getRenderer().isFullScreen();
      };
      window2.setWindowSize = function(runtimeScene, width, height, updateGameResolution) {
        runtimeScene.getGame().getRenderer().setWindowSize(width, height);
        if (updateGameResolution) {
          runtimeScene.getGame().setGameResolutionSize(width, height);
        }
      };
      window2.centerWindow = function(runtimeScene) {
        runtimeScene.getGame().getRenderer().centerWindow();
      };
      window2.setGameResolutionSize = function(runtimeScene, width, height) {
        runtimeScene.getGame().setGameResolutionSize(width, height);
      };
      window2.setGameResolutionResizeMode = function(runtimeScene, resizeMode) {
        runtimeScene.getGame().setGameResolutionResizeMode(resizeMode);
      };
      window2.setAdaptGameResolutionAtRuntime = function(runtimeScene, enable) {
        runtimeScene.getGame().setAdaptGameResolutionAtRuntime(enable);
      };
      window2.setWindowTitle = function(runtimeScene, title) {
        runtimeScene.getGame().getRenderer().setWindowTitle(title);
      };
      window2.getWindowTitle = function(runtimeScene) {
        return runtimeScene.getGame().getRenderer().getWindowTitle();
      };
      window2.getWindowInnerWidth = function() {
        if (gdjs2.RuntimeGameRenderer && gdjs2.RuntimeGameRenderer.getWindowInnerWidth) {
          return gdjs2.RuntimeGameRenderer.getWindowInnerWidth();
        }
        return typeof window2 !== "undefined" ? window2.innerWidth : 800;
      };
      window2.getWindowInnerHeight = function() {
        if (gdjs2.RuntimeGameRenderer && gdjs2.RuntimeGameRenderer.getWindowInnerHeight) {
          return gdjs2.RuntimeGameRenderer.getWindowInnerHeight();
        }
        return typeof window2 !== "undefined" ? window2.innerHeight : 800;
      };
      window2.getGameResolutionWidth = function(runtimeScene) {
        return runtimeScene.getGame().getGameResolutionWidth();
      };
      window2.getGameResolutionHeight = function(runtimeScene) {
        return runtimeScene.getGame().getGameResolutionHeight();
      };
      window2.openURL = function(url, runtimeScene) {
        return runtimeScene.getGame().getRenderer().openURL(url);
      };
    })(window = evtTools2.window || (evtTools2.window = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=windowtools.js.map
