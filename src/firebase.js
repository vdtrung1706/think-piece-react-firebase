import firebase from 'firebase/app';
import 'firebase/firestore';

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

export default firebase;