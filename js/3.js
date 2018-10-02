$(function() { 
    "use strict";
   
    
    $(window).scroll(function () { 
        
        if ($(this).scrollTop() > 10){
            $('.navbar1').addClass('scrollnav');
        }else{
            $('.navbar1').removeClass('scrollnav');
        }
        // hieuungcuon
        
        //hieu ung di len
        if ($(this).scrollTop() > 300){
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
        if (!namesrex.test($('#namesignup').val())) {
            $('.fullname .help-block').css('opacity', 1);
            $('.fullname .help-block').css('visibility', 'visible');
            $('.fullname .fas.fa-check').css('opacity', 0);

        } else {
            $('.fullname .help-block').css('opacity', 0);
            $('.fullname .help-block').css('visibility', 'hiden');
            $('.fullname .fas.fa-check').css('opacity', 1);
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
    // [+/- num product ]*/
    $('.btn-num-product-up').click(function (e) {
        var numProduct = Number($(this).prev().val()); // lấy giá trị của thàng truoc no va chuyen ve dang so
        $(this).prev().val(numProduct + 1); //tang gia tri thang input  
    });
    $('.btn-num-product-down').click(function (e) {
        var numProduct = Number($(this).next().val());
        if (numProduct > 0) {
            $(this).next().val(numProduct - 1);
        }
    });
    //click vao thay doi anh trong modal detail
    $('.img-slick-large').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-slick-small'
    });
    $('.img-slick-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.img-slick-large',
        focusOnSelect: true
    });

    // rating
    let item = $('.wrap-rating').find('.item-rating');
    $(item).on('mouseenter',function () { 
        let i = 0;
        var index = $('.wrap-rating .item-rating').index(this);
        for (i = 0; i <= index; i++) { //- add vi tri mouster 0-3
            $(item[i]).removeClass('far fa-star');//remove star old
            $(item[i]).addClass('fas fa-star');//add new star
        }
        for (let j = i; j < item.length; j++) {//remove index mouster 3 -5
            $(item[j]).removeClass('fas fa-star');
            $(item[j]).addClass('far fa-star');
            
        }
        
    });
    
    // slide relate
    $('.khoindsp').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '<button class="next-slick2"><i class="fas fa-angle-right"></i></button>',
        prevArrow: '<button class="prev-slick2"><i class="fas fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]    
    });

    

    








    

});




