@am_feedbackSubmit
Feature: A registered user can submit the feedback
  A registerd user must be able to login to Amwater application and can submit the feedback

    @am_submitByManadatoryField
    Scenario: User can submit the feedback using all the manadatory fields
      Given user navigates to feedback modal view
      When user selects radio button for first question and second question
      Then user submit the feedback form
      And feedback is successfull with message "Thank you for providing your feedback"

    