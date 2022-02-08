const firebaseConfig = {
    apiKey: "AIzaSyDqQLk7byAFSUGIhbtYp4DczoNUy_OuXUM",
    authDomain: "kwitter-3d130.firebaseapp.com",
    databaseURL: "https://kwitter-3d130-default-rtdb.firebaseio.com",
    projectId: "kwitter-3d130",
    storageBucket: "kwitter-3d130.appspot.com",
    messagingSenderId: "641037748203",
    appId: "1:641037748203:web:20132eba7a9b5ade57bbae"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}