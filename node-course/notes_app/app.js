import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
import getNotes from './notes.js'


// Yargs configuration
const argv = yargs(hideBin(process.argv))
    // Version
    .version('1.1.0')
    // Create Add Command
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true, // Makes the title required
                type: 'string' // Specifies the type of the title   
            },
            body: {
                describe: 'Note body',
                demandOption: true, // Makes the body required
                type: 'string' // Specifies the type of the body
            }
        },
        handler: function (argv) {
            console.log(chalk.green('Adding a new note!'))
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
        }
    })
    // Create Remove Command
    .command({
        command: 'remove',
        describe: 'Remove a note',
        handler: function (){
            console.log(chalk.red('Removing a note!'))
        }
    })
    // Create List Command
    .command({
        command: 'list',
        describe: 'List all notes',
        handler: function () {
            console.log(chalk.blue('Listing all notes!'))
        }
    })
    // Create Read Command
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: function () {
            console.log(chalk.yellow('Reading a note!'))
        }
    })
    .help()
    .parse(hideBin(process.argv)) // Parses the arguments from the command line
    .argv











