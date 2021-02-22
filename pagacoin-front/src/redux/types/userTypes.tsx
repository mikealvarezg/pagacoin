import { User } from '../interfaces/User';
import { Wallet } from '../interfaces/Wallet';

export const GET_USERS = 'GET_USERS';
export const GET_WALLETS = 'GET_WALLETS';
export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';

export interface UserStateType {
	users: User[];
	selectedUserId: number;
}

export interface GetUsersActionPayload {
	id: number,
	name: string
}

interface GetUsersActionType {
	type: typeof GET_USERS;
	payload: GetUsersActionPayload[];
}

export interface GetWalletsActionPayload {
	wallets: Wallet[],
	id: number,
}

interface GetWalletsActionType {
	type: typeof GET_WALLETS;
	payload: GetWalletsActionPayload;
}

interface SetSelectedUserIdActionType {
	type: typeof SET_SELECTED_USER_ID;
	payload: number;
}

export type UserActionTypes = GetUsersActionType | GetWalletsActionType | SetSelectedUserIdActionType;