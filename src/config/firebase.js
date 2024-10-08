// Import the functions you need from the SDKs you need
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTcjkTsu5CmM9tFn-Lvt3hovMAXdlkXNQ",
  authDomain: "movie-management-d4a96.firebaseapp.com",
  projectId: "movie-management-d4a96",
  storageBucket: "movie-management-d4a96.appspot.com",
  messagingSenderId: "586945779344",
  appId: "1:586945779344:web:b9ceb2f20e141e439cea15",
  measurementId: "G-8R2Y1J4029",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
