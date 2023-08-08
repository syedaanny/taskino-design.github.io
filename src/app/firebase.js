import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsgXcNPs7CwbqYV1X1mfQEXYDecdgisZQ",
  authDomain: "taskino-b2832.firebaseapp.com",
  projectId: "taskino-b2832",
  storageBucket: "taskino-b2832.appspot.com",
  messagingSenderId: "627034765330",
  appId: "1:627034765330:web:e12e10b028c4564baa00cb",
  measurementId: "G-6K3GSEZ0W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
