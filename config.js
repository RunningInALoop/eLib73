
  import firebase from 'firebase';
  require("@firebase/firestore");


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKL9CZP-UHq865Q-GzePN2fgYub0m0ODs",
    authDomain: "e-library-ceea3.firebaseapp.com",
    projectId: "e-library-ceea3",
    storageBucket: "e-library-ceea3.appspot.com",
    messagingSenderId: "248076691255",
    appId: "1:248076691255:web:196cb07f60fc891fdb9cb2"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //if (firebase.apps === undefined) { firebase.initializeApp( firebaseConfig ); }
  if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig)}
  export default firebase.firestore();