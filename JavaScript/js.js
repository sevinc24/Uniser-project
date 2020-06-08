// aos js kod
AOS.init();
// owl-carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }
    }
})


document.addEventListener("scroll",()=>{
    let offset1 = document.getElementById("page2").offsetTop;
    console.log(offset1);
})