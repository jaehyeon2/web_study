$(function(){
	$(".main-visual-slide").bxSlider({
		auto:true,
		pause:2000,
		autoHover:true,
		autoControls:true,
		autocontrolsCombine:true
	});
	
	$("#notice-tab-wrap h4 a").on("click", tabmenu);
	function tabmenu(e){
		e.preventDefault();
		var $ts=$(this);
		var $next=$ts.parent().next();
		if($next.is(":hiden")){
			$("#notice-tab-wrap h4 a").removeClass("on");
			$ts.addClass("on");
			$("notice-tab-wrap>div:visible").hide();
			$next.show();
		}
	}
	
})