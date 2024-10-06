// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKRFV4wwgpi3dLZP2lWNqJiTXB4feWg2k",
  authDomain: "electronic-admin-system.firebaseapp.com",
  projectId: "electronic-admin-system",
  storageBucket: "electronic-admin-system.appspot.com",
  messagingSenderId: "1038054840271",
  appId: "1:1038054840271:web:f82df7e000f6cc875724ba",
  measurementId: "G-7X4D4K7LD4",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(app);

export default app;
