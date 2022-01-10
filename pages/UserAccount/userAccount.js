$(document).ready(function() {
    let totalPoint = localStorage.getItem("totalPoint");
    totalPoint == null || totalPoint == undefined ? totalPoint = 0 : totalPoint = totalPoint
    console.log('totalPoint : ', totalPoint)
    $('#totalPoint').text(totalPoint);
})