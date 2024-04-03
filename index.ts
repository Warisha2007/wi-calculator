#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
{message:"Enter first number", type: "number", name:"firstNumber"},
{message:"Enter second number", type: "number", name:"secondNumber"},
{message: "Select one of the operator to perform your operation",
type:"list",
name:"operator",
choices:["Addition", "Subtraction", "Multiply", "Division", "Power", "Modulus"]
},

])
//condition
if(answer.operator === "Addition"){
console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.operator === "Subtraction"){
console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiply"){
console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division"){
console.log(answer.firstNumber / answer.secondNumber);
}
else if(answer.operator === "Power"){
console.log(answer.firstNumber ** 2);
console.log(answer.secondNumber ** 2);
}
else if(answer.operator === "Modulus"){
console.log(answer.firstNumber / answer.secondNumber);
}
else{
console.log("Please select valid operator");
}
