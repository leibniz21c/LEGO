var gdjs;
(function(gdjs2) {
  class SceneStack {
    constructor(runtimeGame) {
      this._stack = [];
      this._wasFirstSceneLoaded = false;
      if (!runtimeGame) {
        throw "SceneStack must be constructed with a gdjs.RuntimeGame.";
      }
      this._runtimeGame = runtimeGame;
    }
    onGameResolutionResized() {
      for (let i = 0; i < this._stack.length; ++i) {
        this._stack[i].onGameResolutionResized();
      }
    }
    step(elapsedTime) {
      if (this._stack.length === 0) {
        return false;
      }
      const currentScene = this._stack[this._stack.length - 1];
      if (currentScene.renderAndStep(elapsedTime)) {
        const request = currentScene.getRequestedChange();
        if (request === gdjs2.SceneChangeRequest.STOP_GAME) {
          this._runtimeGame.getRenderer().stopGame();
          return true;
        } else if (request === gdjs2.SceneChangeRequest.POP_SCENE) {
          this.pop();
        } else if (request === gdjs2.SceneChangeRequest.PUSH_SCENE) {
          this.push(currentScene.getRequestedScene());
        } else if (request === gdjs2.SceneChangeRequest.REPLACE_SCENE) {
          this.replace(currentScene.getRequestedScene());
        } else if (request === gdjs2.SceneChangeRequest.CLEAR_SCENES) {
          this.replace(currentScene.getRequestedScene(), true);
        } else {
          console.error("Unrecognized change in scene stack.");
          return false;
        }
      }
      return true;
    }
    renderWithoutStep() {
      if (this._stack.length === 0) {
        return false;
      }
      const currentScene = this._stack[this._stack.length - 1];
      currentScene.render();
      return true;
    }
    pop() {
      if (this._stack.length <= 1) {
        return null;
      }
      const scene = this._stack.pop();
      if (!scene) {
        return null;
      }
      scene.unloadScene();
      const currentScene = this._stack[this._stack.length - 1];
      if (currentScene) {
        currentScene.onResume();
      }
      return scene;
    }
    push(newSceneName, externalLayoutName) {
      const currentScene = this._stack[this._stack.length - 1];
      if (currentScene) {
        currentScene.onPause();
      }
      const newScene = new gdjs2.RuntimeScene(this._runtimeGame);
      newScene.loadFromScene(this._runtimeGame.getSceneData(newSceneName));
      this._wasFirstSceneLoaded = true;
      if (externalLayoutName) {
        const externalLayoutData = this._runtimeGame.getExternalLayoutData(externalLayoutName);
        if (externalLayoutData) {
          newScene.createObjectsFrom(externalLayoutData.instances, 0, 0, true);
        }
      }
      this._stack.push(newScene);
      return newScene;
    }
    replace(newSceneName, clear) {
      if (!!clear) {
        while (this._stack.length !== 0) {
          let scene = this._stack.pop();
          if (scene) {
            scene.unloadScene();
          }
        }
      } else {
        if (this._stack.length !== 0) {
          let scene = this._stack.pop();
          if (scene) {
            scene.unloadScene();
          }
        }
      }
      return this.push(newSceneName);
    }
    getCurrentScene() {
      if (this._stack.length === 0) {
        return null;
      }
      return this._stack[this._stack.length - 1];
    }
    wasFirstSceneLoaded() {
      return this._wasFirstSceneLoaded;
    }
  }
  gdjs2.SceneStack = SceneStack;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=scenestack.js.map
