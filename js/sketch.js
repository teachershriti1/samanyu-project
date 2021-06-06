var bg, bg2, bg3, bgSound;
var item, itemGroup;
var bread, breadImg, breadGroup;
var carrot, carrotImg, carrotGroup;
var potato, potatoImg, potatoGroup;
var cheese, cheeseImg, cheeseGroup;
var pizza, pizzaImg, pizzaGroup;
var diamond, diamondImg, diamondGroup;
var rottenMeat, rottenMeatImg, fleshGroup;
var dangerSign, dangerSignImg, dangerSignGroup;
var pointer, pointerImg;
var gameState = 0;
var score = 0;

function preload(){

    bg = loadImage("images/bg.jpg");
    bg2 = loadImage("images/bg2.jpg");
    bg3 = loadImage("images/bg3.jpg");
    breadImg = loadImage("images/bread.png");
    carrotImg = loadImage("images/carrot.png");
    dangerSignImg = loadImage("images/danger-sign.png");
    diamondImg = loadImage("images/diamond.png");
    potatoImg = loadImage("images/potato.png");
    cheeseImg = loadImage("images/cheese.png");
    pizzaImg = loadImage("images/pizza.png");
    pointerImg = loadImage("images/pointer.png");
    rottenMeatImg = loadImage("images/rotten meat.png");
    bgSound = loadSound("sounds/bg sound.mp3");
}


function setup() {

    createCanvas(displayWidth/2+930,displayHeight/2+363);
    
    

    breadGroup = new Group()
    itemGroup = new Group()
    badItemGroup = new Group()
    rareItemGroup = new Group()
    
    Screen = new StartingScreen();

    Rules = new Rules();

   
    pointer = createSprite(0,0);
    pointer.addImage(pointerImg);
    pointer.scale = 0.1;
    pointer.depth = 10;

    
 }

 
function draw() {

    // bgSound.play();

    background(bg);
 
    
    
    
    if(gameState === 0){
      Screen.display()

      Rules.back.hide()


      Screen.button.mousePressed(() =>{
        gameState = 1;
      })

      Screen.button2.mousePressed(()=>{
          gameState = 2;
      })
    }

   
    
    if(gameState === 1){

        background(bg3);
        Screen.button.hide()
        Screen.button2.hide()
        Screen.title.hide()
        Rules.back.hide()

        SpawnItems()
        BadItems()

        if(mousePressedOver(item)){
            score = score + 1;
        }
    }

    if(gameState === 2){
        background(bg2);
        Screen.button.hide()
        Screen.button2.hide()
        Screen.title.hide()

        Rules.display()
        Rules.rules.show()
        Rules.rule1.show()
        Rules.rule2.show()
        Rules.rule3.show()
        Rules.rule4.show()
        Rules.rule5.show()
        Rules.back.show()

        Rules.back.mousePressed(()=>{
            gameState = 0;
            //Screen.display()
           
            Screen.button.show()
            Screen.button2.show()
            Screen.title.show()


            console.log(gameState);
            
            //back.hide()
            Rules.rules.hide()
            Rules.rule1.hide()
            Rules.rule2.hide()
            Rules.rule3.hide()
            Rules.rule4.hide()
            Rules.rule5.hide()
            
        })
    }


    pointer.x = mouseX;
    pointer.y = mouseY;
    noCursor()

    drawSprites()

    if(gameState === 1){
        fill("black");
        textSize(30);
        text("𝓢𝓒𝓞𝓡𝓔 : "+score,70,70);
    }
    

}

function SpawnItems() {

    if(frameCount % Math.round(random(10,40))===0){

        item = createSprite(Math.round(random(50,1500)),Math.round(random(100,800))); 

        var rand = Math.round(random(1,5));
        switch(rand){
            case 1 : item.addImage(breadImg);
                     item.scale = 0.4;
            break;
            case 2 : item.addImage(carrotImg);
                     item.scale = 0.4;
            break;
            case 3 : item.addImage(potatoImg);
                     item.scale = 0.5;
            break;
            case 4 : item.addImage(cheeseImg);
                     item.scale = 0.3;
            break;
            case 5 : item.addImage(pizzaImg);
                     item.scale = 0.3;
            break;

            default: break;


        }

        //bread.velocityX = 0;
        item.lifetime = 20;
        itemGroup.add(item);
    }
}

function BadItems() {

    if(frameCount % Math.round(random(20,70))===0){

        badItem = createSprite(Math.round(random(150,1200)),Math.round(random(250,800)));

        var rand = Math.round(random(1,2));
        switch(rand){
            case 1 : badItem.addImage(rottenMeatImg);
                    badItem.scale = 0.5;
            break;
            case 2: badItem.addImage(dangerSignImg);
                    badItem.scale = 0.2;
            break;

            default: break;
        }

        badItem.lifetime = 20;
        badItemGroup.add(badItem)

    }
}