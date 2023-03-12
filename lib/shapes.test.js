const { it } = require('node:test');
const shapes = require('shapes.js');



describe('circle', () => {
    it('should create a circle svg with the given input', () => {

    })
})

describe('triangle', () => {
    it('should create a triangle svg with the given input', () => {
        const triangle = new shapes.triangle();
        shapes.shapeColor("blue");
        expect(triangle).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('square', () => {
    it('should create a square svg with the given input', () => {

    })
})