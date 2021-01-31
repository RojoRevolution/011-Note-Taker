

const dbJSON = require('../db/db.json');
const fs = require('fs');

module.uniqid_debug = true;
var uniqid = require('uniqid');

// const noteData = require('../data/noteData');




module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) { console.err(err) }
            else {
                res.json(JSON.parse(data))
            }
        })
    })

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
                    // this res.json should sending the latest information - doesn't matter for this app, but it would matter if the front end was making use of the data in some way
                    res.json(notesDb);
                });
            };
        });
    });

    // Deleting Notes
    app.get('/api/notes/:id', (req, res) => {
        const dltById = req.params.id;
        console.log(dltById);
        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) { console.err(err) }
            else {
                for (let i = 0; data.length; i++) {
                    if (dltById === data[i].routename) {
                        return res.json(data[i]);
                    } else {
                        return res.json(false)
                    }
                }

                // res.json(JSON.parse(data))
            }
        })
    });


};
