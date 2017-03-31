import * as firebase from 'firebase';

class Firebase {
  static initialise() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDU_f1yxtqNzbKrb-DksDYicBw6mS7pP4g',
      authDomain: 'fitbook-b8f06.firebaseapp.com',
      databaseURL: 'https://fitbook-b8f06.firebaseio.com',
      storageBucket: 'fitbook-b8f06.appspot.com',
    });
  }

}

module.exports = Firebase;
