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

  };
  core.start;
};