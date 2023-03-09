
function login() {
    username = document.getElementById("login_input").value;
    localStorage.setItem("username",username);
    console.log("username ="+ username);

    window.location = "kwitter_room.html";
}