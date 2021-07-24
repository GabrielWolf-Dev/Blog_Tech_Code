export default async function readPost() {
    const currentPost = document.getElementById('readPost');

    const responseData = await fetch("https://raw.githubusercontent.com/GabrielWolf-Dev/Blog_Tech_Code/main/js/api/db.json");
    const data = await responseData.json();

    data.forEach((blog) => {
        if(blog.id === Number(localStorage.getItem('idPost'))){
            currentPost.insertAdjacentHTML('beforeend',  `
                <h1><a target="__blank" class="title" href="${blog.link}">${blog.title}</a></h1>
                <div class="boxAuthor">
                    <img class="imgAuthor" src=${blog.imgAuthor} alt="Imagem de ${blog.author}" />
                    <h2 class="authorName">${blog.author}</h2>
                    <h4 class="subContent">${blog.pubDate}</h4>
                </div><!--boxAuthor-->
                ${blog.content}
            `);
        }
    });
}