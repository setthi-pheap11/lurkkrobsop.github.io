// setTop = ()=>{
    var navbar_hight = document.getElementById('navbar').offsetHeight;
    console.log(2323, navbar_hight);
    // document.getElementById('margin-top').style.height = navbar_hight + 'px';
// }
// setTop();

window.onscroll = function() {

    if ((window.pageYOffset) >= navbar_hight) {
        var navbar = document.getElementById('navbar')
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        navbar.classList.add('navbar-blur');
        navbar.classList.add('fixed-top');
        document.getElementById('margin-top').style.height = navbar_hight + 'px';
    } else {
        var navbar = document.getElementById('navbar')
        navbar.classList.remove('navbar-light');
        navbar.classList.remove('navbar-blur');
        navbar.classList.remove('fixed-top');
        navbar.classList.add('navbar-dark');
        document.getElementById('margin-top').style.height = 0 + 'px';
    };
}