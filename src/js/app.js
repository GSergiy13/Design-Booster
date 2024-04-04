/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
window.addEventListener('DOMContentLoaded', function () {

  const preloader = document.querySelector('.preloader');

  window.onload = () => {
    setTimeout(() => {
      preloader.classList.add('preloader--hide')
    }, 1000)
  }

  const hamburgerMenu = document.querySelector('.hamburger'),
    navigation = document.querySelector('.navigation');

  hamburgerMenu.addEventListener('click', function (e) {
    hamburgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
  });


  const menuDrop = document.querySelectorAll('.menu__item-link--drop');

  menuDrop.forEach(element => {
    element.addEventListener('click', function () {
      element.nextElementSibling.classList.toggle('active')
      element.parentElement.classList.toggle('active');
    })
  });



  const trackedElement = document.querySelectorAll("section");
  let activeBlockIndex = 0;

  window.addEventListener("scroll", () => {
    scrollAnimation();
  });

  setTimeout(() => {
    scrollAnimation();
  }, 10);

  function scrollAnimation() {
    trackedElement.forEach((element, index) => {
      const clientElement = element.getBoundingClientRect();

      if (
        clientElement.y * -1 > -(clientElement.height + 10) &&
        clientElement.y * -1 < clientElement.height
      ) {
        activeBlockIndex = index;
        element.classList.add("focus");
      } else {
        element.classList.remove("focus");
      }
    });
  }


  const triger = document.querySelectorAll('.faq-box__head');

  triger.forEach(elem => {
    elem.addEventListener('click', function () {
      elem.classList.toggle("active");
      let panel = elem.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    })
  })



  // const scriptURL = 'https://script.google.com/macros/s/AKfycbyfe0vdbVEhFa26kBfvEpdaXqvFY1Dwd-zxtxzZBG37mYiuk2pNZ7TwfAAqDe8vda246Q/exec';
  // const form = document.forms['submit-to-google-sheet'];

  // const formButton = document.querySelector('form button');

  // const massage = document.querySelector('.massage');

  // form.addEventListener('submit', e => {
  //   e.preventDefault('')

  //   formButton.setAttribute('disabled', 'disabled');
  //   massage.classList.add('show')

  //   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  //     .then(response => {
  //       formButton.removeAttribute('disabled', 'disabled');
  //       setTimeout(() => {
  //         massage.classList.remove('show')
  //         form.reset();
  //         window.location.href = 'https://secure.wayforpay.com/page?vkh=64ad1881-79b4-4e99-a35d-226d22d1dba8';
  //       }, 1000)
  //       console.log('Success!', response);
  //     })
  //     .catch(error => console.error('Error!', error.message))
  // })

  const deadline = Date.parse(new Date()) + 180000;

  localStorage.setItem('timer-bonus', deadline);


  function getTimeRemaining(endtime) {
    let hours, minutes, seconds;


    const t = endtime - Date.parse(new Date());

    if (t <= 0) {
      seconds = 0,
        minutes = 0;
      hours = 0;

      // localStorage.removeItem('timer-bonus');
    } else {
      seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60) % 24));

    }
    return {
      'total': t,
      // 'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
      // days = timer.querySelector("#days"),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      // days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);


  function customPopub() {
    const button = document.querySelector('.btn-popub'),
      close_btn = document.querySelector('.popub__close'),
      popub = document.querySelector('.popub');

    button.addEventListener('click', function (e) {
      e.preventDefault();

      popub.classList.add('active')
      popub.classList.remove('hidden')

    });

    close_btn.addEventListener('click', function (e) {
      e.preventDefault();
      popub.classList.add('hidden')
      popub.classList.remove('active')
    });

  }

  try {
    customPopub()
  } catch (e) { console.log(e); }
});