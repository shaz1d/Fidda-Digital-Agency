
// Header Area
// =================

$(document).ready(function(){
    $("._dropdown").click(function(){

        $(this).toggleClass("_active");
        
        $(this).siblings().removeClass("_active");

        
        
        
    })
    $("._menu-toggle-button").click(function(){

      $("._header-menu").toggleClass("_active");
      
     
  })
  $("._search-toggle-button").click(function(){


    $("._header-search ._search-box").toggleClass("_active");

    $("._header-search ._search-toggle-button i").toggleClass("fa-search fa-times");
    
    
   
})
// Category Dropdown
$("._category-drop-button").click(function(){

    $(this).toggleClass("_active");
    
    $(this).siblings().removeClass("_active");

    
    
    
})

$("._scroll-top-btn").click(function(){
    
    $("html,body").animate({scrollTop:0},800);   
   
})

   
 // Slider
// ====================
$('#slider').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    touchDrag:true,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:500,
    autoplaySpeed:1000,
    responsive:{
        0:{
           nav:false
        },
        480:{
            nav:false
        },
        768:{
            nav:true
        }
    },
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
      
    
})  
 // Slider 2
// ====================
$('#slider-2').owlCarousel({
    items:1,
    loop:true,
    dots:false,
    touchDrag:true,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:500,
    autoplaySpeed:1000,
    responsive:{
        0:{
           nav:false
        },
        480:{
            nav:false
        },
        768:{
            nav:true
        }
    },
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
      
    
})  

 // Team Slider
// ====================
$('#team').owlCarousel({
    
    loop:true,
    margin:0,
    responsive:{
        0:{
            dots:true,
            items:1,
            nav:false
        },
        480:{
            dots:true,
            items:2,
            nav:false
        },
        768:{
            dots:false,
            items:3,
            nav:true
        },
        991:{
            dots:false,
            items:4,
            nav:true
        },
        1200:{
            dots:false,
            items:5,
            nav:true
        }
    },
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
      
    
})  

 // blog Slider
// ====================
$('#blog').owlCarousel({
    
    loop:true,
    margin:0,
    responsive:{
        0:{
            dots:true,
            items:1,
            nav:false
        },
        480:{
            dots:true,
            items:2,
            nav:false
        },
        768:{
            dots:false,
            items:2,
            nav:true
        }
        
    },
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
      
    
})  
 // Testimonial Slider
// ====================
$('#testimonial').owlCarousel({
    
    loop:true,
    margin:20,
    responsive:{
        0:{
            dots:true,
            items:1,
            nav:false
        },
        480:{
            dots:true,
            items:2,
            nav:false
        },
        768:{
            dots:true,
            items:3,
            nav:false
        }
        
    },
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>']
      
    
})  
 //Feedback slider
// ====================
$('#feedback').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    donts:true 
    
}) 

 // Video
// ====================
$('._video-1').parent().click(function () {

    if($(this).children("._video-1").get(0).paused){    
        $(this).children("._video-1").get(0).play();   
        $(this).children("._video-play-btn").fadeOut();
      }else{          
        $(this).children("._video-1").get(0).pause();
        $(this).children("._video-play-btn").fadeIn();
      }
  });



    
})


// SHOP PAGE

var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

function rangeSliderLeft(value){
    document.getElementById('rangeValueLeft').innerHTML=value;
}
function rangeSliderRight(value){
    document.getElementById('rangeValueRight').innerHTML=value;
}


// ===side bar section===
$(document).ready(function () {
        // ===== category box ===
     $('._category-box').click(function () {
        $('._categ-content-box').toggleClass('active');
    })
    // ===== populer tag box ===
    $('._populer-tag-box').click(function () {
        $('._populer-tag-content-box').toggleClass('active');
    })
    // ===== filter price box ===
    $('._filter-price-box').click(function () {
        $('._range-box').toggleClass('active');
    })

})




