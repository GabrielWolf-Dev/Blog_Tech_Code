import categories from '../../api/categories.js';

const sectionCategories = document.querySelector('.categories #categoriesList');
const sectionKnowMore = document.querySelector('.knowMore #categoriesList');

export function showCategories() {
    categories.forEach((category) => {
        sectionCategories.insertAdjacentHTML('beforeend', `
            <li>
                <button class="button"><a data-category class="subContent" href="posts.html">${category}</a></button>
            </li>
        `);
    });
}

export function showKnowMore() {
    categories.forEach((category) => {
        sectionKnowMore.insertAdjacentHTML('beforeend', `
            <li>
                <a data-category href="posts.html">${category}</a>
            </li>
        `);
    });
}
