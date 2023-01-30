const containers = document.querySelectorAll("header > div");


containers.forEach(container =>{
    container.addEventListener('mouseenter',()=>{
        container.querySelector('video').play();
    });
    container.addEventListener('mouseleave',()=>{
        container.querySelector('video').pause();
    });
});