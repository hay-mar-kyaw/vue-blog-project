
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDwvYEDc-3yGo0is4uQeaC5lV49LRqkrU8",
    authDomain: "vue-blog-system-ddaa0.firebaseapp.com",
    projectId: "vue-blog-system-ddaa0",
    storageBucket: "vue-blog-system-ddaa0.appspot.com",
    messagingSenderId: "1035826340672",
    appId: "1:1035826340672:web:7653a15396f3d917c850a5"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //database setup

  let db = firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp
  export {db,timestamp};