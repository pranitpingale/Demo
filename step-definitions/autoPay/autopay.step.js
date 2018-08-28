const { Given, When, Then } = require('cucumber')

Given(/^user is not enrolled for AutoPay$/, function () {
  autopayLib.checkAutopayEnrollmentstatus()

});

When(/^user enrolls for AutoPay and gets \"([^\"]*)\"$/, function (expMessage) {
  autopayLib.enrollforAutoPay()
  autoPaypage.autopaysuccessmsgTitle.waitForExist(10000)
  commonLib.assertElementText(autoPaypage.autopaysuccessmsgTitle, expMessage)
});

Then(/^user closes success message dialog and AutoPay card is not displayed in Dashboard$/, function () {
 //commonLib.assertElementText(autoPaypage.autopaysuccessmsg, "Once your banking information has been confirmed, automatic withdrawal will take effect with your next bill. This could take up to five days. Please continue to pay your bill manually until your bill reflects ~Paid Electronically~.")
 autoPaypage.xicon.click()
 commonLib.scrolToScreenTop()
 autoPaypage.autoPayCard.waitForExist(10000,true)

});
