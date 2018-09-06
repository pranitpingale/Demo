@am_LoginUser
Feature: A registered user can Login to Dashboard and can edit personal information

   Scenario: user can change name from change Name option
     Given user navigates to Edit User Profile page and clicks on change name button
     When user changes the contact and preferences
     Then user changes the address
     Then user changes the Login ID
     Then user changes the Password
     Then user changes sec. acc. holder data
     
     
     