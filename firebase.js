import * as firebase from "firebase";
import firestore from "firebase/firestore";

//const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDp7x5nE6HGN8LuWJ90u-CZiqxcpd5xEOU",
  authDomain: "fiinfoods.firebaseapp.com",
  databaseURL: "https://fiinfoods.firebaseio.com",
  projectId: "fiinfoods",
  storageBucket: "fiinfoods.appspot.com",
  messagingSenderId: "486141072328"
};
firebase.initializeApp(config);

//firebase.firestore().settings(settings);

export default firebase;
