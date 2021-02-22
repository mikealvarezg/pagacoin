import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactionsAction } from '../redux/actions/transactionActions';
import { pagacoinAPI } from '../utils/axios.pagacoinAPI';
import Transactions from './Transactions';

const TransactionsContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        pagacoinAPI.get('/transactions')
            .then((response) => {
                dispatch(getTransactionsAction(response.data));
            });
    }, [dispatch]);

    return <Transactions />;
};

export default TransactionsContainer;
