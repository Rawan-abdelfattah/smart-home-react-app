// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
function StartFirebase(){
  const firebaseConfig = {
  apiKey: "AIzaSyAwqifwV1QOhkjeIli6rj_as-bZSbsekqg",
  authDomain: "final-project-a1b57.firebaseapp.com",
  databaseURL: "https://final-project-a1b57-default-rtdb.firebaseio.com",
  projectId: "final-project-a1b57",
  storageBucket: "final-project-a1b57.appspot.com",
  messagingSenderId: "966613355435",
  appId: "1:966613355435:web:9d3fa742df466a7462e0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    return getDatabase(app)

}   
export default StartFirebase;

const firebaseConfig = {
  apiKey: "AIzaSyAwqifwV1QOhkjeIli6rj_as-bZSbsekqg",
  authDomain: "final-project-a1b57.firebaseapp.com",
  databaseURL: "https://final-project-a1b57-default-rtdb.firebaseio.com",
  projectId: "final-project-a1b57",
  storageBucket: "final-project-a1b57.appspot.com",
  messagingSenderId: "966613355435",
  appId: "1:966613355435:web:9d3fa742df466a7462e0ee"
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

