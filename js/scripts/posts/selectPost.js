export default function selectPost() {
    const id = document.querySelectorAll('[data-id]');

    id.forEach((id) => id.addEventListener('mouseover', getPost));
}

function getPost(element) {
    //console.log(element.target.dataset.id);
    const idValue = element.target.dataset.id;
    localStorage.removeItem('idPost');
    localStorage.setItem('idPost', idValue);
}