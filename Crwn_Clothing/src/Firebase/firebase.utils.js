import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBU0_rp0C32aZrywjCfwyny956TQGKyRbs',
  authDomain: 'new-crwn-db-e2b27.firebaseapp.com',
  projectId: 'new-crwn-db-e2b27',
  storageBucket: 'new-crwn-db-e2b27.appspot.com',
  messagingSenderId: '187500477575',
  appId: '1:187500477575:web:66c41239d3b0a3af6bcc22',
};

initializeApp(config);

const app = initializeApp(config);
const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.seCustomParameters = { params: 'select_account' };

export const signInWithGoogle = () => signInWithPopup(auth, provider);
