import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDU_f1yxtqNzbKrb-DksDYicBw6mS7pP4g",
  authDomain: "fitbook-b8f06.firebaseapp.com",
  databaseURL: "https://fitbook-b8f06.firebaseio.com",
  storageBucket: "fitbook-b8f06.appspot.com",
};

var FbApp = firebase.initializeApp(firebaseConfig);
module.exports = FbApp.database(); //this doesnt have to be database only