const CATALOG = [
    {
        id: "el101",
        name: "Зайчик белый",
        img: "фото/заяц-белый.jpg",
        price: 1200,
        favorite: false,
        in_bag: true,
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
        in_bag: true,
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
        in_bag: true,
        sect: "animals",
        subsect: "dinos",
    }
]


let products = document.querySelector('.products');
class Products{

    show_products(){
        let html_prod = "";
        for (let element of CATALOG){
            if (element.in_bag){
            html_prod += `
                <div class="product ${element.id}">
                    <div class="prod-info">
                        <p class="prod-name">${element.name}</p>
                        <img class="prod-img" src="${element.img}">
                        <p class="prod-price">${element.price} р.</p>
                    </div>
                    <div class="cont-prod-sum">
                        <div class="prod-counter">
                            <p class="p-n-hl">штук в корзине:</p>
                            <p class="prod-number">1</p>
                            <div class="counter-btn">
                                <div class="btn-less">-</div>
                                <div class="btn-more">+</div>
                            </div>
                        </div>
                        <div class="sum-cont">
                            <p class="p-s-hl">Сумма:</p>
                            <div class="prod-sum-cont">
                                <p class="prod-sum">${element.price}</p>
                                <p class="rub"> р.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            if (element != CATALOG[CATALOG.length - 1]){
                html_prod += `
                    <div class="divide-hor"></div>
            `;
            }
            }
        }

        products.innerHTML = html_prod;
    }
}

let products_bag = new Products();
products_bag.show_products();



function more(prod_id, product){
    let prod_number = product.querySelector('.prod-number');
    let prod_num = Number(prod_number.innerHTML);
    prod_number.innerHTML = prod_num + 1;

    let prod_sum = product.querySelector('.prod-sum');
    let prod_s = Number(prod_sum.innerHTML);
    let prod_price;
    for (let element of CATALOG){
        if (element.id == prod_id)
        {
            prod_price = element.price;
        }
    }
    prod_sum.innerHTML = prod_s + prod_price;

    let all_sum = document.querySelector('.prods-sum');
    let all_s = Number(all_sum.innerHTML);
    all_sum.innerHTML = all_s + prod_price;


     
    // делаем массив всех сумм

    // прибавляем все элементы массива суммы

    // all_sum.innerHTML = all_s + 
}

function less(prod_id, product){
    let prod_number = product.querySelector('.prod-number');
    let prod_num = Number(prod_number.innerHTML);
    if (prod_num > 1){
    prod_number.innerHTML = prod_num - 1;
    }

    let prod_sum = product.querySelector('.prod-sum');
    let prod_s = Number(prod_sum.innerHTML);
    let prod_price;
    for (let element of CATALOG){
        if (element.id == prod_id)
        {
            prod_price = element.price;
        }
    }
    let all_sum = document.querySelector('.prods-sum');
    let all_s = Number(all_sum.innerHTML);

    if (prod_num > 1){
        prod_sum.innerHTML = prod_s - prod_price;
        all_sum.innerHTML = all_s - prod_price;
    }

}

products.addEventListener('click', function(event){
    let btn = event.target.closest('.btn-more');
    if (btn){
        let product = btn.closest('.product');
        let prod_id = product.classList[1];
        more(prod_id, product);
    }
    else{
        btn = event.target.closest('.btn-less');
        if (!btn) return;
        let product = btn.closest('.product');
        let prod_id = product.classList[1];
        less(prod_id, product);
    }


})