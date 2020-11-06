import createDataContext from './createDataContext';
import { Auth } from '../firebase'
import { navigate } from '../navigationRef'


const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { errorMessage: '' }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signout':
            return { errorMessage: '' }
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clear_error_message" })
}

const isUserSignedIn = (dispatch) => async () => {
    Auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch({ type: 'signin' });
            navigate('home');
        } else {
            navigate('login');
        }
    });
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await Auth.createUserWithEmailAndPassword(email, password)
        dispatch({ type: 'signin' })
        navigate('home')
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: err.message
        });
    }
};

const signoutUser = dispatch => async () => {
    await Auth.signOut();
    dispatch({ type: 'signout' })
    navigate('login')
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, clearErrorMessage, isUserSignedIn, signoutUser },
    { errorMessage: '' }
)