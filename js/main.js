

(() => {

    const menuIcon = document.querySelector('.hamburger-menu');
    const mNav = document.querySelector('.mNav');

    menuIcon.addEventListener('click' , () => {
        mNav.classList.toggle("change");
    });



    fetch('./data/projectDataSet.json')
    .then(res => res.json()) 
    .then(data => {

    })

    .catch((err) => {
        //debugger;
        console.log(err);
        
        const profText = document.querySelector('.profPanelText');
        profText.textContent = `ERROR : something went wrong`
    })

})()