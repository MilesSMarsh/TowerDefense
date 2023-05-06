//class for towers to inherit from
class Tower extends Phaser.Physics.Arcade.Sprite{
    
    constructor(scene, x, y, texture, frame, direction, health){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.direction = direction;
        this.health = health;
    }

    changeHealth(amountToChange){
        this.health += amountToChange;
        console.log(`Bastion Health: ${this.health}`);
    }

}

class Bastion extends Tower{
    constructor(scene, x, y, texture, frame, direction, health){
        super(scene, x, y, texture, frame, direction, health);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(7);

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