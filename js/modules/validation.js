// validation

let selector = document.getElementById('phone');
let form = document.getElementById('contacts-form');
let im = new Inputmask('+7 (999) - 999 - 99 - 99');
im.mask(selector);


let validationForm = new JustValidate('#contacts-form',{
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: 'red'
  },

  errorFieldStyle: {
    border: '1px solid red',
  },

  successFieldCssClass: 'is-valid',
  successLabelStyle: {
    fontSize: '10px',
    color: '#353535',
  },

  focusInvalidField: true,
  lockForm: true,
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
    // value: /(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])/,
    value: /(?=.*[a-zа-яёA-ZА-ЯЁ])/,
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
  // console.log('Validation passes and form submitted', event);

  let params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    phone_id: document.getElementById('phone').value,
    message: document.getElementById('message').value
  }
  emailjs.send('service_lfiwoxs', 'template_23v6srr', params).then(function() {
    // надпись об успешной регистрации
    const notification = document.querySelector('.notification');
    notification.classList.add('notification--active');
    setTimeout(function () {
    notification.classList.remove('notification--active');
    }, 4000);

    form.reset();
  })
});