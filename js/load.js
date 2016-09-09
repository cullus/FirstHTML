var nextScene;
var loadbgupBottom;
var loadbgdownUp;

function loadLoad(){
	var jsonImage = [
	{"name" : "loadbgup", "src" : "image/bgLoadUp.png"},
	{"name" : "loadbgdown", "src" : "image/bgLoadDown.png"},
	{"name" : "loadiconout", "src" : "image/iconLoadOut.png"},
	{"name" : "loadiconin", "src" : "image/iconLoadIn.png"}
	];
	loadImage(jsonImage, initLoad);
	$(".loadbgup").height(pMain.w * 0.445);
	$(".loadbgdown").height(pMain.w * 0.374);
	$(".loadbgup").css("bottom", pMain.h * 0.41 + "px");
	loadbgupBottom = $(".loadbgup").css("bottom");
	$(".loadbgdown").css("top", (pMain.h * 0.59 - pMain.w / 1024 * 69) + "px");
	loadbgdownUp = $(".loadbgdown").css("top");
	$(".loadicon").height($(".loadicon").width());
	$(".loadicon").css("top", pMain.w / 1024 * 69 + "px");
}

function initLoad(jsonImage){
	console.log("loading images loaded");
	loadbg(jsonImage);
	nextScene();
}

function showLoad(now){
	$(".loading").show();
	$(".loadbgup").animate({"bottom" : loadbgupBottom}, 1000);
	$(".loadbgdown").animate({"top" : loadbgdownUp}, 1000,function(){
		$(".loadicon").show();
		$("." + now).hide();
		nextScene();
	});
}

function exitLoad(){
	$(".loadicon").hide();
	$(".loading").css("background-color", "transparent");
	$(".loadbgup").animate({"bottom" : pMain.h + "px"}, 1000);
	$(".loadbgdown").animate({"top" : pMain.h + "px"}, 1000,function(){$(".loading").hide();});
}