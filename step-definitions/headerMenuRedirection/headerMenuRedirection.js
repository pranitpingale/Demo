const { Given, When, Then } = require('cucumber')

Given(/^user navigates to payment menu$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToPaymentsHeaderMenu()
});

When(/^user click on cash payment$/, function () {

  dashboardLib.navigateToCashPayment()

});

Then(/^cash payment selected as default under payment modal view \"([^\"]*)\"$/, function (expMessage) {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    console.log("cash payment label")
    commonLib.assertElementText(dashboardPage.cashpaymentLabel, expMessage)
    console.log("matched cash payment label")
    makePaymentLib.closeMakePaymentWindow()
    browser.pause(5000)

});

Given(/^again user navigates to payment menu$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToPaymentsHeaderMenu()
});

When(/^user click on make payment$/, function () {

  dashboardLib.navigateToMakePayment()

});

Then(/^all the payment methods are displayed under make payment modal view with label \"([^\"]*)\"$/, function (expMessage) {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    dashboardPage.tipTitle.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipTitle.isExisting())    
    dashboardLib.navigateToNextConservationTips()
    dashboardPage.tipTitle.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipTitle.isExisting())
    dashboardLib.navigateToNextConservationTips()
    dashboardPage.tipTitle.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipTitle.isExisting())
    dashboardLib.navigateToNextConservationTips()
    browser.pause(1000)
    console.log("cash payment label")
    commonLib.assertElementText(dashboardPage.cashpaymentLabel, expMessage)
    console.log("matched cash payment label")
    makePaymentLib.closeMakePaymentWindow()
    browser.pause(5000)

});