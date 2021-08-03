(()=>{"use strict";function t(t){t.preventDefault(),function(t,e,n){const o=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset,c=0-o,s=e-a,r=(new Date).getTime();n=void 0!==n?n:400;const i=(t,e,n,o)=>(t/=o/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e,l=setInterval((()=>{const t=(new Date).getTime()-r,e=i(t,o,c,n),d=i(t,a,s,n);t>=n&&clearInterval(l),window.scroll(e,d)}),1e3/60)}(0,function(t){const e=t.getAttribute("href");return document.querySelector(e).offsetTop}(t.target))}const e=["Front-End","Back-End"],n=document.querySelector(".categories #categoriesList"),o=document.querySelector(".knowMore #categoriesList");function a(t){const e=t.target.dataset.id;localStorage.removeItem("idPost"),localStorage.setItem("idPost",e)}function c(t){const e=t.target.outerText;localStorage.removeItem("category"),localStorage.setItem("category",e)}window.onload=()=>{!function(){const t=document.querySelector(".iconMobile"),e=document.querySelector("#nav"),n=document.querySelector("#boxBlack"),o=document.querySelectorAll("nav ul li a[href^='#']");let a=e.getAttribute("data-menu");function c(){e.classList.toggle("activeMenu"),setTimeout((()=>n.classList.toggle("boxBlack--active")),200)}t.addEventListener("click",(()=>{c(),"false"==a&&(a="true")})),o.forEach((t=>t.addEventListener("click",(()=>{"true"==a&&(c(),a="false")})))),n.addEventListener("click",(()=>{"true"==a&&(c(),a="false")}))}(),document.querySelectorAll("nav ul li a[href^='#']").forEach((e=>e.addEventListener("click",t))),e.forEach((t=>{n.insertAdjacentHTML("beforeend",`\n            <li>\n                <button class="button"><a data-category class="subContent" href="posts.html">${t}</a></button>\n            </li>\n        `)})),async function(){const t=await fetch("https://raw.githubusercontent.com/GabrielWolf-Dev/Blog_Tech_Code/main/js/api/db.json"),e=await t.json(),n=document.getElementById("lastPosts"),o=e.length-5;e.forEach((t=>{if(t.id>=o){const e=t.description.replace(/<br>/g,"");n.insertAdjacentHTML("beforeend",`\n                <article class="post">\n                    <main>\n                        <img class="post__author" src="${t.imgAuthor}"  alt="Author do post" />\n                        <h3 class="authorName">${t.author}</h3>\x3c!--authorName--\x3e\n                        <div class="post__content">\n                            <a class="post__title" href="post.html" data-id=${t.id}>${t.title}</a>\n                            <div class="description">\n                                ${e.substr(0,e.length/1.5)+"..."}\n                                <a class="readMore" href="post.html" data-id=${t.id}>Ler mais</a>\n                            </div>\x3c!--description--\x3e\n                        </div>\x3c!--post__content--\x3e\n                            <i class="fas fa-tags"></i>\n                            ${t.categories.map((t=>`\n                                    <span class="subContent">${t}</span>\x3c!--subContent--\x3e\n                                `))}\n                    </main>\n                    <img class="thumbnail" src=${t.thumbnail} alt="Imagem do post" />\n                </article>\x3c!--post--\x3e\n            `)}})),document.querySelectorAll("[data-id]").forEach((t=>t.addEventListener("mouseover",a)))}(),e.forEach((t=>{o.insertAdjacentHTML("beforeend",`\n            <li>\n                <a data-category href="posts.html">${t}</a>\n            </li>\n        `)})),document.querySelectorAll("[data-category]").forEach((t=>{t.addEventListener("mouseover",c)}))}})();