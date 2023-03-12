
class Shapes {
  constructor( text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
  };
 
filterShape() {
  const userLogo = [];
  if(shape === 'Circle') {
    userLogo = circle();
} else if(shape === 'Triangle') {
    userLogo = triangle();
}   else {
    userLogo = square();
};

};
  circle() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  };

  triangle() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  };

  square() {
    return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
  };

createSVG() {
    this.filterShape();
   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.userLogo}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
};

}

module.exports = Shapes;
