

   
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyCu7NEPJGbtJUHJGOEhH3Dz4Qhxh1u91ao",
authDomain: "nextjs-auth-9f143.firebaseapp.com",
projectId: "nextjs-auth-9f143",
storageBucket: "nextjs-auth-9f143.appspot.com",
messagingSenderId: "681092922100",
appId: "1:681092922100:web:588dbe44652f8104edbca1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()



// apiKey: "AIzaSyCu7NEPJGbtJUHJGOEhH3Dz4Qhxh1u91ao",
// authDomain: "nextjs-auth-9f143.firebaseapp.com",
// projectId: "nextjs-auth-9f143",
// storageBucket: "nextjs-auth-9f143.appspot.com",
// messagingSenderId: "681092922100",
// appId: "1:681092922100:web:588dbe44652f8104edbca1"








// import firebase from 'firebase/app';
// import "firebase/auth";
// import { initializeApp } from "firebase/app";

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIAN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth = app.auth()
// export default app