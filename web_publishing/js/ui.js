$(document).ready(function(){
	$("#container").addClass("start");
	$("nav li").click(function(){
		$("#container").css("max-width", "100%");
		var id=$(this).attr("data-rol");
		$("nav li").removeClass("on");
		$(this).addClass("on");
		//alert($(this).attr("data-rol")); 어떤 data-rol값이 나오는지 확인
		$(".content").removeClass("prev this next");
		//클릭 시 가지고 있던 클래스를 삭제
		$("#"+id).addClass("this").prevAll().addClass("prev");
		//클릭 한 메뉴와 매칭되는 id에 this 클래스를 부여, 앞의 모든 메뉴에 prev 클래스 부여
		$("#"+id).nextAll().addClass("next");
		//뒤의 모든 메뉴에 next 클래스를 부여
	});
	$(".logo_box").click(function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");;
		$("#container").css("max-width", "1200px");
	});
	$(".roll_left").click(function(){
		$(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
	});
	$(".roll_right").click(function(){
		$(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
	});
	$("book_roll li").click(function(){
		var _this=$(this);
		var liurl=_this.data("url");
		$(".notebook").html();
		$.ajax({
			type:"post",//http 요청 방식
			url:"liurl",
			dataType:"html",
			success:function(data){
				$(".notebook").html(data);
			}
		})
	});
});