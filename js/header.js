
let navbar_hight = document.getElementById('navbar').offsetHeight;
  if(module)
  showContainer(module+'-container');

window.onscroll = function() {

    if ((window.pageYOffset) >= navbar_hight) {
        let navbar = document.getElementById('navbar')
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        navbar.classList.add('navbar-blur');
        navbar.classList.add('fixed-top');
        document.getElementById('margin-top').style.height = navbar_hight + 'px';
    } else {
        let navbar = document.getElementById('navbar')
        navbar.classList.remove('navbar-light');
        navbar.classList.remove('navbar-blur');
        navbar.classList.remove('fixed-top');
        navbar.classList.add('navbar-dark');
        document.getElementById('margin-top').style.height = 0 + 'px';
    };
}