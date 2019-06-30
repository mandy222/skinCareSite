$(function() { 
	setTimeout(function(){
	    $('.loader').css('display','none')
	},1000)

	$('.shop span').click(function(){
		$('.mysecMenu').slideToggle(10); 
		$('.shop span').toggleClass('glyphicon glyphicon-menu-down');
		$('.shop span').toggleClass('glyphicon glyphicon-menu-up');
		return false;
	});

	$(window).resize(function(){
		if ($(window).width()>768) {
			$('.shop').hover(function(){
				$('.mysecMenu').css('display','block');
			},
			function(){
				$('.mysecMenu').css('display','none');
			});
			window.location.reload();		
		}
	})

	$('.menuBtn').click(function(){
		$('.myMenu').slideToggle(1000)
	})
	
	function clickPoint(point, skinTop) {
		point.click(function(ev) {
			ev.preventDefault(); // 解决闪烁问题
			$('html,body').animate({ scrollTop: skinTop }, 500);
		})
	}

	// 回到顶部
    clickPoint($('#goTop'), 0);

	var myTop = $(document).scrollTop();
	// 根据高度触发动画
	$(window).scroll(function(event){
		myTop = $(document).scrollTop();

		if (myTop >= 50){
			$('nav').addClass('myFixed');
			$('#goTop').css('display', 'block');
		} else {
			$('nav').removeClass('myFixed');
			$('#goTop').css('display', 'none');
		}

		
		if (myTop >= ($('.btns').eq(1).offset().top/2.5)){
			$('.btns').eq(1).removeClass('myhidden').addClass('fadeInLeft');
		}
		if (myTop >= ($('.btns').eq(2).offset().top/2)){
			$('.btns').eq(2).removeClass('myhidden').addClass('fadeInLeft');
			setTimeout(function(){
				$('.btns').eq(3).removeClass('myhidden').addClass('fadeInLeft');
			},500);
		}
		if (myTop >= ($('.btns').eq(4).offset().top/2)){
			$('.btns').eq(4).removeClass('myhidden').addClass('fadeInLeft');
			setTimeout(function(){
				$('.btns').eq(5).removeClass('myhidden').addClass('fadeInLeft');
			},500);
		}
		if (myTop >= ($('#contact').offset().top/1.5)){
			$('#contact').removeClass('myhidden').addClass('fadeInBottom');
		}

	});




})

