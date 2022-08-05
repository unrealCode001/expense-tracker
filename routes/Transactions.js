const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction} = require('../controller/TransCtrl.js');


//Getting transactions route
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

//Deleting transactions route
router
    .route('/:id')
    .delete(deleteTransaction)

module.exports = router;


 