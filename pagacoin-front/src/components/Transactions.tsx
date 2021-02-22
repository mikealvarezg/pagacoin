import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../redux';
import Title from "./dashboard/Title";

const Transactions = () => {
    const { transactions } = useSelector((state: AppState) => state.transactions);

    return (
        <>
            <Title>Transactions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Origin Wallet Id</TableCell>
                        <TableCell>Destination Wallet Id</TableCell>
                        <TableCell>Sale Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell>{transaction.id}</TableCell>
                            <TableCell>{transaction.originWalletId}</TableCell>
                            <TableCell>{transaction.destinationWalletId}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Transactions;
