import { SET_SELECTED_WALLET_ID, WalletActionTypes } from '../types/walletTypes';

export const setSelectedWalletIdAction = (selectedWalletId: number): WalletActionTypes => {
    return {
        type: SET_SELECTED_WALLET_ID,
        payload: selectedWalletId,
    };
};