var gdjs;
(function(gdjs2) {
  class ParticleEmitterObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, particleObjectData) {
      super(runtimeScene, particleObjectData);
      this._posDirty = true;
      this._angleDirty = true;
      this._forceDirty = true;
      this._zoneRadiusDirty = true;
      this._lifeTimeDirty = true;
      this._gravityDirty = true;
      this._colorDirty = true;
      this._sizeDirty = true;
      this._alphaDirty = true;
      this._flowDirty = true;
      this._renderer = new gdjs2.ParticleEmitterObjectRenderer(runtimeScene, this, particleObjectData);
      this.singleAngle = particleObjectData.emissionEditionSimpleMode;
      this.angleA = particleObjectData.emitterAngleA;
      this.angleB = particleObjectData.emitterAngleB;
      this.forceMin = particleObjectData.emitterForceMin;
      this.forceMax = particleObjectData.emitterForceMax;
      this.zoneRadius = particleObjectData.zoneRadius;
      this.lifeTimeMin = particleObjectData.particleLifeTimeMin;
      this.lifeTimeMax = particleObjectData.particleLifeTimeMax;
      this.gravityX = particleObjectData.particleGravityX;
      this.gravityY = particleObjectData.particleGravityY;
      this.colorR1 = particleObjectData.particleRed1;
      this.colorR2 = particleObjectData.particleRed2;
      this.colorG1 = particleObjectData.particleGreen1;
      this.colorG2 = particleObjectData.particleGreen2;
      this.colorB1 = particleObjectData.particleBlue1;
      this.colorB2 = particleObjectData.particleBlue2;
      this.size1 = particleObjectData.particleSize1;
      this.size2 = particleObjectData.particleSize2;
      this.sizeParam = particleObjectData.sizeParam;
      this.alpha1 = particleObjectData.particleAlpha1;
      this.alpha2 = particleObjectData.particleAlpha2;
      this.rendererType = particleObjectData.rendererType;
      this.rendererParam1 = particleObjectData.rendererParam1;
      this.rendererParam2 = particleObjectData.rendererParam2;
      this.texture = particleObjectData.textureParticleName;
      this.flow = particleObjectData.flow;
      this.tank = particleObjectData.tank;
      this.destroyWhenNoParticles = particleObjectData.destroyWhenNoParticles;
      this._textureDirty = this.texture !== "";
      this.onCreated();
    }
    setX(x) {
      if (this.x !== x) {
        this._posDirty = true;
      }
      super.setX(x);
    }
    setY(y) {
      if (this.y !== y) {
        this._posDirty = true;
      }
      super.setY(y);
    }
    setAngle(angle) {
      if (this.angle !== angle) {
        this._angleDirty = true;
      }
      super.setAngle(angle);
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      if (oldObjectData.emissionEditionSimpleMode !== newObjectData.emissionEditionSimpleMode) {
        this.singleAngle = newObjectData.emissionEditionSimpleMode;
        this._angleDirty = true;
      }
      if (oldObjectData.emitterAngleA !== newObjectData.emitterAngleA) {
        this.setEmitterAngleA(newObjectData.emitterAngleA);
      }
      if (oldObjectData.emitterAngleB !== newObjectData.emitterAngleB) {
        this.setEmitterAngleB(newObjectData.emitterAngleB);
      }
      if (oldObjectData.emitterForceMin !== newObjectData.emitterForceMin) {
        this.setEmitterForceMin(newObjectData.emitterForceMin);
      }
      if (oldObjectData.emitterForceMax !== newObjectData.emitterForceMax) {
        this.setEmitterForceMax(newObjectData.emitterForceMax);
      }
      if (oldObjectData.zoneRadius !== newObjectData.zoneRadius) {
        this.setZoneRadius(newObjectData.zoneRadius);
      }
      if (oldObjectData.particleLifeTimeMin !== newObjectData.particleLifeTimeMin) {
        this.setParticleLifeTimeMin(newObjectData.particleLifeTimeMin);
      }
      if (oldObjectData.particleLifeTimeMax !== newObjectData.particleLifeTimeMax) {
        this.setParticleLifeTimeMax(newObjectData.particleLifeTimeMax);
      }
      if (oldObjectData.particleGravityX !== newObjectData.particleGravityX) {
        this.setParticleGravityX(newObjectData.particleGravityX);
      }
      if (oldObjectData.particleGravityY !== newObjectData.particleGravityY) {
        this.setParticleGravityY(newObjectData.particleGravityY);
      }
      if (oldObjectData.particleRed1 !== newObjectData.particleRed1) {
        this.setParticleRed1(newObjectData.particleRed1);
      }
      if (oldObjectData.particleRed2 !== newObjectData.particleRed2) {
        this.setParticleRed2(newObjectData.particleRed2);
      }
      if (oldObjectData.particleGreen1 !== newObjectData.particleGreen1) {
        this.setParticleGreen1(newObjectData.particleGreen1);
      }
      if (oldObjectData.particleGreen2 !== newObjectData.particleGreen2) {
        this.setParticleGreen2(newObjectData.particleGreen2);
      }
      if (oldObjectData.particleBlue1 !== newObjectData.particleBlue1) {
        this.setParticleBlue1(newObjectData.particleBlue1);
      }
      if (oldObjectData.particleBlue2 !== newObjectData.particleBlue2) {
        this.setParticleBlue2(newObjectData.particleBlue2);
      }
      if (oldObjectData.particleSize1 !== newObjectData.particleSize1) {
        this.setParticleSize1(newObjectData.particleSize1);
      }
      if (oldObjectData.particleSize2 !== newObjectData.particleSize2) {
        this.setParticleSize2(newObjectData.particleSize2);
      }
      if (oldObjectData.sizeParam !== newObjectData.sizeParam) {
        this.sizeParam = newObjectData.sizeParam;
        this._sizeDirty = true;
      }
      if (oldObjectData.particleAlpha1 !== newObjectData.particleAlpha1) {
        this.setParticleAlpha1(newObjectData.particleAlpha1);
      }
      if (oldObjectData.particleAlpha2 !== newObjectData.particleAlpha2) {
        this.setParticleAlpha2(newObjectData.particleAlpha2);
      }
      if (oldObjectData.textureParticleName !== newObjectData.textureParticleName) {
        this.setTexture(newObjectData.textureParticleName, this._runtimeScene);
      }
      if (oldObjectData.flow !== newObjectData.flow) {
        this.setFlow(newObjectData.flow);
      }
      if (oldObjectData.tank !== newObjectData.tank) {
        this.setTank(newObjectData.tank);
      }
      if (oldObjectData.destroyWhenNoParticles !== newObjectData.destroyWhenNoParticles) {
        this.destroyWhenNoParticles = newObjectData.destroyWhenNoParticles;
      }
      if (oldObjectData.particleSizeRandomness1 !== newObjectData.particleSizeRandomness1 || oldObjectData.particleSizeRandomness2 !== newObjectData.particleSizeRandomness2 || oldObjectData.particleAngle1 !== newObjectData.particleAngle1 || oldObjectData.particleAngle2 !== newObjectData.particleAngle2 || oldObjectData.maxParticleNb !== newObjectData.maxParticleNb || oldObjectData.additive !== newObjectData.additive || oldObjectData.rendererType !== newObjectData.rendererType || oldObjectData.rendererParam1 !== newObjectData.rendererParam1 || oldObjectData.rendererParam2 !== newObjectData.rendererParam2) {
        const layer = this._runtimeScene.getLayer(this.layer);
        layer.getRenderer().removeRendererObject(this._renderer.getRendererObject());
        this._renderer.destroy();
        this._renderer = new gdjs2.ParticleEmitterObjectRenderer(this._runtimeScene, this, newObjectData);
        this._posDirty = this._angleDirty = this._forceDirty = this._zoneRadiusDirty = true;
        this._lifeTimeDirty = this._gravityDirty = this._colorDirty = this._sizeDirty = true;
        this._alphaDirty = this._flowDirty = this._textureDirty = true;
      }
      return true;
    }
    update(runtimeScene) {
      if (this._posDirty) {
        this._renderer.setPosition(this.getX(), this.getY());
      }
      if (this._angleDirty) {
        const angle = this.getAngle();
        if (this.singleAngle) {
          this._renderer.setAngle(this.angle - this.angleB / 2, this.angle + this.angleB / 2);
        } else {
          this._renderer.setAngle(this.angle + this.angleA, this.angle + this.angleB);
        }
      }
      if (this._forceDirty) {
        this._renderer.setForce(this.forceMin, this.forceMax);
      }
      if (this._zoneRadiusDirty) {
        this._renderer.setZoneRadius(this.zoneRadius);
      }
      if (this._lifeTimeDirty) {
        this._renderer.setLifeTime(this.lifeTimeMin, this.lifeTimeMax);
      }
      if (this._gravityDirty) {
        this._renderer.setGravity(this.gravityX, this.gravityY);
      }
      if (this._colorDirty) {
        this._renderer.setColor(this.colorR1, this.colorG1, this.colorB1, this.colorR2, this.colorG2, this.colorB2);
      }
      if (this._sizeDirty && this.sizeParam === "Mutable") {
        this._renderer.setSize(this.size1, this.size2);
      }
      if (this._alphaDirty) {
        this._renderer.setAlpha(this.alpha1, this.alpha2);
      }
      if (this._flowDirty) {
        this._renderer.setFlow(this.flow, this.tank);
      }
      if (this._textureDirty) {
        this._renderer.setTextureName(this.texture, runtimeScene);
      }
      this._posDirty = this._angleDirty = this._forceDirty = this._zoneRadiusDirty = false;
      this._lifeTimeDirty = this._gravityDirty = this._colorDirty = this._sizeDirty = false;
      this._alphaDirty = this._flowDirty = this._textureDirty = false;
      this._renderer.update(this.getElapsedTime(runtimeScene) / 1e3);
      if (this.tank > 0 && this._renderer.getTotalParticleCount() > this.tank) {
        this._renderer.stop();
      }
      if (this._renderer.hasStarted() && this._renderer.getParticleCount() === 0 && this.destroyWhenNoParticles) {
        this.deleteFromScene(runtimeScene);
      }
    }
    onDestroyFromScene(runtimeScene) {
      this._renderer.destroy();
      super.onDestroyFromScene(runtimeScene);
    }
    getEmitterForceMin() {
      return this.forceMin;
    }
    setEmitterForceMin(force) {
      if (force < 0) {
        force = 0;
      }
      if (this.forceMin !== force) {
        this._forceDirty = true;
        this.forceMin = force;
      }
    }
    getEmitterForceMax() {
      return this.forceMax;
    }
    setEmitterForceMax(force) {
      if (force < 0) {
        force = 0;
      }
      if (this.forceMax !== force) {
        this._forceDirty = true;
        this.forceMax = force;
      }
    }
    getEmitterAngle() {
      return (this.angleA + this.angleB) / 2;
    }
    setEmitterAngle(angle) {
      const oldAngle = this.getEmitterAngle();
      if (angle !== oldAngle) {
        this._angleDirty = true;
        this.angleA += angle - oldAngle;
        this.angleB += angle - oldAngle;
      }
    }
    getEmitterAngleA() {
      return this.angleA;
    }
    setEmitterAngleA(angle) {
      if (this.angleA !== angle) {
        this._angleDirty = true;
        this.angleA = angle;
      }
    }
    getEmitterAngleB() {
      return this.angleB;
    }
    setEmitterAngleB(angle) {
      if (this.angleB !== angle) {
        this._angleDirty = true;
        this.angleB = angle;
      }
    }
    getConeSprayAngle() {
      return Math.abs(this.angleB - this.angleA);
    }
    setConeSprayAngle(angle) {
      const oldCone = this.getConeSprayAngle();
      if (oldCone !== angle) {
        this._angleDirty = true;
        const midAngle = this.getEmitterAngle();
        this.angleA = midAngle - angle / 2;
        this.angleB = midAngle + angle / 2;
      }
    }
    getZoneRadius() {
      return this.zoneRadius;
    }
    setZoneRadius(radius) {
      if (radius < 0) {
        radius = 0;
      }
      if (this.zoneRadius !== radius && radius > 0) {
        this._zoneRadiusDirty = true;
        this.zoneRadius = radius;
      }
    }
    getParticleLifeTimeMin() {
      return this.lifeTimeMin;
    }
    setParticleLifeTimeMin(lifeTime) {
      if (lifeTime < 0) {
        lifeTime = 0;
      }
      if (this.lifeTimeMin !== lifeTime) {
        this._lifeTimeDirty = true;
        this.lifeTimeMin = lifeTime;
      }
    }
    getParticleLifeTimeMax() {
      return this.lifeTimeMax;
    }
    setParticleLifeTimeMax(lifeTime) {
      if (lifeTime < 0) {
        lifeTime = 0;
      }
      if (this.lifeTimeMax !== lifeTime) {
        this._lifeTimeDirty = true;
        this.lifeTimeMax = lifeTime;
      }
    }
    getParticleGravityX() {
      return this.gravityX;
    }
    setParticleGravityX(x) {
      if (this.gravityX !== x) {
        this._gravityDirty = true;
        this.gravityX = x;
      }
    }
    getParticleGravityY() {
      return this.gravityY;
    }
    setParticleGravityY(y) {
      if (this.gravityY !== y) {
        this._gravityDirty = true;
        this.gravityY = y;
      }
    }
    getParticleGravityAngle() {
      return Math.atan2(this.gravityY, this.gravityX) * 180 / Math.PI;
    }
    setParticleGravityAngle(angle) {
      const oldAngle = this.getParticleGravityAngle();
      if (oldAngle !== angle) {
        this._gravityDirty = true;
        const length = this.getParticleGravityLength();
        this.gravityX = length * Math.cos(angle * Math.PI / 180);
        this.gravityY = length * Math.sin(angle * Math.PI / 180);
      }
    }
    getParticleGravityLength() {
      return Math.sqrt(this.gravityX * this.gravityX + this.gravityY * this.gravityY);
    }
    setParticleGravityLength(length) {
      if (length < 0) {
        length = 0;
      }
      const oldLength = this.getParticleGravityLength();
      if (oldLength !== length) {
        this._gravityDirty = true;
        this.gravityX *= length / oldLength;
        this.gravityY *= length / oldLength;
      }
    }
    getParticleRed1() {
      return this.colorR1;
    }
    setParticleRed1(red) {
      if (red < 0) {
        red = 0;
      }
      if (red > 255) {
        red = 255;
      }
      if (this.colorR1 !== red) {
        this._colorDirty = true;
        this.colorR1 = red;
      }
    }
    getParticleRed2() {
      return this.colorR2;
    }
    setParticleRed2(red) {
      if (red < 0) {
        red = 0;
      }
      if (red > 255) {
        red = 255;
      }
      if (this.colorR2 !== red) {
        this._colorDirty = true;
        this.colorR2 = red;
      }
    }
    getParticleGreen1() {
      return this.colorG1;
    }
    setParticleGreen1(green) {
      if (green < 0) {
        green = 0;
      }
      if (green > 255) {
        green = 255;
      }
      if (this.colorG1 !== green) {
        this._colorDirty = true;
        this.colorG1 = green;
      }
    }
    getParticleGreen2() {
      return this.colorG2;
    }
    setParticleGreen2(green) {
      if (green < 0) {
        green = 0;
      }
      if (green > 255) {
        green = 255;
      }
      if (this.colorG2 !== green) {
        this._colorDirty = true;
        this.colorG2 = green;
      }
    }
    getParticleBlue1() {
      return this.colorB1;
    }
    setParticleBlue1(blue) {
      if (blue < 0) {
        blue = 0;
      }
      if (blue > 255) {
        blue = 255;
      }
      if (this.colorB1 !== blue) {
        this._colorDirty = true;
        this.colorB1 = blue;
      }
    }
    getParticleBlue2() {
      return this.colorB2;
    }
    setParticleBlue2(blue) {
      if (blue < 0) {
        blue = 0;
      }
      if (blue > 255) {
        blue = 255;
      }
      if (this.colorB2 !== blue) {
        this._colorDirty = true;
        this.colorB2 = blue;
      }
    }
    setParticleColor1(rgbColor) {
      const colors = rgbColor.split(";");
      if (colors.length < 3) {
        return;
      }
      this.setParticleRed1(parseInt(colors[0], 10));
      this.setParticleGreen1(parseInt(colors[1], 10));
      this.setParticleBlue1(parseInt(colors[2], 10));
    }
    setParticleColor2(rgbColor) {
      const colors = rgbColor.split(";");
      if (colors.length < 3) {
        return;
      }
      this.setParticleRed2(parseInt(colors[0], 10));
      this.setParticleGreen2(parseInt(colors[1], 10));
      this.setParticleBlue2(parseInt(colors[2], 10));
    }
    getParticleSize1() {
      return this.size1;
    }
    setParticleSize1(size) {
      if (size < 0) {
        size = 0;
      }
      if (this.size1 !== size) {
        this._sizeDirty = true;
        this.size1 = size;
      }
    }
    getParticleSize2() {
      return this.size2;
    }
    setParticleSize2(size) {
      if (this.size2 !== size) {
        this._sizeDirty = true;
        this.size2 = size;
      }
    }
    getParticleAlpha1() {
      return this.alpha1;
    }
    setParticleAlpha1(alpha) {
      if (this.alpha1 !== alpha) {
        this._alphaDirty = true;
        this.alpha1 = alpha;
      }
    }
    getParticleAlpha2() {
      return this.alpha2;
    }
    setParticleAlpha2(alpha) {
      if (this.alpha2 !== alpha) {
        this._alphaDirty = true;
        this.alpha2 = alpha;
      }
    }
    noMoreParticles() {
      this._renderer.stop();
    }
    recreateParticleSystem() {
      this._renderer.recreate();
    }
    getFlow() {
      return this.flow;
    }
    setFlow(flow) {
      if (this.flow !== flow) {
        this.flow = flow;
        this._flowDirty = true;
      }
    }
    getParticleCount() {
      return this._renderer.getParticleCount();
    }
    getTank() {
      return this.tank;
    }
    setTank(tank) {
      this.tank = tank;
    }
    getTexture() {
      return this.texture;
    }
    setTexture(texture, runtimeScene) {
      if (this.texture !== texture) {
        if (this._renderer.isTextureNameValid(texture, runtimeScene)) {
          this.texture = texture;
          this._textureDirty = true;
        }
      }
    }
  }
  gdjs2.ParticleEmitterObject = ParticleEmitterObject;
  gdjs2.registerObject("ParticleSystem::ParticleEmitter", gdjs2.ParticleEmitterObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=particleemitterobject.js.map
