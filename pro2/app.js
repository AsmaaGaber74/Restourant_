
//import products from 'products.js';
// import products from 'products.js';
let listCards = JSON.parse(localStorage.getItem('cart')) || [];
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'STEAKHOUSE BURGERS',
        image: 'b1.JPG',
        price: 500,
        catogary:'f'
    },
    {
        id: 2,
        name: 'BBQ Burger',
        image: 'b2.JPG',
        price: 600,
        catogary:'f'
    },
    {
        id: 3,
        name: 'Bacon Cheeseburger',
        image: 'b3.JPG',
        price: 620,
        catogary:'f'
    },
    {
        id: 4,
        name: 'Veggie Burger',
        image: 'b4.JPG',
        price: 690,
        catogary:'f'
    },
    {
        id: 5,
        name: 'Turkey Burger',
        image: 'b5.JPG',
        price: 780,
        catogary:'f'
        
    },
    {
        id: 6,
        name: ' Hawaiian Burger',
        image: 'b6.JPG',
        price: 1000,
        catogary:'f'
    },

    {
        id: 7,
        name: 'Margherita Pizza',
        image: 'pizza1.JPG',
        price: 900,
        catogary:'f2'
    },
    {
        id: 8,
        name: 'Pepperoni Pizza',
        image: 'pizza2.JPG',
        price: 700,
        catogary:'f2'
    },
    {
        id: 9,
        name: 'Hawaiian Pizza',
        image: 'pizza3.JPG',
        price: 800,
        catogary:'f2'
    },
    {
        id: 10,
        name: 'Vegetarian Pizza',
        image: 'pizza4.JPG',
        price: 670,
        catogary:'f2'
    },
    {
        id: 11,
        name: 'Four Cheese Pizza ',
        image: 'pizza5.JPG',
        price: 800,
        catogary:'f2'
    },
    {
        id: 12,
        name: 'Mediterranean Pizza',
        image: 'pizza6.JPG',
        price: 1000,
        catogary:'f2'
    },

    {
        id: 13,
        name: ' Strawberry Shortcake',
        image: 'd1.JPG',
        price: 900,
        catogary:'f3'
    },
    {
        id: 14,
        name: 'Panna Cotta',
        image: 'd2.JPG',
        price: 700,
        catogary:'f3'
    },
    {
        id: 15,
        name: 'Carrot Cake ',
        image: 'd3.JPG',
        price: 800,
        catogary:'f3'
    },
    {
        id: 16,
        name: 'Brownies',
        image: 'd4.JPG',
        price: 670,
        catogary:'f3'
    },
    {
        id: 17,
        name: 'Lemon Bars ',
        image: 'd5.JPG',
        price: 800,
        catogary:'f3'
    },
    {
        id: 18,
        name: 'Chocolate Cake',
        image: 'd6.JPG',
        price: 1000,
        catogary:'f3'
    }
];

///save the cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(listCards));
}
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

// function filterCategory(category) {
    
//     let filteredProducts = products.filter(product => product.catogary === category);
    
//     list.innerHTML = '';
    
//     filteredProducts.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     });
// }
function filterCategory(category) {
    let filteredProducts = products.filter(product => product.catogary === category);
    list.innerHTML = '';
    filteredProducts.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${value.id - 1})">Add To Card</button>`;
        list.appendChild(newDiv);
    });
}


initApp();

// function addToCard(key) {
//     let selectedProduct = products[key];
//     let existingCartItem = listCards.find(item => item.id === selectedProduct.id);

//     if (existingCartItem) {
//         existingCartItem.quantity++;
//         existingCartItem.price = existingCartItem.quantity * selectedProduct.price; // Update the price according to the quantity
//     } else {
//         listCards.push({
//             ...selectedProduct,
//             quantity: 1,
//             price: selectedProduct.price // Initialize the price according to the quantity
//         });
//     }

//     reloadCard();
// }
function addToCard(id) {
    let selectedProduct = products.find(product => product.id === id + 1);
    let existingCartItem = listCards.find(item => item.id === selectedProduct.id);

    if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.price = existingCartItem.quantity * selectedProduct.price; 
    } else {
        listCards.push({
            ...selectedProduct,
            quantity: 1,
            price: selectedProduct.price 
        });
    }

    reloadCard();
}
function addToCard(id) {
    let selectedProduct = products.find(product => product.id === id + 1);
    let existingCartItem = listCards.find(item => item.id === selectedProduct.id);

    if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.price = existingCartItem.quantity * selectedProduct.price; 
    } else {
        listCards.push({
            ...selectedProduct,
            quantity: 1,
            price: selectedProduct.price 
        });
    }

    reloadCard();
}


function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        // totalPrice = totalPrice + (value.price * value.quantity);
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div class="item-name" >${value.name}</div>
                <div class="item-price">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    saveCartToLocalStorage();
}

// Call this function when the page loads to initialize the cart from localStorage
window.addEventListener('load', function() {
    initApp();
    reloadCard();
});

function changeQuantity(key, quantity){
    if(quantity == 0){
        listCards.splice(key, 1); // Remove the item from the list if the quantity is zero
    } else {
        listCards[key].quantity = quantity;
        // listCards[key].price = quantity * products[key].price;
        listCards[key].price = quantity * products[listCards[key].id - 1].price; // update price acording to the quantity
    }
    reloadCard();
}