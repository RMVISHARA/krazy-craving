function Login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "user@gmail.com" && password == "123") {
        localStorage.setItem("totalPoint", 30)
            //console.log(localStorage.getItem("totalPoint"))
        window.location.href = "../HomeUser"
    } else if (email == "vendor@gmail.com" && password == "456") {
        window.location.href = "../VendorOrders/newOrder.html"
    } else {
        alert("Invalid username and password");
    }
}