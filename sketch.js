var sandyImage, virusImage, virusKingImage, dropImage, babyVirusImage, pumpedImage, backdrop
var SandyHanitizer, VirusKing, Drops, BabyVirus
var Viruses
var BV_Array=[]
var array, length
var BabyVirusGroup

function preload(){
    sandyImage=loadImage("Images/Sandy Hanitizer.png");
    virusImage=loadImage("Images/Virus.png");
    virusKingImage=loadImage("Images/Virus King.png");
    babyVirusImage=loadImage("Images/Baby Virus.png");
    backdrop=loadImage("Images/Background.png");
    pumpedImage=loadImage("Images/Sandy Hanitizer Pumps.png");
    dropImage=loadImage("Images/Pump.png")
}

function setup(){
    var canvas=createCanvas(500,700);

    SandyHanitizer=createSprite(250, 600);
    SandyHanitizer.addImage(sandyImage);
    SandyHanitizer.scale=0.4
   
    VirusKing=createSprite(250, 100);
    VirusKing.addImage(virusKingImage);
    VirusKing.scale=0.7
    VirusKing.visible=false

    BabyVirusGroup=new Group();

}

function draw(){
    background(backdrop);
    if(SandyHanitizer.x>30){
        if(keyIsDown(LEFT_ARROW)){
            SandyHanitizer.x=SandyHanitizer.x-10
        } 
    }
    
    if(SandyHanitizer.x<470){  
        if(keyIsDown(RIGHT_ARROW)){
            SandyHanitizer.x=SandyHanitizer.x+10
        }
    }
    drawSprites();
    Virus();
    babyViruses();
    pumps();

    if(BabyVirusGroup.isTouching(SandyHanitizer)){
        for(var i=0; i<BV_Array.length; i++){
            BV_Array[i].remove();
            BV_Array.length=0
        }
    }

}

function Virus(){
    if(frameCount%100===0){
        Viruses=createSprite(500, Math.round(random(50, 150)));
        Viruses.addImage(virusImage);
        Viruses.scale=0.3
        Viruses.velocityX=-3
    }
}

function babyViruses(){
    if(frameCount%70===0){
        BabyVirus=createSprite(Math.round(random(50,450)), 50);
        BabyVirus.addImage(babyVirusImage)
        BabyVirus.scale=0.05
        BabyVirus.velocityY=3
        BabyVirusGroup.add(BabyVirus);
        BV_Array.push(BabyVirus)
    }
}

function pumps(){
    if(frameCount%20===0 && keyCode===32){
        Drops=createSprite(SandyHanitizer.x, SandyHanitizer.y-50);
        Drops.addImage(dropImage);
        Drops.scale=0.2
        Drops.velocityY=-3
    }
}