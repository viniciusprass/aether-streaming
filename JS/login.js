document.querySelector('#loginForm').addEventListener('submit', function(event) {
    event.preventDefault()

    var form = event.target
    var emailInput = document.querySelector('#emailInput')
    var email = emailInput.value
    var passInput = document.querySelector('#passwordInput')
    var pass = passInput.value


    function resetStyle(inputElement){
        inputElement.addEventListener('input', function(){inputElement.style.border = '1px solid rgb(182, 182, 182)'})
    }

    function login(email, pass) {
        if (/*se o login for válido*/ 0 == 0) {
            form.submit()
        } else {
            emailInput.style.border = '1px solid red'
            resetStyle(emailInput)
            passInput.style.border = '1px solid red'
            resetStyle(passInput)
        }
    }

    login(email, pass);
});

