const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');
// const { run } = require('jest-cli');
// const { getFileInfo } = require('prettier');

const runShapes = new Shapes;

class CLI {
    Initials() {
        return inquirer  
            .prompt([  // accepts 
            {
                type: 'input',  // 1) 3 characters *TODO(confirm there are 3 character)
                name: 'initials',
                message: 'Input your initials.',
            },
            ]).then(({ initials }) => {
                if(initials.length > 3) {
                    console.log('Input must be 3 Characters or less.')
                    return this.Initials();
                } else {
                    runShapes.text = initials;
                    return this.getInfo();
                }})
            };

    getInfo() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'textColor',  // 2) text color (keyword or hex value) *TODO(handle text or hex?)
                    message: 'Enter a text color.',
                },
                {
                    type: 'list',
                    name: 'shape',  // 3) prompt shape - list: circle, triangle, square  *TODO(when to if-else?)
                    message: 'Choose a shape.',
                    choices: ['Circle', 'Triangle', 'Square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',     // 4) shapes color (keyword or hex value)
                    message: 'Choose a background color.',
                },
            ]).then( ({ textColor, shape, shapeColor} ) => {
                runShapes.textColor = textColor;
                runShapes.shape = shape;
                runShapes.shapeColor = shapeColor
                runShapes.createLogo(); 
            })};
};

const initiate = new CLI;
initiate.Initials(); 


// 5) after receiving prompts generate logo.svg *TODO(when to writefile) ADD below
// 6) output text console.log(Generated logo.svg) 
// 7) open logo.svg into browser 300x200 pixel image
