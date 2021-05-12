import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showKnowMore } from './scripts/posts/showCategories.js';
import selectCategory from './scripts/posts/selectCategory.js';
import showPosts from './scripts/posts/showPosts.js';

window.onload = function() {
    menuMobile();
    smoothScroll();
    showPosts();
    showKnowMore();
    selectCategory();
}