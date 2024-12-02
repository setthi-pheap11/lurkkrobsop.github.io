var swiper = new Swiper('.swiper', {
    slidesPerView: getNumSlide(),
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  // console.log(5555,document.querySelector('.swiper_new_arrivals'));


  var swiper_new_arrivals_1 = new Swiper('.swiper_new_arrivals_1', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper_new_arrivals_1-button-next',
      prevEl: '.swiper_new_arrivals_1-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  var swiper_new_arrivals_2 = new Swiper('.swiper_new_arrivals_2', {
    slidesPerView: 1,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper_new_arrivals_2-button-next',
      prevEl: '.swiper_new_arrivals_2-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    // return windowWidth <= 760 ? 'vertical' : 'horizontal';
    return 'horizontal';
  }
  function getNumSlide() {
    var windowWidth = window.innerWidth;
    return windowWidth <= 480 ? 1 : 5;
  }