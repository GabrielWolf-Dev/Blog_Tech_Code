import blogs from '../../db/posts1.js';

export default function showPosts() {
    const posts = document.getElementById('posts');
    const title = document.querySelector('.title');

    blogs.forEach((post) => {
        post.categories.forEach((category => {
            if(category === localStorage.getItem('category')){
                const description = post.description.replace(/<br>/g, "");

                title.textContent = `Posts ${localStorage.getItem('category')}`;
                posts.innerHTML += `
                    <article class="post">
                        <main>
                            <img class="post__author" src="${post.imgAuthor}"  alt="Author do post" />
                            <h3 class="authorName">${post.author}</h3><!--authorName-->
                            <div class="post__content">
                                <a class="post__title" href="post.html" data-id=${post.id}>${post.title}</a>
                                <div class="description">
                                    ${description.substr(0, description.length / 1.5) + "..."}
                                    <a class="readMore" href="post.html" data-id=${post.id}>Ler mais</a>
                                </div><!--description-->
                            </div><!--post__content-->
                            <i class="fas fa-tags"></i>
                            ${
                                post.categories.map((category) => `
                                    <a class="subContent" data-category href="posts.html">${category}</a><!--subContent-->
                                `)
                            }
                        </main>
                        <img class="thumbnail" src=${post.thumbnail} alt="Imagem do post" />
                    </article><!--post-->
                `;
            }
        }));
    });
}