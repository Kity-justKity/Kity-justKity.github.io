const CATALOG = [
    {
        id: "el101",
        name: "Зайчик белый",
        img: "фото/заяц-белый.jpg",
        price: 1200,
        favorite: true,
        in_bag: false,
        sect: "animals",
        subsect: "rabbits",
    },
    {
        id: "el102",
        name: "Зайчик розовый",
        img: "фото/заяц-розовый.jpg",
        price: 1200,
        favorite: true,
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
        favorite: true,
        in_bag: false,
        sect: "animals",
        subsect: "bears",
    },
    {
        id: "el106",
        name: "Динозавр Стегозавр",
        img: "фото/динозавр-стегозавр.jpg",
        price: 1500,
        favorite: true,
        in_bag: false,
        sect: "animals",
        subsect: "dinos",
    }
]


let products = document.querySelector('.products');
class Products{

    show_products(){
        let html_prod = "";
        for (let element of CATALOG){
            if (element.favorite){
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
        }

        const html_catalog = `
            <ul class="product-container">
                ${html_prod}
            </ul>
        `;
        products.innerHTML = html_catalog;

        let btn_fav = products.querySelectorAll('.btn-fav');
        for (let btn of btn_fav){
            btn.src = "фото/heart2.png";
        }
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