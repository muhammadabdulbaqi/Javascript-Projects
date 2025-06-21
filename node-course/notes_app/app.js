import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
import notes from './notes.js'


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
            console.log(chalk.gray('Adding a new note...'))
            // console.log('Title: ' + argv.title)
            // console.log('Body: ' + argv.body)
            notes.addNote(argv.title, argv.body) // Calls the addNote function from notes.js

        }
    })
    // Create Remove Command
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title to remove',
                demandOption: true , // Makes the title required
                type: 'string' // Specifies the type of the title
            }
        },
        handler: function (argv){
            console.log(chalk.gray('Removing a note...'))
            notes.removeNote(argv.title) // Calls the removeNote function from notes.js
        }
    })
    // Create List Command
    .command({
        command: 'list',
        describe: 'List all notes',
        handler: function () {
            console.log(chalk.blue('Listing all notes!'))
            notes.listNotes()
        }
    })
    // Create Read Command
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title to read',
                demandOption: true, // Makes the title required
                type: 'string' // Specifies the type of the title
            }
        },
        handler: function (argv) {
            console.log(chalk.gray('Reading a note...'))
            notes.readNote(argv.title) // Calls the readNote function from notes.js
        }
    })
    .help()
    .parse(hideBin(process.argv)) // Parses the arguments from the command line
    .argv











