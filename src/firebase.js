import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDfznz-Cv2Yj3KMMMuv16FwdeR4hkbcNoQ',
  authDomain: 'think-piece-4f51d.firebaseapp.com',
  projectId: 'think-piece-4f51d',
  storageBucket: 'think-piece-4f51d.appspot.com',
  messagingSenderId: '30411759106',
  appId: '1:30411759106:web:7a4a103ea87af1c459511b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, addtionInfo) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...addtionInfo,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection('users').doc(uid).get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error('Erorr fetching user', error.message);
  }
};

export default firebase;
