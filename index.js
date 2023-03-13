const inquirer = require("inquirer");
const Shapes = require("./lib/shapes.js");

const runShapes = new Shapes();

class CLI {
  Initials() {
    return inquirer
      .prompt([
        // accepts
        {
          type: "input", 
          name: "initials",
          message: "Input your initials.",
        },
      ])
      .then(({ initials }) => {
        if (initials.length > 3) {
          console.log("Input must be 3 Characters or less.");
          return this.Initials();
        } else {
          initials = initials.toUpperCase();
          runShapes.text = initials;
          return this.getInfo();
        }
      });
  }

  getInfo() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "textColor", 
          message: "Enter a text color.",
        },
        {
          type: "list",
          name: "shape", 
          message: "Choose a shape.",
          choices: ["Circle", "Triangle", "Square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter a background color.",
        },
      ])
      .then(({ textColor, shape, shapeColor }) => {
        runShapes.textColor = textColor;
        runShapes.shape = shape;
        runShapes.shapeColor = shapeColor;
        runShapes.createLogo();
      });
  }
}

const initiate = new CLI();
initiate.Initials();
