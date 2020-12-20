import createDataContext from './createDataContext';
import { Auth } from '../firebase'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'errorCleanup':
            return { errorMessage: '' }
        case 'error':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};

const isUserSignedIn = (dispatch) => async () => {
    Auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch({ type: 'errorCleanup' });
            navigate('home');
        } else {
            navigate('login');
        }
    });
};

const signIn = dispatch => async ({ email, password }) => {
    try {
        await Auth.signInWithEmailAndPassword(email, password)
        dispatch({ type: 'errorCleanup' })
        navigate('home')
    } catch (err) {
        dispatch({
            type: 'error',
            payload: err.message
        });
    }
};

const register = dispatch => async ({ email, password }) => {
    try {
        await Auth.createUserWithEmailAndPassword(email, password)
        dispatch({ type: 'errorCleanup' })
        navigate('home')
    } catch (err) {
        dispatch({
            type: 'error',
            payload: err.message
        });
    }
};

const signoutUser = dispatch => async () => {
    await Auth.signOut();
    dispatch({ type: 'errorCleanup' })
    navigate('login')
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { register, isUserSignedIn, signoutUser, signIn },
    { errorMessage: '' }
)