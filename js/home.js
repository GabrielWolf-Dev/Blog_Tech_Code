import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showCategories, showKnowMore } from './scripts/posts/showCategories.js';
import showLastPosts from './scripts/posts/showLastPosts.js';
import selectCategory from './scripts/posts/selectCategory.js';

window.onload = () => {
    menuMobile();
    smoothScroll();
    showCategories();
    showLastPosts();
    showKnowMore();
    selectCategory();
}
