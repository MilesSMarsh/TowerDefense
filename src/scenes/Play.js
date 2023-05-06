class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        this.load.image('ballista', './assets/Ballista.png');
        this.load.image('bastion', './assets/Bastion.png');
        this.load.image('background', './assets/Background.png');

        this.load.spritesheet('spider', './assets/Spider_Sprite_Sheet.png', {
            frameWidth: 10,
            FrameHeight: 10
        });

    }

    create(){


        //set the background image to the dirt an grass
        this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);






        //----------------------making the path for enemies to follow---------------------------
        //
        // setup graphics object (so we can draw paths)
        let graphics = this.add.graphics();
        graphics.lineStyle(2, 0xFFFFFF, 0.75);  // lineWidth, color, alpha

        //make a path for enemies to follow
        this.enemyPath = this.add.path(600, 600); // start of path
        this.enemyPath.lineTo(600, 100);         // next path point
        this.enemyPath.lineTo(100, 100);          

        this.enemyPath.draw(graphics);            // draw path
        //--------------------------------------------------------------------------------------



        //create bastion object
        this.bastion = new Bastion(this, 100, 100, 'bastion', 0, 'up', 100);

        //create spider enemy
        this.spider = new Spider(this, 600, 600, 'spider', 0, this.enemyPath, 100);

        





    }


    update(){

        //this.physics.collide(this.bastion, this.spider, null, this.bastion.changeHealth(-5), this);
    }

    
}

