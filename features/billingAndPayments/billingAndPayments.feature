@am_billingAndPayment
Feature: Biliing and Payment history

    Background: 
        Given user navigates to Billing and Payments page

    Scenario: Display Billing and payments history monthwise
        When user slides the slider bar to set statement period for 1 month
        Then billing and payments table should display transactions only for the selected statement period

    Scenario: verify invoice is attached and opens in billing and payments table
        Given user clicks on the invoicing link under column Important Information
        Then invoice is displayed in a new tab
        And new tab contains invoicing as pdf
        And user closes new tab