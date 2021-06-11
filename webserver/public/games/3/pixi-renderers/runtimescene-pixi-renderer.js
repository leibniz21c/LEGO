var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class RuntimeScenePixiRenderer {
    constructor(runtimeScene, runtimeGameRenderer) {
      this._debugDraw = null;
      this._debugDrawContainer = null;
      this._profilerText = null;
      this._pixiRenderer = runtimeGameRenderer ? runtimeGameRenderer.getPIXIRenderer() : null;
      this._runtimeScene = runtimeScene;
      this._pixiContainer = new PIXI.Container();
      this._debugDrawRenderedObjectsPoints = {};
      this._pixiContainer.sortableChildren = true;
      this._debugDraw = null;
    }
    onGameResolutionResized() {
      if (!this._pixiRenderer) {
        return;
      }
      const runtimeGame = this._runtimeScene.getGame();
      this._pixiContainer.scale.x = this._pixiRenderer.width / runtimeGame.getGameResolutionWidth();
      this._pixiContainer.scale.y = this._pixiRenderer.height / runtimeGame.getGameResolutionHeight();
    }
    onSceneUnloaded() {
    }
    render() {
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.backgroundColor = this._runtimeScene.getBackgroundColor();
      this._pixiRenderer.render(this._pixiContainer);
    }
    _renderProfileText() {
      const profiler = this._runtimeScene.getProfiler();
      if (!profiler) {
        return;
      }
      if (!this._profilerText) {
        this._profilerText = new PIXI.Text(" ", {
          align: "left",
          stroke: "#FFF",
          strokeThickness: 1
        });
        this._pixiContainer.addChild(this._profilerText);
      }
      const average = profiler.getFramesAverageMeasures();
      const outputs = [];
      gdjs2.Profiler.getProfilerSectionTexts("All", average, outputs);
      this._profilerText.text = outputs.join("\n");
    }
    renderDebugDraw(instances, layersCameraCoordinates, showHiddenInstances, showPointsNames, showCustomPoints) {
      if (!this._debugDraw || !this._debugDrawContainer) {
        this._debugDrawContainer = new PIXI.Container();
        this._debugDraw = new PIXI.Graphics();
        this._debugDrawContainer.addChild(this._debugDraw);
        this._pixiContainer.addChild(this._debugDrawContainer);
      }
      const debugDraw = this._debugDraw;
      for (let id in this._debugDrawRenderedObjectsPoints) {
        this._debugDrawRenderedObjectsPoints[id].wasRendered = false;
      }
      const renderObjectPoint = (points, name, fillColor, x, y) => {
        debugDraw.line.color = fillColor;
        debugDraw.fill.color = fillColor;
        debugDraw.drawCircle(x, y, 3);
        if (showPointsNames) {
          if (!points[name]) {
            points[name] = new PIXI.Text(name, {
              fill: fillColor,
              fontSize: 12
            });
            this._debugDrawContainer.addChild(points[name]);
          }
          points[name].position.set(x, y);
        }
      };
      debugDraw.clear();
      debugDraw.beginFill();
      debugDraw.alpha = 0.8;
      debugDraw.lineStyle(2, 255, 1);
      for (let i = 0; i < instances.length; i++) {
        const object = instances[i];
        const layer = this._runtimeScene.getLayer(object.getLayer());
        if ((!object.isVisible() || !layer.isVisible()) && !showHiddenInstances) {
          continue;
        }
        const rendererObject = object.getRendererObject();
        if (!rendererObject) {
          continue;
        }
        const aabb = object.getAABB();
        debugDraw.fill.alpha = 0.2;
        debugDraw.line.color = 7835368;
        debugDraw.fill.color = 7835368;
        const polygon = [];
        polygon.push.apply(polygon, layer.convertInverseCoords(aabb.min[0], aabb.min[1]));
        polygon.push.apply(polygon, layer.convertInverseCoords(aabb.max[0], aabb.min[1]));
        polygon.push.apply(polygon, layer.convertInverseCoords(aabb.max[0], aabb.max[1]));
        polygon.push.apply(polygon, layer.convertInverseCoords(aabb.min[0], aabb.max[1]));
        debugDraw.drawPolygon(polygon);
      }
      for (let i = 0; i < instances.length; i++) {
        const object = instances[i];
        const layer = this._runtimeScene.getLayer(object.getLayer());
        if ((!object.isVisible() || !layer.isVisible()) && !showHiddenInstances) {
          continue;
        }
        const rendererObject = object.getRendererObject();
        if (!rendererObject) {
          continue;
        }
        const id = object.id;
        if (!this._debugDrawRenderedObjectsPoints[id]) {
          this._debugDrawRenderedObjectsPoints[id] = {
            wasRendered: true,
            points: {}
          };
        }
        const renderedObjectPoints = this._debugDrawRenderedObjectsPoints[id];
        renderedObjectPoints.wasRendered = true;
        const hitboxes = object.getHitBoxes();
        for (let j = 0; j < hitboxes.length; j++) {
          const polygon = [];
          hitboxes[j].vertices.forEach((point) => {
            point = layer.convertInverseCoords(point[0], point[1]);
            polygon.push(point[0]);
            polygon.push(point[1]);
          });
          debugDraw.fill.alpha = 0;
          debugDraw.line.alpha = 0.5;
          debugDraw.line.color = 16711680;
          debugDraw.drawPolygon(polygon);
        }
        debugDraw.fill.alpha = 0.3;
        const centerPointX = object.getDrawableX() + object.getCenterX();
        const centerPointY = object.getDrawableY() + object.getCenterY();
        const centerPoint = layer.convertInverseCoords(centerPointX, centerPointY);
        renderObjectPoint(renderedObjectPoints.points, "Center", 16776960, centerPoint[0], centerPoint[1]);
        let originPoint = [object.getDrawableX(), object.getDrawableY()];
        if (object instanceof gdjs2.SpriteRuntimeObject) {
          originPoint = object.getPointPosition("origin");
        }
        originPoint = layer.convertInverseCoords(originPoint[0], originPoint[1]);
        renderObjectPoint(renderedObjectPoints.points, "Origin", 16711680, originPoint[0], originPoint[1]);
        if (showCustomPoints && object instanceof gdjs2.SpriteRuntimeObject) {
          if (!object._animationFrame)
            continue;
          for (const customPointName in object._animationFrame.points.items) {
            let customPoint = object.getPointPosition(customPointName);
            customPoint = layer.convertInverseCoords(customPoint[0], customPoint[1]);
            renderObjectPoint(renderedObjectPoints.points, customPointName, 255, customPoint[0], customPoint[1]);
          }
        }
      }
      for (const objectID in this._debugDrawRenderedObjectsPoints) {
        const renderedObjectPoints = this._debugDrawRenderedObjectsPoints[objectID];
        if (renderedObjectPoints.wasRendered)
          continue;
        const points = renderedObjectPoints.points;
        for (const name in points) {
          this._debugDrawContainer.removeChild(points[name]);
        }
      }
      debugDraw.endFill();
    }
    clearDebugDraw() {
      if (this._debugDraw) {
        this._debugDraw.clear();
      }
      if (this._debugDrawContainer) {
        this._debugDrawContainer.destroy({
          children: true
        });
        this._pixiContainer.removeChild(this._debugDrawContainer);
      }
      this._debugDraw = null;
      this._debugDrawContainer = null;
      this._debugDrawRenderedObjectsPoints = {};
    }
    hideCursor() {
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.view.style.cursor = "none";
    }
    showCursor() {
      if (!this._pixiRenderer) {
        return;
      }
      this._pixiRenderer.view.style.cursor = "";
    }
    getPIXIContainer() {
      return this._pixiContainer;
    }
    getPIXIRenderer() {
      return this._pixiRenderer;
    }
    setLayerIndex(layer, index) {
      const layerPixiRenderer = layer.getRenderer();
      let layerPixiObject = layerPixiRenderer.getRendererObject();
      if (layer.isLightingLayer()) {
        layerPixiObject = layerPixiRenderer.getLightingSprite();
      }
      if (!layerPixiObject) {
        return;
      }
      if (this._pixiContainer.children.indexOf(layerPixiObject) === index) {
        return;
      }
      this._pixiContainer.removeChild(layerPixiObject);
      this._pixiContainer.addChildAt(layerPixiObject, index);
    }
  }
  gdjs2.RuntimeScenePixiRenderer = RuntimeScenePixiRenderer;
  gdjs2.RuntimeSceneRenderer = gdjs2.RuntimeScenePixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimescene-pixi-renderer.js.map
