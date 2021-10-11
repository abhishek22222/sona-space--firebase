import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBn09KMkSB4O4DqnaMC9VQV8oDXdI6X24Q",
  authDomain: "sonaspace-4aa9b.firebaseapp.com",
  projectId: "sonaspace-4aa9b",
  storageBucket: "sonaspace-4aa9b.appspot.com",
  messagingSenderId: "146673368189",
  appId: "1:146673368189:web:aef5bdf118ad6ccf728514",
  measurementId: "G-VPYVWQ6PT0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
