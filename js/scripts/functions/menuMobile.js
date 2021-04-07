export default function menuMobile() {
    const iconMobile = document.querySelector('.iconMobile');
    const nav = document.querySelector('#nav');
    const boxBlack = document.querySelector('#boxBlack');
    
    iconMobile.addEventListener('click', () => {
        nav.classList.toggle('activeMenu');
        setTimeout(() => boxBlack.classList.toggle('boxBlack--active'), 200);
    });
}