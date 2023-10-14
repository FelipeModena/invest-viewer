// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setAuthData } from '../../actions/authActions';

const API_URL = 'https://example.com/api';

const authenticate = async (username, password) => {
    try {
        // const response = await axios.post(`${API_URL}/auth`, { username, password });
        // const { token, user } = response.data;
        // Store the token and user data in Redux
        // const dispatch = useDispatch();
        // dispatch(setAuthData(token, user));
        console.log('authenticate');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default authenticate;
