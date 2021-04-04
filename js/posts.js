import menuMobile from './scripts/functions/menuMobile.js';
import { showKnowMore } from './scripts/functions/showCategories.js';
import postsCategory from './scripts/functions/posts/postsCategory.js';
import showPosts from './scripts/functions/posts/showPosts.js';
import selectPost from './scripts/functions/selectPost.js';

window.onload = function() {
    menuMobile();
    showPosts();
    showKnowMore();
    postsCategory();
    selectPost();
}