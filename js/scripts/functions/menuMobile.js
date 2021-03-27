export default function menuMobile() {
    // Variables:
    const iconMobile = document.querySelector('.iconMobile');
    const nav = document.querySelector('#nav');
    
    // Event Listeners:
    iconMobile.addEventListener('click', () => {
        nav.classList.toggle('activeMenu');
    });
}