
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB2EIpuM1btRPB90AqtWj9Fdhyks5f8p-c",
      authDomain: "class-67466.firebaseapp.com",
      databaseURL: "https://class-67466-default-rtdb.firebaseio.com",
      projectId: "class-67466",
      storageBucket: "class-67466.appspot.com",
      messagingSenderId: "694863079648",
      appId: "1:694863079648:web:bc41d67baaf100b39cc885"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name- "+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding roomName"

      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      
}
function redirectToRoomName(name)
{console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";


}



