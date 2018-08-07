@am_payByMethods
Feature: A registered user can pay by avaialble Payment methods
  A registerd user must be able to login to Amwater application and pay by Electronic Check

    @am_byCash
    Scenario: User can make payment by cash
      Given user navigates to Make Payments page an selects payment method "Cash"
      When user pays with amount "84" and receipt number "018284AB235" and submits
      Then cash payment is successfull with message "You have successfully completed your CASH payment!"

    @am_byEC
    Scenario: User can make payment by Electronic Check
      Given user navigates to Make Payments page an selects payment method "Electronic Check"
      When user sucessfully pays "5$"
      Then user recieves payment successfull message "You have successfully completed your Electronic Check Payment!"
      And user Account Summary is updated with the deficit amount after 10 seconds

    @am_byCard
    Scenario: User can make payment by Debit or Credit card
      Given user navigates to Make Payments page an selects payment method "Credit or Debit Card"
      When user sucessfully pays "5$"
      Then user recieves payment successfull message "You have successfully completed your Credit Card Payment!"
      And user Account Summary is updated with the deficit amount after 10 seconds