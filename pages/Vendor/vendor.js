$(document).ready(function() {
    localStorage.setItem("directingTo", 0);

    var vendor;
    var allVendors = localStorage.getItem("vendors");
    var selectedVendor = localStorage.getItem("selectedRestaurent");
    allVendors = JSON.parse(allVendors);
    selectedVendor = Number(selectedVendor);

    allVendors.forEach(element => {
        if (element.id == selectedVendor) {
            vendor = element;
        }
    });

    document.getElementById("name").innerHTML = vendor.name;
    document.getElementById("address").innerHTML = vendor.address;
    document.getElementById("ratings").innerHTML = vendor.rating;
    document.getElementById("longDescription").innerHTML = `<p>${vendor.longDescription}</p>`;
    document.getElementById("bgImage").style.backgroundImage = `url('${vendor.imageurl}')`;

    vendor.menu.forEach(function(obj) {
        document.getElementById("cardList").innerHTML +=
        `          <a href="" onclick="directToPage('${obj.id}')">
        <div class="card" id="cardItem">
            <div class="row no-gutters d-flex justify-content-between">
                <div class="desc1">
                    <div class="card-body p-0">
                        <h5 class="card-title">${ obj.name}</h5>
                        <p class="card-text">LKR ${obj.price}</p>
                    </div>
                </div>
                <div class="image">
                    <img src="${obj.imageurl}" class="card-img" style="border-radius: 10px" alt="...">
                </div>
            </div>
        </div>
    </a>
    <hr>`    
    });
    loadCommentList();

    var x = JSON.parse(localStorage.getItem("favVendors"));

    if (x[String(selectedVendor)]) {
        document.getElementById("heart").src = "../../Assets/img/icons/liked-heart.svg";
    } else {
        document.getElementById("heart").src = "../../Assets/img/icons/unlike-heart.svg";
    }
});

function loadCommentList() {
    let commentList = localStorage.getItem("commentList");
    commentList = (commentList) ? JSON.parse(commentList) : []

    let outputHtml = ``;
    commentList.map(x => {
        if (x.bussiness == selectedVendor) {
            outputHtml += `
                            <div class="ui-grid-a" id="usergrid">
                                <img src="../../Assets/img/boy.jpg" class="round">
                                <div class="ma">
                                    <p style="color: #000000; margin-top: 2px;">Jone Doe</p>
                                    <p style="color: #000000; margin-top: -8px;">${x.comment}</p>
                                    <div id="str">
                                        <span class="fa fa-star checked fa-xs" style="color: #FFCC36;margin-left:35%; font-size: 1.3rem; position: relative; margin-top: -13px;"></span>
                                        <span style="color: #FFCC36; font-size: 1.3rem; position: relative; margin-top: -13px; margin-left: 10px">${x.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                            <div id="rplylist" align="center">
                                <buttontype="button" class="btn replyBtn" data-toggle="modal" data-target="#popup-reply2" onclick="saveOgCommentId(${x.id})">
                                    Reply
                                </button>
                            </div>
                            `
            x.replys.forEach(rep => {
                outputHtml += `
                <div class="row">
                <img src="../../Assets/img/boy.jpg" class="replyImg"><p div class="replyName">Jone Doe</p>
                </div>
                                                <div class="row">
                                                 <small class="replyMessage">${rep}</small>
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

function onAddRply() {
    var val = JSON.parse(localStorage.getItem("ogCommentId"));

    var reply = document.getElementById('reply').value;
    var index;

    if (reply == "") {
        alert("Reply can not be empty!");
        return;
    };

    $("#popup-reply2").modal('hide');
    setTimeout(function() { $("#v-promo-popup-success4").modal("show"); }, 1000);

    let commentList = JSON.parse(localStorage.getItem("commentList"));
    commentList.forEach((e, i) => {
        e.id == val ? index = i : "";
    });

    commentList[index].replys.push(reply);
    localStorage.setItem("commentList", JSON.stringify(commentList));

    document.getElementById('reply').value = "";
    loadCommentList();
};

function saveOgCommentId(val) {
    localStorage.setItem("ogCommentId", val);
};