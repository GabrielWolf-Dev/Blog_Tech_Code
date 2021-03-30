import categories from '../db/categories.js';

const categoriesList = document.getElementById('categoriesList');

function showCategories() {
    categories.map((category) => {
        categoriesList.innerHTML += `
            <li>
                <button class="button"><a class="subContent" href="#">${category}</a></button>
            </li>
        `;
    });
}

export default showCategories;