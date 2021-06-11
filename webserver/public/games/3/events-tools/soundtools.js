var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let sound;
    (function(sound2) {
      sound2.getGlobalVolume = function(runtimeScene) {
        return runtimeScene.getSoundManager().getGlobalVolume();
      };
      sound2.setGlobalVolume = function(runtimeScene, globalVolume) {
        runtimeScene.getSoundManager().setGlobalVolume(globalVolume);
      };
      sound2.unloadAllAudio = function(runtimeScene) {
        runtimeScene.getSoundManager().unloadAll();
      };
      sound2.playSound = function(runtimeScene, soundFile, loop, volume, pitch) {
        runtimeScene.getSoundManager().playSound(soundFile, loop, volume, pitch);
      };
      sound2.playSoundOnChannel = function(runtimeScene, soundFile, channel, loop, volume, pitch) {
        runtimeScene.getSoundManager().playSoundOnChannel(soundFile, channel, loop, volume, pitch);
      };
      sound2.stopSoundOnChannel = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        sound3 && sound3.stop();
      };
      sound2.pauseSoundOnChannel = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        sound3 && sound3.pause();
      };
      sound2.continueSoundOnChannel = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        if (sound3 && !sound3.playing()) {
          sound3.play();
        }
      };
      sound2.isSoundOnChannelPlaying = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        return sound3 ? sound3.playing() : false;
      };
      sound2.isSoundOnChannelPaused = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        return sound3 ? sound3.paused() : false;
      };
      sound2.isSoundOnChannelStopped = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        return sound3 ? sound3.stopped() : true;
      };
      sound2.getSoundOnChannelVolume = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        return sound3 ? sound3.getVolume() * 100 : 100;
      };
      sound2.setSoundOnChannelVolume = function(runtimeScene, channel, volume) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        sound3 && sound3.setVolume(volume / 100);
      };
      sound2.getSoundOnChannelPlayingOffset = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        return sound3 ? sound3.getSeek() : 0;
      };
      sound2.setSoundOnChannelPlayingOffset = function(runtimeScene, channel, playingOffset) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        sound3 && sound3.setSeek(playingOffset);
      };
      sound2.getSoundOnChannelPitch = function(runtimeScene, channel) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        return sound3 ? sound3.getRate() : 1;
      };
      sound2.setSoundOnChannelPitch = function(runtimeScene, channel, pitch) {
        const sound3 = runtimeScene.getSoundManager().getSoundOnChannel(channel);
        sound3 && sound3.setRate(pitch);
      };
      sound2.preloadSound = (runtimeScene, soundFile) => runtimeScene.getSoundManager().loadAudio(soundFile, false);
      sound2.unloadSound = (runtimeScene, soundFile) => runtimeScene.getSoundManager().unloadAudio(soundFile, false);
      sound2.playMusic = function(runtimeScene, soundFile, loop, volume, pitch) {
        runtimeScene.getSoundManager().playMusic(soundFile, loop, volume, pitch);
      };
      sound2.playMusicOnChannel = function(runtimeScene, soundFile, channel, loop, volume, pitch) {
        runtimeScene.getSoundManager().playMusicOnChannel(soundFile, channel, loop, volume, pitch);
      };
      sound2.stopMusicOnChannel = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        music && music.stop();
      };
      sound2.pauseMusicOnChannel = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        music && music.pause();
      };
      sound2.continueMusicOnChannel = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        if (music && !music.playing()) {
          music.play();
        }
      };
      sound2.isMusicOnChannelPlaying = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        return music ? music.playing() : false;
      };
      sound2.isMusicOnChannelPaused = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        return music ? music.paused() : false;
      };
      sound2.isMusicOnChannelStopped = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        return music ? music.stopped() : true;
      };
      sound2.getMusicOnChannelVolume = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        return music ? music.getVolume() * 100 : 100;
      };
      sound2.setMusicOnChannelVolume = function(runtimeScene, channel, volume) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        music && music.setVolume(volume / 100);
      };
      sound2.getMusicOnChannelPlayingOffset = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        return music ? music.getSeek() : 0;
      };
      sound2.setMusicOnChannelPlayingOffset = function(runtimeScene, channel, playingOffset) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        music && music.setSeek(playingOffset);
      };
      sound2.getMusicOnChannelPitch = function(runtimeScene, channel) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        return music ? music.getRate() : 1;
      };
      sound2.setMusicOnChannelPitch = function(runtimeScene, channel, pitch) {
        const music = runtimeScene.getSoundManager().getMusicOnChannel(channel);
        music && music.setRate(pitch);
      };
      sound2.preloadMusic = (runtimeScene, soundFile) => runtimeScene.getSoundManager().loadAudio(soundFile, true);
      sound2.unloadMusic = (runtimeScene, soundFile) => runtimeScene.getSoundManager().unloadAudio(soundFile, true);
    })(sound = evtTools2.sound || (evtTools2.sound = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=soundtools.js.map
