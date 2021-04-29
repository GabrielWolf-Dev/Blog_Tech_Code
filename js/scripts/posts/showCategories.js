import categories from '../../db/categories.js';

const sectionCategories = document.querySelector('.categories #categoriesList');
const sectionKnowMore = document.querySelector('.knowMore #categoriesList');

export function showCategories() {
    categories.forEach((category) => {
        sectionCategories.innerHTML += `
            <li>
                <button class="button"><a data-category class="subContent" href="posts.html">${category}</a></button>
            </li>
        `;
    });
}

export function showKnowMore() {
    categories.forEach((category) => {
        sectionKnowMore.innerHTML += `
            <li>
                <a data-category href="posts.html">${category}</a>
            </li>
        `;
    });
}
