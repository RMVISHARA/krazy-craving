function redeemPoints() {
    var val = document.getElementById("points").value
    var currentPoints = localStorage.getItem("totalPoint")
    if (val) {
        if (Number(currentPoints) >= Number(val) & Number(val) != 0) {
            var newPoints = Number(currentPoints) - Number(val)
            localStorage.setItem("totalPoint", newPoints)
            localStorage.setItem("points", val)
            $("#successMessegePopup").modal("show");
            recalculateCart();
        } else if (Number(val) == 0) {
            var message = ("Please enter a valid amount of points");
            $('#errormessage').text(message);
            document.getElementById("commonModal").src = "../../Assets/img/icons/error.png"
            $("#errorMessegePopup").modal("show");
        } else {
            var message = (`Sorry, Insufficient Krazy point balance!!
            <br> You only have ${currentPoints} Krazy Points left.`);
            $('#errormessage').html(message);
            document.getElementById("commonModal").src = "../../Assets/img/icons/error.png"
            $("#errorMessegePopup").modal("show");
        }
    } else {
        var message = ("Please enter a valid amount of points")
        $('#errormessage').text(message);
        document.getElementById("commonModal").src = "../../Assets/img/icons/error.png"
        $("#errorMessegePopup").modal("show");
    }
    document.getElementById("points").value = ""
}