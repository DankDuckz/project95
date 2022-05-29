var invader1Img, invader2Img, invader3Img
var invader1, invader2, invader3
var cooldown = false
var bullets = []
var shooter
var bgMusic

var gameState = 1
var score = 0

function preload() {
  invader1Img = loadImage("./assets/invader1.png")
  invader2Img = loadImage("./assets/invader2.gif")
  invader3Img = loadImage("./assets/invader3.jpeg")

//   bgMusic = loadSound("./assets/bgMusic.wav")
}

function setup() 
{
  createCanvas(1000,600);

  createSprite(width/2,550,width,10)

  shooter = createSprite(width/2,530,50,30)
  shooter.shapeColor = "green"

  createInvaders()

  // bgMusic.play()
}

function draw() 
{
  background('black')
  fill('white')
  textSize(30)
  text("Score:",50,30)
  text(score,150,30)
  text("Lives:",700,30)

  var edges = createEdgeSprites()
  shooter.collide(edges)

  if (gameState == 1) {
    if (keyDown("RIGHT_ARROW")) {
      shooter.x += 10
    }
    if (keyDown("LEFT_ARROW")) {
      shooter.x -= 10
    }
  }

  // if (!bgMusic.isPlaying()) {
  //   bgMusic.play()
  // }

  drawSprites()
}

function keyPressed(){
  if (keyCode == 32) {
    if (!cooldown) {
      cooldown = true

      var bullet = createSprite(shooter.x,550,5,20)
      bullet.shapeColor = "green"
      bullet.velocityY = -5
      bullets.push(bullet)

      setTimeout(()=> {
        cooldown = false
      },500)
    }
  }
}

function createInvaders() {
  for (let i = 1; i < 10; i++) {
    invader1 = createSprite(i*75+125,100)
    invader1.addImage(invader1Img)
    invader1.scale = 0.3

    invader2 = createSprite(i*75+125,200)
    invader2.addImage(invader2Img)
    invader2.scale = 0.15

    invader3 = createSprite(i*75+125,300)
    invader3.addImage(invader3Img)
    invader3.scale = 0.09
  }
}
