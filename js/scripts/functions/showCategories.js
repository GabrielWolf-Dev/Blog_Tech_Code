import categories from '../db/categories.js';

const categoriesList = document.getElementById('categoriesList');

function showCategories() {
    return categories.map((category) => {
        return categoriesList.innerHTML += `
            <li>
                <button class="button"><a class="subContent" href="#">${category}</a></button>
            </li>
        `;
    });
}

export default showCategories;