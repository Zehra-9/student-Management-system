#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber: number = Math.floor( 10000 + Math.random()* 90000)

let myBalance: number = 0

let answer = await inquirer.prompt(

   [    {
            name: "students",
            type: "input",
            message: "Enter student name",
            validate: function (value){
               if (value.trim() !== "") {
                  return true;
               }
               return  "please enter a non-empty value.";

            },
         
        },  
        {
            name: "courses",
            type: "list",
            message: "select the course to enrolled",
            choices: ["typescript",  "HTML", "CSS", "C++"]
        } 
        
            
   
   ]
  
);

const tutionFee:{[key: string]: number} = {
   "typescript":2000,
 "HTML":1000,
 "CSS":1500,
 "C++":5000

};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`)

let paymentType = await inquirer.prompt([
   {
      name: "payment",
      type: "list",
      message: "select payment method",
      choices: ["Bank transfer", "Easypaisa ","Jazzcash"] 
   },
   {
      name:"amount",
      type: "input",
      message: "transfer money",
      validate: function (value){
         if(value.trim() !== "") {
            return true;

         }
         return "please enter a non-empty value."
      },
   }
]);

console.log(`\nyou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
   console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`)


let ans = await inquirer.prompt([
   {
      name: "select",
      type: "list",
      message: "what would you like to do next",
      choices:["View Status", "Exit"]
   }
])
if(ans.select === "View Status"){
   console.log("\n******Status******\n");
   console.log(`Student Name: ${answer.students}`);
   console.log(`Student ID ${randomNumber}`);
   console.log(`Courses: ${answer.courses}`);
   console.log(`Tution Fees Paid: ${paymentAmount}`);
   console.log(`Balance: ${myBalance +=paymentAmount}`);
}else{
   console.log("\nExiting Student Management System\n");
}

}else{
   console.log("Invalid amount due to course\n");
}
  




  


