import './Login.css';
import { useContext, useEffect, useState } from 'react';
import { User } from '../../models/User';
import UserService from '../../services/userService';
import { ROOT_ROUTE } from '../../routes/routes';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../store/MainContext';
import { MainReducerActions } from '../../actions/MainReducerAction';

function Login() {
  //   const [currentUser, setUser] = useState<User | undefined>(undefined);
  const [users, setUsers] = useState<Array<User>>([]);
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handleClick = (user: User) => {
    dispatch({ type: MainReducerActions.EditName, payload: user.name });
    dispatch({ type: MainReducerActions.Authenticate, payload: '' });
    navigate(ROOT_ROUTE);
  };

  useEffect(() => {
    const loadUsers = async () => {
      setUsers(await UserService.getUsers());
    };

    loadUsers();
  });

  return (
    <div className="mainDiv">
      <h1>Who's watching?</h1>
      <div className="items">
        {users !== null &&
          users.length > 0 &&
          users.map((user, key) => (
            <div key={key}>
              <img
                className="img"
                onClick={() => {
                  handleClick(user);
                }}
                src={user.img_path}
                alt="img"
              ></img>
              <div>{user.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Login;
