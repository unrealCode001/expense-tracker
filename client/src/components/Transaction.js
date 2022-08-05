import {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ transaction }) => {

    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<br/>
            {sign}${transaction.amount}<br/><br/>
            {transaction.note}
            <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction;
