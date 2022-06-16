// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDJB2dCS6Gfd_quPIUNTHxayJU6rNYUtg",
    authDomain: "fon-fon-c93.firebaseapp.com",
    databaseURL: "https://fon-fon-c93-default-rtdb.firebaseio.com",
    projectId: "fon-fon-c93",
    storageBucket: "fon-fon-c93.appspot.com",
    messagingSenderId: "640814212731",
    appId: "1:640814212731:web:c5f89dd03af8dde049e4de"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    userName = localStorage.getItem("userName");
  
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("roomName").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionar nome de sala"
    });
  
      localStorage.setItem("roomName", room_name);
      
      window.location = "kwitterPage.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         room_names = childKey;
         console.log("Nome da Sala - " + room_names);
        row = "<div class='roomName' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitterPage.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  