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
		}
		window.location.reload();
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

    var clearFace = $('#clearFace').offset().top;
    var keepFace = $('#keepFace').offset().top;
    var doFace = $('#doFace').offset().top;
    console.log('clearFace:'+clearFace)
    console.log('keepFace:'+keepFace)
    console.log('keepFace:'+keepFace)

    // 菜单跳转
    var pointTop = [clearFace, keepFace, doFace];
    for (var i = 0; i < $('.pointBtns').length; i++) {
		clickPoint($('.pointBtns').eq(i), pointTop[i]);
	}
    console.log(pointTop);

    // 锚点实现
	// 01.点击，实现跳转
	// 02.根据scrollTop值自动改变相应的样式
	// 03.控制锚点的显示和隐藏
	function clickPoint(point, skinTop) {
		point.click(function(ev) {
			ev.preventDefault(); // 解决闪烁问题
			$('html,body').animate({ scrollTop: skinTop }, 500);
		})
	}

	// 自动改变样式
	// 参：要改变的index值 需要遍历的按钮 需要改变的字体
	function changePointStyle(nowIndex, btnClass, fontClas) {
		btnClass.each(function(index, element) {
			if (nowIndex == index) {
				fontClas.eq(index).css('color', 'rgb(129, 101, 84)');
			} else {
				fontClas.eq(index).css('color', '#b58b72');
			}
		})
	}
	function autoChangePointStyle() {
		$(document).scroll(function() {	
			for (var i = 0; i < pointTop.length; i++) {
				if ($(document).scrollTop() > pointTop[i]-10 ) {
					changePointStyle(i, $('.pointBtns'), $('.pointBtns'));        	
		        } 
			}
		})
	}
    autoChangePointStyle();

	// 监听文档宽度
	var myWidth = $(document).width();
	var myTop = $(document).scrollTop();
	var myMennuTop = ($('#mymenu').offset().top);


	$(window).resize(function () {
		myWidth = $(document).width();
	})	
	
	// 根据高度触发动画
	$(window).scroll(function(event){
		myTop = $(document).scrollTop();
		myMennuTop = ($('#mymenu').offset().top);
		
		console.log('myWidth2:'+myWidth);
		console.log('myTop:'+myTop);

		// 回到顶部
		if (myTop >= 50){
			// console.log('fixed');
			// $('nav').addClass('myFixed');
			$('#goTop').css('display', 'block');
		} else {
			// $('nav').removeClass('myFixed');
			$('#goTop').css('display', 'none');
		}


		if(myWidth >= 768) {
			if (myTop >= myMennuTop){
				$('#mymenu div').addClass('myFixed');
				$('#mymenu div').css('width','14%');
				$('#mymenu div').css('margin-top','0');
			} else {
				$('#mymenu div').removeClass('myFixed');
				$('#mymenu div').css('width','100%');
				// $('#mymenu div').css('margin-top','35px');
				$('#mymenu div').css({'width':'100%','margin-top':'35px'});
			}
		} else {
			if (myTop >= myMennuTop){
				$('#mymenu div ul').addClass('myFixed');
				$('#mymenu div ul').css('width','100%');	
			} else {
				$('#mymenu div ul').removeClass('myFixed');
			}
		}	
	})

	






})

