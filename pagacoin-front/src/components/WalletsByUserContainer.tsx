import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux';
import { getWalletsAction } from '../redux/actions/userActions';
import { pagacoinAPI } from '../utils/axios.pagacoinAPI';
import WalletsByUser from './WalletsByUser';

const WalletsByUserContainer = () => {
    const dispatch = useDispatch();

	const { selectedUserId } = useSelector((state: AppState) => state.selectedUserId);

    useEffect(() => {
        pagacoinAPI.get('/users/' + selectedUserId + '/wallets')
            .then((response) => {
                dispatch(getWalletsAction(response.data, selectedUserId));
            });
    }, [dispatch]);

    return <WalletsByUser />;
};

export default WalletsByUserContainer;
