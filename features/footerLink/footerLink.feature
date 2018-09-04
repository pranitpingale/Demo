@am_footer
Feature: Footer page links redirection in new tab

    Scenario: verify user able to open privacy policy footer link in new browser tab
        When user clicks on Privacy Policy link in Footer
        Then user validate Privacy Policy page with page title "PRIVACY POLICY"
        And Privacy Policy link is successfully redirecting to Privacy Policy Page by validating page url

    Scenario: verify user able to open Terms Of Use footer link in new browser tab
        When user clicks on Terms Of Use link in Footer
        Then user validate Terms of Use page with page title "TERMS OF USE"
        And Terms of Use link is successfully redirecting to Terms of Use Page by validating page url


    Scenario: verify user able to open Facebook footer icon link in new browser tab
        When user clicks on Facebook link in Footer
        Then user validate Facebook link with page title "California American Water"
        And Facebook link is successfully redirecting to Facebook by validating page url


    Scenario: verify user able to open Twitter footer icon link in new browser tab
        When user clicks on Twitter link in Footer
        Then user validate Twitter link with page "CA American Water"
        And Twitter link is successfully redirecting to Twitter by validating page url

    Scenario: verify user able to open Youtube footer icon link in new browser tab
        When user clicks on Youtube link in Footer
        Then user validate Youtube link with page "caamwater"
        And Youtube link is successfully redirecting to Youtube Page by validating page url


    Scenario: verify user able to open Blog footer icon link in new browser tab
        When user clicks on blog link in Footer
        Then blog link is successfully redirecting to blog Page by validating page url

    Scenario: verify user able to open PuddleDuck footer icon link in new browser tab
        When user clicks on PuddleDuck link in Footer
        Then user validate PuddleDuck link with page "PUDDLES ON THE WEB"
        And PuddleDuck link is successfully redirecting to PuddleDuck Page by validating page url
        

    
        
    
