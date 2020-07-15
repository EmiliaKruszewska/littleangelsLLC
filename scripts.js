const burgerIcon = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const backgroundMenuColor = document.querySelector('.gray-bg');

burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    backgroundMenuColor.classList.toggle('active');
})
const header = document.querySelector('header');
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        // toTop.classList.add('active');
        header.classList.add('active');
    } else {
        // toTop.classList.remove('active');
        header.classList.remove('active');
    }
})
