import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showKnowMore } from './scripts/posts/showCategories.js';

window.onload = () => {
    menuMobile();
    smoothScroll();
    showKnowMore();
}