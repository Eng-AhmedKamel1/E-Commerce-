//open close cart
let cart = document.querySelector('.cart');

function openCart() {
    cart.classList.add('active');
}
function closeCart() {
    cart.classList.remove('active');
}


//open close menu

let menu = document.querySelector('#menu');
function openMenu() {
    menu.classList.add('active');
}
function closeMenu() {
    menu.classList.remove('active');
}



// item.html  change item image
let bigImage =document.getElementById("bigImg");

function changeItemImg(img) {
    bigImage.src = img;
    
    
}






// add item in cart
let all_prodacts_json;

let items_in_cart =document.querySelector('.items-in-cart');
let prodact_cart =[];
// 
function addToCart(id , btn){
    // جاب العنصر عن طريق ال id 
    // prodact_card حطه في الاري دي
    prodact_cart.push(all_prodacts_json[id])    
    btn.classList.add("active")

    
    getCartItems();
}

let count_items=document.querySelector('.count-items');
let count_items_cart=document.querySelector('.count-items-cart');
let price_cart_total=document.querySelector('.price-cart-total');
let price_cart_head =document.querySelector('.price-cart-head');
// اضيف المنتجات ي ال cart
function getCartItems(){
    let total_price=0;
    let items_c=" ";
    for (let i = 0; i < prodact_cart.length; i++) {
        items_c +=`
        <div class="item-cart">
            <div class="img-cart">
                <img src="${prodact_cart[i].img}" alt="">
            </div>
            <div class="content">
                <h4>${prodact_cart[i].name}</h4>
                <p class="price-cart">$${prodact_cart[i].price}</p>
            </div>
            <button onclick="remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i> </button>

        </div>

        `
    
   //لتغيير سعر المنتجات لما اضيفها في الكارت     

    //my cart دي اللي موجوده تحت كلمه 
    total_price += prodact_cart[i].price;
    price_cart_head.innerHTML = "$" +  `${total_price}`;
   
    //دي اللي موجوده فوق ايكون الكارت
    count_items.innerHTML = prodact_cart.length;

    // my cart دي اللي موجوده لما افتح الكارت جمب كلمه  
    count_items_cart.innerHTML = `(${prodact_cart.length} Item in Cart)`;

    //دي اللي موجوده في اخر جزء من الكارت لما افتحه
    price_cart_total.innerHTML = "$" +  `${total_price}`;


    }

            items_in_cart.innerHTML = items_c;


}

//حذف المنتجات من الكارت
function remove_from_cart(index){
    prodact_cart.splice(index,1)
    getCartItems();

    let addToCartButtons = document.querySelectorAll('.fa-cart-plus');
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active");
        
        prodact_cart.forEach(prodact => {
            if (prodact.id == i) {
                addToCartButtons[i].classList.add("active");
                
            }

        });
    }

}

//back to top
let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })

})


