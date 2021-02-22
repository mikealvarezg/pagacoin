export interface Transaction {
    id: number;
    originWalletId: number;
    destinationWalletId: number;
    amount: number;
}