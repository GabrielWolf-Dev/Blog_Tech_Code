import blogs from '../db/posts1.js';

const lastPosts = document.getElementById('lastPosts');
const totalBlogs = blogs.length;
const minimum = totalBlogs - 5;

export default function showLastPosts() {
    blogs.forEach((posts) => {
        if(posts.id >= minimum){
            lastPosts.innerHTML += `
            <article class="post">
                <img class="post__author" src="${posts.imgAuthor}"  alt="Author do post" />
                <h3 class="authorName">${posts.author}</h3><!--authorName-->
                <img class="thumbnail" src=${posts.thumbnail} alt="Imagem do post" />
                <div class="post__content">
                    <a class="post__title" href="post.html" data-id=${posts.id}>${posts.title}</a>
                    <p class="post__description">
                        ${posts.description}
                        <a class="readMore" href="post.html" data-id=${posts.id}>Ler mais</a>
                    </p><!--post__description-->
                </div><!--post__content-->
                        <button class="btnPosts">
                            ${
                                posts.categories.map((category) => `
                                    <a class="subContent" style="margin-right: 16px;" data-category href="posts.html">${category}</a><!--subContent-->
                                `).join(' ')
                            }
                        </button><!--button-->
            </article><!--post-->
        `;
        }
    });
}