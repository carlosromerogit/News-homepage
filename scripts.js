const body = document.body;
const headerButton = document.querySelector(".header__button");

headerButton.addEventListener("click", function(){
    headerButton.classList.toggle("open");
    body.classList.toggle("lock");
})

