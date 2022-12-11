const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    if (password.value == ""){
        alert('Fill in missing field');
    }
})


var visible = false;

function viewPassword(){
    
    var icon = document.getElementById('view');

    if (visible){
        password.type = 'password';
        visible = false;
        icon.style.background = 'grey';
    }

    else{
        password.type = 'text';
        visible = true;
        icon.style.background = 'rgb(40, 40, 40)'
    }
}


function check(){

    var input = password.value;
    input = input.trim();
    password.value = input;
    
    var upper = document.getElementById('upper');
    var lower = document.getElementById('lower');
    var specialChar = document.getElementById('specil_char');
    var num = document.getElementById('number');
    var len = document.getElementById('length');

    if (password.value.match(/[0-9]/)){
        num.style.display = 'none';
    }

    else {
        num.style.display = 'block';
    }


    if (password.value.match(/[A-Z]/)){
        upper.style.display = 'none';
    }

    else {
        upper.style.display = 'block';
    }


    if (password.value.match(/[a-z]/)){
        lower.style.display = 'none';
    }

    else {
        lower.style.display = 'block';
    }


    if (password.value.match(/[@\!\#\$\%\&\*]/)){
        specialChar.style.display = 'none';
    }

    else {
        specialChar.style.display = 'block';
    }


    if (password.value.length < 8){
        len.style.display = 'block';
    }

    else{
        len.style.display = 'none';
    }
}


function validate(){
    var input = confirmPassword.value;
    input = input.trim();
    confirmPassword.value = input;

    if (confirmPassword.value !== password.value){
        confirmPassword.style.border = '3px solid rgb(231, 8, 8)';
    }

    else{
        confirmPassword.style.border = '3px solid green';
    }
}
