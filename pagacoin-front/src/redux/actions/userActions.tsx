import { User } from '../interfaces/User';
import { Wallet } from '../interfaces/Wallet';
import { GetUsersActionPayload, GET_USERS, GET_WALLETS, SET_SELECTED_USER_ID, UserActionTypes } from '../types/userTypes';

export const getUsersAction = (users: GetUsersActionPayload[]): UserActionTypes => {
    return {
        type: GET_USERS,
        payload: users,
    };
};

export const getWalletsAction = (wallets: Wallet[], id: number): UserActionTypes => {
    return {
        type: GET_WALLETS,
        payload: { wallets, id },
    };
};

export const setSelectedUserIdAction = (id: number): UserActionTypes => {
    return {
        type: SET_SELECTED_USER_ID,
        payload: id,
    };
};
