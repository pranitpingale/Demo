const { Given, When, Then } = require('cucumber')

Given(/^user navigates to messages$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.msgarrowDown.click()
  browser.pause(5000)
  console.log("message arrow clicked")
});

When(/^user see the messages available in the section with message icon and title$/, function () {

  dashboardPage.messageIcon.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.messageIcon.isExisting()) 
  dashboardPage.messageTitle.waitForExist(2000)
  commonLib.assertValue(true, dashboardPage.messageTitle.isExisting()) 
   

});

Then(/^user can download the selected pdf messages$/, function () {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    dashboardPage.btnDownload.click()
    console.log("download clicked")
    browser.pause(3000)

});

Given(/^user navigates to Open Request$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.requestarrowDown.click()
  browser.pause(5000)
  console.log("alerts arrow clicked")
});

When(/^user see the open request available in the section or not$/, function () {

  dashboardPage.noAlerts.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.noAlerts.isExisting())   

});

Given(/^user navigates to alerts$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.alertarrowDown.click()
  browser.pause(5000)
  console.log("message arrow clicked")
});

When(/^user see the alerts available in the section with each having alert icon$/, function () {

  dashboardPage.alertIcon.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.alertIcon.isExisting()) 

});

Then(/^user see the alerts available in the section with each having alert title$/, function () {

   dashboardPage.alertTitle.waitForExist(2000)
   commonLib.assertValue(true, dashboardPage.alertTitle.isExisting()) 
   browser.pause(1000)

});
