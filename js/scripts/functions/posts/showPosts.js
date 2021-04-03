import blogs from '../../db/posts1.js';

export default function showPosts() {
    const posts = document.getElementById('posts');
    const title = document.querySelector('.title');

    blogs.forEach((post) => {
        post.categories.forEach((category => {
            if(category === localStorage.getItem('category')){
                title.textContent = `Posts ${post.mainCategory}`;
                posts.innerHTML += `
                    <article class="post">
                        <img class="post__author" src="${post.imgAuthor}"  alt="Author do post" />
                        <h3 class="authorName">${post.author}</h3><!--authorName-->
                        <div class="post__content">
                            <a class="post__title" href="#">${post.title}</a>
                            <p class="post__description">${post.description}</p><!--post__description-->
                        </div><!--post__content-->
                        ${post.categories.map((category) => `<button class="btnPosts">${category}</button><!--button-->`).join(' ')}
                    </article><!--post-->
                `;
            }
        }));
    });
}