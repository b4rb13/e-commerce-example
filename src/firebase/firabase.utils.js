import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCMLjLnVlaFuhzCTbFIxtgq7chCs48OwjA',
  authDomain: 'b4rb13-online-store-app.firebaseapp.com',
  databaseURL: 'https://b4rb13-online-store-app.firebaseio.com',
  projectId: 'b4rb13-online-store-app',
  storageBucket: 'b4rb13-online-store-app.appspot.com',
  messagingSenderId: '306730115839',
  appId: '1:306730115839:web:a241ba940ceedffe2d62ca',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
