//class for towers to inherit from
class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, health){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

}

class Spider extends Enemy{
    constructor(scene, x, y, texture, frame, health){
        super(scene, x, y, texture, frame, health);

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

}