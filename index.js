#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Welcom to Hammad Calculator!');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let input1 = await inquirer.prompt([
    {
        name: "number1",
        type: Number,
        message: "enter your first number",
    },
]);
let input2 = await inquirer.prompt([
    {
        name: "number2",
        type: Number,
        message: "enter your second number",
    },
]);
let operation = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Square Root",
        ],
    },
]);
console.log(chalk.bgBlue(input1.number1));
console.log(chalk.bgBlue(input2.number2));
console.log(chalk.bgBlue(operation.operator));
let value;
switch (operation.operator) {
    case "Addition":
        value = Number(input1.number1) + Number(input2.number2);
        break;
    case "Subtraction":
        value = input1.number1 - input2.number2;
        break;
    case "Multiplication":
        value = input1.number1 * input2.number2;
        break;
    case "Division":
        value = input1.number1 / input2.number2;
        break;
    case "Square Root":
        (value = input1.number1 * (1 / 2)), input2.number2 * (1 / 2);
        break;
    default:
        break;
}
console.log(value);
