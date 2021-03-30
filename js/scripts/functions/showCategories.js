import categories from '../db/categories.js';

const sectionCategories = document.querySelector('.categories #categoriesList');
const sectionKnowMore = document.querySelector('.knowMore #categoriesList');

function showCategories() {
    categories.map((category) => {
        sectionCategories.innerHTML += `
            <li>
                <button class="button"><a data-category class="subContent" href="artigos.html">${category}</a></button>
            </li>
        `;

        sectionKnowMore.innerHTML += `
            <li>
                <a href="#">${category}</a>
            </li>
        `;
    });
}

export default showCategories;