import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/GlobalState';
import './App.css';

function App() {

    return (
        <GlobalProvider>
            <div className="container">
                <div className='contain-upper'>
                    <div className='contain-left'>
                        <Header />
                        <Balance />
                        <IncomeExpenses />
                    </div>
                    <div className='contain-right'>
                        <AddTransaction />
                    </div>
                </div>
                <div className='contain-lower'>
                    <TransactionList />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
