import { Transaction } from '../interfaces/Transaction';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export const SET_ORIGIN_WALLET_ID = 'SET_ORIGIN_WALLET_ID';

export const SET_DESTINATION_WALLET_ID = 'SET_DESTINATION_WALLET_ID';

export const SET_AMOUNT = 'SET_AMOUNT';

export interface GetTransactionsStateType {
	transactions: Transaction[];
}

export interface CreateTransactionStateType {
	originWalletId: number;
	destinationWalletId: number;
	amount: number;
}

interface GetTransactionsActionType {
	type: typeof GET_TRANSACTIONS;
	payload: Transaction[];
}

interface SetOriginWalletIdActionType {
	type: typeof SET_ORIGIN_WALLET_ID;
	payload: number;
}

interface SetDestinationWalletIdActionType {
	type: typeof SET_DESTINATION_WALLET_ID;
	payload: number;
}

interface SetAmountActionType {
	type: typeof SET_AMOUNT;
	payload: number;
}

export type TransactionActionTypes = 
	GetTransactionsActionType | 
	SetOriginWalletIdActionType | 
	SetDestinationWalletIdActionType | 
	SetAmountActionType;