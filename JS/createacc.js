document.querySelector('#createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var newEmail = document.querySelector('#createEmailInput').value;
    var newPassInput = document.querySelector('#createPasswordInput')
    var newPass = newPassInput.value;
    var passRepeatInput = document.querySelector('#confirmPasswordInput')
    var passRepeat = passRepeatInput.value;

    function resetStyle(inputElement){
        inputElement.addEventListener('input', function(){inputElement.style.border = '1px solid rgb(182, 182, 182)'})
    }

    function createAccount(email, newPassword, repeatPassword) {
        if (newPassword === repeatPassword) {
            form.submit()
        } else {
            newPassInput.style.border = '1px solid red'
            passRepeatInput.style.border = '1px solid red'
            resetStyle(newPassInput)
            resetStyle(passRepeatInput)
        }
    }

    createAccount(newEmail, newPass, passRepeat);
});

