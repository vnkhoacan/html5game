var PreloadState = {
    preload: function() {
        // show logo and progress bar
        game.preloadLogo = game.add.image(game.world.width/2, game.world.height/2-100, 'preload', 'logo');
        game.preloadLogo.anchor.setTo(0.5);
        
        game.preloadBar = game.add.sprite(game.world.width/2, game.world.height/2+100, 'preload', 'progress');
        game.preloadBar.x -= game.preloadBar.width/2;
        game.load.setPreloadSprite(game.preloadBar);
        
        // load assets 
        game.load.atlasJSONHash('atlas', 'assets/images/atlas.png', 'assets/images/atlas.json');
        game.load.atlasJSONHash('menu', 'assets/images/menu.png', 'assets/images/menu.json');

        game.load.audio('sndWings', ['assets/audio/wings.mp3', 'assets/audio/wings.ogg']);
        game.load.audio('sndBam', ['assets/audio/bam.mp3', 'assets/audio/bam.ogg']);
        game.load.audio('sndCoin', ['assets/audio/coin.mp3', 'assets/audio/coin.ogg']);
        game.load.audio('musicOst', ['assets/audio/ost.mp3', 'assets/audio/ost.ogg']);
    },
    
    create: function() {
        game.audio.addSound('sndWings');
        game.audio.addSound('sndBam');
        game.audio.addSound('sndCoin');
        game.audio.addMusic('musicOst');
        game.audio.playMusic('musicOst');
        // start game
        game.state.start('MainMenuState');
    }
};