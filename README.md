# SVG_Generator
A module to generate and SVG image based on user input.

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `text.shape.svg`
AND the output text "Generated text.shape.svg" is printed in the command line
WHEN I open the `text.shape.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Installation
```md
Download the SVG_Generator package to your computer.
Open the program in a code editor like VS Code.
Make sure that you have Node installed on your computer.
Install the packages using 'npm i' in the comand line.
Initiate the program using 'node index.js' in the comand line.
Have fun!
```


## How to Use
```md
This program is designed to generate SVG images or Scalabel Vector Graphics based on user input.
You may enter up to three characters.
You may choose a text color.
You may choose a shape of: circle, triangle, or square.
You may choose a background color for your shape.
Your file will be created and you may use it for any future projects!

More information on SVG's can be found here: [SVG](https://en.wikipedia.org/wiki/SVG)
```

## Examples
```md
Example video:
[SVG Generator](https://drive.google.com/file/d/1NOTfSYtQ6ibUzPs3yrqV78eywA6PLDZe/view)

Created Files:
[JBU Circle](/examples/jbu.circle.svg)
[JBU Square](/examples/jbu.square.svg)
[JBU Triangle](/examples/jbu.triangle.svg)
[New Circle](/examples/new.circle.svg)
[New Triangle](/examples/new.triangle.svg)
[New Square](/examples/new.square.svg)
```

## Credits
```md
Tools Used:
[Inquirer](https://www.npmjs.com/package/inquirer)
[Node](https://nodejs.org/en/)
[NPM](https://www.npmjs.com/)
[Jest](https://jestjs.io/)
[Path](https://nodejs.org/docs/latest/api/path.html)
[FS](https://nodejs.org/docs/v0.3.1/api/fs.html)
```

## Future Development
```md
1) Check if user input matches alphabetical charcaters.
2) Allow users to choose a desired color easier.
3) Add more shapes and options to choose from.
```
