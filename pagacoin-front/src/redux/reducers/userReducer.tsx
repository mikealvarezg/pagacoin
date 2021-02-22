import { Reducer } from 'redux';
import { GET_USERS, GET_WALLETS, SET_SELECTED_USER_ID, UserActionTypes, UserStateType } from '../types/userTypes';

const initialStateUser: UserStateType = {
    users: [],
    selectedUserId: 0,
};

export const userReducer: Reducer<UserStateType, UserActionTypes> = (
    state = initialStateUser,
    action
): UserStateType => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload.map(user => {
                    return { id: user.id, name: user.name, showWallets: false };
                })
            };
        case GET_WALLETS:
            const getWallets = [...state.users];

            getWallets.forEach(user => {
                if (user.id === action.payload.id) {
                    user.wallets = action.payload.wallets;
                }
            })

            return {
                ...state,
                users: getWallets
            };
        case SET_SELECTED_USER_ID:
            return {
                ...state,
                selectedUserId: action.payload
            };
        default:
            return state;
    }
};