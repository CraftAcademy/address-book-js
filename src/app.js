const storage = window.localStorage

const renderContacts = () => {
  // Read all the contacts from the storage
  const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('.contact-list')

  if (contacts) {
    div.innerHTML = ''
    // render the contacts
    const ul = document.createElement('ul')

    contacts.forEach(contact => {
      let li = document.createElement('li')

      li.innerHTML = `
        <div class="card">
          <div class="image">
            <img src="https://ca-address-book.herokuapp.com/images/pine.jpg" />
          </div>
          <div class="content">
            <h1>${ contact.name}</h1>
            <h2>${ contact.company}</h2>
            <p>${ contact.notes}</p>
            ${ contact.email} |
            <a href="http://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
          </div>
        </div>
      `
      ul.appendChild(li)
    })

    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  renderContacts()
  const contactForm = document.querySelector('.new-contact-form')
  const addContactBtn = document.querySelector('.add-contact')
  const cancelBtn = document.querySelector('.cancel')
  const contactList = document.querySelector('.contact-list')

  contactForm.addEventListener('submit', event => {
    event.preventDefault()

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

    let contacts = JSON.parse(storage.getItem('contacts')) || []

    contacts.push(contact)

    // 2. Save them to our storage
    storage.setItem('contacts', JSON.stringify(contacts))
    renderContacts()
    contactForm.reset()

    // Hide Contact form
    contactList.classList.remove('hide')
    contactForm.classList.add('hide')
  })

  addContactBtn.addEventListener('click', () => {
    contactList.classList.add('hide')
    contactForm.classList.remove('hide')
  })

  cancelBtn.addEventListener('click', () => {
    contactList.classList.remove('hide')
    contactForm.classList.add('hide')
  })
})
