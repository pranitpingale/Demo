@am_billingAndPayment
Feature: Biliing and Payment history

    Scenario: Display Billing and payments history monthwise
        Given user navigates to Billing and Payments page
        When user slides the slider bar to set statement period for 1 month
        Then billing and payments table should display transactions only for the selected statement period