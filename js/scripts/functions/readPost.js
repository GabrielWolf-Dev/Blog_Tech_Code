import blogs from '../db/posts1.js';

export default function readPost() {
    const currentPost = document.getElementById('readPost');

    blogs.forEach((blog) => {
        if(blog.id === Number(localStorage.getItem('idPost'))){
            console.log('entrou!!');
            currentPost.innerHTML += `
                <h1 class="title">${blog.title}</h1>
                <h2 class="subContent">${blog.pubDate}</h2>
                ${blog.content.replace(/<p>/g, '<p class="paragraph">')}
            `;
        }else {
            console.log('não entro');
        }
    });
}