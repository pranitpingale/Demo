@autopay
Feature: AutoPay enrollment

     Scenario: User has an option to enroll for AutoPay
       Given user is not enrolled for AutoPay
       Then user enrolls for AutoPay and gets "You successfully enrolled in Auto Pay! You will receive a confirmation email shortly."
       And user closes success message dialog and AutoPay card is not displayed in Dashboard 
