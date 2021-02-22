import { Reducer } from 'redux';
import { CreateTransactionStateType, GetTransactionsStateType, GET_TRANSACTIONS, SET_AMOUNT, SET_DESTINATION_WALLET_ID, SET_ORIGIN_WALLET_ID, TransactionActionTypes } from '../types/transactionTypes';

const initialStateGetTransactions: GetTransactionsStateType = {
    transactions: []
};

const initialStateCreateTransaction: CreateTransactionStateType = {
    originWalletId: 1,
    destinationWalletId: 1,
    amount: 0,
}

export const getTransactionsReducer: Reducer<GetTransactionsStateType, TransactionActionTypes> = (
    state = initialStateGetTransactions,
    action
): GetTransactionsStateType => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            };
        default:
            return state;
    }
};

export const createTransactionReducer: Reducer<CreateTransactionStateType, TransactionActionTypes> = (
    state = initialStateCreateTransaction,
    action
): CreateTransactionStateType => {
    switch (action.type) {
        case SET_ORIGIN_WALLET_ID:
            return {
                ...state,
                originWalletId: action.payload
            };
        case SET_DESTINATION_WALLET_ID:
            return {
                ...state,
                destinationWalletId: action.payload
            };
        case SET_AMOUNT:
            return {
                ...state,
                amount: action.payload
            };
        default:
            return state;
    }
};