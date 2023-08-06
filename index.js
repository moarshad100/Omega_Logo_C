const fs = require('fs');
const inquirer = require('inquirer');
const shape = require('./assets/shapes.js')


const questions = [
	"Please enter three letters: ",
	"Enter the text color: ",
	"Select the shape: ",
	"Enter the Shape color: ",
	];





const writeToFile = function(data){

	



	const shape_choice = new shape(
	data.shape_color,

	);
	let svg_shape = "";



	if(data.shape === 'triangle'){

		svg_shape = `<polygon points="0,200 150,0 300,200" style="fill:${shape_choice.color};stroke:purple;stroke-width:1" />`;

	}

	else if(data.shape === 'square'){
		svg_shape = `<rect width="200" height="200" style="fill:${shape_choice.color};stroke-width:3;stroke:rgb(0,0,0)" />`;
	}

	else if(data.shape === 'circle'){

		svg_shape = `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${shape_choice.color}" />`
		
	}


	const svg_data = `<?xml version="1.0" standalone="no"?>
					<svg width="300" height="200" 
     				xmlns="http://www.w3.org/2000/svg" version="1.1">
     				${svg_shape} 
     				<text x="150" y="100" fill="${data.text_color}">${data.letters}</text>					
					</svg>`



	fs.writeFile("logo.svg",svg_data,err=>{
		if(err){
			console.log("error");
			console.log(shape_triangle);
		}
	});

	console.log(data.shape + " " +data.shape_color + " "+ data.letters + " " +data.text_color);


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

		writeToFile(response);



	
	});
}




userPrompt();
