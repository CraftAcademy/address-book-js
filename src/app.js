document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.new-contact-form')

  contactForm.addEventListener('submit', event => {
    event.preventDefault()
    const storage = window.localStorage

    // 1. Read all the input fields and get their values
    const { name, email, phone, company, notes, twitter } = contactForm.elements

    const contact = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

    console.log(contact)

    // 2. Save them to our storage
    storage.setItem('contacts', JSON.stringify([contact]))
  })
})
