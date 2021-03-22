import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCiRxs7jEeuMBA4loLGZVMpSWgkHPuY7ZY",
    authDomain: "tesla-baeb2.firebaseapp.com",
    projectId: "tesla-baeb2",
    storageBucket: "tesla-baeb2.appspot.com",
    messagingSenderId: "750541396845",
    appId: "1:750541396845:web:2ea9f6a39d3aa102ca9864"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  export { auth }