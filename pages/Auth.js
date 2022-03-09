import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
};

const Auth = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className="text-3xl font-bold">My App</h1>
            <p className='text-gray-500 text-xl'>Please sign-in:</p>
            <div className='h-80 w-80 bg-gray-50 flex flex-col justify-center items-center'>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        </div>
    )
}

export default Auth
