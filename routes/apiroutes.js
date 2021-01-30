

const dbJSON = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    // Get dbJSON from path /api/notes
    app.get('/api/notes', (req, res) => res.json(dbJSON))

    app.post('/api/notes', (req, res) => {
        console.log(req)
        const newNote = req.body;

        fs.writeFile(dbJSON, newNote, (err) => {
            if (err) throw err;
            console.log('Body added to DB')
        })
        // dbJSON.push(newNote)
        // console.log(dbJSON)
    });

}
