const { file } = require('@babel/types');
const { writeFile } = require('fs/promises');
class Shapes {
  constructor( text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
  };
 
filterShape(shape, shapeColor) {
  if(shape === 'Circle') {
    var userLogo = [];
    userLogo = this.circle(shapeColor)
    return userLogo;
} else if(shape === 'Triangle') {
    var userLogo = [];
    userLogo = this.triangle(shapeColor)
    return userLogo;
}   else if(shape === 'Square') {
    var userLogo = [];
    userLogo = this.square(shapeColor)
    return userLogo;
} else (err) => {
    return (err);
};

};
  circle(shapeColor) {
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    <text x="150" y="120" font-size="60" `;
  };

  triangle(shapeColor) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
    <text x="150" y="115" font-size="40" `;
  };

  square(shapeColor) {
    return `<rect width="200" height="200" fill="${shapeColor}" />
    <text x="100" y="115" font-size="60" `;
  };

createSVG(text, shape, shapeColor) {
    var newShape = [];
    this.text = text;
    newShape = this.filterShape(shape, shapeColor);
   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newShape}text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
};

createLogo() {
    var newFile = [];
    newFile = this.createSVG(this.text, this.shape, this.shapeColor);
    var fileName = '';
    fileName = `${this.text.toLowerCase()}.svg`;
    return writeFile(fileName, newFile, (err) =>
    err ? console.log(err) : console.log('Successfully created logo.svg!')
  );
  };
}

module.exports = Shapes;
