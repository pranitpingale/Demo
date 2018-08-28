const { Given, When, Then } = require('cucumber')

Given(/^user is not enrolled for AutoPay$/, function () {
  dashboardLib.subscribeToPaperlessBilling()
  dashboardLib.navigateToEditUserProfilePage()
  dashboardLib.gotoEditProfilePaperlessEnrollmentSection()
  dashboardPage.editProfilePaperlessEnrollButton.click()

});

When(/^user enrolls for AutoPay$/, function () {

  dashboardLib.submitPaperlessEnrollmentAck()

});

Then(/^user closes success message dialog and AutoPay card is not displayed in Dashboard$/, function (expMessage) {

  dashboardPage.paperlessEnrollmentStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.paperlessEnrollmentStatus, expMessage)

});
