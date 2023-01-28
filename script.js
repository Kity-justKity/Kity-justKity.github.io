let categories = document.querySelector('.categories');

function show_subsect(cur_cat){
    let subsects = cur_cat.querySelectorAll('.subsect');
    let img = cur_cat.querySelector('.sect').querySelector('img');
    if (subsects[0].style.display=="flex"){
        img.style.transform = "rotate(0deg)";
    }
    else {
        img.style.transform = "rotate(90deg)";
    }
    for (let subsect of subsects){
        if (subsect.style.display == "flex"){
            subsect.style.display = "none";
        }
        else{
            subsect.style.display = "flex";           
        }
    }
}

categories.addEventListener('click', function(event){
    let current_sect = event.target.closest('.sect');
    if (!current_sect) return;
    let current_category = current_sect.closest('.category')
    show_subsect(current_category);
})






