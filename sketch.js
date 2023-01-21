function preload(){
ballImage=loadImage("ball.png")
tableImage=loadImage("table.jpg")
paddleImage=loadImage("paddle.png")

}

function setup() {
 createCanvas(600,400)
 bg=createSprite(300,200,600,400)
 bg.addImage(tableImage)
  paddle1=createSprite(550,200)
  paddle1.addImage(paddleImage)
  paddle1.scale=0.3
  paddle2=createSprite(50,200)
  paddle2.addImage(paddleImage)
  paddle2.scale=0.3
 ball=createSprite(300,200)
 ball.addImage(ballImage)
 ball.scale=0.1
 edges=createEdgeSprites()
 paddle1.debug=true
 paddle2.debug=true
 paddle1.setCollider("rectangle",0,0,70,70)
 paddle2.setCollider("rectangle",0,0,70,70)
 score=0
 score1=0
}

function draw() {
    background("red")
   drawSprites ()
   text("score"+score,250,30)
   text("score"+score1,350,30)
   paddle1.y=World.mouseY
   if (keyDown("UP_ARROW")){
      paddle2.y-=5

   }
   if(keyDown("DOWN_ARROW")){
    paddle2.y+=5

   }
   if (keyDown ("ENTER")){
    ball.velocityX=3
    ball.velocityY=-3
 
   }
   if(ball.isTouching(paddle1)){
    score1+=1
 }
 if(ball.isTouching(paddle2)){
  score+=1

 }
   ball.bounceOff(paddle1)
   ball.bounceOff(paddle2)
   ball.bounceOff(edges)
  if(score===5||score1===5){
    textSize(30)
     text("GAMEOVER",200,200)
     paddle1.destroy()
     paddle2.destroy()
     ball.destroy()
  }
}

