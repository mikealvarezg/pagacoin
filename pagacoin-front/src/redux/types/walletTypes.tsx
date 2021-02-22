export const SET_SELECTED_WALLET_ID = 'SET_SELECTED_WALLET_ID';

export interface SetSelectedWalletIdStateType {
    selectedWalletId: number;
}

interface SetSelectedWalletIdActionType {
    type: typeof SET_SELECTED_WALLET_ID;
    payload: number;
}

export type WalletActionTypes = SetSelectedWalletIdActionType;