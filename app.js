const express = require('express')
const app = express()

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Message: Successful</h1>")
})

app.get("/products",  (req, res) => {
    res.send("This is in products")
})

app.listen(PORT, () => {
    console.log("Demo app is up and listening to port no "+PORT);
})