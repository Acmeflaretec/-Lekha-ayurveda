const scriptURL = 'https://script.google.com/macros/s/AKfycbzPa8ITaTtJF_TRmDsnszyvzzeg7Iyep5uI6NadBTB0DY_Q_k7rvV8cY3P3ztPtr25H/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})