$(function() { 
    "use strict";
    $(window).scroll(function () { 
        
        if ($('body,html').scrollTop() > 50){
            $('.navbar1').addClass('scrollnav');
        }else{
            $('.navbar1').removeClass('scrollnav');
        }
        // hieuungcuon
        
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
    $('#submitsingup').prop('disabled', 'true');
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
    // viet cho phan login

    $('#loginsubmit').click(function () { 
        
        if ($('#nameloginemail').val() !== 'admin') {
            $('.name-email-login .help-block').css('opacity', 1);
            $('.name-email-login .help-block').css('visibility', 'visible');
            return false;
        }else{
            $('.name-email-login .help-block').css('opacity', 0);
            $('.name-email-login .help-block').css('visibility', 'hiden');
        }
        if ($('#passwordloginemail').val() == ''){
            $('.password-email-login .help-block').css('opacity', 0);
            $('.password-email-login .help-block').css('visibility', 'hiden');
            
        }else if ($('#passwordloginemail').val() !== '123456') {
            $('.password-email-login .help-block').css('opacity', 1);
            $('.password-email-login .help-block').css('visibility', 'visible');
            return false;
        }else{
            $('.password-email-login .help-block').css('opacity', 0);
            $('.password-email-login .help-block').css('visibility', 'hiden');
        }
        
        
    });
    //viet hieu ung filter

    $('.filter-list button').click(function (e) { 
        let danhmuc = $(this).data('filter'); //get data-filter 
        $('.filter-list button').removeClass('how-active1');
        $(this).addClass('how-active1');
        $('.khoindsp.andi1').isotope({           
            filter: danhmuc
        }); 
    });
    // button search

    $('#btngroupsearch').click(function (e) { 
        $(this).toggleClass('show-search',2000);
        $('.search-product').toggleClass('show-search',2000 );
    });
});



