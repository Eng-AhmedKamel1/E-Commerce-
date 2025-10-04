// open close filter
let filter = document.querySelector('.filter');

function open_close_Filter() {
    //toggle علشان لو موجود تشيله ولو متشال تضيفه
    filter.classList.toggle('active');
}





fetch('js/items.json')

.then(response => response.json() )

.then(data =>{
     
      const prodacts_dev=document.getElementById("prodacts_dev");
      
      all_prodacts_json = data;
    
data.forEach(prodact => {
    
    const old_price_prg = prodact.old_price ? ` <p class="old-price"><span>$${prodact.old_price}</span></p> ` :" ";
    
        
        const percent_desc_prg = prodact.old_price ? `<span class="sale-present">${Math.floor((prodact.old_price - prodact.price)/prodact.old_price * 100)}%</span>` :" ";



        prodacts_dev.innerHTML +=`
        
        <div class="prodact swiper-slide">
                <div class="icons">
                    <span><i onclick="addToCart(${prodact.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                   <span><i class="fa-solid fa-share"></i></span>
                </div>
                     ${percent_desc_prg}
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
           ${old_price_prg}
           </div>
        </div>
        
        `
       
});  

})