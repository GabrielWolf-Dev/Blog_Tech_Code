import blogs from '../../db/posts1.js';

export default function readPost() {
    const currentPost = document.getElementById('readPost');

    blogs.forEach((blog) => {
        if(blog.id === Number(localStorage.getItem('idPost'))){
            currentPost.innerHTML += `
                <h1><a target="__blank" class="title" href="${blog.link}">${blog.title}</a></h1>
                <div class="boxAuthor">
                    <img class="imgAuthor" src=${blog.imgAuthor} alt="Imagem de ${blog.author}" />
                    <h2 class="authorName">${blog.author}</h2>
                    <h3 class="subContent">${blog.pubDate}</h3>
                </div><!--boxAuthor-->
                ${blog.content}
            `;
        }
    });
}