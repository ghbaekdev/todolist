// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase produce ts that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyCkRCg0X8qfSXmE4ROLCi-7Yx7sS47p3Nw',
  authDomain: 'baeks-todo.firebaseapp.com',
  databaseURL: 'https://baeks-todo-default-rtdb.firebaseio.com',
  projectId: 'baeks-todo',
  storageBucket: 'baeks-todo.appspot.com',
  messagingSenderId: '792697309187',
  appId: '1:792697309187:web:bac5f98148b2b89edd2636',
  measurementId: 'G-5J7XN4WGD2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
