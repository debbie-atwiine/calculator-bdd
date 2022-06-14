const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('chai');


//Multiplication
Given('I have entered {} into the calculator for multiplication', function (int1) {
    console.log(int1);    
}
);

Given('I have also entered {} into the calculator', function (int2) {
    console.log(int2);    
}
);

When('I press {} * {} on the calculator', function (int1, int2) {
    product = int1 * int2;
}
);

Then('The result should be {int} on the screen', function (result) {
    expect(product).to.equal(result);
}
);



//Addition
Given('I have entered {int} into the calculator for addition', function (int1) {
    console.log(int1);
    }
);

Given('I have also entered {int} into the calculator', function (int2) {
    console.log(int2);   
}
);

When('I press {int} + {int} on the calculator', function (int1, int2) {
    sum = int1 + int2;
}
);

Then('The result should be {int} on the screen', function (result) {
    expect(sum).to.equal(result);
}   
);


//Subtraction
 Given('I have entered {int} into the calculator for subtraction', function (int1) {
    console.log(int1);   
}
);

Given('I have also entered {int} into the calculator', function (int2) {
    console.log(int2);   
}
);

When('I press {int} - {int} on the calculator', function (int2, int1) {
    difference = int2 - int1;
}
);

Then('The result should be {int} on the screen', function (result) {
    expect(difference).to.equal(result);
}
);


//Division
Given('I have entered {int} into the calculator to get a quotienr', function (int1) {
    console.log(int1);    
}
);

Given('I have also entered {int} into the calculator', function (int2) {
    console.log(int2);    
}
);

When('I press {int} divide by {int} on the calculator', function (int1, int2) {
    quotient = int1 / int2;
}
);

Then('The result should be {int} on the screen ', function (result) {
    expect(quotient).to.equal(result);
}
);

