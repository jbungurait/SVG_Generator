const shapes = require('../lib/shapes.js');

describe('shapes', () => {
    // Test to verify that the BlogPost class can be instantiated.
    describe('Instantiate', () => {
      it('should be an instance of shapes class', () => {
        const Shapes = new shapes();
        expect(Shapes).toBeInstanceOf(shapes);
      });
    });
});
  

describe('circle', () => {
    it('should create a circle svg with the given input', () => {
        const Shapes = new shapes();
        Shapes.shapeColor = 'blue';
        expect(Shapes.circle()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('triangle', () => {
    it('should create a triangle svg with the given input', () => {
        const Shapes = new shapes();
        Shapes.shapeColor = 'blue';
        expect(Shapes.triangle()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('square', () => {
    it('should create a square svg with the given input', () => {
        const Shapes = new shapes();
        Shapes.shapeColor = 'blue';
        expect(Shapes.square()).toEqual('<rect width="200" height="200" fill="blue" />');
    });
});