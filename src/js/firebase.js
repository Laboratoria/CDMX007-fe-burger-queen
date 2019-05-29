import firebase from 'firebase';
require("firebase/firestore");


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyARhkHoyfNinWxlA0DKHDduSsEj49iUCLM",
  authDomain: "burger-queen-project.firebaseapp.com",
  databaseURL: "https://burger-queen-project.firebaseio.com",
  projectId: "burger-queen-project",
  storageBucket: "burger-queen-project.appspot.com",
  messagingSenderId: "1093836600564",
  appId: "1:1093836600564:web:2b295a5960dffbb0"
};
// Initialize Firebase

// firebase.initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb,db};
