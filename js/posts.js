import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showKnowMore } from './scripts/posts/showCategories.js';
import postsCategory from './scripts/posts/postsCategory.js';
import showPosts from './scripts/posts/showPosts.js';
import selectPost from './scripts/posts/selectPost.js';

window.onload = function() {
    menuMobile();
    showPosts();
    showKnowMore();
    postsCategory();
    selectPost();
    smoothScroll();
}