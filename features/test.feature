Feature: Calculator


     Scenario: Multiply two numbers
     Given I have entered 50 into the calculator for multiplication
        And I have also entered 70 into the calculator
        When I press 50 * 70 on the calculator
        Then The result should be 3500 on the screen
        

    Scenario: Add two numbers
        Given I have entered 10 into the calculator for addition
        And I have also entered 20 into the calculator
        When I press 10 + 20 on the calculator
        Then The result should be 30 on the screen
    
        
    Scenario: Subtract two numbers
        Given I have entered 10 into the calculator for subtraction
        And I have also entered 20 into the calculator
        When I press 20 - 10 on the calculator
        Then The result should be 10 on the screen


    Scenario: Divide two numbers
        Given I have entered 10 into the calculator to get a quotient
        And I have also entered 20 into the calculator
        When I press 20 divide by 10 on the calculator
        Then The result should be 2 on the screen 