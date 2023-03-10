const CATALOG = [
    {
        id: "el101",
        name: "Зайчик белый",
        img: "фото/заяц-белый.jpg",
        price: 1200,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "rabbits",
    },
    {
        id: "el102",
        name: "Зайчик розовый",
        img: "фото/заяц-розовый.jpg",
        price: 1200,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "rabbits",
    },
    {
        id: "el103",
        name: "Зайчик кофейный",
        img: "фото/заяц-кофейный.jpg",
        price: 1200,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "rabbits",
    },
    {
        id: "el104",
        name: "Мишка Тедди бежевый",
        img: "фото/мишка-Тедди-бежевый.jpg",
        price: 1400,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "bears",
    },
    {
        id: "el105",
        name: "Мишка Тедди коричневый",
        img: "фото/мишка-Тедди-коричневый.webp",
        price: 1400,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "bears",
    },
    {
        id: "el106",
        name: "Динозавр Стегозавр",
        img: "фото/динозавр-стегозавр.jpg",
        price: 1500,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "dinos",
    },
    {
        id: "el107",
        name: "Динозавр Диплодок",
        img: "фото/динозавр-диплодок.webp",
        price: 1500,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "dinos",
    },
    {
        id: "el108",
        name: "Динозавр Саркозух",
        img: "фото/динозавр-саркозух.webp",
        price: 1500,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "dinos",
    },
    {
        id: "el109",
        name: "Динозавр Тираннозавр",
        img: "фото/динозавр-тираннозавр.webp",
        price: 1500,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "dinos",
    },
    {
        id: "el110",
        name: "Динозавр Трицераптос",
        img: "фото/динозавр-трицераптос.webp",
        price: 1500,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "dinos",
    },
    {
        id: "el111",
        name: "Мишка Пилот",
        img: "фото/мишка-пилот.webp",
        price: 1400,
        favorite: false,
        in_bag: false,
        sect: "animals",
        subsect: "bears",
    },
]







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

function show_subsect_products(cur_subsect){
    let pre_cur_subsect = document.querySelector('.current-subsect');
    if (pre_cur_subsect){
        pre_cur_subsect.classList.remove('current-subsect')
    }
    let name_subsect = cur_subsect.classList[1];
    cur_subsect.classList.add('current-subsect');
    
    let all_products = document.querySelectorAll('.product');
    for (let product of all_products){
        if (product.classList[2] == name_subsect){
            product.style.display = "flex";
        }
        else{
            product.style.display = "none";
        }
    }
}

categories.addEventListener('click', function(event){
    let current_sect = event.target.closest('.sect');
    if (current_sect){
    let current_category = current_sect.closest('.category')
    show_subsect(current_category);
    }
    else{
        let current_subsect = event.target.closest('.subsect');
        if (!current_subsect) return;
        show_subsect_products(current_subsect);
    }
})






let products = document.querySelector('.products');
class Products{

    show_products(){
        let html_prod = "";
        for (let element of CATALOG){
            html_prod += `
                <li class="product ${element.id} ${element.subsect}">
                    <div class="prod-head">
                        <span class="prod-name">${element.name}</span>
                        <img class="btn-fav" src="фото/heart.png">
                    </div>
                    <img class="prod-img" src="${element.img}">
                    <span class="prod-price">${element.price} р.</span>
                    <button class="btn-bag">В корзину</button>
                </li>
            `;
        }

        const html_catalog = `
            <ul class="product-container">
                ${html_prod}
            </ul>
        `;
        products.innerHTML = html_catalog;
    }
}

let products_page = new Products();
products_page.show_products();



function add_to_fav(btn, prod_id){
    for (let element of CATALOG){
        if (element.id == prod_id){
            if (element.favorite){
                btn.src = "фото/heart.png";
            }
            else{
                btn.src = "фото/heart2.png";
            }
            element.favorite = !element.favorite;
        }
    }
}

function add_to_bag(btn, prod_id){
    for (let element of CATALOG){
        if (element.id == prod_id){
            if (element.in_bag){
                btn.style.backgroundColor = '#9dd49d';
                btn.innerHTML = "В корзину"
            }
            else{
                btn.style.backgroundColor = '#9dc9d4';
                btn.innerHTML = "Добавлено"

            }
            element.in_bag = !element.in_bag;
        }
    }
}

products.addEventListener('click', function(event){
    let btn = event.target.closest('.btn-fav');
    if (btn){
        let product = btn.closest('.product');
        let prod_id = product.classList[1];
        add_to_fav(btn, prod_id);
    }
    else{
        btn = event.target.closest('.btn-bag');
        if (!btn) return;
        let product = btn.closest('.product');
        let prod_id = product.classList[1];
        add_to_bag(btn, prod_id);
    }
})


let cat_btn = document.querySelector('.categories-menu');

cat_btn.addEventListener('click', function(){
    let btn = this;
    let line1 = btn.querySelector('.categories-line1');
    let line2 = btn.querySelector('.categories-line2');
    let divide = document.querySelector('.divide');
    let categories = document.querySelectorAll('.category');
    if(String(line1.style.transform) == "none"){
        line1.style.transform = "rotate(45deg) scale(0.8, 1)";
        line2.style.transform = "rotate(-45deg) scale(0.8, 1)";
        divide.style.display = "none";
        for (let category of categories){
            category.style.display = "none";
        }
    }
    else{
        line1.style.transform = "none";
        line2.style.transform = "none";
        divide.style.display = "block";
        for (let category of categories){
            category.style.display = "block";
        }
    }
})