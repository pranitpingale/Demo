var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');

class dashboard {

    get rootElement() { return $(file.get('dashboard.selector.root')); }
    get meter() { return $(file.get('dashboard.selector.meter')); }
    get amwaterLogo() { return $(file.get('dashboard.selector.amwaterLogo')); }
    get profileClose() { return $(file.get('dashboard.selector.profileClose')); }
    get accountMeter() { return $(file.get('dashboard.selector.accountMeter')); }
    get loadingSpinner() { return $(file.get('dashboard.selector.loadingSpinner')); }
    get loggedUserDropdownMenu() { return $(file.get('dashboard.selector.loggedUserDropdownMenu')); }
    get loggedUserEditProfileMenuItem() { return $(file.get('dashboard.selector.loggedUserEditProfileMenuItem')); }


    //feedback
    get loggedUserFeedbackMenuItem() { return $(file.get('dashboard.selector.loggedUserFeedbackMenuItem')); }
    get feedbackSubmitButton() { return $(file.get('dashboard.selector.feedbackSubmitButton')); }
    get firstQuestionSecondRadioButton() { return $(file.get('dashboard.selector.firstQuestionSecondRadioButton')); }
    get secondQuestionSecondRadioButton() { return $(file.get('dashboard.selector.secondQuestionSecondRadioButton')); }
    get feedbackStatus() {return $(file.get('dashboard.selector.feedbackStatus')); }
    get paperlessText() {return $(file.get('dashboard.selector.paperlessText')); }
    get headerusageMenu() {return $(file.get('dashboard.selector.headerusageMenu')); }
    get conservationTipsSubMenu() {return $(file.get('dashboard.selector.conservationTipsSubMenu')); }
    get conservationTipsText() {return $(file.get('dashboard.selector.conservationTipsText')); }
    get highlightOverlay() {return $(file.get('dashboard.selector.highlightOverlay')); }

    //conservation tips
    get secondQuestionSecondRadioButton() { return $(file.get('dashboard.selector.secondQuestionSecondRadioButton')); }
    get feedbackStatus() {return $(file.get('dashboard.selector.feedbackStatus')); }



    get loggedUserSignOutMenuItem() { return $(file.get('dashboard.selector.loggedUserSignOutMenuItem')); }
    get servicePeriodLabel() { return $(file.get('dashboard.selector.servicePeriodLabel')); }
    get makePaymentButton() { return $(file.get('dashboard.selector.makePaymentButton')); }
    get autoPayContinueButton() { return $(file.get('dashboard.selector.autoPayContinueButton')); }
    get paymentsDropdownMenu() { return $(file.get('dashboard.selector.paymentsDropdownMenu')); }
    get makePaymentDropdownMenuItem() { return $(file.get('dashboard.selector.makePaymentDropdownMenuItem')); }
    get makeAPaymentButton() {return $(file.get('dashboard.selector.makeAPaymentButton')); }
    
    //Paperless Enrollment
    get goPaperlessCard() {return $(file.get('dashboard.selector.goPaperlessCard')); }
    get gopaperlessCardSignupButton() {return $(file.get('dashboard.selector.gopaperlessCardSignupButton')); }
    get paperlessBillingLabel() {return $(file.get('dashboard.selector.paperlessBillingLabel')); }
    get paperlessBillingEnrollmentWindow() {return $(file.get('dashboard.selector.paperlessBillingEnrollmentWindow')); }
    get paperlessThankyouMessage() {return $(file.get('dashboard.selector.paperlessThankyouMessage')); }
    get paperlessUserAck() {return $(file.get('dashboard.selector.paperlessUserAck')); }
    get paperlessUserAckCheckbox() {return $(file.get('dashboard.selector.paperlessUserAckCheckbox')); }
    get paperlessUserSubmitButton() {return $(file.get('dashboard.selector.paperlessUserSubmitButton')); }
    get autopayContinueButton() {return $(file.get('dashboard.selector.autopayContinueButton')); }
    get paperlessEnrollmentStatus() {return $(file.get('dashboard.selector.paperlessEnrollmentStatus')); }
    get modalWindowCloseButton() {return $(file.get('dashboard.selector.modalWindowCloseButton')); }

    //Edit Profile
    get editProfilePaperlessEnrollmentStat() {return $(file.get('dashboard.selector.editProfilePaperlessEnrollmentStat')); }
    get editProfilePaperlessEnrollButton() {return $(file.get('dashboard.selector.editProfilePaperlessEnrollButton')); }

    //Service request card
    get servicesRequestCard() {return $(file.get('dashboard.selector.servicesRequestCard')); }
    get serviceRequestDescription() {return $(file.get('dashboard.selector.serviceRequestDescription')); }
    get serviceRequestNumber() {return $(file.get('dashboard.selector.serviceRequestNumber')); }
    get serviceRequestDetails() {return $$(file.get('dashboard.selector.serviceRequestDetails')); }//Array of element

    //Payment Locations
    get paymentLocationsCard() {return $(file.get('dashboard.selector.paymentLocationsCard')); }
    get paymentLocationSearchButton() {return $(file.get('dashboard.selector.paymentLocationSearchButton')); }
    

  }
  
  module.exports = new dashboard();