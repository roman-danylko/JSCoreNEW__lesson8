const form1 = document.forms.f1;
const form2 = document.forms.f2;

form1.btn.addEventListener('click', function(){
    form1.text2.value = form1.text1.value;
    form1.text1.value = '';
})

form2.text.addEventListener('blur', function(){
    this.placeholder = this.value;
    this.value = ''
})