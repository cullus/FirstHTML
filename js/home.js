var isHomeShow = false;
var timeHomeDialog;

function loadHome(){
	var jsonImage = [
	{"name" : "home", "src" : "image/bgHome.jpg"},
	{"name" : "homeiconLevel", "src" : "image/iconHometopLevel.png"},
	{"name" : "hometopiconPeople", "src" : "image/iconHometopPeople.png"},
	{"name" : "hometopiconFood", "src" : "image/iconHometopFood.png"},
	{"name" : "hometopiconBullet", "src" : "image/iconHometopBullet.png"},
	{"name" : "hometopiconPart", "src" : "image/iconHometopPart.png"},
	{"name" : "hometopBuy", "src" : "image/iconHometopBuy.png"},
	{"name" : "hometopiconDiamond", "src" : "image/iconHometopDiamond.png"},
	{"name" : "homeiconFromation", "src" : "image/iconHomeFromation.png"},
	{"name" : "homeiconCombat", "src" : "image/iconHomeCombat.png"},
	{"name" : "homeiconEvent", "src" : "image/iconHomeEvent.png"},
	{"name" : "homeiconFactory", "src" : "image/iconHomeFactory.png"},
	{"name" : "homeiconResearch", "src" : "image/iconHomeResearch.png"},
	{"name" : "homeiconRestore", "src" : "image/iconHomeRestore.png"},
	{"name" : "homeDialog", "src" : "image/bgHomeDialog.png"},
	{"name" : "homeiconHide", "src" : "image/iconHomeHide.png"},
	{"name" : "homeiconQuest", "src" : "image/iconHomeQuest.png"},
	{"name" : "homefootericonMail", "src" : "image/iconHomefooterMall.png"},
	{"name" : "homefootericonMall", "src" : "image/iconHomefooterMall.png"},
	{"name" : "homefootericonIndex", "src" : "image/iconHomefooterIndex.png"},
	{"name" : "homefootericonSetting", "src" : "image/iconHomefooterSetting.png"},
	{"name" : "homefooterplace", "src" : "image/bgHomefooterplace.png"}
	];

	jsonImage.push({"name" : "homeshow", "src" : ShowGirl.image});
	loadImage(jsonImage, initHome);

	$(".home").show();
	$(".hometop").height(pMain.w * 0.04);
	$(".homeiconLevel").height(pMain.w * 0.054);
	$(".hometopBuy").height(pMain.w * 0.03);
	$(".hometopiconDiamond").height(pMain.w * 0.03);
	$(".hometopiconDiamond").css("top", pMain.w * 0.07 + "px");
	$(".hometopiconDiamond > span").css("line-height", pMain.w * 0.03 + "px");
	$(".homeiconsmall").height($(".homeiconsmall").width() * 0.53);
	console.log($(".homeicontable").width());
	$(".homeiconbig").height($(".homeiconbig").width() * 0.67);
	$(".homeicontable").css("top", (pMain.h - $(".homeicontable").height()) / 2 + "px");
	$(".homeDialog").height(pMain.w * 0.124);
	$(".homeDialog").css("top", (pMain.h - $(".homeDialog").height()) / 2 + "px");
	$(".homeiconHide").height(pMain.w * 0.043);
	$(".homeiconHide").css("bottom", pMain.w * 0.14 + "px");
	$(".homeiconQuest").height(pMain.w * 0.0566);
	$(".homeiconQuest").css("bottom", pMain.w * 0.07 + "px");
	$(".homefooterplace").height(pMain.w * 0.04);
	$(".homefootericon").height(pMain.w * 0.04);

	$(".homeiconHide").bind("click", clickHomeiconHide);

	$(".homeshow").bind("click", clickHomeShow);

	$(".homefootericonIndex").bind("click", clickHomefootericonIndex);
}

function initHome(jsonImage){
	console.log("home images loaded");
	loadbg(jsonImage);
	$(".hometop").css("background-image", "url(image/bgHomefooterplace.png)");

	exitLoad();
}

function clickHomeiconHide(){
	$(".hometop").hide();
	$(".homeicontable").hide();
	clearTimeout(timeHomeDialog);
	$(".homeDialog").hide();
	$(".homeiconQuest").hide();
	$(".homefooter").hide();
	$(".homeiconHide").hide();
	$(".home").bind("click", function(){
		if(!isHomeShow){
			isHomeShow = true;
			return;
		}
		isHomeShow = false;
		$(".hometop").show();
		$(".homeicontable").show();
		$(".homeiconQuest").show();
		$(".homefooter").show();
		$(".homeiconHide").show();
		$(".home").unbind("click");
	});
}

function clickHomeShow(){
	if(isHomeShow){
		return;
	}
	clearTimeout(timeHomeDialog);
	if($(".homeDialog").css("display") == "none"){
		$(".homeDialogText").html(ShowGirl.voice[Math.floor(Math.random() * ShowGirl.voice.length)]);
		$(".homeDialog").fadeIn(300);
		timeHomeDialog = setTimeout("$('.homeDialog').fadeOut(300);", 4000);
	}else{
		$(".homeDialog").hide();
		$(".homeDialogText").html(ShowGirl.voice[Math.floor(Math.random() * ShowGirl.voice.length)]);
		$(".homeDialog").fadeIn(300);
		timeHomeDialog = setTimeout("$('.homeDialog').fadeOut(300);", 4000);
	}
}

function clickHomefootericonIndex(){
	nextScene = loadIndex;
	showLoad("hoem", "index");
}
