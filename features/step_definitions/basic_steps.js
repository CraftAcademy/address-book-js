const { After, Given, Then } = require('cucumber')

After(async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function() {
  return await this.openHomePage()
})

Then('I should see {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('I should see {string}', function(string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})
