const { Given, When, Then } = require('cucumber')

Given(/^user navigates to usage menu$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToUsageHeaderMenu()
});

When(/^user click on Conservation Tips$/, function () {

  dashboardLib.navigateToConservationTips()

});

Then(/^Conservation tips is displayed on the card \"([^\"]*)\"$/, function (expMessage) {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    console.log("conservation tips text")
    commonLib.assertElementText(dashboardPage.conservationTipsText, "Conservation Tips")
    console.log("matched conservation tips text")
    dashboardPage.highlightOverlay.click()
    browser.pause(5000)

});




