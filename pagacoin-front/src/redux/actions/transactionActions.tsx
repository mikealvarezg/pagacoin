import { Transaction } from '../interfaces/Transaction';
import { GET_TRANSACTIONS, SET_AMOUNT, SET_DESTINATION_WALLET_ID, SET_ORIGIN_WALLET_ID, TransactionActionTypes } from '../types/transactionTypes';

export const getTransactionsAction = (transactions: Transaction[]): TransactionActionTypes => {
    return {
        type: GET_TRANSACTIONS,
        payload: transactions
    };
};

export const setOriginWalletIdAction = (originWalletId: number): TransactionActionTypes => {
    return {
        type: SET_ORIGIN_WALLET_ID,
        payload: originWalletId
    };
};

export const setDestinationWalletIdAction = (destinationWalletId: number): TransactionActionTypes => {
    return {
        type: SET_DESTINATION_WALLET_ID,
        payload: destinationWalletId
    };
};

export const setAmountAction = (amount: number): TransactionActionTypes => {
    return {
        type: SET_AMOUNT,
        payload: amount
    };
};