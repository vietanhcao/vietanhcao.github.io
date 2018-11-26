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
        if ($(this).scrollTop() > 50){
            $('.navbar1').addClass('scrollnav');
        }else{
            $('.navbar1').removeClass('scrollnav');
        }
        // hieuungcuon
        if ($(this).scrollTop() >= top1){
            $('.andi1').addClass('hienra');
        }
        if ($(this).scrollTop() >= top2){
            $('.andi2').addClass('hienra');
        }
        if ($(this).scrollTop() >= top3){
            $('.andi3').addClass('hienra');
        }
        if ($(this).scrollTop() >= top4){
            $('.andi4').addClass('hienra');
        }  
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
        if (!namesrex.test($('#namesignup').val())){
            $('.fullname .help-block').css('opacity',1);
            $('.fullname .help-block').css('visibility','visible');
            $('.fullname .fas.fa-check').css('opacity', 0);
            
        }else{
            $('.fullname .help-block').css('opacity', 0);
            $('.fullname .help-block').css('visibility', 'hiden');
            $('.fullname .fas.fa-check').css('opacity',1);
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
    $('.khoindsp.andi1').isotope({
        itemSelector: '.product',
        layoutMode: 'fitRows'
    });

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
        $(this).toggleClass('show-search');
        $('.search-product').slideToggle();
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
    
    
    
    
    
    
    
});




