const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Connected to SQLite database");
    }
});

db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    email TEXT,
    password TEXT
)
`);

app.post("/register", (req, res) => {
    const { first_name, email, password } = req.body;
    console.log(req.body);

    const sql = `INSERT INTO users (first_name, email, password) VALUES (?, ?, ?)`;

    db.run(sql, [first_name, email, password], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: "User registered successfully!" });
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.get(sql, [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        if (row) {
            res.json({ message: "Login successful!", firstName: row.first_name });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }

    });

});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

