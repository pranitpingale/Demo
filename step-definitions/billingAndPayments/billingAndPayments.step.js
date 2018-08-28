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