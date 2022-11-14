// Import our custom CSS
import '../scss/styles.scss';
// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

//Import Splide slider
import Splide from '@splidejs/splide';

new Splide('.section-hero-slider .splide', {
  arrows: false,
}).mount();
