import { Wallet } from './Wallet';

export interface User {
    id: number;
    name: string;
    wallets?: Wallet[];
}