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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRrf = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRrf.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRrf.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message, 'error creating user');
    }
  }

  return userRrf;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
