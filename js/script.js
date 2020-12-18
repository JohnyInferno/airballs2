var phone_two = $(".row-two__phone-two")
var row_three = $(".row-three-wrap");
var main_section = $(".section-main");

document.getElementById("city-link").innerHTML = localStorage.getItem("city");
localStorage.removeItem("cart-quantity");
//localStorage.setItem("cart-quantity", 0);


function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});

jQuery(document).ready(function($) {
    $('.city-link').magnificPopup({
        type: 'inline'
    });
});

jQuery(document).ready(function($) {
    $('.callback-link').magnificPopup({
        type: 'inline'
    });
});


$(document).ready(function () {

    $(window).scroll(function(){
        if ($(this).scrollTop() > row_three.offset().top) {
            row_three.toggleClass('header-fixed');
        }
    
        if ($(this).scrollTop() < main_section.offset().top) {
            if (row_three.hasClass('header-fixed')) {
                row_three.toggleClass('header-fixed');
            }
        }
    })

    $('.phone-one').click(function () {
        $(this).toggleClass('active').next().slideToggle();
    });

    $('.item-catalog').hover(function(){
        $('.drop-menu').toggleClass('menu-active');
    })

    $('.drop-menu').hover(function(){
        $('.drop-menu').toggleClass('menu-active');
    })


    $('.search-item__image').click(function () {
        $('.search-body').toggleClass('search-active');
        $('.menu-three__item').toggleClass('item-inactive');
    });
    $('.search-body__close-icon').click(function () {
        $('.search-body').toggleClass('search-active');
        $('.menu-three__item').toggleClass('item-inactive');
    });


    $('.city-button').click(function () {
        var city_value = $(this).text();
        localStorage.setItem("city", city_value);
        //console.log(localStorage.getItem("city"))
        document.getElementById("city-link").innerHTML = localStorage.getItem("city");
        $.magnificPopup.close();
    });

    $('.add-cart-button').click(function () {
        if (localStorage.getItem('cart-quantity') != null) {
            var temp_value = Number(localStorage.getItem("cart-quantity"));
            temp_value += 1;
            localStorage.setItem("cart-quantity", temp_value);
            document.getElementById("cart-number").innerHTML = temp_value;
            document.getElementById("cart-after-number").innerHTML = temp_value;
        } else {
            localStorage.setItem("cart-quantity", 1);
            $('.cart__number').toggleClass('cart-active');
            $('.cart-added-wrap').toggleClass('cart-added-active');
        }
        
    });



    $(".main-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1300,
    })

    $(".goods-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        centerMode: false,
        speed: 700,
    })
});






