@autopay
Feature: AutoPay enrollment

    Scenario: user can cancel fromAutoPay Enrollment
      Given user navigates to Edit User Profile page and clicks on Change button
      When user cancels enrollment
      Then discontinue paperless billing successfull message is displayed "Discontinue Paperless Billing has been Successful."
      And user closes success mesage dialog and go paperless card is displayed in Dashboard 
