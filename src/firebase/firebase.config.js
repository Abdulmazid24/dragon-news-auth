// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvSpaTuBuYBwPkW8gWCw5e-xyKLPmAVNo',
  authDomain: 'react-dragon-news-auth-4a416.firebaseapp.com',
  projectId: 'react-dragon-news-auth-4a416',
  storageBucket: 'react-dragon-news-auth-4a416.firebasestorage.app',
  messagingSenderId: '542179472566',
  appId: '1:542179472566:web:be1b4133f7b7854ba1a217',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
