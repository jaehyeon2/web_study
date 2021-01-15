//common.js
//기기와 브라우저의 너비를 감지하고 html의 class값을 생성하여 중단점을 지정

(function(win, $){
	var $html=$("html");
	var deviceSize={
		pc:1009,
		tablet:801,
		mobile:800
	};
	
	function scrollShowHide(status){
		$html.css({"overflow-y":status});
		return $html.width();
	}
	//매개변수에 전달된 값이 scroll이면 스크롤바가 생성되고 너빗값을 반환
	
	var sc_w1=scrollShowHide("hidden"),
		sc_w2=scrollShowHide("scroll"),
		sc_w3=sc_w1-sc_w2;
	
	if(sc_w3>0){
		deviceSize.pc=deviceSize.pc-sc_w3;
		deviceSize.tablet=deviceSize.tablet-sc_w3;
		deviceSize.mobile=deviceSize.mobile-sc_w3;
	}
	
	$(win).on("resize", function(){
		var w_size = $(win).width();
		if(w_size>=deviceSize.pc&&!$("html").hasClass("pc")){
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide("scroll");
		}
		else if(w_size< deviceSize.pc&&w_size>=deviceSize.tablet
				&&!$("html").hasClass("tablet")){
			$html.removeClass("mobile pc").addClass("tablet");
			scrollShowHide("scroll");
		}
		else if(w_size<=deviceSize.mobile&&!$html.hasClass("mobile")){
			$html.removeClass("pc tablet").addClass("mobile");
			var menu_pos=parseInt($(".mobile-menu-wrap").css("left"));
			if(menu_pos>=0){
				scrollShowHide("hidden");
			}
		}
	});
	
	$(function(){
		$(win).trigger("resize");
	});
}(window, jQuery));