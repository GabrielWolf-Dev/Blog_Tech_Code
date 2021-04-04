import menuMobile from './scripts/functions/menuMobile.js';
import { showKnowMore } from './scripts/functions/showCategories.js';
import readPost from './scripts/functions/readPost.js';

window.onload = () => {
    menuMobile();
    showKnowMore();
    readPost();
}