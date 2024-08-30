btnClose.onclick = function(){
    menu.classList.remove('active');
}

btnOpen.onclick = function(){
    menu.classList.add('active');
    } 
    menu.addEventListener('click',function(event){
        console.log(event.target);
        if (event.target.matches('.navbar__link')){
            menu.classList.remove('active');
        }
    })