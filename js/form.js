const scriptURL = 'https://script.google.com/macros/s/AKfycbzPa8ITaTtJF_TRmDsnszyvzzeg7Iyep5uI6NadBTB0DY_Q_k7rvV8cY3P3ztPtr25H/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

document.getElementById('phone').addEventListener('input', function () {
  var phone = this.value;
  var phoneError = document.getElementById('phoneError');
  var pattern = /^\d{10,}$/;

  if (!pattern.test(phone)) {
      phoneError.textContent = "Please enter at least 10 digits.";
  } else {
      phoneError.textContent = "";
  }
});