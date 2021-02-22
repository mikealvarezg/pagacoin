import { Reducer } from 'react';
import { SetSelectedWalletIdStateType, SET_SELECTED_WALLET_ID, WalletActionTypes } from '../types/walletTypes';

const initialStateWallet: SetSelectedWalletIdStateType = {
    selectedWalletId: 0,
};

export const walletReducer: Reducer<SetSelectedWalletIdStateType, WalletActionTypes> = (
    state = initialStateWallet,
    action
): SetSelectedWalletIdStateType => {
    switch (action.type) {
        case SET_SELECTED_WALLET_ID:
            return {
                ...state,
                selectedWalletId: action.payload
            };
        default:
            return state;
    }
};