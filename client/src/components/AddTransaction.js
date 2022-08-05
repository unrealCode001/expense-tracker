import {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [note, setNotes] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {

        e.preventDefault();

        const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        note
        }

        addTransaction(newTransaction);
        setText('');
        setNotes('');
        setAmount(0);
    }

  return (
    <>
        <h3>Add New</h3>
        
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Item</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text" />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <p>+ For Income</p>
                <p>- For Expense</p>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
            </div>
            <div >
                <label htmlFor="notes">Notes</label> <br/>
                <textarea className='form-control textarea' type="text" value={note} onChange={(e) => {setNotes(e.target.value)}} placeholder='Add Notes'/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction;
