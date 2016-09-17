function changeGeometry(type){
    gr("#main")("mesh").attr("geometry",type);
}

function changeTarget(type){
    gr("#main")("mesh").attr("targetBuffer",type);
}

var sx = document.getElementsByClassName("sx").item(0);
var sy = document.getElementsByClassName("sy").item(0);
var sz = document.getElementsByClassName("sz").item(0);

function getScale(){
    return sx.value + "," + sy.value + "," + sz.value;
}

[sx,sy,sz].forEach(function(i){
    i.addEventListener("input",function(){
       gr("#main")("mesh").attr("scale",getScale()); 
    });
});


var ct = document.getElementsByClassName("color-table").item(0);
["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
.forEach(function(color) {
    var nd = document.createElement("a");
    nd.className = "colors";
    nd.style.backgroundColor= color;
    nd.addEventListener("click",function(){
       gr("#main")("mesh").attr("color",color); 
    });
    ct.appendChild(nd);
});