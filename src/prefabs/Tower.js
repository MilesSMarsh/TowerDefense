//class for towers to inherit from
class Tower extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, texture, frame, direction, health){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.direction = direction;
    }

}

class Bastion extends Tower{
    constructor(scene, x, y, texture, frame, direction, health){
        super(scene, x, y, texture, frame, direction, health);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.direction = direction;
    }

}

class Ballista extends Tower{
    constructor(scene, x, y, texture, frame, direction, health){
        super(scene, x, y, texture, frame, direction, health);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.direction = direction;
    }

}