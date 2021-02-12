const f1 = document.forms.f1;
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const position = document.querySelector('.position');
const imgMan = document.querySelector('.man');
const imgWoman = document.querySelector('.woman');
const container = document.querySelector('.container');
const box = document.querySelector('.box');

f1.check.addEventListener('click', function(){
    f1.submit.disabled = f1.checkbox.checked ? false : true;
})

f1.submit.addEventListener('click', function(){
    name.textContent = f1.name.value;
    name.textContent = name.textContent + ` ${f1.secondname.value}`;
    email.textContent = f1.email.value;
    position.textContent = f1.select.value;

    if(f1.man.checked === true){
        imgMan.style.display = 'block'
        imgWoman.style.display = 'none'
    } else{
        imgMan.style.display = 'none'
        imgWoman.style.display = 'block'
    }

    if(f1.name.value === '' || f1.secondname.value === '' || f1.email.value === '' || f1.select.value ==='empty'){
        alert('Заповніть всі поля');

        container.style.display = 'block';
        box.style.display = 'none';
    }else{
        container.style.display = 'none';
        box.style.display = 'block';

        f1.reset()
    }
    
    f1.submit.disabled = f1.checkbox.checked ? false : true;
})

document.querySelector('.btn-out').addEventListener('click', function(){
    container.style.display = 'block'
    box.style.display = 'none'
})