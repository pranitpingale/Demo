const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Billing and Payments page$/, function () {

    dashboardLib.goToBillingAndPaymentsPage()

});

When(/^user slides the slider bar to set statement period for 3 months$/, function () {

    billAndPaymentsLib.setStatementPeriodFromCurrentToLaterMonth()

});

Then(/^billing and payments table should display transactions only for the selected statement period$/, function () {

    

});