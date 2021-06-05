var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  class ParticleEmitterObjectPixiRenderer {
    constructor(runtimeScene, runtimeObject, objectData) {
      this.started = false;
      this.emitterLifetime = 0;
      let texture = null;
      const graphics = new PIXI.Graphics();
      graphics.lineStyle(0, 0, 0);
      graphics.beginFill(gdjs2.rgbToHexNumber(255, 255, 255), 1);
      if (objectData.rendererType === "Point") {
        graphics.drawCircle(0, 0, objectData.rendererParam1);
      } else if (objectData.rendererType === "Line") {
        graphics.drawRect(objectData.rendererParam1, 0, objectData.rendererParam1, objectData.rendererParam2);
        graphics.beginFill(gdjs2.rgbToHexNumber(255, 255, 255), 1e-3);
        graphics.drawRect(0, 0, objectData.rendererParam1, objectData.rendererParam2);
      } else if (objectData.textureParticleName) {
        const sprite = new PIXI.Sprite(runtimeScene.getGame().getImageManager().getPIXITexture(objectData.textureParticleName));
        sprite.width = objectData.rendererParam1;
        sprite.height = objectData.rendererParam2;
        graphics.addChild(sprite);
      } else {
        graphics.drawRect(0, 0, objectData.rendererParam1, objectData.rendererParam2);
      }
      graphics.endFill();
      const pixiRenderer = runtimeScene.getGame().getRenderer().getPIXIRenderer();
      texture = pixiRenderer.generateTexture(graphics);
      const config = {
        color: {
          list: [
            {
              value: gdjs2.rgbToHexNumber(objectData.particleRed1, objectData.particleGreen1, objectData.particleBlue1).toString(16),
              time: 0
            },
            {
              value: gdjs2.rgbToHexNumber(objectData.particleRed2, objectData.particleGreen2, objectData.particleBlue2).toString(16),
              time: 1
            }
          ],
          isStepped: false
        },
        acceleration: {
          x: objectData.particleGravityX,
          y: objectData.particleGravityY
        },
        lifetime: {
          min: objectData.particleLifeTimeMin,
          max: objectData.particleLifeTimeMax
        },
        frequency: objectData.flow < 0 ? 1e-4 : 1 / objectData.flow,
        spawnChance: 1,
        particlesPerWave: objectData.flow < 0 ? objectData.maxParticleNb : 1,
        maxParticles: objectData.maxParticleNb,
        emitterLifetime: objectData.tank < 0 ? -1 : objectData.flow < 0 ? 1e-3 : objectData.tank / objectData.flow,
        pos: {x: 0, y: 0},
        addAtBack: false,
        spawnType: "circle",
        spawnCircle: {x: 0, y: 0, r: objectData.zoneRadius}
      };
      config.speed = {
        list: [{time: 0, value: objectData.emitterForceMax}],
        minimumSpeedMultiplier: objectData.emitterForceMax !== 0 ? objectData.emitterForceMin / objectData.emitterForceMax : 1,
        isStepped: false
      };
      if (objectData.alphaParam === "Mutable") {
        config.alpha = {
          list: [
            {time: 0, value: objectData.particleAlpha1 / 255},
            {time: 1, value: objectData.particleAlpha2 / 255}
          ],
          isStepped: false
        };
      } else {
        config.alpha = {
          list: [{time: 0, value: objectData.particleAlpha1 / 255}],
          isStepped: false
        };
      }
      if (objectData.sizeParam === "Mutable") {
        let size1 = objectData.particleSize1 / 100;
        let size2 = objectData.particleSize2 / 100;
        const sizeRandom1 = objectData.particleSizeRandomness1 / 100;
        const sizeRandom2 = objectData.particleSizeRandomness2 / 100;
        const m = sizeRandom2 !== 0 ? (1 + sizeRandom1) / (1 + sizeRandom2) : 1;
        config.scale = {
          list: [
            {time: 0, value: size1 * (1 + sizeRandom1)},
            {time: 1, value: size2 * (1 + sizeRandom2)}
          ],
          minimumScaleMultiplier: m,
          isStepped: false
        };
      } else {
        let size1 = objectData.particleSize1 / 100;
        let size2 = objectData.particleSize2 / 100;
        let mult = size2 !== 0 ? (1 + size1) / (1 + size2) : 1;
        if (size2 === 0 && size1 > size2) {
          mult = (1 + size2) / (1 + size1);
          size2 = size1;
        }
        config.scale = {
          list: [{time: 0, value: size2}],
          minimumScaleMultiplier: mult,
          isStepped: false
        };
      }
      if (objectData.emissionEditionSimpleMode) {
        config.startRotation = {
          min: -objectData.emitterAngleB / 2,
          max: objectData.emitterAngleB / 2
        };
      } else {
        config.startRotation = {
          min: objectData.emitterAngleA,
          max: objectData.emitterAngleB
        };
      }
      const mediumLifetime = (objectData.particleLifeTimeMin + objectData.particleLifeTimeMax) / 2;
      config.rotationSpeed = {
        min: objectData.particleAngle1 / mediumLifetime,
        max: objectData.particleAngle2 / mediumLifetime
      };
      config.blendMode = objectData.additive ? "ADD" : "NORMAL";
      this.renderer = new PIXI.Container();
      this.emitter = new PIXI.particles.Emitter(this.renderer, texture, config);
      this.emitter.emit = true;
      const layer = runtimeScene.getLayer(runtimeObject.getLayer());
      if (layer) {
        layer.getRenderer().addRendererObject(this.renderer, runtimeObject.getZOrder());
      }
    }
    getRendererObject() {
      return this.renderer;
    }
    update(delta) {
      this.emitter.update(delta);
      if (!this.started && this.getParticleCount() > 0) {
        this.started = true;
      }
    }
    setPosition(x, y) {
      this.emitter.spawnPos.x = x;
      this.emitter.spawnPos.y = y;
    }
    setAngle(angle1, angle2) {
      this.emitter.minStartRotation = angle1;
      this.emitter.maxStartRotation = angle2;
    }
    setForce(min, max) {
      this.emitter.startSpeed.value = max;
      this.emitter.minimumSpeedMultiplier = max !== 0 ? min / max : 1;
    }
    setZoneRadius(radius) {
      this.emitter.spawnCircle.radius = radius;
    }
    setLifeTime(min, max) {
      this.emitter.minLifetime = min;
      this.emitter.maxLifetime = max;
    }
    setGravity(x, y) {
      this.emitter.acceleration.x = x;
      this.emitter.acceleration.y = y;
    }
    setColor(r1, g1, b1, r2, g2, b2) {
      this.emitter.startColor.value.r = r1;
      this.emitter.startColor.value.g = g1;
      this.emitter.startColor.value.b = b1;
      this.emitter.startColor.next = this.emitter.startColor.next || {
        time: 1,
        value: {}
      };
      this.emitter.startColor.next.value.r = r2;
      this.emitter.startColor.next.value.g = g2;
      this.emitter.startColor.next.value.b = b2;
    }
    setSize(size1, size2) {
      this.emitter.startScale.value = size1 / 100;
      if (this.emitter.startScale.next) {
        this.emitter.startScale.next.value = size2 / 100;
      }
    }
    setAlpha(alpha1, alpha2) {
      this.emitter.startAlpha.value = alpha1 / 255;
      if (this.emitter.startAlpha.next) {
        this.emitter.startAlpha.next.value = alpha2 / 255;
      }
    }
    setFlow(flow, tank) {
      this.emitter.frequency = flow < 0 ? 1e-4 : 1 / flow;
      this.emitterLifetime = tank < 0 ? -1 : flow < 0 ? 1e-3 : (tank - this.emitter.totalParticleCount) / flow;
    }
    isTextureNameValid(texture, runtimeScene) {
      const invalidPixiTexture = runtimeScene.getGame().getImageManager().getInvalidPIXITexture();
      const pixiTexture = runtimeScene.getGame().getImageManager().getPIXITexture(texture);
      return pixiTexture.valid && pixiTexture !== invalidPixiTexture;
    }
    setTextureName(texture, runtimeScene) {
      const invalidPixiTexture = runtimeScene.getGame().getImageManager().getInvalidPIXITexture();
      const pixiTexture = runtimeScene.getGame().getImageManager().getPIXITexture(texture);
      if (pixiTexture.valid && pixiTexture !== invalidPixiTexture) {
        this.emitter.particleImages[0] = pixiTexture;
      }
    }
    getTotalParticleCount() {
      return this.emitter.totalParticleCount;
    }
    getParticleCount() {
      return this.emitter.particleCount;
    }
    stop() {
      this.emitter.emit = false;
    }
    recreate() {
      this.emitter.cleanup();
    }
    destroy() {
      this.emitter.destroy();
    }
    hasStarted() {
      return this.started;
    }
  }
  gdjs2.ParticleEmitterObjectPixiRenderer = ParticleEmitterObjectPixiRenderer;
  gdjs2.ParticleEmitterObjectRenderer = ParticleEmitterObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=particleemitterobject-pixi-renderer.js.map
