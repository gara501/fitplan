import firebase from 'firebase'
var config = { 
  apiKey: "AIzaSyDQtbvyXWRhBwIUykxVR4sNiXGElbHeWJA",
  authDomain: "soul4fit-data.firebaseapp.com",
  databaseURL: "https://soul4fit-data.firebaseio.com",
  projectId: "soul4fit-data",
  storageBucket: "soul4fit-data.appspot.com",
  messagingSenderId: "357104631711"
};
var fire = firebase.initializeApp(config);
export default fire;