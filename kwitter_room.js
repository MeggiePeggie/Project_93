//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR8svh6Jzfcadj03RVliAxvKsrNSoY-yM",
  authDomain: "kwitterapp-450ca.firebaseapp.com",
  databaseURL: "https://kwitterapp-450ca-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-450ca",
  storageBucket: "kwitterapp-450ca.appspot.com",
  messagingSenderId: "787277834611",
  appId: "1:787277834611:web:c58a904f3d7662f4fa7d06",
  measurementId: "G-WR5PSXTHQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
