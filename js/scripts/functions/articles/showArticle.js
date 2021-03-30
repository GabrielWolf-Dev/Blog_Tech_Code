import blogs from '../../db/posts1.js';

export default function showArticles() {
    const teste = document.getElementById('teste');
    blogs.filter((post) => {
        post.categories.forEach((category) => {
            if(category === localStorage.getItem('category')){
                teste.innerHTML += `
                    <h1>Título: ${post.title}</h1>
                    <h2>ID: ${post.id}</h2>
                `;
            }
        });
    });
}