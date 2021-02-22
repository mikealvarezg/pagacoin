import { DialogActionTypes, OPEN_CLOSE_DIALOG } from '../types/dialogTypes';

export const openCloseDialogAction = (showDialog: boolean): DialogActionTypes => {
    return {
        type: OPEN_CLOSE_DIALOG,
        payload: showDialog,
    };
};