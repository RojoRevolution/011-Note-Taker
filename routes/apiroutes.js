

const dbJSON = require('../db/db.json');
const fs = require('fs');
const noteData = require('../data/noteData');


module.exports = (app) => {
    // Get dbJSON from path /api/notes
    app.get('/api/notes', (req, res) => res.json(dbJSON))

    app.post('/api/notes', (req, res) => {
        console.log(req)
        // const newNote = JSON.stringify(req.body);
        const newNote = req.body;
        noteData.push(newNote)
        console.log(noteData)


        fs.appendFile('db/db-test.json', JSON.stringify(noteData), (err) => {
            if (err) throw err;
            console.log('Body added to DB')
        })
        // dbJSON.push(newNote)
        // console.log(dbJSON)
    });

}
