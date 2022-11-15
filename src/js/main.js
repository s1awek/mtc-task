// Import our custom CSS
import '../scss/styles.scss';
// Import only the Bootstrap components we need
import { Util } from 'bootstrap';

//Import Splide slider
import Splide from '@splidejs/splide';
//Import lightbox
import SimpleLightbox from 'simplelightbox';

//To throttle event listener for better performance
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

document.addEventListener('DOMContentLoaded', (event) => {
  new Splide('.section-hero-slider .splide', {
    arrows: false,
  }).mount();

  new Splide('.testimonials-slider .splide', {
    pagination: false,
  }).mount();

  new SimpleLightbox('.r-gallery a', {});

  const headerScrollHandler = () => {
    const header = document.getElementById('navbar');
    const body = document.body;
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
        body.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        body.classList.remove('scrolled');
      }
    }
  };
  headerScrollHandler();
  //Scroll listener with throttling
  document.addEventListener(
    'scroll',
    throttle(() => {
      headerScrollHandler();
    }, 300)
  );
  const navMenu = document.getElementById('navbarSupportedContent');
  navMenu.addEventListener('hidden.bs.collapse', function () {
    const body = document.body;
    body.classList.remove('mm-open');
  });
  navMenu.addEventListener('show.bs.collapse', function () {
    const body = document.body;
    body.classList.add('mm-open');
  });
});
