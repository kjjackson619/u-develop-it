const db = require('./db/connection');

const apiRoutes = require('./routes/apiRoutes');

const express = require('express');

const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);


// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`;

// const params = [1, 'RONALD', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });


app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});