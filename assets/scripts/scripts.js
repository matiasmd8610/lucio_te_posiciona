//Sticky header
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Update copy automatically
document.querySelector('.year-copy').innerText = new Date().getFullYear();

//Detect numbers section visible on screen
var myElement = document.querySelector('.clients');
if (myElement) {
    var bounding = myElement.getBoundingClientRect();
    var myElementHeight = myElement.offsetHeight;
    var myElementWidth = myElement.offsetWidth;

    window.addEventListener('scroll', () => {
        elementInViewport();
    });

}

let elementInViewport = () => {

    var bounding = myElement.getBoundingClientRect();
    if (bounding.top >= -myElementHeight &&
        bounding.left >= -myElementWidth &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

        document.querySelectorAll('.numbers .numbers-box').forEach(element => {
            element.classList.add('visible');
        });
    }
}

//CLIENTS SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    /* grid: {
        rows: 2,
    }, */
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
    },
    disable: 'mobile',
    spaceBetween: 40
    /* pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, */
});