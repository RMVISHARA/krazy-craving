    var bussiness;

    //initial setup
    document.addEventListener('DOMContentLoaded', function () {
        var selected = JSON.parse(localStorage.getItem("commentingOnRestuarent"));
        document.getElementById('bussinessName').innerHTML = `${selected.name}`
        document.getElementById('foodPic').src = `${selected.image}`
        bussiness = selected.id;

        let stars = document.querySelectorAll('.star');
        stars.forEach(function (star) {
            star.addEventListener('click', setRating);
        });

        let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
        let target = stars[rating - 1];
        target.dispatchEvent(new MouseEvent('click'));

        loadCommentList()
    });

    function setRating(ev) {
        let span = ev.currentTarget;
        let stars = document.querySelectorAll('.star');
        let match = false;
        let num = 0;
        stars.forEach(function (star, index) {
            if (match) {
                star.classList.remove('rated');
            } else {
                star.classList.add('rated');
            }
            //are we currently looking at the span that was clicked
            if (star === span) {
                match = true;
                num = index + 1;
            }
        });

        document.querySelector('.stars').setAttribute('data-rating', num);
    }


    var rating = 0;

    function getRating(rate) {
        rating = rate
    }

    function onAddComment() {

        // var comment = document.getElementById("message").value;


        // if (comment == "") {
        //     alert("Comment can not be empty!");
        //     return;
        // }
        // var feedback = { "comment": comment, "rating": rating, "bussiness": bussiness }
        // console.log(feedback)

        // let commentList = localStorage.getItem("commentList");
        // commentList = (commentList) ? JSON.parse(commentList) : []
        // commentList.push(feedback)

        $('#message2').text("Thank you for reviewing product!!");

        // updating total ratings of a restaurent
        // let vendorList = localStorage.getItem("vendorList");
        // vendorList = (vendorList) ? JSON.parse(vendorList) : []
        // var newRating = (45 + rating) / 11;
        // var finalRate = newRating.toFixed(1)
        // for (var i = 0; i < vendorList.length; i++) {
        //     if (vendorList[i].id === "1") {
        //         vendorList[i].rating = finalRate.toString();
        //         break;
        //     }
        // }
        // localStorage.setItem("vendorList", JSON.stringify(vendorList))

        // localStorage.setItem("commentList", JSON.stringify(commentList))
        // document.getElementById("message").value = ""
        // loadCommentList()
    }


    function loadCommentList() {
        if(bussiness){
            let commentList = localStorage.getItem("commentList");
            commentList = (commentList) ? JSON.parse(commentList) : [];
            console.log(commentList)

            let outputHtml = ``;
            commentList.map(x => {
                if(x.bussiness == Number(bussiness)){
                    outputHtml += `
                        <div class="ui-grid-a" class="lanCardItem" id="usergrid">
                                <img src="../../Assets/img/boy.jpg" class="round">
                                <div class="ma">
                                    <p style="color: #000000; margin-top: 3px;">Jone Doe</p>
                                    <p style="color: #000000; margin-top: -8px;">${x.comment}</p>
                                    <div id="str">
                                        <span class="fa fa-star checked fa-xs" style="color: #FFCC36;margin-left:35%; font-size: 1.3rem; position: relative; margin-top: -13px;"></span>
                                        <span style="color: #FFCC36; font-size: 1.3rem; position: relative; margin-top: -13px; margin-left: 10px">${x.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                            <hr>
                    `
                }
            });
            
            $("#reviewlist").html(outputHtml);
        }
    }

    

    window.onload = startInterval;

    function startInterval()
    {
        setInterval("loadCommentList();", 10000);
    }

    window.onload = function() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
;
    

