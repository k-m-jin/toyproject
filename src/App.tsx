import React from 'react';
import Counter from './features/counter/Counter';
import { firebaseApp, auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './App.css';

function App() {
  const googleLoginFuc = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user);
        // body :{
        //   email : user
        // }
        // axios.post("endpoint", body)
      })
      .catch((error) => {
        console.warn(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <main className="App">
      <Counter />
      <button className="bg-sky-500" onClick={googleLoginFuc}>
        구글 로그인
      </button>
    </main>
  );
}

export default App;
