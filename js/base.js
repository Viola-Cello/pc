$(document).ready(function(){
	buttonClick();

	$(".btn-listtog").click(function(){
		 $(this).parent().parent().next().slideToggle("slow");
		  $(this).toggleClass("btn-listtog-out btn-listtog-in ");
		 
	});  
	$(".btn-listtog.top-list").click(function(){
		 $(this).parent().parent().siblings(".messageBox").slideToggle("slow");
		 
	});  
	$(".hd-list > li").mouseover(function(){
		$(this).find("ul").removeClass("hide");
	}).mouseout(function(){
		$(this).find("ul").addClass("hide");
	});

	
});
  
    

$(window).load(function(){
	center();
});

function center(){                                          //用于弹出框居中或者其他元素上下区中
	function centerWay(){
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		$(".center").each(function(){
			$(this).css("position","absolute");
			var centerWidth = $(this).width();
			var centerHeight = $(this).height();
			var left = (screenWidth-centerWidth)/2;
			var top = (screenHeight-centerHeight)/2;
			if (screenHeight>centerHeight) {
				$(this).css({"top":top,"left":left});
			};
			if (screenHeight<centerHeight) {
				$(this).css({"top":"50px","left":left});
			};
		});
	};
	centerWay();
	$("html,body,.center").resize(function(){
		centerWay();
	});
};

function buttonClick(){
	$(document).on("mousedown","button,input[type='button'],a",function(e){
		if(e.which==1){
			$(this).find(".btnTxt").stop(true).animate({top:"1px",left:"1px"},0);
		}		
	});
	$(document).on("mouseup","button,input[type='button'],a",function(e){
		if(e.which==1){
			$(this).find(".btnTxt").stop(true).animate({top:"0px",left:"0px"},0);
		}
	});
};