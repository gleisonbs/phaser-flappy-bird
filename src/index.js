import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: true,
    }
  },
  scene: {
    preload,
    create,
    update,
  }
}

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png')
}

let bird = null;
const flapVelocity = 150;
const initialBirdPosition = { x: config.width/10, y: config.height/2 }

function create() {
  const { width, height } = config;
  this.physics.world.setFPS(15);
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  bird = this.physics.add.sprite(
    initialBirdPosition.x, initialBirdPosition.y, 'bird').setOrigin(0);

  this.input.on('pointerdown', flap)
  this.input.keyboard.on('keydown_SPACE', flap)
}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

function resetBirdPosition() {
  bird.x = initialBirdPosition.x;
  bird.y = initialBirdPosition.y;
  bird.body.velocity.y = 0;
}

function update() {
  const { height } = config;
  if (bird.y > height || bird.y < -bird.height) {
    resetBirdPosition()
  }
}

new Phaser.Game(config); 