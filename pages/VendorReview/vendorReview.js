$(document).ready(function() {
    let message = ''
    let commentList = localStorage.getItem("commentList");
    commentList = (commentList) ? JSON.parse(commentList) : []
    console.log(commentList)

    commentList.map(x => {
        message = x.comment
    })


    message == null || message == undefined ? message = 'The food quality and taste was beyond expectations.' :
        console.log('review is : ', message)
    $('#message').text(message);
    $('.message').val(message);
})
$(document).ready(function() {
    let customerName = localStorage.getItem("customerName");
    customerName == null || customerName == undefined ? customerName = 'JOHN DOE' :
        console.log('review is : ', customerName)
    $('#customerName').text(customerName);
})