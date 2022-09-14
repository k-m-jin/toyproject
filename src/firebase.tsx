import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyDIwM56FuwKAKdPB2QKTrys0ROaDVvh-BA',
  authDomain: 'toyproject-f45c1.firebaseapp.com',
  projectId: 'toyproject-f45c1',
  storageBucket: 'toyproject-f45c1.appspot.com',
  messagingSenderId: '47706915417',
  appId: '1:47706915417:web:7429cef95464c7fadae748',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export { firebaseApp, auth };
