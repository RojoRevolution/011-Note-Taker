

const dbJSON = require('../db/db.json');
const fs = require('fs');
const noteData = require('../data/noteData');


module.exports = (app) => {
    // Get dbJSON from path /api/notes
    app.get('/api/notes', (req, res) => res.json(dbJSON))

    app.post('/api/notes', (req, res) => {
        // console.log(req)
        // const newNote = JSON.stringify(req.body);
        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.err(err);
            } else {
                const notesDb = JSON.parse(data);
                console.log(notesDb)
                const newNote = req.body;
                // console.log(newNote)
                notesDb.push(newNote)
                console.log(notesDb)


                fs.writeFile('db/db.json', JSON.stringify(notesDb), (err) => {
                    if (err) throw err;
                    console.log('Body added to DB')
                })

            }
        })
        // const newNote = req.body;
        // noteData.push(newNote)
        // console.log(noteData)


        // fs.writeFile('db/db.json', JSON.stringify(noteData), (err) => {
        //     if (err) throw err;
        //     console.log('Body added to DB')
        // })
        // dbJSON.push(newNote)
        // console.log(dbJSON)
    });

}
