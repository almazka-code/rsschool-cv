// Cats API

const button = document.querySelector(".code__btn");
const image = document.querySelector(".card__image");
const url = "https://api.thecatapi.com/v1/images/search";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data[0].url;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  if (image.complete) {
    fetchHandler();
  }
});

// validation

let selector = document.querySelector("#phone");
let im = new Inputmask("+7 (999) - 999 - 99 - 99");
im.mask(selector);

let validationForm = new JustValidate('#contacts-form',{
  errorLabelStyle: {
    color: '#146891'
  },

  errorFieldStyle: {
    border: '1px solid #146891',
  }
})
  
validationForm
.addField('#name', [
  {
    rule: 'required', //поле обязательно для введения
    errorMessage: 'You did not enter a name',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Minimum 2 symbols',
  },  
  {
    rule: 'customRegexp',
    value: /(?=.*[a-z])(?=.*[A-Z])/,
    errorMessage: 'Invalid format',
  },
])

.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'You did not enter an email',
  },
  {
    rule: 'email',
    errorMessage: 'Mistake in the name of the mail',
  },

])

.addField('#phone', [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue();
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Write a phone number',
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue();
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Incorrect phone number',
  },
]);

// burger menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let closeBtnBurger = document.querySelector('.header__close');

burger.addEventListener('click', function() {  
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

closeBtnBurger.addEventListener('click', function() {  
  menu.classList.remove('header__nav--active');  
  document.body.classList.remove('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {    
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});
