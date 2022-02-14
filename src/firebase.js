import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlWTWlIpbFnnuabWrWh7o3kmR1qyWA1gQ",
    authDomain: "tesla-site-29ef2.firebaseapp.com",
    projectId: "tesla-site-29ef2",
    storageBucket: "tesla-site-29ef2.appspot.com",
    messagingSenderId: "388762915833",
    appId: "1:388762915833:web:b75a954454a4c832f0a328"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth()

export { auth }