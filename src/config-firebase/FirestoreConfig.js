import fireBase from './FireBase';
import 'firebase/firestore'


let db = fireBase.firestore();
db.settings({
  timestampsInSnapshots: true
});


export default db;