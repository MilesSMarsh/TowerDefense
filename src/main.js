let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 700,
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade : {
            debug: true
        }
    },
    scene: [ Play ]
}

let game = new Phaser.Game(config);
