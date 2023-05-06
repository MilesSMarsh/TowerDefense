//class for towers to inherit from
class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, path, health){
        super(scene, x, y, texture, frame);

        //scene.add.existing(this);
        //scene.physics.add.existing(this);

        this.health = health;
        this.enemyPath = path;

        let s = path.getStartPoint();   // get start point of path
        this.enemy = scene.add.follower(this.enemyPath, s.x, s.y, texture).setScale(3.5);
        scene.physics.add.existing(this.enemy);
        this.enemy.startFollow({
            from: 0,            // points allow a path are values 0–1
            to: 1,
            delay: 0,
            duration: 10000,
            ease: 'Power0',
            hold: 0,
            repeat: -1,
            yoyo: false,
            rotateToPath: true,
            rotationOffset: -90
        });

    }

    getHelth(){
        return this.health;
    }

    changeHealth(healthToChange){
        this.health += healthToChange;
    }

    updatePos(){
        this.x = this.enemy.x;
        this.y = this.enemy.y;
    }

}

class Spider extends Enemy{
    constructor(scene, x, y, texture, frame, path, health){
        super(scene, x, y, texture, frame, path, health);
    }

}