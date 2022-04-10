var inquirer = require('inquirer')
var fs = require('fs');
var path = require('path');
var writeReadMe = require('./readmeTemplate.js/readmeTemplate');

function writeFile(fileName, data) {
    return 
}


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: 'input',
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: 'input',
        name: "installation",
        message: "What is the installation process for your project?"
    },
    {
        type: 'input',
        name: "usage",
        message: "What does the user need to know about using this project?"
    },
    {
        type: 'input',
        name: "contribution",
        message: "Who contributed to this project?"
    },
    {
        type: 'input',
        name: "test",
        message: "What is the name of your project?"
    },



  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    fs.writeFileSync(path.join(process.cwd(), 'README.md'), writeReadMe({...answers}))
    
  })
  .catch((error) => {
    console.log(error)
  });
