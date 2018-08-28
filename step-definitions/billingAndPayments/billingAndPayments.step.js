const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Billing and Payments page$/, function () {

    dashboardLib.goToBillingAndPaymentsPage()

});

When(/^user slides the slider bar to set statement period for 1 month$/, function () {

    billAndPaymentsLib.setSliderHandleStartFromDefaultToLaterMonth()

});

Then(/^billing and payments table should display transactions only for the selected statement period$/, function () {

    commonLib.assertValue(true, billAndPaymentsLib.areDatesDisplayedInBillingAndPaymentsTableWithinRange())

});

Given(/^user clicks on the invoicing link under column Important Information$/, function () {

    billAndPaymentsLib.clickOnInvoicingLinkImpotantInformation()

});

Then(/^invoice is displayed in a new tab$/, function () {

    expect(2).to.equal(commonLib.getTabCount(), "Tab count");
    
});

Then(/^new tab contains invoicing as pdf$/, function () {

    commonLib.switchToTab(1)
    expect(billAndPaymentsLib.isInvoicingPdfDisplayed()).to.be.true;
    commonLib.switchToTab(0)

});