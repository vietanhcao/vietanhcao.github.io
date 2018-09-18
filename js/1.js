$(function() { 
    "use strict";
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
    $('.nutscroll button').click(function () { 
        $('body,html').animate({scrollTop : 0},1000); 
    });
    // validate form
    
    
    let emailRgx = /^([a-zA-Z0-9]{3,20})+@+([a-z-]{3,10})\.([a-z]{3,5})$/;
    let namesrex = /^([a-zA-Z-0-9]{3,20})$/;
    let passworkrex = /^([a-zA-Z-0-9]{6,99})$/;
    $('#namesignup').change(function () { 
        if (!namesrex.test($('#namesignup').val())){
            $('#fullname-error').css('opacity',1);
            $('#fullname-error').css('visibility','visible');
            $('#checkfullname').css('opacity', 0);
            
        }else{
            $('#fullname-error').css('opacity', 0);
            $('#fullname-error').css('visibility', 'hiden');
            $('#checkfullname').css('opacity',1);
        } 
    });
    $('#username').change(function () { 
        if (!namesrex.test($('#username').val())){
            $('.username .help-block').css('opacity',1);
            $('.username .help-block').css('visibility','visible');
            $('.username .fas.fa-check').css('opacity', 0);
            
        }else{
            $('.username .help-block').css('opacity', 0);
            $('.username .help-block').css('visibility', 'hiden');
            $('.username .fas.fa-check').css('opacity',1);
        } 
    });
    $('#emailsignup').change(function () { 
        if (!emailRgx.test($('#emailsignup').val())){
            $('.email-signup .help-block').css('opacity',1);
            $('.email-signup .help-block').css('visibility','visible');
            $('.email-signup .fas.fa-check').css('opacity', 0);
            
        }else{
            $('.email-signup .help-block').css('opacity', 0);
            $('.email-signup .help-block').css('visibility', 'hiden');
            $('.email-signup .fas.fa-check').css('opacity',1);
        } 
    });
    $('#password').change(function () {
        if (!passworkrex.test($('#password').val())) {
            $('.password .help-block').css('opacity', 1);
            $('.password .help-block').css('visibility', 'visible');
            $('.password .fas.fa-check').css('opacity', 0);
            
        } else {
            $('.password .help-block').css('opacity', 0);
            $('.password .help-block').css('visibility', 'hiden');
            $('.password .fas.fa-check').css('opacity', 1);
        }
    });
    
    $('#confirm').change(function () {
        if (!passworkrex.test($('#password').val())){
            
        }else if ($('#password').val() != $('#confirm').val()) {
            $('.confirm .help-block').css('opacity', 1);
            $('.confirm .help-block').css('visibility', 'visible');
            $('.confirm .fas.fa-check').css('opacity', 0);

        } else {
            $('.confirm .help-block').css('opacity', 0);
            $('.confirm .help-block').css('visibility', 'hiden');
            $('.confirm .fas.fa-check').css('opacity', 1);
            
        }
    });
    $('#submitsingup').attr('disabled', 'true');
    $('#checkbox').click(function () {  
        if ($('#checkbox').prop('checked') == false) {
            $('#submitsingup').attr('disabled','true');
        } else if ($('#checkbox').prop('checked') == true){
            $('#submitsingup').removeAttr('disabled');
            
        }
    });
    $('#submitsingup').click(function () { 
        
        if ($('#password').val() != $('#confirm').val()) {
            return false;
        } 
    });

    
    
    
    
    
    
    
});




