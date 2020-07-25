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
        toTop.classList.add('active');
        header.classList.add('active');
    } else {
        toTop.classList.remove('active');
        header.classList.remove('active');
    }
})


var form = document.querySelector("#myForm"),
fields = form.querySelectorAll("[data-error]");


function isNotEmpty(field){

return field.value !== "";
}

function isEmail(field){

return field.value.indexOf("@") !== -1;

}

function isAtLeast(field, min){

return field.value.length >= min;
}

function displayErrors(errors){

var ul = document.querySelector("ul.errors");

if(!ul){
    ul = document.createElement("ul");

    ul.classList.add("errors");
    ul.classList.add("form-validation");

}

ul.innerHTML = "";

errors.forEach(function(error){
    var li = document.createElement("li");

    li.textContent = error;

    ul.appendChild(li);
});

form.parentNode.insertBefore(ul, form);

}

form.addEventListener("submit", function(e){

e.preventDefault();

var errors = [];

for(var i = 0; i < fields.length; i++){

    var field = fields[i],
        isValid = false;

    if(field.type === "text"){
        isValid = isNotEmpty(field);
    } else if(field.type === "email"){
       isValid = isEmail(field);
    } else if(field.type === "select-one"){
        isValid = isNotEmpty(field);
    }else if(field.type === "textarea"){
        isValid = isAtLeast(field, 2);
    }

    if(!isValid){
        field.classList.add("error");
        errors.push(field.dataset.error);
    } else {
        field.classList.remove("error");
    }
}

if(errors.length){
    displayErrors(errors);
} else{
    form.submit();
}

console.log(errors);

}, false)
