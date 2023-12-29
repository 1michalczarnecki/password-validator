const password = document.querySelector('#password')
const passinfo = document.querySelector('.passinfo')
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if(password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)){
        passinfo.textContent = 'Masz silne hasło!'
        passinfo.style.color = 'lime'
    } else if(password.value.length > minValue && password.value.match(letters) && password.value.match(numbers)){
        passinfo.textContent = 'Masz średnie hasło.'
        passinfo.style.color = 'orange'
    }else{
        passinfo.textContent = 'Masz zbyt słabe hasło!'
        passinfo.style.color = 'tomato'
    }
}

const checkPassword = () => {
    if(password.value !== ''){
        showMsg()
    }else{
        passinfo.textContent = 'Nie podałeś hasła!'
        passinfo.style.color = ''
    }
}

password.addEventListener('keyup', checkPassword)