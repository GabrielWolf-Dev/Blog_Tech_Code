export default async function showPosts() {
    const posts = document.getElementById('posts');
    const title = document.querySelector('.title');

    const responseData = await fetch("https://raw.githubusercontent.com/GabrielWolf-Dev/Blog_Tech_Code/main/js/api/db.json");
    const data = await responseData.json();

    data.forEach((post) => {
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
                                    <span class="subContent">${category}</span><!--subContent-->
                                `)
                            }
                        </main>
                        <img class="thumbnail" src=${post.thumbnail} alt="Imagem do post" />
                    </article><!--post-->
                `;
            }
        }));
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
