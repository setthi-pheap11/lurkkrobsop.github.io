const btn = document.querySelector('.btn-login');

showLoinForm = ()=>{
    if (btn) {
        setTimeout(function() {
            btn.click();
        }, 500); // 500 milliseconds = 0.5 seconds
    } else {
        console.log("Button not found");
    }
}
