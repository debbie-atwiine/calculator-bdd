const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');


//Multiplication
Given('I have entered {int} into the calculator for multiplication', function (int1) {
    console.log(int1);    
}
);

Given('I have also entered {int} into the calculator for multiplication', function (int2) {
    console.log(int2);    
}
);

When('I press {int} * {int} on the calculator', function (int1, int2) {
    product = int1 * int2;
}
);

Then('The result should be {int} on the screen after multiplication', function (result) {
    expect(product).to.equal(result);
}
);



//Addition
Given('I have entered {int} into the calculator for addition', function (int1) {
    console.log(int1);
    }
);

Given('I have also entered {int} into the calculator for addition', function (int2) {
    console.log(int2);   
}
);

When('I press {int} + {int} on the calculator', function (int1, int2) {
    sum = int1 + int2;
}
);

Then('The result should be {int} on the screen after addition', function (result) {
    expect(sum).to.equal(result);
}   
);


//Subtraction
 Given('I have entered {int} into the calculator for subtraction', function (int1) {
    console.log(int1);   
}
);

Given('I have also entered {int} into the calculator for subtraction', function (int2) {
    console.log(int2);   
}
);

When('I press {int} - {int} on the calculator', function (int2, int1) {
    difference = int2 - int1;
}
);

Then('The result should be {int} on the screen after subtraction', function (result) {
    expect(difference).to.equal(result);
}
);


//Division
Given('I have entered {int} into the calculator for division', function (int1) {
    console.log(int1);    
}
);

Given('I have also entered {int} into the calculator for division', function (int2) {
    console.log(int2);    
}
);

When('I press {int} divide by {int} on the calculator', function (int2, int1) {
    quotient = int2 / int1;
}
);

Then('The result should be {int} on the screen after division', function (result) {
    expect(quotient).to.equal(result);
}
);

