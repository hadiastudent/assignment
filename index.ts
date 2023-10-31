 #! /usr/bin/env node
import inquirer from 'inquirer'; 
import chalk from "chalk";
import add from "./add.js";
import subtract from "./subtract.js";
import mult from "./multiply.js";
import divide from "./divide.js";
async function main(){
    const answer = await inquirer.prompt([{
        type: "number",
        name: "n1",
        message: "please enter the n1"
    },
    {type: "number",
    name: "n2",
    message: "please enter the n2"
},
{
    type: "list",
    name: "operator",
    message: "please select the operation",
    choices: [{name:"add", value:"add"},
    {name:"subtract", value:"subtract"},
    {name:"mult", value:"mult"},
  {name:"divide", value:"divide"},]
}
])
console.log(chalk.bgGreen(answer.operator(answer.n1,answer.n2)));
}
let confirm= " ";
do{
    await main();
     confirm =await inquirer.prompt([{
        type: 'confirm', 
        name: "con",
        message: "do you want to restart"
    }])
     console.log(confirm)
}
while(confirm.con);