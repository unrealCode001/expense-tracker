const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const path = require('path');


//Requiring dotenv
dotenv.config({ path: './config/config.env' });
connectDB();

//Getting transactions routing
const transactions = require('./routes/Transactions');

//Requiring express
const app = express();
app.use(express.json());


app.use('/api/v1/transactions', transactions);

//Getting to production
if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname + 'client/build/index.html'));
    });
}

//Fetching from dotenv
const PORT = process.env.PORT || 8000;

//Listing to port
app.listen(PORT, () => {
  console.log( `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow );
})