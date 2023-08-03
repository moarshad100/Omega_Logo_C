const fs = require('fs');
const inquirer = require('inquirer');


const questions = ["what is you shape","whats your color"];

inquirer.prompt([
	{
	type:'input',
	message:questions[0],
	name:'shape'
	},

	{
	type:'input',
	message:questions[1],
	name:'color'
	},
	

	])
	.then((response)=>
		console.log(response));

