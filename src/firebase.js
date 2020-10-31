import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3UOfc4nJOsvPxZPu0fG6rN3CABqJGGA8",
    authDomain: "gateaway-b1128.firebaseapp.com",
    databaseURL: "https://gateaway-b1128.firebaseio.com",
    projectId: "gateaway-b1128",
    storageBucket: "gateaway-b1128.appspot.com",
    messagingSenderId: "1002361334590",
    appId: "1:1002361334590:web:bc9a0d684685a1f6b15a6f",
    measurementId: "G-3N3CXHJSRP"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const Auth = firebaseapp.auth();

export { Auth };