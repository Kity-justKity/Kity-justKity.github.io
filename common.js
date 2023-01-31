let btn_menu = document.querySelector('.menu');

btn_menu.addEventListener('click', function(){
    let menu = this;

    
    let menu_nav = document.querySelector('.menu-nav');

    if (menu_nav.style.display != "flex"){
        menu_nav.style.display = "flex";

        let hd = document.querySelector('.hd');
        hd.style.alignItems = "flex-start";

        menu.style.width = "max-content";
        menu.style.height = "max-content";
    }
    else{
        menu_nav.style.display = "none";
    }

})
