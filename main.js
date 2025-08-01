const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const icons = document.querySelectorAll("i")
hamburger && hamburger.addEventListener('click', function(event){
    const isVisible = navList.getAttribute('data-visible');
    if(isVisible === 'true'){
        navList.setAttribute('data-visible','false');
        icons[0].setAttribute('data-visible','true');
        icons[1].setAttribute('data-visible','false');
    }else{
        navList.setAttribute('data-visible','true');
        icons[0].setAttribute('data-visible','false');
        icons[1].setAttribute('data-visible','true');
    }
})