var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bf499453-cd38-4682-aa60-f1c913b4ae6a","a62af53f-d2dd-4f5e-8f19-4beea218ca4e","daaa74ff-abd6-423c-92ee-bad973ae2fdb","5579680e-82ff-4849-a2b2-4e313d1786fb","01850fee-35e4-4c23-842d-aa69bc997074"],"propsByKey":{"bf499453-cd38-4682-aa60-f1c913b4ae6a":{"name":"playerShip","sourceUrl":null,"frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"_GmrvaMVEHIFatr7TuRdjhl5xD9bnf4k","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/bf499453-cd38-4682-aa60-f1c913b4ae6a.png"},"a62af53f-d2dd-4f5e-8f19-4beea218ca4e":{"name":"ast.jpg","sourceUrl":"assets/v3/animations/QKxHNTT6bxi-RMonSsZHfpzbdAdEqhCoCLhja9U-uok/a62af53f-d2dd-4f5e-8f19-4beea218ca4e.png","frameSize":{"x":640,"y":480},"frameCount":1,"looping":true,"frameDelay":4,"version":"0Uikf4E6SoB.BobBd8VR.3kce6C5Msyn","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":480},"rootRelativePath":"assets/v3/animations/QKxHNTT6bxi-RMonSsZHfpzbdAdEqhCoCLhja9U-uok/a62af53f-d2dd-4f5e-8f19-4beea218ca4e.png"},"daaa74ff-abd6-423c-92ee-bad973ae2fdb":{"name":"gameover1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"8ordXPLp3V6zac9exUsATnMEBrj_OA5K","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/daaa74ff-abd6-423c-92ee-bad973ae2fdb.png"},"5579680e-82ff-4849-a2b2-4e313d1786fb":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"X1EwNbPmm5Ohq.hDprYKFTs4z2qmtU4E","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":800},"rootRelativePath":"assets/5579680e-82ff-4849-a2b2-4e313d1786fb.png"},"01850fee-35e4-4c23-842d-aa69bc997074":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":50,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"krvk547Loi6Convp1_vK2MHH7M1CW.dP","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":120},"rootRelativePath":"assets/01850fee-35e4-4c23-842d-aa69bc997074.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,200,200,200);
bg.setAnimation("ast.jpg");
var ship = createSprite(188,357);
ship.setAnimation("playerShip");

var meteor = createSprite(randomNumber(0,380),0,5,10);
meteor.setAnimation("animation_1");
meteor.scale=0.2;
meteor.velocityY=(randomNumber(1,5));

var meteor1 = createSprite(randomNumber(0,380),0,5,10);
meteor1.setAnimation("animation_1");
meteor1.scale=0.2;
meteor1.velocityY=randomNumber(1,5);

var meteor2 = createSprite(randomNumber(0,380),0,5,10);
meteor2.setAnimation("animation_1");
meteor2.scale=0.2;
meteor2.velocityY=randomNumber(1,5);
var bullet = createSprite(200, 200,1,1);


function draw() {
  playSound("assets/Spaceship-sound-.mp3")
  createEdgeSprites();
  background("white");
  if (bullet.collide(meteor)) {
  bullet.destroy();
  meteor.y = 0;
  meteor.velocityY=(randomNumber(1,5));
}
if (bullet.collide(meteor1)) {
  bullet.destroy();
  meteor1.y = 0;
  meteor1.velocityY=(randomNumber(1,5));
}
if (bullet.collide(meteor2)) {
  bullet.destroy();
  meteor2.y = 0;
  meteor2.velocityY=(randomNumber(1,5));
}
if (meteor.y>400){
  meteor.y = 0;
}
if (meteor1.y>400){
  meteor1.y = 0;
}
if (meteor2.y>400){
  meteor2.y = 0;
}
if (keyDown("left")){
  ship.x = ship.x-5;
}
if (keyDown("right")){
  ship.x = ship.x+5;
}
if (keyDown("space")){
  bullet = createSprite(ship.x,ship.y,10,20);
  bullet.velocityY=-20;
}
if(ship.collide(meteor)||ship.collide(meteor1)||ship.collide(meteor2)){
  meteor.velocityY=0;
  meteor1.velocityY=0;
  meteor2.velocityY=0;
  var go = createSprite(200,200);
  go.setAnimation("gameover1");
  go.scale=1.0;
}
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
