//Getting all the transactions.
//Route: Get -> /api/v1/transactions
const Transaction = require('../models/Transaction');



//Getting transactions.
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch(err){
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//Adding transactions.
exports.addTransaction = async (req, res, next) => {

    try {
        const { text, amount, note} = req.body;
        const transaction = await Transaction.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch(err){

        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

//Delete transactions.
exports.deleteTransaction = async (req, res, next) => {
    try{
        const transaction = await Transaction.findById(req.params.id);
        
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'Nothing Found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } 
    catch(err){

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
