$(function() { 
	$('.shop span').click(function(event){
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
		$('.myMenu').slideToggle(1000);
	})

	// 根据高度触发动画
	$(window).scroll(function(event){
		var top = $(document).scrollTop();
		console.log(top);
		if (top >= 50){
			$('nav').addClass('navFixed');
			$('#goTop').css('display', 'block');
		} else {
			$('nav').removeClass('navFixed');
			$('#goTop').css('display', 'none');
		}
		if(top >= ($('#textContant1').offset().top)/5){
			$('#pic1').removeClass('myhidden').addClass('fadeInRight');
			$('#textContant1').removeClass('myhidden').addClass('fadeInLeft');	
		}
		if(top >= ($('#textContant2').offset().top)/2){
			$('#pic2').removeClass('myhidden').addClass('fadeInLeft');
			setTimeout(function(){
				$('#textContant2').removeClass('myhidden').addClass('fadeInRight');
			},500);				
		}
		if(top >= ($('#sedArticle').offset().top)/1.6){
			$('#sedArticle h1, #sedArticle h3').removeClass('myhidden').addClass('fadeInBottom');				
		};
		if(top >= ($('#firstPic').offset().top)/1.3){
			$('#firstPic').removeClass('myhidden').addClass('fadeInBottom');				
		}
		if(top >= ($('#step .firstRow').offset().top)/1.3){
			$('#step1').removeClass('myhidden').addClass('fadeInLeft');
			setTimeout(function(){
				$('#step1Text').removeClass('myhidden').addClass('fadeInRight');
			},500);				
		}
		if(top >= ($('#step .centerRow').offset().top)/1.2){
			$('#step2Text').removeClass('myhidden').addClass('fadeInLeft');
			setTimeout(function(){
				$('#step2').removeClass('myhidden').addClass('fadeInRight');
			},500);				
		}
		if(top >= ($('#step .lastRow').offset().top)/1.2){
			$('#step3').removeClass('myhidden').addClass('fadeInLeft');
			setTimeout(function(){
				$('#step3Text').removeClass('myhidden').addClass('fadeInRight');
			},500);				
		}
		if(top >= ($('#findMore').offset().top)/1.15){
			$('#findMore').removeClass('myhidden').addClass('fadeInBottom');		
		}
		if(top >= ($('#lastPic').offset().top)/1.15){
			$('#lastPic').removeClass('myhidden').addClass('fadeInBottom');		
		}	
    });	


    // 回到顶部
    clickPoint($('#goTop'), 0);

    function clickPoint(point, skinTop) {
		point.click(function(ev) {
			ev.preventDefault(); // 解决闪烁问题
			$('html,body').animate({ scrollTop: skinTop }, 500);
		})
	}
})

