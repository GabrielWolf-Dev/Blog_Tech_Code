import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showKnowMore } from './scripts/posts/showCategories.js';
import readPost from './scripts/posts/readPost.js';
import selectCategory from './scripts/posts/selectCategory.js';

window.onload = () => {
    menuMobile();
    showKnowMore();
    readPost();
    selectCategory();
    smoothScroll();
}