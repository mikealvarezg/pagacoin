import { Reducer } from 'react';
import { DialogActionTypes, OpenCloseDialogStateType, OPEN_CLOSE_DIALOG } from '../types/dialogTypes';

const initialStateOpenCloseDialog: OpenCloseDialogStateType = {
    showDialog: false,
};

export const openCloseDialogReducer: Reducer<OpenCloseDialogStateType, DialogActionTypes> = (
    state = initialStateOpenCloseDialog,
    action
): OpenCloseDialogStateType => {
    switch (action.type) {
        case OPEN_CLOSE_DIALOG:
            return {
                ...state,
                showDialog: action.payload
            };
        default:
            return state;
    }
};