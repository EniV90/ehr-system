import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC46VedRey_I8NVewr2IbwHoKFoGgT0MYo",
  authDomain: "ehr-16773.firebaseapp.com",
  projectId: "ehr-16773",
  storageBucket: "ehr-16773.appspot.com",
  messagingSenderId: "968131104970",
  appId: "1:968131104970:web:46076230a89ba0a5eba433",
  measurementId: "G-42HTJR3SH4"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app;
