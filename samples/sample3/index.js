var mod = document.getElementById("mod");
var trans = document.getElementById("trans");

mod.addEventListener("input",function(){
    gr("#main")("#raymarch").attr("modValue",mod.value);
});

trans.addEventListener("input",function(){
    gr("#main")("#raymarch").attr("transValue",trans.value);
});