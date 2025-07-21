// swiper slide side-bar
var swiper = new Swiper('.slide-swp', {
      
      pagination: {
        el: '.swiper-pagination',
        dynamicBullests:true,
        clickable:true,
      },
      autoplay:{
        delay:2500
      },
      loop:true
    });
// swiper slide sale slide
var swiper = new Swiper('.sale-sec', {
  pagination: {
        el: '.swiper-pagination',
        dynamicBullests:true,
        clickable:true,
      },
      //عدد الصور اللي هتظهرلك
      slidesPerView:5,
    //   /اعمل مسافه بين الصور
      spaceBetween:20,
      autoplay:{
        //هتتحرك كل كام ثانيه
        delay:2500
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      loop:true,
      breakpoints:{
        1600:{
          slidesPerView:5,
        },
        1200:{
          slidesPerView:4,
          spaceBetween:20,

        },
        700:{
          slidesPerView:3,
                spaceBetween:15,

        },
        0:{
          slidesPerView:2,
                spaceBetween:10,

        },
        


      }
    });
var swiper = new Swiper('.prodact_swip', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullests:true,
        clickable:true,
      },
      //عدد الصور اللي هتظهرلك
      slidesPerView:4,
    //   /اعمل مسافه بين الصور
      spaceBetween:20,
      autoplay:{
        //هتتحرك كل كام ثانيه
        delay:2500
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      loop:true,
      breakpoints:{
        1500:{
          slidesPerView:4,
        },
        1200:{
          slidesPerView:3,
          spaceBetween:20,

        },
        900:{
          slidesPerView:2,
                spaceBetween:15,

        },
        700:{
          slidesPerView:3,
                spaceBetween:15,

        },
        0:{
          slidesPerView:2,
                spaceBetween:10,

        },
        


      }
    });

    