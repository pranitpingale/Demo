const { Given, When, Then } = require('cucumber')

Given(/^user navigates to feedback modal view$/, function () {
  dashboardLib.navigateToFeedbackModalView()
});

When(/^user selects radio button for first question and second question$/, function () {

  dashboardLib.submitFeedback()

});

Then(/^user submit the feedback form$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback is successfull with message \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.feedbackStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.feedbackStatus, expMessage)

});



