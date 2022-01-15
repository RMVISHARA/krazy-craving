function getRating(val)
{
    let stars = document.querySelectorAll('.star');
    stars.forEach((star,index) => {
        (index+1) <= val ? star.className = 'star fa fa-star checked fa-xs' : star.className = 'star fa fa-star-o fa-xs';
    });
};

function submitFeedback()
{
    var checkedCount = 0;
    var suggestion = document.getElementById("userInput").value;

    let stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        var classList = star.className.split(' ');
        classList.includes('checked') ? checkedCount++ : "";
    });

    if(checkedCount == 0){
        alert("Please provide a rating !!");
        return
    }else if( suggestion == ""){
        alert("Please provide a feedback suggestion !!");
        return
    };

    $("#feedbackPopup").popup("open");

    document.getElementById("userInput").value = "";
    let newStars = document.querySelectorAll('.star');
    newStars.forEach(star => {
        star.className = 'star fa fa-star-o fa-xs';
    });
}