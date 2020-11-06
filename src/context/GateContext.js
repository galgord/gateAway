import createDataContext from './createDataContext';
import { navigate } from '../navigationRef'
import { Database, Auth } from '../firebase'

const gateReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const sendData = dispatch => async (name, phone, location) => {
    const userId = Auth.currentUser.uid;
    const data = { name, phone, location }
    await Database.ref(`users/${userId}`).child('gates').child(phone).set(data);
    navigate('home')
}

export const { Provider, Context } = createDataContext(
    gateReducer,
    { sendData },
    {}
)
