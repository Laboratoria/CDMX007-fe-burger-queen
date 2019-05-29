import firebase from 'firebase';
import  'firebase/firestore';

 
  var firebaseConfig = {
    apiKey: "AIzaSyBfS39Yz7rXKWlu8YzS56jy8P5zZLnQol0",
    authDomain: "burguer-queen-2efea.firebaseapp.com",
    databaseURL: "https://burguer-queen-2efea.firebaseio.com",
    projectId: "burguer-queen-2efea",
    storageBucket: "burguer-queen-2efea.appspot.com",
    messagingSenderId: "205459409174",
    appId: "1:205459409174:web:7000243781684718"
  };

  const fireBase = firebase.initializeApp(firebaseConfig);
  

 


  export default fireBase;