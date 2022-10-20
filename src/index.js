import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade'
  },
  scene: {
    preload,
    create,
  }
}

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png')
}

function create() {
  const { width, height } = config;
  this.add.image(0, 0, 'sky').setOrigin(0, 0);
  this.add.sprite(width / 10, height/2, 'bird').setOrigin(0);
}

new Phaser.Game(config);