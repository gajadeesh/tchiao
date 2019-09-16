
import Firebase from "firebase/app";
import "firebase/database"
import "firebase/storage"
import "firebase/firestore"
import "firebase/auth"
//  import FireStore from "firebase/firebase-firestore"
//  Initialize Firebase
// console.log(process.env.VUE_APP_API_KEY)
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_PRODUCT_ID + ".firebaseapp.com",
  databaseURL: "https://" + process.env.VUE_APP_PRODUCT_ID + ".firebaseio.com",
  projectId: process.env.VUE_APP_PRODUCT_ID,
  storageBucket: process.env.VUE_APP_PRODUCT_ID + ".appspot.com",
  messagingSenderId: "870296522376"
};
const FirebaseApp = Firebase.initializeApp(config);
// const FirebaseDatabase = FirebaseApp.database();
// const Firestorage = FirebaseApp.storage();
// const Firestore = FirebaseApp.firestore();
const FireAuth = FirebaseApp.auth();
const settings = {timestampsInSnapshots: true};
//   firestore.settings(settings);
// const settings = Firestore.settings({
//   timestampsInSnapshots: true
// });
export const firebaseApp = FirebaseApp;
export const firebaseAuth = FireAuth;
// export const setting = settings;