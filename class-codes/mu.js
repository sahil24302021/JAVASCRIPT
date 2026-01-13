function function_name(para) {
    // do something 
    console.log("data:", para);
    return "values";
}

function sumOfTwoNumbers(para1, para2) {
    return para1 + para2;
}
const sumOfTwoNumbersUsingArrowFunction = (para1, para2) => para1 + para2;
console.log(sumOfTwoNumbers(1, 2)); // 3
console.log(sumOfTwoNumbersUsingArrowFunction(1, 2)); // 3
sumOfTwoNumbers;

function sayHello(fname, lname) {
    console.log(`hello ${fname} ${lname}`);
}

sayHello("roohi", "motuu"); // hello roohi motuu

let greet = function (fname, lname) {
    console.log(`hello ${fname} ${lname}`);
};
greet("roohi", "motuu");