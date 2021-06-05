var gdjs;
(function(gdjs2) {
  const HowlParameters = {
    preload: true,
    onplayerror: (_, error) => console.error("Can't play an audio file: ", error),
    onloaderror: (_, error) => console.error("Error while loading an audio file: ", error)
  };
  class HowlerSound {
    constructor(howl) {
      this._id = null;
      this._oncePlay = [];
      this._onPlay = [];
      this._howl = howl;
    }
    isLoaded() {
      return this._howl.state() === "loaded";
    }
    play() {
      if (this.isLoaded()) {
        const newID = this._howl.play(this._id === null ? "__default" : this._id);
        this._id = newID;
        this._onPlay.forEach((func) => {
          this.on("play", func);
          func(newID);
        });
        this._oncePlay.forEach((func) => func(newID));
        this._onPlay = [];
        this._oncePlay = [];
      } else
        this._howl.once("load", () => this.play());
      return this;
    }
    pause() {
      if (this._id !== null)
        this._howl.pause(this._id);
      return this;
    }
    stop() {
      if (this._id !== null)
        this._howl.stop(this._id);
      return this;
    }
    playing() {
      return (this._id !== null ? this._howl.playing(this._id) : true) || !this.isLoaded();
    }
    paused() {
      return !this.playing();
    }
    stopped() {
      return this.paused() && this.getSeek() === 0;
    }
    getRate() {
      if (this._id === null)
        return 0;
      return this._howl.rate(this._id);
    }
    setRate(rate) {
      if (this._id !== null) {
        rate = gdjs2.HowlerSoundManager.clampRate(rate);
        this._howl.rate(rate, this._id);
      }
      return this;
    }
    getLoop() {
      if (this._id === null)
        return false;
      return this._howl.loop(this._id);
    }
    setLoop(loop) {
      if (this._id !== null)
        this._howl.loop(loop, this._id);
      return this;
    }
    getVolume() {
      if (this._id === null)
        return 100;
      return this._howl.volume(this._id);
    }
    setVolume(volume) {
      if (this._id !== null)
        this._howl.volume(volume, this._id);
      return this;
    }
    getMute() {
      if (this._id === null)
        return false;
      return this._howl.mute(this._id);
    }
    setMute(mute) {
      if (this._id !== null)
        this._howl.mute(mute, this._id);
      return this;
    }
    getSeek() {
      if (this._id === null)
        return 0;
      return this._howl.seek(this._id);
    }
    setSeek(seek) {
      if (this._id !== null)
        this._howl.seek(seek, this._id);
      return this;
    }
    getSpatialPosition(axis) {
      if (this._id === null)
        return 0;
      return this._howl.pos(this._id)[axis === "x" ? 0 : axis === "y" ? 1 : 2];
    }
    setSpatialPosition(x, y, z) {
      if (this._id !== null)
        this._howl.pos(x, y, z, this._id);
      return this;
    }
    fade(from, to, duration) {
      if (this._id !== null)
        this._howl.fade(from, to, duration, this._id);
      return this;
    }
    on(event, handler) {
      if (event === "play") {
        if (this._id === null) {
          this._onPlay.push(handler);
        } else {
          this._howl.on(event, handler, this._id);
        }
      } else if (this._id === null)
        this.once("play", () => this.on(event, handler));
      else
        this._howl.on(event, handler, this._id);
      return this;
    }
    once(event, handler) {
      if (event === "play") {
        if (this._id === null) {
          this._oncePlay.push(handler);
        } else if (this.playing()) {
          handler(this._id);
        } else {
          this._howl.once(event, handler, this._id);
        }
      } else if (this._id === null)
        this.once("play", () => this.once(event, handler));
      else
        this._howl.once(event, handler, this._id);
      return this;
    }
    off(event, handler) {
      if (this._id !== null)
        this._howl.off(event, handler, this._id);
      return this;
    }
  }
  gdjs2.HowlerSound = HowlerSound;
  class HowlerSoundManager {
    constructor(resources) {
      this._loadedMusics = {};
      this._loadedSounds = {};
      this._availableResources = {};
      this._globalVolume = 100;
      this._sounds = {};
      this._musics = {};
      this._freeSounds = [];
      this._freeMusics = [];
      this._pausedSounds = [];
      this._paused = false;
      this._resources = resources;
      const that = this;
      document.addEventListener("deviceready", function() {
        document.addEventListener("pause", function() {
          const soundList = that._freeSounds.concat(that._freeMusics);
          for (let key in that._sounds) {
            if (that._sounds.hasOwnProperty(key)) {
              soundList.push(that._sounds[key]);
            }
          }
          for (let key in that._musics) {
            if (that._musics.hasOwnProperty(key)) {
              soundList.push(that._musics[key]);
            }
          }
          for (let i = 0; i < soundList.length; i++) {
            const sound = soundList[i];
            if (!sound.paused() && !sound.stopped()) {
              sound.pause();
              that._pausedSounds.push(sound);
            }
          }
          that._paused = true;
        }, false);
        document.addEventListener("resume", function() {
          for (let i = 0; i < that._pausedSounds.length; i++) {
            const sound = that._pausedSounds[i];
            if (!sound.stopped()) {
              sound.play();
            }
          }
          that._pausedSounds.length = 0;
          that._paused = false;
        }, false);
      });
    }
    setResources(resources) {
      this._resources = resources;
    }
    static clampRate(rate) {
      if (rate > 4) {
        return 4;
      }
      if (rate < 0.5) {
        return 0.5;
      }
      return rate;
    }
    _getFileFromSoundName(soundName) {
      if (this._availableResources.hasOwnProperty(soundName) && this._availableResources[soundName].file) {
        return this._availableResources[soundName].file;
      }
      return soundName;
    }
    _storeSoundInArray(arr, sound) {
      for (var i = 0, len = arr.length; i < len; ++i) {
        if (arr[i] !== null && arr[i].stopped()) {
          arr[i] = sound;
          return sound;
        }
      }
      arr.push(sound);
      return sound;
    }
    createHowlerSound(soundName, isMusic) {
      const soundFile = this._getFileFromSoundName(soundName);
      const cacheContainer = isMusic ? this._loadedMusics : this._loadedSounds;
      if (!cacheContainer.hasOwnProperty(soundFile)) {
        cacheContainer[soundFile] = new Howl(Object.assign({
          src: [soundFile],
          html5: isMusic
        }, HowlParameters));
      }
      return new gdjs2.HowlerSound(cacheContainer[soundFile]);
    }
    loadAudio(soundName, isMusic) {
      const soundFile = this._getFileFromSoundName(soundName);
      const cacheContainer = isMusic ? this._loadedMusics : this._loadedSounds;
      if (cacheContainer.hasOwnProperty(soundFile))
        return;
      cacheContainer[soundFile] = new Howl(Object.assign({
        src: [soundFile],
        html5: isMusic
      }, HowlParameters));
    }
    unloadAudio(soundName, isMusic) {
      const soundFile = this._getFileFromSoundName(soundName);
      const cacheContainer = isMusic ? this._loadedMusics : this._loadedSounds;
      if (!cacheContainer[soundFile])
        return;
      const howl = cacheContainer[soundFile];
      function clearContainer(howlerSoundContainer) {
        for (let i in howlerSoundContainer) {
          if (howlerSoundContainer[i] && howlerSoundContainer[i]._howl === howl) {
            howlerSoundContainer[i].stop();
            delete howlerSoundContainer[i];
          }
        }
      }
      clearContainer(this._freeMusics);
      clearContainer(this._freeSounds);
      clearContainer(Object.values(this._musics));
      clearContainer(Object.values(this._sounds));
      clearContainer(this._pausedSounds);
      cacheContainer[soundFile].unload();
      delete cacheContainer[soundFile];
    }
    unloadAll() {
      Howler.unload();
      this._freeSounds.length = 0;
      this._freeMusics.length = 0;
      this._sounds = {};
      this._musics = {};
      this._pausedSounds.length = 0;
      this._loadedMusics = {};
      this._loadedSounds = {};
    }
    playSound(soundName, loop, volume, pitch) {
      var sound = this.createHowlerSound(soundName, false);
      this._storeSoundInArray(this._freeSounds, sound).play();
      sound.once("play", () => {
        sound.setLoop(loop).setVolume(volume / 100).setRate(pitch);
        if (this._paused) {
          sound.pause();
          this._pausedSounds.push(sound);
        }
      });
    }
    playSoundOnChannel(soundName, channel, loop, volume, pitch) {
      if (this._sounds[channel])
        this._sounds[channel].stop();
      var sound = this.createHowlerSound(soundName, false).play();
      this._sounds[channel] = sound;
      sound.once("play", () => {
        sound.setLoop(loop).setVolume(volume / 100).setRate(pitch);
        if (this._paused) {
          sound.pause();
          this._pausedSounds.push(sound);
        }
      });
    }
    getSoundOnChannel(channel) {
      return this._sounds[channel];
    }
    playMusic(soundName, loop, volume, pitch) {
      var music = this.createHowlerSound(soundName, true);
      this._storeSoundInArray(this._freeMusics, music).play();
      music.once("play", () => {
        music.setLoop(loop).setVolume(volume / 100).setRate(pitch);
        if (this._paused) {
          music.pause();
          this._pausedSounds.push(music);
        }
      });
    }
    playMusicOnChannel(soundName, channel, loop, volume, pitch) {
      if (this._musics[channel])
        this._musics[channel].stop();
      const music = this.createHowlerSound(soundName, true).play();
      this._musics[channel] = music;
      music.once("play", () => {
        music.setLoop(loop).setVolume(volume / 100).setRate(pitch);
        if (this._paused) {
          music.pause();
          this._pausedSounds.push(music);
        }
      });
    }
    getMusicOnChannel(channel) {
      return this._musics[channel];
    }
    setGlobalVolume(volume) {
      this._globalVolume = volume;
      if (this._globalVolume > 100) {
        this._globalVolume = 100;
      }
      if (this._globalVolume < 0) {
        this._globalVolume = 0;
      }
      Howler.volume(this._globalVolume / 100);
    }
    getGlobalVolume() {
      return this._globalVolume;
    }
    clearAll() {
      Howler.stop();
      this._freeSounds.length = 0;
      this._freeMusics.length = 0;
      this._sounds = {};
      this._musics = {};
      this._pausedSounds.length = 0;
    }
    preloadAudio(onProgress, onComplete, resources) {
      resources = resources || this._resources;
      const files = {};
      for (var i = 0, len = resources.length; i < len; ++i) {
        let res = resources[i];
        if (res.file && res.kind === "audio") {
          if (!!this._availableResources[res.name]) {
            continue;
          }
          this._availableResources[res.name] = res;
          files[res.file] = (files[res.file] || []).concat(res);
        }
      }
      const totalCount = Object.keys(files).length;
      if (totalCount === 0)
        return onComplete(totalCount);
      let loadedCount = 0;
      const onLoad = (_, error) => {
        if (error)
          console.error("There was an error while loading an audio file:", error);
        loadedCount++;
        if (loadedCount === totalCount)
          return onComplete(totalCount);
        onProgress(loadedCount, totalCount);
      };
      const preloadAudioFile = (file, onLoadCallback, isMusic) => {
        const container = isMusic ? this._loadedMusics : this._loadedSounds;
        container[file] = new Howl(Object.assign({}, HowlParameters, {
          src: [file],
          onload: onLoadCallback,
          onloaderror: onLoadCallback,
          html5: isMusic
        }));
      };
      for (let file in files) {
        if (files.hasOwnProperty(file)) {
          const fileData = files[file][0];
          if (!fileData.preloadAsSound && !fileData.preloadAsMusic) {
            onLoad();
          } else if (fileData.preloadAsSound && fileData.preloadAsMusic) {
            let loadedOnce = false;
            const callback = (_, error) => {
              if (!loadedOnce) {
                loadedOnce = true;
                return;
              }
              onLoad(_, error);
            };
            preloadAudioFile(file, callback, true);
            preloadAudioFile(file, callback, false);
          } else if (fileData.preloadAsSound) {
            preloadAudioFile(file, onLoad, false);
          } else if (fileData.preloadAsMusic)
            preloadAudioFile(file, onLoad, true);
        }
      }
    }
  }
  gdjs2.HowlerSoundManager = HowlerSoundManager;
  gdjs2.SoundManager = HowlerSoundManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=howler-sound-manager.js.map
