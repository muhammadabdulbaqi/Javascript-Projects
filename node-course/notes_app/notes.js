import * as fs from 'fs'
import chalk from 'chalk'

const addNote = (title, body) => {
    const notes = loadNotes();
    // Check if a note with the same title already exists
    const duplicateNote = notes.find(note => note.title === title) 

    // If a duplicate note is found, log an error message and return
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("New note added")) 
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }

}

const removeNote = (title) =>{
    console.log(chalk.blue('Removing: ' + title))
    const notes = loadNotes(); // Load existing notes

    const notesToKeep = notes.filter(note => note.title !== title);

    // If the length of notesToKeep is the same as the original notes, it means no note was removed
    if (notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('No note found with the title!'));
    } else {
        saveNotes(notesToKeep); // Save the updated notes array
        console.log(chalk.green.inverse('Note removed!')); // Log success message
    }

}

const listNotes = () => {
    const notes = loadNotes() // Load existing notes
    console.log(chalk.gray("Your notes..."))
    notes.forEach(note => {   // Iterate over each note
        console.log(chalk.bold(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes() // Load existing notes
    const noteToRead = notes.find(note => note.title === title) // Find note that contains specified title
    if (noteToRead) {
        console.log(chalk.bold.inverse(noteToRead.title)) // Log the title of the note
        console.log(noteToRead.body) // Log the body of the note
    } else {
        console.log(chalk.red.inverse('Note not found!')) // Log error message if note not found
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes); // Converts the notes array to a JSON string
    fs.writeFileSync('notes.json', dataJSON); // Writes the JSON string to notes.json
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // Reads the notes.json file
        const dataJSON = dataBuffer.toString(); // Converts the buffer to a string
        return JSON.parse(dataJSON); // Parses the JSON string to a JavaScript object
    } catch (e) {
        return []; // Returns an empty array if the file does not exist or is not readable
    }
}

export default { addNote, removeNote, listNotes, readNote };
