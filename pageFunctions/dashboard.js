var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');

class dashboardLib {

    waitUntilDashboardLoads(){
        commonLib.waitForElementExistWithoutException(dashboardPage.meter, 60000)
        if (!dashboardPage.meter.isExisting()) {
            throw "Dashboard did not load within the time limit"
        }

    }

    goToMakePaymentsPage() {

        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        dashboardPage.paymentsDropdownMenu.waitForExist(20000)
        dashboardPage.paymentsDropdownMenu.moveToObject();
        browser.pause(2000)
        dashboardPage.makePaymentDropdownMenuItem.click();
        commonLib.waitForElementExistWithoutException(dashboardPage.autoPayContinueButton, 5000)
        if (dashboardPage.autoPayContinueButton.isExisting()) {
            dashboardPage.autoPayContinueButton.click()
        }
        makePaymentPage.electronicCheck.waitForExist(20000)

    }

    logoutAmwater(){

        commonLib.scrolToScreenTop()
        dashboardPage.loggedUserDropdownMenu.click()
        dashboardPage.loggedUserSignOutMenuItem.waitForExist(10000)
        browser.pause(3000)
        dashboardPage.loggedUserSignOutMenuItem.click()
        loginPage.loginTextbox.waitForExist(60000)

    }

    closePaperlessEnrollmentWindow(){

        dashboardPage.modalWindowCloseButton.waitForExist(10000)
        dashboardPage.modalWindowCloseButton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.modalWindowCloseButton'))
        dashboardPage.modalWindowCloseButton.waitForExist(10000, true)
    }

    unsubscribeFromPaperlessBilling(){

        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        this.navigateToEditUserProfilePage()
        this.gotoEditProfilePaperlessEnrollmentSection()

        if (dashboardPage.editProfilePaperlessEnrollButton.getText() === "Unenroll") {
            
            console.log("Paperless enrollment is active. Attempting to deactivate")
            dashboardPage.editProfilePaperlessEnrollButton.click()
            
            this.submitPaperlessEnrollmentAck()
            this.closePaperlessEnrollmentWindow()
            console.log("Paperless enrollment deactivation successfull") 
        }

        browser.back()
        commonLib.scrolToScreenTop()

    }

    navigateToEditUserProfilePage(){

        commonLib.scrolToScreenTop()
        dashboardPage.loggedUserDropdownMenu.waitForExist(10000)
        dashboardPage.loggedUserDropdownMenu.click()
        dashboardPage.loggedUserEditProfileMenuItem.waitForExist(10000)
        browser.pause(3000)

        dashboardPage.loggedUserEditProfileMenuItem.click()

        browser.waitUntil(function () {
            return browser.getUrl().indexOf('profile') > -1
          }, 5000, 'Expected to be navigated to Edit Profile page');

    }

    gotoEditProfilePaperlessEnrollmentSection(){

        dashboardPage.editProfilePaperlessEnrollButton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of Paperless enrollment: " + dashboardPage.editProfilePaperlessEnrollButton.getText())

    }
    

    submitPaperlessEnrollmentAck(){

        dashboardPage.paperlessUserAckCheckbox.waitForExist(10000)
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.paperlessUserAckCheckbox'))
        dashboardPage.paperlessUserSubmitButton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.paperlessUserSubmitButton'))
        dashboardPage.paperlessUserSubmitButton.waitForExist(10000, true)

    }

    subscribeToPaperlessBilling(){
        
        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        this.navigateToEditUserProfilePage()

        dashboardPage.editProfilePaperlessEnrollButton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of Paperless enrollment: " + dashboardPage.editProfilePaperlessEnrollButton.getText())

        if (dashboardPage.editProfilePaperlessEnrollButton.getText() === "Enroll") {
            
            console.log("Paperless enrollment is active. Attempting to deactivate")
            dashboardPage.editProfilePaperlessEnrollButton.click()
            dashboardPage.paperlessUserAckCheckbox.waitForExist(10000)
            this.submitPaperlessEnrollmentAck()
            this.closePaperlessEnrollmentWindow()
            console.log("Paperless enrollment deactivation successfull") 
        }

        browser.back()
        commonLib.scrolToScreenTop()

    }

    //Service request card functions

    getServiceRequestDetails(field){

        let detailsList = null;
        let result = null;
        
        browser.waitUntil(function(){
            detailsList = dashboardPage.serviceRequestDetails

            return detailsList.length>0;
        })

        console.log("Service Request labels available : "+detailsList.length);
        switch (field) {
            case "Hours":

                result = detailsList[0].getText() + " " + detailsList[1].getText()
                break;

            case "emergencyInfo":

                result = detailsList[2].getText() + " " + detailsList[3].getText()
                break;
        
            default:

                throw "Invalid option"
                break;
        }

        return result;

    }

}

module.exports = new dashboardLib()