const btnLogin = document.querySelector('.btn-login');
const btnRegister = document.querySelector('.btn-register');

showLoinForm = ()=>{
    if (btnRegister) {
        setTimeout(function() {
            // btn.click();
            btnRegister.click();
        }, 500); // 500 milliseconds = 0.5 seconds
    } else {
        console.log("Button not found");
    }
}
