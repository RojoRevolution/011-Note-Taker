

const dbJSON = require('../db/db.json');
const fs = require('fs');

module.uniqid_debug = true;
var uniqid = require('uniqid');

// const noteData = require('../data/noteData');




module.exports = (app) => {

    // Get dbJSON from path /api/notes
    app.get('/api/notes', (req, res) => res.json(dbJSON))

    app.post('/api/notes', (req, res) => {

        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.err(err);
            } else {
                // Parse data from db.JSON
                const notesDb = JSON.parse(data);
                // Variable for the entered note dats
                const newNote = req.body;
                // variables to create a unique ID
                const idKey = "id";
                const noteId = uniqid();
                // Add ID to newNote
                newNote[idKey] = noteId;
                // push completed note to notesDb variable
                notesDb.push(newNote);

                fs.writeFile('db/db.json', JSON.stringify(notesDb), (err) => {
                    if (err) throw err;
                    console.log('Body added to DB');
                });
                res.json(dbJSON);
            };
        });
    });
};
