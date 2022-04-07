const express = require('express');

require('dotenv').config();
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require('./routes/routesmovies');

const app = express();
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT;


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use('/api', routes)
app.use(cors({
    origin: "*"
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})