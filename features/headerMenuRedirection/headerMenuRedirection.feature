@am_headerMenuRedirection
Feature: A registered user can open different menu and submenu
  A registerd user must be able to login to Amwater application and can check the conservation tips

    @am_cashpayment
    Scenario: User can check the make payment modal view are displayed with cash payment selected as default on opening cash payment from header menu
      Given user navigates to payment menu
      When user click on cash payment
      Then cash payment selected as default under payment modal view "Cash Payment Receipt Entry"

    @am_makepayment
    Scenario: User can check the make payment modal view are displayed with all the payment method from header menu
      Given again user navigates to payment menu
      When user click on make payment
      Then all the payment methods are displayed under make payment modal view with label "Make a Payment"

    @am_paymentLocation
    Scenario: User can check the payment location are displayed with correct content
      Given again user navigates to payment menu from header
      When user click on Payment Location
      Then Payment Location card is displayed with the content text box and a label as "Find Your Nearest Payment Location"