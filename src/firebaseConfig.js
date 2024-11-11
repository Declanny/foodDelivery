import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCfHGqfAmtHmRe7qEVA7FNe0-LrdUrGhA',
  authDomain: 'food-delivery-48c4c.firebaseapp.com',
  projectId: 'food-delivery-48c4c"',
  storageBucket: 'food-delivery-48c4c.appspot.com',
  messagingSenderId: '87668773028',
  appId: '1:87668773028:web:0ecb732db69b8b2ec3d631'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
