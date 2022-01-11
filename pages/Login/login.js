function Login() {
    var invalidLogins = true;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var configs = [["viduthishara@gmail.com","123"],["udaranayana.111@gmail.com","123"],["user@gmail.com","123"]];
    configs.forEach( e => {
        if (email == e[0] && password == e[1]) {
            localStorage.setItem("totalPoint", 30)
            //console.log(localStorage.getItem("totalPoint"))
            invalidLogins = false;
            window.location.href = "../HomeUser"
        }
    });

    if(invalidLogins){
        alert("Invalid username and password");
    }
    
}