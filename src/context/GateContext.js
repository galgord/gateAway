import createDataContext from './createDataContext';
import { navigate } from '../navigationRef'
import { Database, Auth } from '../firebase'

let userId;
Auth.onAuthStateChanged((user) => {
    if (user) {
        userId = user.uid
    }
})

const gateReducer = (state, action) => {
    switch (action.type) {
        case 'get_data':
            return action.payload
        default:
            return state;
    }
}
const getData = dispatch => () => {
    Database.ref(userId).on("value", function (snapshot) {
        dispatch({ type: 'get_data', payload: snapshot.val() })
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}

const sendData = dispatch => async (name, phone, location) => {
    const data = { name, location }
    await Database.ref(userId).child(phone).set(data);
}

export const { Provider, Context } = createDataContext(
    gateReducer,
    { sendData, getData },
    []
)
