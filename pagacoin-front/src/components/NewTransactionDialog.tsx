import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../redux';
import { openCloseDialogAction } from '../redux/actions/dialogActions';
import { setDestinationWalletIdAction, setAmountAction } from '../redux/actions/transactionActions';
import { pagacoinAPI } from '../utils/axios.pagacoinAPI';

const NewTransactionDialog = () => {
    const { showDialog } = useSelector((state: AppState) => state.showDialog);
    const { selectedWalletId } = useSelector((state: AppState) => state.selectedWalletId);
    const { destinationWalletId } = useSelector((state: AppState) => state.destinationWalletId);
    const { amount } = useSelector((state: AppState) => state.amount);

    const dispatch = useDispatch();

    return (
        <Dialog open={showDialog} onClose={() => dispatch(openCloseDialogAction(false))} aria-labelledby='form-dialog-title' fullWidth
            maxWidth={'sm'}>
            <DialogTitle id='form-dialog-title'>New Transaction</DialogTitle>
            <DialogContent>
                Select the destination wallet and the amount of the transfer
                <TextField
                    label='Destination Wallet Id'
                    onChange={(event) => dispatch(setDestinationWalletIdAction(+event.target.value))}
                />
                <TextField
                    label='Amount'
                    onChange={(event) => dispatch(setAmountAction(+event.target.value))}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(openCloseDialogAction(false))} color='primary'>
                    Cancel
          		</Button>
                <Button component={Link} to='/transactions' 
                    onClick={() => {
                        pagacoinAPI.post('/transactions', { originWalletId: selectedWalletId, destinationWalletId, amount });
                        dispatch(openCloseDialogAction(false));
                    }}
                    color='primary'>
                    Create
          		</Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewTransactionDialog;