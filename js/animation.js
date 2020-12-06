(() => {

    const menuIcon = document.querySelector('.hamburger-menu');
    const mNav = document.querySelector('.mNav');

    menuIcon.addEventListener('click' , () => {
        mNav.classList.toggle("change");
    });

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause"
      });
      
      gsap.to(".two", {
        scrollTrigger: {
          trigger: "#portfolio-content",
          toggleActions: "restart pause reverse pause"
        }, 
      });
      
      
   
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#portfolio-content',       
        }
    });

    tl.from('.portfolio-title',{y:50, opacity:0, duration:0.7 })
      .from('.portfolio-imgs', {x:-100, opacity:0, duration:0.7})
      .from('.graphic',{y:100, opacity:0, duration:0.5});
      
      
    
    let mainC = gsap.timeline({
        scrollTrigger: {
            trigger: '#main-content',
        }
    });

    mainC.from('.Text',{y:300, opacity:0, duration:1})
         .from('.mainIllust',{opacity:0, duration:1});

    let aboutC = gsap.timeline({
        scrollTrigger: {
            trigger: '#aboutMe-content',
        }
    });

    aboutC.from('.aboutMe-title',{y:50, opacity:0, duration:0.7})
          .from('.designer',{x:-100, opacity:0, duration:0.5})
          .from('.my-selfie',{y:50, opacity:0, duration:1})
          .from('.my-info',{x:100, opacity:0, duration:0.7});

})();
