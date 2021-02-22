import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux';
import { openCloseDialogAction } from '../redux/actions/dialogActions';
import { getWalletsAction, setSelectedUserIdAction } from '../redux/actions/userActions';
import { setSelectedWalletIdAction } from '../redux/actions/walletActions';
import { pagacoinAPI } from '../utils/axios.pagacoinAPI';
import Title from './dashboard/Title';
import NewTransactionDialog from './NewTransactionDialog';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	pos: {
		marginBottom: 12,
	},
});

const WalletsByUser = () => {
	const classes = useStyles();

	const { users } = useSelector((state: AppState) => state.users);
	const { selectedUserId } = useSelector((state: AppState) => state.selectedUserId);

	const dispatch = useDispatch();

	const user = users.find(user => user.id === selectedUserId) || users[0];

	return (
		<>
			<Title>Users</Title>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant='h5' component='h2' onClick={() => dispatch(setSelectedUserIdAction(user.id))}>
						{user.name}
					</Typography>
					{user.wallets && <Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
					>
						{user.wallets.map((wallet, index) => (
							<Card className={classes.root} key={index}>
								<CardContent>
									<Typography className={classes.pos}>Wallet {wallet.id}</Typography>
									<Typography variant='body2' component='p'>
										{wallet.balance}
									</Typography>
								</CardContent>
								<CardActions>
									<Button variant='contained' color='primary' onClick={() => {
										dispatch(openCloseDialogAction(true));
										dispatch(setSelectedWalletIdAction(wallet.id));
										}}>New Transaction</Button>
									<NewTransactionDialog />
								</CardActions>
							</Card>
						))}
					</Grid>}
				</CardContent>
				<CardActions>
					{!user.wallets && <Button variant='contained' color='primary'
						onClick={() => pagacoinAPI.get('/users/' + user.id + '/wallets')
							.then(response => dispatch(getWalletsAction(response.data, user.id)))}>
						View {user.name} Wallets
				</Button>}
				</CardActions>
			</Card>
		</>
	);
};

export default WalletsByUser;
