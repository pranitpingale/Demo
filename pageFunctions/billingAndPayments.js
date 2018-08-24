var json = require('json-file');
var billAndPaymentsJson = json.read('./pageObjects/billingAndPayments.page.json');
class BillingAndPayments {
    setStatementPeriodFromCurrentToLaterMonth(){

        // billAndPaymentsPage.sliderHandleStart is always set to current month
        let currentMonth = commonLib.getCurrentMonth("short")
        let classAttr = "ant-slider-mark-text ant-slider-mark-text-active"
        let sliderMonthMarker = billAndPaymentsJson.get('billingAndPayments.selector.sliderBarMonthMarker')
        let currentMonthLocator = `${sliderMonthMarker}/span[text()='${currentMonth}' and @class='${classAttr}']`
        
        let sliderHandle = billAndPaymentsJson.get('billingAndPayments.selector.sliderHandleEnd')
        let laterMonthLocator = `${currentMonthLocator}/following-sibling::span`
        
        browser.dragAndDrop(sliderHandle, laterMonthLocator);
        console.log(`Statement period is set from ${$(currentMonthLocator).getText()} to ${$(laterMonthLocator).getText()}`)

    }

}

module.exports = new BillingAndPayments()