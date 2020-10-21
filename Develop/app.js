const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var team = []


function mainQuestions() {

    inquirer.prompt([
        {
            name: 'Name',
            type: 'input',
            message:'What is your name?'
        },
        {
            name: 'email',
            type: 'input',
            message:'What is your email address?'
        },
        {
            name: 'Id',
            type: 'input',
            message:'Please enter your id?'
        },
        
         {
            
            name: 'Role',
            type: 'list',
            message:'What is your role?',
            choices: [
                "Intern",
                "Engineer",
                "Manager"
            ]
        }, 
       
    ]).then(function(mainData){
         console.log('answers to questionsss???',mainData);

         if (mainData.Role === "Intern"){
             console.log('Time to make an intern');
             askInternQ(mainData)
         } else if (mainData.Role === "Manager"){
            console.log('Time to make an Manager');
            askManagerQ(mainData)
        } else if (mainData.Role === "Engineer"){
            console.log('Time to make an Engineer');
            askEngineerQ(mainData)
        }




        
    })
    // function to ask the main questions with inquiere!!
        // name
        //id
        //email
        // wat role ?? type: 'list' nice drop

    // in the .then fire off final question function depending on what role they chose if else vibes!
}
mainQuestions()


function askAnother() {
    inquirer.prompt([
        {
            name: 'addAnother',
            type: 'confirm',
            message:'Would you like to add another??'
        },
    ]).then(function(anotherData){
        console.log("heres our anotherData Stuff",anotherData);
        if(anotherData.addAnother === true) {
            console.log('do another round!! add anopther emp!!')
            mainQuestions()
        } else {
            console.log('time to stop!!!')
        }
       
    })
}

function askInternQ(firstQnA) {
    inquirer.prompt([
        {
            name: 'School',
            type: 'input',
            message:'What School Did you go to?'
        },
    ]).then(function(interndata){
        console.log("heres our intern Stuff",interndata);
        console.log('heres our baseline question stuff', firstQnA)

        var intern = new Intern(firstQnA.Name, firstQnA.id, firstQnA.email, interndata.School)
        team.push(intern)
        askAnother()
    })
    // final inquiere prompt for last question
        // in .then here - take all the answers and make a new Intern class with it
        // and push it into the team array
}

function askManagerQ(firstQnA) {
    inquirer.prompt([
        {
            name: 'Office',
            type: 'input',
            message:'What is your office number?'
        },
    ]).then(function(managerdata){
        console.log("heres our Manager Stuff",managerdata);
        console.log('heres our baseline question stuff', firstQnA)

        var manager = new Manager(firstQnA.Name, firstQnA.id, firstQnA.email, managerdata.Office)
        team.push(manager)
        askAnother()
    })
    // final inquiere prompt for last question
        // in .then here - take all the answers and make a new Manager class with it
        // and push it into the team array
}


function askEngineerQ(firstQnA) {
    // final inquiere prompt for last question
    inquirer.prompt([
        {
            name: 'Github',
            type: 'input',
            message:'What is your github username?'
        },
    ]).then(function(engineerdata){
        console.log("heres our Manager Stuff",engineerdata);
        console.log('heres our baseline question stuff', firstQnA)

        var engineer = new Engineer(firstQnA.Name, firstQnA.id, firstQnA.email, engineerdata.Github)
        team.push(engineer)
        askAnother()
    })
    // final inquiere prompt for last question
        // in .then here - take all the answers and make a new Engineer class with it
        // and push it into the team array
}




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
