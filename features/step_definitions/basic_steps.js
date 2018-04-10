const { After, Given, Then } = require('cucumber')

After(async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content)
})
