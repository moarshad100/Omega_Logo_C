const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
	"Please enter three letters: ",
	"Enter the text color: ",
	"Select the shape: ",
	"Enter the Shape color: ",
	];

inquirer.prompt([
	{
	type:'input',
	message:questions[0],
	name:'letters'
	},

	{
	type:'input',
	message:questions[1],
	name:'text_color'
	},
	{
	type:'list',
	message:questions[2],
	name:'shape',
	choices:["circle","square","triangle"]
	},
	{
	type:'input',
	message:questions[3],
	name:'shape_color'
	}
	

	])
	.then((response)=>
		console.log(response));

