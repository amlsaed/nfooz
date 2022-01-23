$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        900:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});

// header top fixed
window.onscroll = function() {fixednav()}; 
function fixednav(){
    var fixed = document.getElementById("nav")
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ){
        fixed.style.background="rgba(21,35,46,1)";
        fixed.style.width="100%";
        fixed.style.fontSize="16px";
        fixed.style.boxShadow="0 1px 6px 0 rgba(78, 175, 228,.5)"
        document.getElementById("pagetop").style.display="block";
    }else{
        fixed.style.background="transparent";
        fixed.style.boxShadow="none";
        fixed.style.width="70%";
        fixed.style.fontSize="12px";
        document.getElementById("pagetop").style.display="none";



    }

};


  