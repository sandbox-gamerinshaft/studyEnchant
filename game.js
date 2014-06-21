DISPLAY_WIDTH = 1280;
DISPLAY_HEIGHT = 720;

enchant();
var core = {};
window.onload = function(){
  core = new Core(DISPLAY_WIDTH,DISPLAY_HEIGHT);
  var gazou = [];
  gazou.push("../images/unit_catch/src/game.png");
  gazou.push("../images/unit_catch/src/game_over1.png");
  gazou.push("../images/unit_catch/src/game_over2.png");
  gazou.push("../images/unit_catch/src/mol.png");
  gazou.push("../images/unit_catch/src/print.png");
  gazou.push("../images/unit_catch/src/title.png");
  core.preload(gazou);
  core.onload = function(){
    var gameGamen = new Scene();
    core.pushScene(gameGamen);
    var mol = new Sprite(151,169);
    mol.image = core.assets["../images/unit_catch/src/mol.png"];
    mol.moveTo(300, 500);
    mol.addEventListener("touchmove",function(e){
      this.x = e.x - this.width/2;
      // this.y = e.y - this.height/2;
    });
    gameGamen.addChild(mol);
  };
  core.start();
};