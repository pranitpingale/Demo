//loginPage = require('../pageObjects/login.page.js')
class Login {

    loginToAmwater(loginId, password){
        browser.pause(3000)
        loginPage.loginTextbox.waitForExist(25000)
        loginPage.loginTextbox.setValue(loginId)
        console.log('Entered loginID');
        loginPage.passwordTextbox.setValue(password)
        console.log('Entered password');
        browser.pause(2000)
        loginPage.loginButton.click();
        console.log('Clicked on Login button');

       // Handle Paperless billing acknowledgement if appears
        let paperLessUrl = browser.getUrl()

        if (paperLessUrl.includes('paperlessBillingInterceptEnroll.do')) {
            loginPage.noThanksButton.waitForExist(10000)
            loginPage.noThanksButton.click()
            console.log('Clicked on No Thanks button')

        }

        dashboardLib.waitUntilDashboardLoads()

    }

}

module.exports = new Login();