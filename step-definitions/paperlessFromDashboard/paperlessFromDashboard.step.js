const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Edit User Profile page$/, function () {
  //dashboardLib.unsubscribeFromPaperlessBillingfromProfilepage()
  dashboardLib.navigateToEditUserProfilePage()
  //dashboardLib.gotoEditProfilePaperlessEnrollmentSection()
  //dashboardPage.editProfilePaperlessEnrollButton.click()

});

When(/^user navigates to the paperless enrollment section$/, function () {

  dashboardLib.gotoEditProfilePaperlessEnrollmentSection()

});

Then(/^unsubscribe paperless if it is subscribed and navigate to dashboard \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.editProfilePaperlessEnrollButton.waitForExist(10000)
  dashboardLib.navigateToDashboardAfterPaperlessUnsubscription()
    dashboardLib.scrollPage()
  dashboardPage.paperlessText.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.paperlessText, expMessage) 

});
