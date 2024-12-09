import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcAOSO6jMyF7-6M_sPpJpg78cD2JdOn7Y",
  authDomain: "japanese-vocabulary-learning.firebaseapp.com",
  projectId: "japanese-vocabulary-learning",
  storageBucket: "japanese-vocabulary-learning.firebasestorage.app",
  messagingSenderId: "648366080267",
  appId: "1:648366080267:web:f37833822cd905a687620e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;