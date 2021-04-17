var dog, happyDog, database, foodS, foodStock, foodTimeRef, foodTime
var h
var gameState = 1

function preload()
{
  dog1Image = loadImage("images/dogImg.png")
  dog2Image = loadImage("images/dogImg1.png")
  dog3Image = loadImage("images/download.jpg")
  dog4Image = loadImage("images/download-1.jpg")
  dog5Image = loadImage("images/life.webp")
  bottleImage = loadImage("images/spit_0 3.png")
  
}

function setup() {
	createCanvas(750, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dog1Image)
  dog.scale = 0.25

  bottle = createSprite(150,300)
  bottle.addImage(bottleImage)
  bottle.scale = 0.1
  bottle.visible = false

  h = hour()


  bottle1 = createSprite(500,200)
  bottle1.addImage(bottleImage)
  bottle1.scale = 0.1

  bottle2 = createSprite(550,200)
  bottle2.addImage(bottleImage)
  bottle2.scale = 0.1

  bottle3 = createSprite(600,200)
  bottle3.addImage(bottleImage)
  bottle3.scale = 0.1

  bottle4 = createSprite(650,200)
  bottle4.addImage(bottleImage)
  bottle4.scale = 0.1

  bottle5 = createSprite(500,300)
  bottle5.addImage(bottleImage)
  bottle5.scale = 0.1

  bottle6 = createSprite(550,300)
  bottle6.addImage(bottleImage)
  bottle6.scale = 0.1

  bottle7 = createSprite(600,300)
  bottle7.addImage(bottleImage)
  bottle7.scale = 0.1

  bottle8 = createSprite(650,300)
  bottle8.addImage(bottleImage)
  bottle8.scale = 0.1

  button = createButton('Get More Food')
  button.position(700, 250)

  button2 = createButton('Feed The Dog')
  button2.position(700, 280)
  
  firebase.database().ref('Food')
  database = firebase.database()

  firebase.database().ref('FoodTime')
  database = firebase.database()
 
  foodStock = database.ref('Food')
   foodStock.on("value", readStock);

  foodTimeRef = database.ref('FoodTime')
  foodTimeRef.on("value", readStock1)

  
}


function draw() {  
  background(46, 139, 87)
  drawSprites();

 if (h%4 === 0||h === 0){
   gameState = 1
 }

 if (h%4 === 1||h === 1){
  gameState = 2
}

if (h%4 === 2|| h === 2){
  gameState = 3
}

if (h%4 === 3|| h === 3){
  gameState = 4
}





 if (gameState === 1){

  button.show()
  button2.show()
  dog.scale = 0.25
  
  fill("black")
  textSize(30)
  text ("Last Fed - " + foodTime + ":00" , 300, 50)
  
  button2.mousePressed(()=>{
    if(foodS > 0){
      writeStock(foodS)
      writeStock2(foodTime)
      dog.addImage(dog2Image)
      bottle.visible = true
      }
  })



  button.mousePressed(()=>{
    if(foodS < 8){
    writeStock1(foodS)
    dog.addImage(dog1Image)
    bottle.visible = false
    }
  })

  fill("black")
  textSize(30)
  text ("FoodStock - " + foodS, 50,50)


  
  if (foodTime === 25){
    foodTime = 0
  }



  if(foodS === 0){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = false
    bottle4.visible = false
    bottle5.visible = false
    bottle6.visible = false
    bottle7.visible = false
    bottle8.visible = false
  }

  if(foodS === 1){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = false
    bottle4.visible = false
    bottle5.visible = false
    bottle6.visible = false
    bottle7.visible = false
    bottle8.visible = true
  }

  if(foodS === 2){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = false
    bottle4.visible = false
    bottle5.visible = false
    bottle6.visible = false
    bottle7.visible = true
    bottle8.visible = true
  }

  if(foodS === 3){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = false
    bottle4.visible = false
    bottle5.visible = false
    bottle6.visible = true
    bottle7.visible = true
    bottle8.visible = true
  }

  if(foodS === 4){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = false
    bottle4.visible = false
    bottle5.visible = true
    bottle6.visible = true
    bottle7.visible = true
    bottle8.visible = true
  }


  if(foodS === 5){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = false
    bottle4.visible = true
    bottle5.visible = true
    bottle6.visible = true
    bottle7.visible = true
    bottle8.visible = true
  }

  if(foodS === 6){
    bottle1.visible = false
    bottle2.visible = false
    bottle3.visible = true
    bottle4.visible = true
    bottle5.visible = true
    bottle6.visible = true
    bottle7.visible = true
    bottle8.visible = true
  }

  if(foodS === 7){
    bottle1.visible = false
    bottle2.visible = true
    bottle3.visible = true
    bottle4.visible = true
    bottle5.visible = true
    bottle6.visible = true
    bottle7.visible = true
    bottle8.visible = true
  }

  if(foodS === 8){
    bottle1.visible = true
    bottle2.visible = true
    bottle3.visible = true
    bottle4.visible = true
    bottle5.visible = true
    bottle6.visible = true
    bottle7.visible = true
    bottle8.visible = true
  }
  

  
  
 }

 if (gameState === 2){
  bottle1.visible = false
  bottle2.visible = false
  bottle3.visible = false
  bottle4.visible = false
  bottle5.visible = false
  bottle6.visible = false
  bottle7.visible = false
  bottle8.visible = false
  dog.addImage(dog3Image)
  dog.scale = 1
  button.hide()
  button2.hide()

 }

 if (gameState === 3){
  bottle1.visible = false
  bottle2.visible = false
  bottle3.visible = false
  bottle4.visible = false
  bottle5.visible = false
  bottle6.visible = false
  bottle7.visible = false
  bottle8.visible = false
  dog.addImage(dog4Image)
  dog.scale = 1
  button.hide()
  button2.hide()

 }

 if (gameState === 4){
  bottle1.visible = false
  bottle2.visible = false
  bottle3.visible = false
  bottle4.visible = false
  bottle5.visible = false
  bottle6.visible = false
  bottle7.visible = false
  bottle8.visible = false
  dog.addImage(dog5Image)
  dog.scale = 1
  button.hide()
  button2.hide()

 }

}

function readStock(data){
foodS = data.val()

}

function readStock1(data){
  foodTime = data.val()
  
  }

function writeStock(x){
  
  database.ref('/').update({
    Food:x = x-1
  })
}

function writeStock1(x){
  
  database.ref('/').update({
    Food:x = x+1
  })
}

function writeStock2(x){
  
  database.ref('/').update({
    FoodTime:x = h
  })
}



