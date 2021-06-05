var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let runtimeScene;
    (function(runtimeScene2) {
      runtimeScene2.sceneJustBegins = function(runtimeScene3) {
        return runtimeScene3.getTimeManager().isFirstFrame();
      };
      runtimeScene2.sceneJustResumed = function(runtimeScene3) {
        return runtimeScene3.sceneJustResumed();
      };
      runtimeScene2.getSceneName = function(runtimeScene3) {
        return runtimeScene3.getName();
      };
      runtimeScene2.setBackgroundColor = function(runtimeScene3, rgbColor) {
        const colors = rgbColor.split(";");
        if (colors.length < 3) {
          return;
        }
        runtimeScene3.setBackgroundColor(parseInt(colors[0]), parseInt(colors[1]), parseInt(colors[2]));
      };
      runtimeScene2.getElapsedTimeInSeconds = function(runtimeScene3) {
        return runtimeScene3.getTimeManager().getElapsedTime() / 1e3;
      };
      runtimeScene2.setTimeScale = function(runtimeScene3, timeScale) {
        return runtimeScene3.getTimeManager().setTimeScale(timeScale);
      };
      runtimeScene2.getTimeScale = function(runtimeScene3) {
        return runtimeScene3.getTimeManager().getTimeScale();
      };
      runtimeScene2.timerElapsedTime = function(runtimeScene3, timeInSeconds, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        if (!timeManager.hasTimer(timerName)) {
          timeManager.addTimer(timerName);
          return false;
        }
        return timeManager.getTimer(timerName).getTime() / 1e3 >= timeInSeconds;
      };
      runtimeScene2.timerPaused = function(runtimeScene3, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        if (!timeManager.hasTimer(timerName)) {
          return false;
        }
        return timeManager.getTimer(timerName).isPaused();
      };
      runtimeScene2.resetTimer = function(runtimeScene3, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        if (!timeManager.hasTimer(timerName)) {
          timeManager.addTimer(timerName);
        } else {
          timeManager.getTimer(timerName).reset();
        }
      };
      runtimeScene2.pauseTimer = function(runtimeScene3, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        if (!timeManager.hasTimer(timerName)) {
          timeManager.addTimer(timerName);
        }
        timeManager.getTimer(timerName).setPaused(true);
      };
      runtimeScene2.unpauseTimer = function(runtimeScene3, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        if (!timeManager.hasTimer(timerName)) {
          timeManager.addTimer(timerName);
        }
        return timeManager.getTimer(timerName).setPaused(false);
      };
      runtimeScene2.removeTimer = function(runtimeScene3, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        timeManager.removeTimer(timerName);
      };
      runtimeScene2.getTimerElapsedTimeInSeconds = function(runtimeScene3, timerName) {
        const timeManager = runtimeScene3.getTimeManager();
        if (!timeManager.hasTimer(timerName)) {
          return 0;
        }
        return timeManager.getTimer(timerName).getTime() / 1e3;
      };
      runtimeScene2.getTimeFromStartInSeconds = function(runtimeScene3) {
        return runtimeScene3.getTimeManager().getTimeFromStart() / 1e3;
      };
      runtimeScene2.getTime = function(runtimeScene3, what) {
        if (what === "timestamp") {
          return Date.now();
        }
        const now = new Date();
        if (what === "hour") {
          return now.getHours();
        } else if (what === "min") {
          return now.getMinutes();
        } else if (what === "sec") {
          return now.getSeconds();
        } else if (what === "mday") {
          return now.getDate();
        } else if (what === "mon") {
          return now.getMonth();
        } else if (what === "year") {
          return now.getFullYear() - 1900;
        } else if (what === "wday") {
          return now.getDay();
        } else if (what === "yday") {
          const start = new Date(now.getFullYear(), 0, 0);
          const diff = now.getTime() - start.getTime();
          const oneDay = 1e3 * 60 * 60 * 24;
          return Math.floor(diff / oneDay);
        }
        return 0;
      };
      runtimeScene2.replaceScene = function(runtimeScene3, newSceneName, clearOthers) {
        if (!runtimeScene3.getGame().getSceneData(newSceneName)) {
          return;
        }
        runtimeScene3.requestChange(clearOthers ? gdjs2.SceneChangeRequest.CLEAR_SCENES : gdjs2.SceneChangeRequest.REPLACE_SCENE, newSceneName);
      };
      runtimeScene2.pushScene = function(runtimeScene3, newSceneName) {
        if (!runtimeScene3.getGame().getSceneData(newSceneName)) {
          return;
        }
        runtimeScene3.requestChange(gdjs2.SceneChangeRequest.PUSH_SCENE, newSceneName);
      };
      runtimeScene2.popScene = function(runtimeScene3) {
        runtimeScene3.requestChange(gdjs2.SceneChangeRequest.POP_SCENE);
      };
      runtimeScene2.stopGame = function(runtimeScene3) {
        runtimeScene3.requestChange(gdjs2.SceneChangeRequest.STOP_GAME);
      };
      runtimeScene2.createObjectsFromExternalLayout = function(scene, externalLayout, xPos, yPos) {
        const externalLayoutData = scene.getGame().getExternalLayoutData(externalLayout);
        if (externalLayoutData === null) {
          return;
        }
        scene.createObjectsFrom(externalLayoutData.instances, xPos, yPos, false);
      };
    })(runtimeScene = evtTools2.runtimeScene || (evtTools2.runtimeScene = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimescenetools.js.map
