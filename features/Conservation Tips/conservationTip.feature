@am_conservationTips
Feature: A registered user 
  A registerd user must be able to login to Amwater application and can check the conservation tips

    @am_conservationtipDisplay
    Scenario: User can check the conservation tips are displayed with correct content
      Given user navigates to usage menu
      When user click on Conservation Tips
      Then Conservation tips is displayed on the card "Conservation Tips"
      
    