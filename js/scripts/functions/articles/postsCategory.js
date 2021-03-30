export default function postsCategory() {
    const categories = document.querySelectorAll('[data-category]');
    
    categories.forEach(category => {
        category.addEventListener('mouseover', saveData);
    });
}

function saveData(element) {
    //console.log(element.target.outerText);
    const categoryValue = element.target.outerText;
    localStorage.setItem('category', categoryValue);
}