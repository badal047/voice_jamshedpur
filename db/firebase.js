const  firebase = require("firebase");

var firebaseConfig = {
  apiKey: "",

  authDomain: "",

  projectId: "",

  storageBucket: "",

  messagingSenderId: "",

  appId: "",

  measurementId: "",
};

// Initialize Firebase

module.exports = firebase.initializeApp(firebaseConfig);
