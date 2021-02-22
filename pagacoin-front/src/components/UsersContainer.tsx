import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsersAction } from '../redux/actions/userActions';
import { pagacoinAPI } from '../utils/axios.pagacoinAPI';
import Users from './Users';

const UsersContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        pagacoinAPI.get('/users')
            .then((response) => {
                dispatch(getUsersAction(response.data));
            });
    }, [dispatch]);

    return <Users />;
};

export default UsersContainer;
