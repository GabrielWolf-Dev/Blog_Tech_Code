import menuMobile from './scripts/functions/menuMobile.js';
import smoothScroll from './scripts/functions/smoothScroll.js';
import { showCategories, showKnowMore } from './scripts/posts/showCategories.js';
import showLastPosts from './scripts/posts/showLastPosts.js';
import postsCategory from './scripts/posts/postsCategory.js';
import selectPost from './scripts/posts/selectPost.js';

window.onload = () => {
    menuMobile();
    showCategories();
    showKnowMore();
    showLastPosts();
    postsCategory();
    selectPost();
    smoothScroll();
}