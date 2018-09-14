$(function() { 
    var offset1 = $('.andi1').offset();
    var top1 = offset1.top - 600;
    var offset2 = $('.andi2').offset();
    var top2 = offset2.top - 700;
    var offset3 = $('.andi3').offset();
    var top3 = offset3.top - 700;
    var offset4 = $('.andi4').offset();
    var top4 = offset4.top - 700;
    $(window).scroll(function () { 
        
        if ($('body,html').scrollTop() > 50){
            $('.navbar1').addClass('scrollnav');
        }else{
            $('.navbar1').removeClass('scrollnav');
        }
        // hieuungcuon
        if ($('body,html').scrollTop() >= top1){
            $('.andi1').addClass('hienra');
        }
        if ($('body,html').scrollTop() >= top2){
            $('.andi2').addClass('hienra');
        }
        if ($('body,html').scrollTop() >= top3){
            $('.andi3').addClass('hienra');
        }
        if ($('body,html').scrollTop() >= top4){
            $('.andi4').addClass('hienra');
        }  
        //hieu ung di len
        if($('html, body').scrollTop() > 300){
            $('.nutscroll button').addClass('hienthi');
        }else{
            $('.nutscroll button').removeClass('hienthi');
        }
        
    });
});
$('.nutscroll button').click(function () { 
    $('body,html').animate({scrollTop : 0},1000); 
});
// $(function() {
// 	$(window).scroll(function() {
// 		if( $('html, body').scrollTop()>500) {
// 			$('.nutlen').addClass('hienthi');
// 		}else {
// 			$('.nutlen').removeClass('hienthi');
// 		}
// 	});
// 	$('.nutlen').click(function() {
// 		$('html, body').animate({'scrollTop':0} );
// 		// return false; //khi click vào thẻ a nó sẽ load lại web false để ko load nữa
// 	});
// })
