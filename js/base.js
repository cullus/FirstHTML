function pEle(){
	this.w;
	this.h;
}
function cGirl(){
	this.name;
	this.image;
	this.voice;
}
var ShowGirl = new cGirl();
ShowGirl.name = "M4A1";
ShowGirl.image = "image/M4A1.png";
ShowGirl.voice = new Array("嗯，指挥官……", "稍微……有点痒……", "………", "有点喜欢上了呢………");

var imageLoaded = new Array();
var pMain = new pEle();

$(document).ready(function(){
	var wbody = $("body").width();
	var hbody = $("body").height();
	var ratio = wbody / hbody;
	$(".main").width(wbody);
	if(ratio < 4 / 3){
		$(".main").height(wbody * 3 / 4);
	}else if(ratio > 2){
		$(".main").height(wbody / 2);
	}
	pMain.w = $(".main").width();
	pMain.h = $(".main").height();
	$(".main").width(pMain.w);
	$(".main").height(pMain.h);
	$("html").css("font-size", pMain.w * 0.02 + "px");

	nextScene = loadHome;
	loadLoad();
});

function loadbg(jsonImage){
	for(var i in jsonImage){
		$("." + jsonImage[i].name).css("background-image", "url(" + jsonImage[i].src + ")");
	}
}
