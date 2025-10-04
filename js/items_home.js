
// fetch(): 
// بتستخدم لجلب البيانات من ملف أو رابط.
// هنا أنت بتجيب ملف 
// items.json 
// من فولدر js.
fetch('js/items.json')
// بتحوّل الـ 
// response
//  (البيانات الراجعة) 
// إلى 
// JSON object 
// علشان تقدر تتعامل معاه في 
// JavaScript.
.then(response => response.json() )
// data 
// دي عبارة عن مصفوفة من المنتجات.
// بتحدد عنصر الـ 
// HTML 
// اللي هتحط فيه المنتجات داخل الـ 
// Swiper
// وبيكون عنده 
// id="swiper-items-sale"
.then(data =>{
      const swiper_items_sale = document.getElementById("swiper-items-sale");
      const other_prodact_swiper=document.getElementById("other_prodact_swiper");
      const other_prodact_swiper2=document.getElementById("other_prodact_swiper2");
      
      all_prodacts_json = data;
    //   بتستخدم 
    // forEach
    //  data علشان تلف على كل عنصر (منتج) داخل 

    //سلايدر1
data.forEach(prodact => {
    // بتتأكد إن المنتج عنده 
    // old_price (يعني في خصم).
    
    if(prodact.old_price){
        // ✅ حساب نسبة الخصم:
        // Math.floor() بتخلي الرقم عدد صحيح (من غير كسور).
        const percent_desc =Math.floor((prodact.old_price - prodact.price)/prodact.old_price * 100)
    //    كل منتج بيتضاف كـ 
    // swiper-slide
    //  داخل Swiper.
        swiper_items_sale.innerHTML +=`
        
        <div class="prodact swiper-slide">
                <div class="icons">
                    <span><i onclick="addToCart(${prodact.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                   <span><i class="fa-solid fa-share"></i></span>
                </div>
                <span class="sale-present">${percent_desc}%</span>

                    <div class="img-prodact">
                        <img src="${prodact.img}" alt="">
                        <img class="img-hover" src="${prodact.img_hover}" alt="">
                    
                    </div>

                    <h3 class="name-prodact"> 
                      <a href="">${prodact.name}</a>
                    </h3>
                    <div class="stars"> 
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        <div class="price">
           <p><span>$${prodact.price}</span></p>
           <p class="old-price"><span>$${prodact.old_price}</span></p>
           </div>
        </div>
        
        `
    }    
});  



//2 سلايدر
data.forEach(prodact => {
    //    كل منتج بيتضاف كـ 
    // swiper-slide
    //  داخل Swiper.
        other_prodact_swiper.innerHTML +=`
        
        <div class="prodact swiper-slide">
                <div class="icons">
                    <span><i onclick="addToCart(${prodact.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                   <span><i class="fa-solid fa-share"></i></span>
                </div>

                    <div class="img-prodact">
                        <img src="${prodact.img}" alt="">
                        <img class="img-hover" src="${prodact.img_hover}" alt="">
                    
                    </div>

                    <h3 class="name-prodact"> 
                      <a href="">${prodact.name}</a>
                    </h3>
                    <div class="stars"> 
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        <div class="price">
           <p><span>$${prodact.price}</span></p>
           </div>
        </div>
        
        `
       
});  

//سلايدر 3
data.forEach(prodact => {
    //    كل منتج بيتضاف كـ 
    // swiper-slide
    //  داخل Swiper.
        other_prodact_swiper2.innerHTML +=`
        
        <div class="prodact swiper-slide">
                <div class="icons">
                    <span><i onclick="addToCart(${prodact.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                   <span><i class="fa-solid fa-share"></i></span>
                </div>

                    <div class="img-prodact">
                        <img src="${prodact.img}" alt="">
                        <img class="img-hover" src="${prodact.img_hover}" alt="">
                    
                    </div>

                    <h3 class="name-prodact"> 
                      <a href="">${prodact.name}</a>
                    </h3>
                    <div class="stars"> 
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
        <div class="price">
           <p><span>$${prodact.price}</span></p>
           </div>
        </div>
        
        `
       
});  
  

})