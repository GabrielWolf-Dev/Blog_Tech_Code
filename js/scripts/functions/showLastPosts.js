import blogs from '../db/posts1.js';

const lastPosts = document.getElementById('lastPosts');
const totalBlogs = blogs.length;
const minimum = totalBlogs - 5;

export default function showLastPosts() {
    blogs.map((posts) => {
        if(posts.id >= minimum){ // Max de Last Posts serão 10.
            lastPosts.innerHTML += `
            <article class="post">
                <img class="post__author" src="${posts.imgAuthor}"  alt="Author do post" />
                <h3 class="authorName">${posts.author}</h3><!--authorName-->
                <div class="post__content">
                    <a class="post__title" href="#">${posts.title}</a>
                    <p class="post__description">${posts.description}</p><!--post__description-->
                </div><!--post__content-->
                ${posts.categories.map((category) => `<button class="btnPosts">${category}</button><!--button-->`).join(' ')}
            </article><!--post-->
        `;
        }
    });
}