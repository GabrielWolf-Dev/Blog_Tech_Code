export default async function showLastPosts() {
    const responseData = await fetch("https://raw.githubusercontent.com/GabrielWolf-Dev/Blog_Tech_Code/main/js/api/db.json");
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
                                <span class="subContent">${category}</span><!--subContent-->
                            `)
                        }
                </main>
                <img class="thumbnail" src=${posts.thumbnail} alt="Imagem do post" />
            </article><!--post-->
        `;
        }
    });

    // Storing the id of each post
    const idPost = document.querySelectorAll('[data-id]');
    idPost.forEach((id) => id.addEventListener('mouseover', selectPost));
}

function selectPost(element) {
    const idValue = element.target.dataset.id;                                 
    localStorage.removeItem('idPost');
    localStorage.setItem('idPost', idValue); 
}
