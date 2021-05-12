import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showKnowMore } from './scripts/posts/showCategories.js';
import readPost from './scripts/posts/readPost.js';
import postsCategory from './scripts/posts/postsCategory.js';

window.onload = () => {
    menuMobile();
    showKnowMore();
    readPost();
    postsCategory();
    smoothScroll();
}