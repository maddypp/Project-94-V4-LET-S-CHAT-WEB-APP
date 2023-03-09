var firebaseConfig = {
    apiKey: "AIzaSyAMYuYZ_0Av6-IjEFMbwh4LlwlFNnrVXFQ",
    authDomain: "let-s-chat-web-app-8ece7.firebaseapp.com",
    projectId: "let-s-chat-web-app-8ece7",
    storageBucket: "let-s-chat-web-app-8ece7.appspot.com",
    messagingSenderId: "835456606609",
    appId: "1:835456606609:web:106c3bbf3f0cafd1307a30"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username");
  document.getElementById("welcome_h1").innerHTML = "welcome"+ username + "!";

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    console.log("data errased");
    window.location = "index.html";
  }

  function addroom() {
    roomname = document.getElementById("search_input").value;
    firebase.database().ref("/").child(roomname).update({
      purpose: "roomname"
    });
    localStorage.setItem("roomname",roomname);
    window.location = "kwitter_page.html";

  }

 

