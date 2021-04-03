import menuMobile from './scripts/functions/menuMobile.js';
import { showCategories, showKnowMore } from './scripts/functions/showCategories.js';
import showLastPosts from './scripts/functions/showLastPosts.js';
import postsCategory from './scripts/functions/posts/postsCategory.js';

window.onload = () => {
    menuMobile();
    showCategories();
    showKnowMore();
    showLastPosts();
    postsCategory();
}