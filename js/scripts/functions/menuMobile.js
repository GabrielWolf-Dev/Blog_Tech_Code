export default function menuMobile() {
    const iconMobile = document.querySelector('.iconMobile');
    const nav = document.querySelector('#nav');
    const boxBlack = document.querySelector('#boxBlack');
    const links = document.querySelectorAll("nav ul li a[href^='#']");
    let isMobile = nav.getAttribute('data-menu');
    

    iconMobile.addEventListener('click', () => {
        toggleMenu();
        if(isMobile == "false"){
            isMobile = "true";
        }
    });

    links.forEach((link) => link.addEventListener('click', () => {
        if(isMobile == "true"){
            toggleMenu();
            isMobile = "false";
        }
    }));

    boxBlack.addEventListener('click', () => {
        if(isMobile == "true"){
            toggleMenu();
            isMobile = "false";
        }
    });

    
    function toggleMenu() {
        nav.classList.toggle('activeMenu');
        setTimeout(() => boxBlack.classList.toggle('boxBlack--active'), 200);
    }
}
