import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCvMtiEaUZWfDuaBozNsgBrPf0VJgDbpAY",
    authDomain: "password-manager-78064.firebaseapp.com",
    databaseURL: "https://password-manager-78064-default-rtdb.firebaseio.com",
    projectId: "password-manager-78064",
    storageBucket: "password-manager-78064.appspot.com",
    messagingSenderId: "684935002113",
    appId: "1:684935002113:web:17e7534cbf5e353b556800"
};
firebase.initializeApp(config);
export default firebase;