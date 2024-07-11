import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
export const FirebaseConfig = {
  apiKey: "AIzaSyD8VfwIhlTsq_X_8UcvNErATxJ02NUJASk",
  authDomain: "domo-ut-64c12.firebaseapp.com",
  projectId: "domo-ut-64c12",
  storageBucket: "domo-ut-64c12.appspot.com",
  messagingSenderId: "596478965431",
  appId: "1:596478965431:web:f596b70e5b1db461d9ff32"
};

const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default { app, bd };