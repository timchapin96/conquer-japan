import './App.css'
import Phaser from 'phaser'

function App () {
  class Example extends Phaser.Scene {
    preload () {
      this.load.setBaseURL('http://localhost:5173/')

      this.load.image('japan-map', 'src/assets/japan_map.png')
      this.load.image('logo', 'src/assets/tokyo_ward.png' )
    }

    create () {
      this.add.image(200, 100, 'japan-map')

      const particles = this.add.particles(0, 0, 'red', {
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
      })

      const logo = this.physics.add.image(50, 50, 'logo')

      logo.setVelocity(100, 200)
      logo.setBounce(1, 1)
      logo.setCollideWorldBounds(true)

      particles.startFollow(logo)
    }
  }

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 500 }
      }
    }
  }

  const game = new Phaser.Game(config)

  return (
    <></>
  )
}

export default App
