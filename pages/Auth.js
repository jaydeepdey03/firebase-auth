import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import db from '../firebaseapp/firebaseConfig';


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
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => true,
    }
};






const Auth = () => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);


    if (!isSignedIn) {
        return (
            <div className='flex justify-center items-center flex-col mt-24'>
                <div className='m-10 bg-gray-100 flex flex-col justify-center items-center h-80 w-80'>
                    <h1 className='text-3xl font-bold text-center'>My App</h1>
                    <p className='text-xl text-center'>Please sign-in:</p>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            </div>
        );
    }

    const user = firebase.auth().currentUser;
    console.log(user)

    return (
        <div className='flex justify-center items-center mt-24'>
            <div className='flex flex-col justify-center items-center bg-gray-300'>
                <div className='p-6 pb-0'>
                    <img className='rounded-full' src={isSignedIn ? firebase.auth().currentUser.photoURL : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`} height={100} width={100} />
                </div>
                <h1 className='font-bold text-2xl mt-10'>Logged Using: <span className='text-red-700'>{user.providerData[0].providerId}</span></h1>
                <div className='p-12 pb-5 text-center'>
                    <p className='font-bold'>Id: <span className='text-blue-700'>{user.uid}</span></p>
                    <p className='font-bold'>Name: <span className='text-blue-700'>{user.displayName}</span></p>
                    <p className='font-bold'>Email: <span className='text-blue-700'>{user.email}</span></p>
                    <p className='font-bold'>Is Email Verified: <span className='text-green-700'>{user.emailVerified ? "Yes" : "No"}</span></p>
                    <p className='font-bold'>Phone Number: <span className='text-green-700'>{user.phoneNumber == null ? "No" : "Yes"}</span></p>
                    <p className='font-bold'>Is the user Anonymous: <span className='text-green-700'>{!user.isAnonymous ? "No" : "Yes"}</span></p>
                </div>
                <div className='p-5'>
                    <button onClick={() => firebase.auth().signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Auth
