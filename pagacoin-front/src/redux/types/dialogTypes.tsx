export const OPEN_CLOSE_DIALOG = 'OPEN_CLOSE_DIALOG';

export interface OpenCloseDialogStateType {
  showDialog: boolean;
}

interface OpenCloseDialogActionType {
  type: typeof OPEN_CLOSE_DIALOG;
  payload: boolean;
}

export type DialogActionTypes = OpenCloseDialogActionType;