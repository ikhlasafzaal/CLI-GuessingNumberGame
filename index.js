#! /usr/bin/env node
import inquirer from "inquirer";
const numRandom = Math.floor(Math.random() * 10 + 1);
// console.log(numRandom);
const result = await inquirer.prompt([
    {
        name: "userNum",
        type: "number",
        message: "Kindly attempt to guess a number between 1 and 10.",
    },
]);
if (result.userNum === numRandom) {
    console.log("Congrats! You've Got it, Your Guess is Spot On.");
}
else {
    console.log("Unfortunately, Your Guess Missed The Mark.");
}
;
