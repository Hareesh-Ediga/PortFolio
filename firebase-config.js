import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Add this import

const firebaseConfig = {
  apiKey: "AIzaSyA6uTBojMPUWxB7FmoTMzQJ7LHjyv9krrA",
  authDomain: "my-portfolio-4eaa3.firebaseapp.com",
  projectId: "my-portfolio-4eaa3",
  storageBucket: "my-portfolio-4eaa3.firebasestorage.app",
  messagingSenderId: "484026413719",
  appId: "1:484026413719:web:2b80acefd8bad42b296fd2",
  measurementId: "G-XDFHR5B5KT",
  databaseURL: "https://my-portfolio-4eaa3-default-rtdb.firebaseio.com/" // Add this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize Realtime Database

export { database }; // Export the database reference