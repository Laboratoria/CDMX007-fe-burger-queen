import fireBase from './FireBase';
import 'firebase/firestore'



// firebase.initializeApp({
//     apiKey: "AIzaSyBfS39Yz7rXKWlu8YzS56jy8P5zZLnQol0",
//     authDomain: "burguer-queen-2efea.firebaseapp.com",
//     databaseURL: "https://burguer-queen-2efea.firebaseio.com",
// })


let db = fireBase.firestore();
db.settings({timestampsInSnapshots:true});


export default db;