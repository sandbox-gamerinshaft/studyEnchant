D_W = 1280;
D_H = 720;

enchant();
var core = {};

window.onload = function(){

  core = new Core(D_W, D_H);

  var gazou = [];
  gazou.push("");
  gazou.push("");
  gazou.push("");
  gazou.push("");
  gazou.push("");
  core.preload(gazou);

  core.onload = function(){
    var gameGamen = new Scene();
    core.pushScene(gameGamen);

    var gameHaikei = new Sprite(D_W, D_H);
    gameHeikei.image = core.assets[""];
    gameGamen.addChild(gameHaikei);

    var mol = new Sprite();
    mol.image = core.assets[""];
    mol.moveTo(300,500);
    mol.addEventListener("touchmove", function(e){
      if(){

      }else{

      }
      this.x =
      this.y =
    });
    gameGamen.addChild(mol);


  };
};