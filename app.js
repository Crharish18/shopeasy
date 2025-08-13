const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

app.get("/", (req, res) => {
    res.set('Cache-Control', 'no-store'); 
    res.status(200).send("Welcome to shepeasy");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


module.exports = { app, server };
