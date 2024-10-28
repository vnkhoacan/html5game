var loadScriptsSync = function (scripts) {
    if (scripts.length === 0) return game.state.start('BootState'); ;
    var path = scripts.shift();
    var js = document.createElement('script');
    js.async = true;
    js.onload = function(){
        loadScriptsSync(scripts);
    }
    js.src = path;
    document.head.appendChild(js);
}
var scripts = [
    'js/util.js',
    'js/box2d-plugin-full.js',

    'js/states/BootState.js',
    'js/states/PreloadState.js',
    'js/states/MainMenuState.js',
    'js/states/GameState.js',
    'js/main.js',

    'js/classes/util/Orientation.js',
    'js/classes/util/Storage.js',
    'js/classes/util/AudioController.js',
    'js/components/AudioSwitch.js',

    'js/classes/Bird.js',
    'js/classes/Coin.js',
    'js/classes/Spawner.js',
    'js/classes/GameOver.js',
    'js/classes/obstacles/Ground.js',
    'js/classes/obstacles/RotatingSpikes.js',
    'js/classes/obstacles/Trap.js',
    'js/classes/obstacles/Pipe.js',
    'js/classes/obstacles/Bee.js',
    'js/classes/obstacles/Bomb.js',
];

loadScriptsSync(scripts);