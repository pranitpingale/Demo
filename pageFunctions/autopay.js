var json = require('json-file');
var file = json.read('./pageObjects/autoPay.page.json');

var jsonFilter = require('jsonpath');
var testData = json.read('./utilities/testData.json');

class autopayLib {

     ensureUserisNotEnrolledforAutoPay(){
        
        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        dashboardLib.navigateToEditUserProfilePage()

        autoPaypage.editProfileautopayenrollbutton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of AutoPay enrollment: " + autoPaypage.editProfileautopayenrollbutton.getText())

        if (autoPaypage.editProfileautopayenrollbutton.getText() === "Change") {
            
            console.log("AutoPay enrollment is active. Attempting to deactivate")
            autoPaypage.editProfileautopayenrollbutton.click()
            autoPaypage.cancelautopayradiobutton.waitForExist(10000)
            this.cancelautoPayenrollment()
            this.closeAutoPaySuccessWindow()
            console.log("AutoPay enrollment cancelled successfully!") 
        }
         console.log("User is not enrolled for AutoPay")
        browser.back()
        commonLib.scrolToScreenTop()

    }

    ensureUserisEnrolledforAutoPay(){

        dashboardLib.navigateToEditUserProfilePage()

        autoPaypage.editProfileautopayenrollbutton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of AutoPay enrollment: " + autoPaypage.editProfileautopayenrollbutton.getText())

        if (autoPaypage.editProfileautopayenrollbutton.getText() === "Enroll") {
            
            console.log("Customer not enrolled for AutoPay. Attempting to enroll")
            autoPaypage.editProfileautopayenrollbutton.click()
            autoPaypage.autoPayEnrollmentWindow.waitForExist(10000)
            this.autoPayinputdata()
            this.closeAutoPaySuccessWindow()
            console.log("User enrolled for AutoPay successfully!") 
        }
        
        console.log("Status of AutoPay enrollment: " + autoPaypage.editProfileautopayenrollbutton.getText())
        console.log("User is enrolled for AutoPay")
        

    }
    enrollforAutoPay(){

        autoPaypage.autoPayCard.waitForExist(10000)
        autoPaypage.autoPayCard.getLocationInView()
        autoPaypage.autoPayCard.click()
        console.log("AutoPayCard Found and clicked")
        this.autoPayinputdata()
       
    }

     autoPayinputdata(){
        autoPaypage.autoPayEnrollmentWindow.waitForExist(10000)
        autoPaypage.routingNumber.setValue('122000247')
        autoPaypage.bankAcctNumber.setValue('1234567890')
        autoPaypage.confirmbankAcctNumber.setValue('1234567890')
        autoPaypage.autopayCheckbox.waitForExist(10000)
        autoPaypage.autopayCheckbox.click()
        autoPaypage.nextbutton.waitForExist(10000)
        autoPaypage.nextbutton.getLocationInView()
        autoPaypage.nextbutton.click()
        autoPaypage.autoPayconfirmEnrollmentinformationEnrollmentWindow.waitForExist(10000)
        autoPaypage.autopayCheckbox.click()
        autoPaypage.nextbutton.getLocationInView()
        autoPaypage.nextbutton.click()
     }
     cancelautoPayenrollment(){

        autoPaypage.cancelautopayradiobutton.waitForExist(10000)
        commonLib.clickButtonByQuerySelector(file.get('autopay.selector.cancelautopayradiobutton'))
        autoPaypage.nextbutton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('autopay.selector.nextbutton'))
        autoPaypage.autopayCheckbox.waitForExist(10000)
        commonLib.clickButtonByQuerySelector(file.get('autopay.selector.autopayCheckbox'))
        autoPaypage.nextbutton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('autopay.selector.nextbutton'))
        
    }

    closeAutoPaySuccessWindow(){

        autoPaypage.xicon.waitForExist(10000)
        autoPaypage.xicon.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('autopay.selector.xicon'))
        autoPaypage.xicon.waitForExist(10000, true)
    }
}

module.exports = new autopayLib()