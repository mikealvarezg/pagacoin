import { combineReducers } from 'redux';
import { createTransactionReducer, getTransactionsReducer } from './transactionReducer';
import { userReducer } from './userReducer';
import { openCloseDialogReducer } from './dialogReducer';
import { walletReducer } from './walletReducer';

const rootReducer = combineReducers({
    users: userReducer,
    selectedUserId: userReducer,
    transactions: getTransactionsReducer,
    showDialog: openCloseDialogReducer,
    originWalletId: createTransactionReducer,
    destinationWalletId: createTransactionReducer,
    amount: createTransactionReducer,
    selectedWalletId: walletReducer,
});

export default rootReducer;