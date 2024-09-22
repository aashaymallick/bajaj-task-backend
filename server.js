const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item)).map(item => item.toUpperCase());
    const highest_alphabet = alphabets.sort().pop();

    res.json({
        is_success: true,
        user_id: "aashay_mallick_2207003",
        email: "ag9453@srmist.edu.in",
        roll_number: "RA2111003010485",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
