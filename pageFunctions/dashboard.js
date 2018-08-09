var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');

class dashboardLib {

    waitUntilDashboardLoads(){
        commonLib.waitForElementExistWithoutException(dashboardPage.meter, 100000)
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

    navigateToFeedbackModalView(){

        commonLib.scrolToScreenTop()
        dashboardPage.loggedUserDropdownMenu.waitForExist(10000)
        dashboardPage.loggedUserDropdownMenu.click()
        dashboardPage.loggedUserFeedbackMenuItem.waitForExist(10000)
        browser.pause(3000)

        dashboardPage.loggedUserFeedbackMenuItem.click()
    }



    navigateToUsageHeaderMenu(){

        commonLib.scrolToScreenTop()
       
        browser.pause(3000)
        //dashboardPage.headerusageMenu.waitForExist(10000)
        console.log("before hover")
        var usageMenu = dashboardPage.headerusageMenu
        console.log(usageMenu)
        browser.moveTo(usageMenu,0,10)
        //dashboardPage.headerusageMenu.click()
        console.log("hover header usage")
        dashboardPage.headerusageMenu.click()
        browser.pause(3000)

        // browser.moveTo(downloadButton,0,1100);
        // downloadButton.click()
        // browser.pause(2000)
       // dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        //browser.pause(3000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }


    navigateToConservationTips(){

        var conservationTipsSMenu = dashboardPage.conservationTipsSubMenu
        console.log(conservationTipsSMenu)
        browser.moveTo(conservationTipsSMenu,0,60)
        //dashboardPage.headerusageMenu.click()
        console.log("conservation tips menu found")
        dashboardPage.conservationTipsSubMenu.click()
        console.log("conservation tips sub menu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(5000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }

    navigateToNextConservationTips(){


        console.log("under next conservation tips")
        dashboardPage.nextArrowCT.click()
        console.log("nextTip Clicked")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(2000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }




    submitFeedback(){

        commonLib.waitForElementExistWithoutException(dashboardPage.firstQuestionSecondRadioButton, 5000)
        if (dashboardPage.firstQuestionSecondRadioButton.isExisting()) {
            dashboardPage.firstQuestionSecondRadioButton.click()
        }
        if (dashboardPage.secondQuestionSecondRadioButton.isExisting()) {
            dashboardPage.secondQuestionSecondRadioButton.click()
        }
    //dashboardPage.feedbackSubmitButton.click()
    }

    submitFeedbackNew(){
        dashboardPage.feedbackSubmitButton.click()
        browser.pause(5000)
    }



       navigateToDashboardAfterPaperlessUnsubscription(){

        if (dashboardPage.editProfilePaperlessEnrollButton.getText() == "Unenroll") {
            
            console.log("Paperless enrollment is active. Attempting to deactivate")
            dashboardPage.editProfilePaperlessEnrollButton.click()
            
            this.submitPaperlessEnrollmentAck()
            this.closePaperlessEnrollmentWindow()
            console.log("Paperless enrollment deactivation successfull") 
            dashboardPage.amwaterLogo.click()
            //commonLib.scrolToScreenTop()
            //browser.pause(5000)
        }
        else{
            commonLib.scrolToScreenTop()
            dashboardPage.profileClose.click()
            //dashboardPage.amwaterLogo.click()
            console.log("under else")
           // commonLib.scrolToScreenTop()
            browser.pause(5000)

        }

       // browser.back()
       /// commonLib.scrolToScreenTop()

    }

    // navigateToMessageMenu(){

    //    // commonLib.scrolToScreenTop()
    //     dashboardPage.messageArrowClick.waitForExist(10000)
    //     dashboardPage.messageArrowClick.click
    //     dashboardPage.message.waitForExist(10000)
    //     var FirstMsgTimestamp = dashboardPage.message.getText();
    //     console.log("First",FirstMsgTimestamp);
                
    //     var monthsName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    //     var firstDate = "Jul 28";
    //     var firstDateSplit = firstDate.split(" ");
    //     var date1 = {"day":firstDateSplit[1],"monthIndex": monthsName.indexOf(firstDateSplit[0])};

    //     var date2 = {"day":"25","monthIndex":8};

    //     var compareDates = [];
    //     compareData.push(date1);


    //     if(date1.monthIndex > date2.monthIndex) {
    //         console.log("Date1 is greater than Date2");
    //     } else if(date1.monthIndex < date2.monthIndex) {
    //         console.log("Date2 is greater than Date1");
    //     } else {
    //         if(date1.day >= date2.day) {
    //         console.log("Date1 is greater than Date2");
    //         } else if(date1.day < date2.day) {
    //             console.log("Date2 is greater than Date1");
    //         }
    //     }
        

    //     dashboardPage.loggedUserFeedbackMenuItem.waitForExist(10000)
    //     browser.pause(3000)

    //     dashboardPage.loggedUserFeedbackMenuItem.click()
    // }

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
            browser.back()
            commonLib.scrolToScreenTop()
        }

        browser.back()
        commonLib.scrolToScreenTop()

    }

        scrollPage(){

        browser.execute(function(){
            var root = document.querySelector("#root")
            root.scrollTo(0, 200)

        })

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