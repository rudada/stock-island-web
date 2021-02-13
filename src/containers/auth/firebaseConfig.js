import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7AV8kY_d615xk-b_fWXfFLz-bSCs48dE",
    authDomain: "stockisland-303002.firebaseapp.com",
    projectId: "stockisland-303002",
    storageBucket: "stockisland-303002.appspot.com",
    messagingSenderId: "155500131224",
    appId: "1:155500131224:web:0d8a27fb451198bc3b71ed",
    measurementId: "G-PPQBL080NK"
  };


  export default firebaseConfig;

  
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();