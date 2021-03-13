const hamburger_menu = document.querySelector('.hamburger_menu');
const line = document.querySelectorAll('.hamburger_menu > .line');
const line_top = document.querySelector('.hamburger_menu > #top');
const line_middle = document.querySelector('.hamburger_menu > #middle');
const line_bottom = document.querySelector('.hamburger_menu > #bottom');
const submenu_list = document.querySelector('.submenu_list');
const submenu_list_items = document.querySelectorAll('.submenu_list > li');
const header_submenu = document.querySelector('.header_submenu');
const shop_submenu_list = document.querySelector('.shop_submenu_list');
const shop_submenu_list_items = document.querySelectorAll('.shop_submenu_list > li');
const menu_list = document.querySelectorAll('.header_menu >  li > a');

const border = document.querySelectorAll('.border');

window.onload = function(){

    

    hamburger_menu.addEventListener('click',()=>{
        if(hamburger_menu.classList.contains("active") == true){
            hamburger_menu_animateclose(6);
            submenu_list.style.left = '-50%';
            shop_submenu_list.style.left = '-50%';
            hamburger_menu.classList.remove('active');
            
            setTimeout(()=>{
                header_submenu.classList.remove('active');
            },500);
        }
        
        else{
            hamburger_menu_animateopen(6);
            header_submenu.classList.add('active');
            setTimeout(()=>{
                submenu_list.style.left = '0px';
            },100);
            hamburger_menu.classList.add('active');
        }

        shop_submenu_animation();

        
    });

    function shop_submenu_animation(){
        shop_submenu_list_items[6].addEventListener('click',()=>{
            setTimeout(()=>{
                shop_submenu_list.style.left = "-50%";
            },0)
            
        })

        submenu_list_items[1].addEventListener('click',()=>{
            shop_submenu_list.style.left = "0%";
        })
    }

    for (let i = 0; i < menu_list.length; i++) {
        menu_list[i].addEventListener('mouseover', () => {
            border[i].style.width = "100%"
        })
    }
    
    for (let i = 0; i < menu_list.length; i++) {
        menu_list[i].addEventListener('mouseout', () => {
            border[i].style.width = "0%"
        })
    }
    


    function hamburger_menu_animateopen(height){
        line_top.style.top = `${height}px`;
        line_bottom.style.top = `${height}px`;

        setTimeout(()=>{
            line_middle.style.display = "none";
            line_top.style.transform = "rotate(-45deg)";
            line_bottom.style.transform = "rotate(45deg)"
        },500);
    }

    function hamburger_menu_animateclose(height){
        
        line_top.style.transform = "rotate(0deg)";
        line_bottom.style.transform = "rotate(0deg)"
        setTimeout(()=>{
            line_middle.style.display = "block";
            line_top.style.top = `${0}px`;
            line_bottom.style.top = `${height*2}px`;
        },500);
    }

    
};


