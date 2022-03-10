import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB7fRQzG1PYGuRNv_KPGQWW7y0cqN-pDCQ",
    authDomain: "fir-auth-ecfb7.firebaseapp.com",
    projectId: "fir-auth-ecfb7",
    storageBucket: "fir-auth-ecfb7.appspot.com",
    messagingSenderId: "755428973445",
    appId: "1:755428973445:web:dd4745c270d2181c2dc2ec"
};

const db = firebase.initializeApp(config);

export default db;