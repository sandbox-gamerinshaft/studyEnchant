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
  gazou.push("");
  core.preload(gazou);
  core.onload = function(){
    gameGamen = new Scene();
    core.pushScene(gameGamen);

    var gameHeikei = new Sprite(D_W, D_H);
    gameHeikei.image = core.assets[""];
    core.addChild(gameHeikei);

    var mol = new Sprite();
    mol.image = core.assets[""];
    core.addChild(mol);

    mol.moveTo(300,500);
    mol.addEventListener("touchmove", function(e){
      if(){
        this.frame = 0;
      }else{
        this.frame = 1;
      }
      this.x =
      this.y =
    });
    core.start();
  };
};