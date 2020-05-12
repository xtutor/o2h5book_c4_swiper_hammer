require('../index.html')
require('../css/package.scss')

var Swiper = require('./swiper')

new Swiper('.swiper-container', {
  navigation: {
    prevEl: '.prev-btn',
    nextEl: '.next-btn'
  }
})

