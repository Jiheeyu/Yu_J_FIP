

(() => {

    const menuIcon = document.querySelector('.hamburger-menu');
    const mNav = document.querySelector('.mNav');

    menuIcon.addEventListener('click' , () => {
        mNav.classList.toggle("change");
    });

})()