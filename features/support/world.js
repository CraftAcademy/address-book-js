const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class AddressBookWorld {
  constructor() {}

  // Open the home page using puppeteer
  // async/await
  async openHomePage() {
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }

  async closeHomePage() {
    await this.browser.close()
  }
  // "Hello world".match('world')
  // ==> ['world']
  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    let match = pageContent.match(expectedContent)
    let actualContent = match[0]

    expect(actualContent).to.be.eq(expectedContent)
  }

  async clickOnAddContactBtn() {
    const btnSelector = '.add-contact'
    await this.page.waitForSelector(btnSelector)
    await this.page.click(btnSelector)
  }

  async fillFormField(field, content) {
    const inputSelector = `#contact-${field}`
    await this.page.waitForSelector(inputSelector)
    this.inputElement = await this.page.$(inputSelector)
    await this.inputElement.type(content)
  }
}

setWorldConstructor(AddressBookWorld)
