const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город';

headerCityButton.addEventListener('click', () => { //слушатель событий (клик и тд)
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city)
});

//блокировка скролла

const disableScroll = () => {
     const widthScroll = window.innerWidth - document.body.offsetWidth;

     document.body.dbScrollY = window.scrollY;

     document.body.style.cssText = `
         position: fixed;
         top: ${-window.scrollY}px;
         left: 0;
         width: 100%;
         height: 100vh;
         overflow: hidden;
         padding-right = ${widthScroll}px;
     `;
};

const enableScroll = () => {
     document.body.style.cssText = '';
     window.scroll({
       top: document.body.dbScrollY
     })
};



//модальное окно

const subheaderСart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay'); // а тут нужно

const cartModalOpen = () => {
      cartOverlay.classList.add('cart-overlay-open'); //так как указан classList . ставить не нужно
      disableScroll();
};

const cartModalClose = () => {
   cartOverlay.classList.remove('cart-overlay-open');
   enableScroll();
};

subheaderСart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
     const target = event.target;

     if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
       cartModalClose();
     }
});

