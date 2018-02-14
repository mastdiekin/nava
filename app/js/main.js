import hello from './lib/hello.js';
import $ from 'jquery';
import preloader from './lib/preloader.js';
import '../libs/bootstrap/dist/js/bootstrap.bundle.js';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import '../libs/slick-carousel/slick/slick.js';
import Waypoint from '../libs/waypoints/lib/jquery.waypoints.js';

hello();
preloader();
svg4everybody({
  polyfill: true 
});


$('.hero__slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: 'linear',
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 100,
  speed: 900,
  pauseOnHover: false
});
