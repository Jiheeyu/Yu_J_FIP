

(() => {

    const menuIcon = document.querySelector('.hamburger-menu');
    const mNav = document.querySelector('.mNav');
    const video = document.querySelector('.video-content');
    const thumb = document.querySelector('.thumb');
    const closeButton = document.querySelector('.close');
    

    menuIcon.addEventListener('click' , () => {
        mNav.classList.toggle("change");
    });
    

    thumb.addEventListener('click', () => {
        video.classList.toggle("active");
    })



    fetch('./data/projectDataSet.json')
    .then(res => res.json()) 
    .then(data => {
        
        console.log(data);

        for (let proj in data) {
            const project = document.querySelector('.proj').children;
            project[1].textContent = data[proj].name;
            project[2].textContent = data[proj].img;
            project[3].textContent = data[proj].descrip;
        };
        // debugger;


    })

    .catch((err) => {
        //debugger;
        console.log(err);
    })

})()