import responseData from '../../api/dataFetch.js';

export default async function showLastPosts() {
    const data = await responseData.json();
    
    const lastPosts = document.getElementById('lastPosts');
    const totalBlogs = data.length;
    const minimum = totalBlogs - 5;

    data.forEach((posts) => {
        if(posts.id >= minimum){
            const description = posts.description.replace(/<br>/g, "");

            lastPosts.innerHTML += `
            <article class="post">
                <main>
                    <img class="post__author" src="${posts.imgAuthor}"  alt="Author do post" />
                    <h3 class="authorName">${posts.author}</h3><!--authorName-->
                    <div class="post__content">
                        <a class="post__title" href="post.html" data-id=${posts.id}>${posts.title}</a>
                        <div class="description">
                            ${description.substr(0, description.length / 1.5) + "..."}
                            <a class="readMore" href="post.html" data-id=${posts.id}>Ler mais</a>
                        </div><!--description-->
                    </div><!--post__content-->
                        <i class="fas fa-tags"></i>
                        ${
                            posts.categories.map((category) => `
                                <a class="subContent" data-category href="posts.html">${category}</a><!--subContent-->
                            `)
                        }
                </main>
                <img class="thumbnail" src=${posts.thumbnail} alt="Imagem do post" />
            </article><!--post-->
        `;
        }
    });
}