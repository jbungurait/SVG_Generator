const inquirer = require('inquirer');
const { run } = require('jest-cli');
const Shapes = require('./lib/shapes.js');
const { writeFile } = require('fs/promises');
const userLogo = [];

const runShapes = new Shapes(initials, textColor, shapeColor);

inquirer  // CLI
    .prompt([  // accepts 
        {
            type: 'input',  // 1) 3 characters *TODO(confirm there are 3 character)
            name: 'initials',
            message: 'Input your initials.',
        },
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
]).then( ({ initials, textColor, shape, shapeColor} ) => {
    this.initials = initials;
    this.textColor = textColor;
    this.shapeColor = shapeColor

    if(shape === 'Circle') {
        userLogo = runShapes.circle();
    } else if(shape === 'Triangle') {
        userLogo = runShapes.triangle();
    }   else {
        userLogo = runShapes.square();
    };
    createLogo(); 
});

const createLogo = () => {
    return writeFile('./examples', userLogo, (err) =>
    err ? console.log(err) : console.log('Successfully created logo.svg!')
  );
  };
// 5) after receiving prompts generate logo.svg *TODO(when to writefile) ADD below
// 6) output text console.log(Generated logo.svg) 
// 7) open logo.svg into browser 300x200 pixel image
