const menu_list = document.querySelectorAll('.header-menu > ul >  li');
const border_box = document.querySelectorAll('.border-box');
var popular_container = document.querySelector('.popular-container-list');
var popular_item_list = document.querySelectorAll('.popular-container-list > a');
var lookbook_container = document.querySelector('.lookbook-container');
var media_768 = window.matchMedia("all and (max-width: 768px)");
var media_1024 = window.matchMedia("all and (max-width: 1024px)");
var media_1280 = window.matchMedia("all and (max-width: 1280px)");
const shop_list = document.querySelectorAll('.header-menu > ul > li > a');
const shop_submenu_list_pc = document.querySelector('.shop-submenu-list_pc');
const login = document.querySelectorAll('.login-menu > ul > li');
const login_modal = document.querySelector('.login_modal');
const login_modal_closeBtn = document.querySelector('.login_modal .fa-times');
const search_modal = document.querySelector('.search_modal');
const search_modal_closeBtn = document.querySelector('.search_modal .fa-times');
const button = document.querySelectorAll(".button_wrapper > button");

var lookbook_container_caption = document.querySelector('.lookbook-container .caption');
var index = 0;

window.onload=()=>{

    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click', ()=>{
            if(button[i].classList == "active")
                button[i].classList.remove('active');
            else
                button[i].classList.add('active');
        })
    }

    login[2].addEventListener('click',()=>{
        search_modal.style.display = "block";
    })

    search_modal_closeBtn.addEventListener('click', ()=>{
        search_modal.style.display = "none";
    })

    

    if(window.matchMedia("all and (min-width: 1280px").matches){
        lookbook_container_caption.style.opacity = "0";
        lookbook_container_caption.style.transform = "translateX(-100px)";
        
        for(let i=0; i<popular_item_list.length; i++){
            item_hide(i);
        }
    }

    for(let j=0; j<shop_list.length; j++){
        shop_list[j].addEventListener('mouseover',()=>{
            if(j == 1){
                shop_submenu_list_pc.style.height = "34%";
            }
            border_box[j].style.width = "70%";
        })

        shop_list[j].addEventListener('mouseout', ()=>{
            if(j == 1){
                shop_submenu_list_pc.style.height = "0%";
            }
            border_box[j].style.width = "0%";
        })
    }

    shop_submenu_list_pc.addEventListener('mouseover',()=>{
        shop_submenu_list_pc.style.height = "34%";
    });

    shop_submenu_list_pc.addEventListener('mouseout',()=>{
        shop_submenu_list_pc.style.height = "0%";
    });

    login[0].addEventListener('click',()=>{
        login_modal.style.display = "block";
    });

    login_modal_closeBtn.addEventListener('click',()=>{
        login_modal.style.display = "none";
    })





    
    function item_show(n){
            popular_item_list[n].style.transform = "translateY(0)";
            popular_item_list[n].style.opacity = "1";
    }

    function item_hide(n){
        popular_item_list[n].style.transform = "translateY(100px)";     
        popular_item_list[n].style.opacity = "0"; 

    }
    
    function loop(index){
        setTimeout(()=>{
            item_show(index-1);
            if(index < popular_item_list.length)
                loop(index);
        },100)
        index++;
    }

    if(window.matchMedia("all and (min-width: 1280px").matches){
    
    window.addEventListener('scroll',()=>{
        popular_container_rect = popular_container.getBoundingClientRect();
        lookbook_container_rect = lookbook_container.getBoundingClientRect();

        if(popular_container_rect.y < 700){
            loop(index);
        }
        else{
            for(let i=0; i<popular_item_list.length; i++){
                item_hide(i);
            }
        }

        if(lookbook_container_rect.y < 100){
            lookbook_container_caption.style.opacity = "1";
            lookbook_container_caption.style.transform = "translateX(0)"
        }

        else{
            lookbook_container_caption.style.opacity = "0";
            lookbook_container_caption.style.transform = "translateX(-100px)";
        }
    })
}
}






$(document).ready(function () {

    if (media_768.matches) {
        var mySwiper = new Swiper('.main-slide > .swiper-container', {
            autoplay: true,
            direction: 'horizontal',
            loop: true,
        });

        $('.hamburger-menu').click(() => {
            if ($('.header-submenu').hasClass('active') === true) {
                hamburger_menu_animate_close(12);
                $('.shop-submenu-list').animate({
                    "left": "-50%"
                }, 500);
                $('#header-submenu-list').stop().animate({
                    "left": "-50%"
                }, 500, () => {
                    $('.header-submenu').removeClass('active');
                });

                return 0;
            }

            $('.header-submenu').toggleClass('active');
            $('#header-submenu-list').stop().animate({
                "left": "0%"
            }, 500);

            hamburger_menu_animate_open(6);

        })
    } else if (media_1024.matches) {

        

        var mySwiper = new Swiper('.main-slide > .swiper-container', {
            autoplay: true,
            direction: 'horizontal',
            loop: true,
        });

        $('.hamburger-menu').click(() => {
            if ($('.header-submenu').hasClass('active') === true) {
                hamburger_menu_animate_close(18);

                $('.shop-submenu-list').animate({
                    "left": "-50%"
                }, 500);
                $('#header-submenu-list').stop().animate({
                    "left": "-50%"
                }, 500, () => {
                    $('.header-submenu').removeClass('active');
                });

                return 0;
            }

            $('.header-submenu').toggleClass('active');
            $('#header-submenu-list').stop().animate({
                "left": "0%"
            }, 500);

            hamburger_menu_animate_open(9);
        })
    }

    else if (media_1280.matches){
        var mySwiper = new Swiper('.main-slide > .swiper-container', {
            autoplay: true,
            direction: 'horizontal',
            loop: true,
        });

    }

    else{

        var mySwiper = new Swiper('.main-slide > .swiper-container', {
            autoplay: true,
            direction: 'horizontal',
            loop: true,
    
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

    }


    $('.submenu-list > li > a').eq(1).click(() => {
        
        $('.shop-submenu-list').animate({
            "left": "0"
        }, 500);
    })

    $('.shop-submenu-list > li > a').last().click(() => {

        $('.shop-submenu-list').stop().animate({
            "left": "-50%"
        }, 500);
    });



    var popular_Swiper = new Swiper('.popular-container-slide > .swiper-container', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.popular-swiper-button-next',
            prevEl: '.popular-swiper-button-prev',
        }
    });


    // -------------------------------햄버거 메뉴 애니메이션----------------------------
    function hamburger_menu_animate_open(height) {
        $('.hamburger-menu > .line').css({
            "transition": "none"
        });
        $('.hamburger-menu > #top').animate({
            "top": `${height}px`
        }, () => {
            $('.hamburger-menu > #middle').css({
                "width": "0%"
            });
            $('.hamburger-menu > #top').css({
                "transition": "all 0.5s"
            });
            $('.hamburger-menu > #top').css({
                "transform": "rotate(-45deg)"
            });
        });

        $('.hamburger-menu > #bottom').animate({
            "top": `${height}px`
        }, () => {
            $('.hamburger-menu > #bottom').css({
                "transition": "all 0.5s"
            });
            $('.hamburger-menu > #bottom').css({
                "transform": "rotate(45deg)"
            });
        });
    }

    function hamburger_menu_animate_close(height) {
        $('.hamburger-menu > #top').css({
            "transform": "rotate(0deg)"
        });
        $('.hamburger-menu > #top').animate({
            "top": "0px"
        }, () => {
            $('.hamburger-menu > #middle').css({
                "width": "100%"
            });
        });
        $('.hamburger-menu > #bottom').css({
            "transform": "rotate(0deg)"
        });
        $('.hamburger-menu > #bottom').animate({
            "top": `${height}px`
        });

    }
    

});
