import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../redux';
import { setSelectedUserIdAction } from '../redux/actions/userActions';

const Users = () => {
	const { users } = useSelector((state: AppState) => state.users);
	const dispatch = useDispatch();

	return (
		<>
			Users
			{users.map((user, index) =>
				<Button component={Link} to='/wallets-by-user'
					onClick={() => dispatch(setSelectedUserIdAction(user.id))} key={index}>
					{user.name}
				</Button>)}
		</>
	);
};

export default Users;