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
    };


    var rating = 0;

    function getRating(rate) {
        rating = rate
    };

    function onAddComment() {

        var comment = document.getElementById("message").value;
        var id;

        if (comment == "") {
            alert("Comment can not be empty!");
            return;
        };

        $("#v-promo-popup-success2").popup("open"); 

        let commentList = localStorage.getItem("commentList");
        commentList = (commentList) ? JSON.parse(commentList) : []
        commentList.length > 0 ? id = commentList[commentList.length-1].id + 1 : id = 0;

        var feedback = { id: id, comment: comment, rating: rating, bussiness: bussiness, replys: [] };
        commentList.push(feedback);

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

        localStorage.setItem("commentList", JSON.stringify(commentList))
        document.getElementById("message").value = ""
        loadCommentList()
    };


    function loadCommentList() {
        if(bussiness){
            let commentList = localStorage.getItem("commentList");
            commentList = (commentList) ? JSON.parse(commentList) : [];
            // console.log("comments : ",commentList);

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
                            <div id="rplylist" align="center">
                                <a href="" data-role="button" onclick="saveOgCommentId(${x.id})" id="replybtn" class="" >Reply</a>
                            </div>
                            `
                            x.replys.forEach(rep => {
                                    outputHtml += `
                                            <div class="row">
                                                <small>${rep}</small>
                                            </div>
                                    `;
                            });
                            
                            `
                            <hr>
					        `;
                }
            });

            $("#reviewlist").html(outputHtml);
        };
        
    };

    loadCommentList();

    function onAddRply() 
    {
        var val = JSON.parse(localStorage.getItem("ogCommentId"));

        var reply = document.getElementById('reply').value;
        var index;

        if (reply == "") {
            alert("Reply can not be empty!");
            return;
        };

        $("#popup-reply").popup("close"); 
        setTimeout(function(){$("#v-promo-popup-success3").popup("open");}, 1000);

        let commentList = JSON.parse(localStorage.getItem("commentList"));
        commentList.forEach((e,i) => {
            e.id == val ? index = i : "";
        });
        
        commentList[index].replys.push(reply);
        localStorage.setItem("commentList",JSON.stringify(commentList));

        document.getElementById('reply').value = ""
        loadCommentList();
    };

    function saveOgCommentId(val){
        $("#popup-reply").popup("open"); 
        localStorage.setItem("ogCommentId",val);
    };