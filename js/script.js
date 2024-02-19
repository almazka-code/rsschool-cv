// burger menu

const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('.body');

const toggleMenu = function () {
  burger.classList.toggle('burger--active');
  menuBurger.classList.toggle('nav--active');
  body.classList.toggle('stop-scroll');
}

burger.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menuBurger.classList.remove('nav--active');
    body.classList.remove('stop-scroll');
  });
});

body.addEventListener('click', function (e) {
  const target = e.target;
  const targetBurger = target == burger;
  const targetMenu = target == menuBurger || menuBurger.contains(target);
  const menuIsActive = menuBurger.classList.contains('nav--active');

  if (!targetBurger && !targetMenu && menuIsActive) {
    toggleMenu();
  }
});

// button upward
let calcScrollValue = () => {
  let scrollProgress = document.querySelector('.progress');
  let position = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((position * 100) / calcHeight);

  position > 500 ? scrollProgress.style.display = 'flex' : scrollProgress.style.display = 'none';

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  })

  scrollProgress.style.background = `conic-gradient(#6dbde1 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.addEventListener('scroll', calcScrollValue);

// validation

let selector = document.getElementById('phone');
let form = document.getElementById('contacts-form');
let im = new Inputmask('+7 (999) - 999 - 99 - 99');
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
    rule: 'required',
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
]).onSuccess((event) => {
  console.log('Validation passes and form submitted', event);

  let params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    phone_id: document.getElementById('phone').value,
    message: document.getElementById('message').value
  }
  emailjs.send('service_lfiwoxs', 'template_23v6srr', params).then(function() {
    alert('Success!');
    form.reset();
  })
});