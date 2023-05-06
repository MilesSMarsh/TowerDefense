class Play extends Phaser.Scene{
    constructor(){
        super("Play");
    }

    preload(){
        this.preload.image('ballista', './assets/Ballista.png');
        this.preload.image('bastion', './assets/Bastion.png');

        this.preload.spritesheet('spider', './assets/Spider_Sprite_Sheet.png', {
            frameWidth: 10,
            FrameHeight: 10
        });

    }

    create(){
        this.cameras.main.setBackgroundColor('#dfff00');
        this.image.add(100, 100, 'bastion');
    }

    update(){

    }

}