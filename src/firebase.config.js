import {getApp, getApps, initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCYYY-wLbTAyZrup955BVsb0vh4CPaRn9M",
    authDomain: "restaurantapp-928ac.firebaseapp.com",
    databaseURL: "https://restaurantapp-928ac-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-928ac",
    storageBucket: "restaurantapp-928ac.appspot.com",
    messagingSenderId: "19008417070",
    appId: "1:19008417070:web:856738d28eebccaf9edebf"
  };  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage}
