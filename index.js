const fs = require('fs');
const inquirer = require('inquirer');
const shape = require('./assets/shapes.js')


const questions = [
	"Please enter three letters: ",
	"Enter the text color: ",
	"Select the shape: ",
	"Enter the Shape color: ",
	];




const writeToFile = function(){
	fs.writeFile("hello.txt","hello",err=>{
		if(err){
			console.log("error");
		}
	});
}


var userPrompt = function(){

inquirer.prompt([
	{
	type:'input',
	message:questions[0],
	name:'letters',
	validate:(response)=>{
		if(response.length>3){
			return console.log(" Please enter only three letters")
		}
		else
		{
			return true;
		}
	}
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
	.then((response)=>{
		if(response.letters.length>3){
			console.log("length<2");
		}


		if(response.shape === "circle"){
			let selectShape = new Shape;
			selectShape.Circle;
		}
	
	});
}




userPrompt();
