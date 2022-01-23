const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub uswername?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName', // done
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description', // done
        message: 'Provide a briefe discription of your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do we install the project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'what if they have questions?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who are the contributing members of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNU GPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }
]


module.exports = questions