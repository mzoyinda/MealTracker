import axios from 'axios';
import { setLoading, setError, userLogin, userLogout } from '../slices/user';

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('https://meal-tracker.onrender.com/auth/login', { email, password }, config);
    dispatch(userLogin(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
    window.location.reload(false);

  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured. Please try again later.'
      )
    );
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch(userLogout());
};

