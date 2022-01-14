$(document).ready(function(){
    localStorage.setItem("directingTo", 0);

    var vendor;
    var allVendors = localStorage.getItem("vendors");
    var selectedVendor = localStorage.getItem("selectedRestaurent");
    allVendors = JSON.parse(allVendors);
    selectedVendor = Number(selectedVendor);

    allVendors.forEach(element => {
        if(element.id == selectedVendor){
            vendor = element;
        }
    });

    document.getElementById("name").innerHTML = vendor.name;
    document.getElementById("address").innerHTML = vendor.address;
    document.getElementById("ratings").innerHTML = vendor.rating;
    document.getElementById("bgImage").style.backgroundImage = `url('${vendor.imageurl}')`;

    vendor.menu.forEach(function(obj) {
        document.getElementById("cardList").innerHTML +=
            '           <a href="" onclick="directToPage('+ obj.id +')"> \n' +
            '                <div class="card" id="cardItem">\n' +
            '                    <div class="row no-gutters">\n' +
            '                        <div class="image">\n' +
            '                            <img src="'+obj.imageurl+'" class="card-img" style="border-radius: 10px" alt="...">\n' +
            '                        </div>\n' +
            '                        <div class="desc">\n' +
            '                            <div class="card-body">\n' +
            '                                <h5 class="card-title">'+ obj.name +'</h5>\n' +
            '                               <p class="card-text">Ranging from Rs. '+obj.price+'</p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </a><hr>';

    });


    let commentList = localStorage.getItem("commentList");
    commentList = (commentList) ? JSON.parse(commentList) : []

    let outputHtml = ``;
    commentList.map(x => {
        if(x.bussiness == selectedVendor){
            outputHtml += `
                            <div class="ui-grid-a"id="usergrid">
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
                            `
        }
    })

    $("#reviewlist").html(outputHtml);

    var x = JSON.parse(localStorage.getItem("favVendors"));
    
    if(x[String(selectedVendor)]){
        document.getElementById("heart").src="../../Assets/img/icons/liked-heart.svg";
    }
    else{
        document.getElementById("heart").src="../../Assets/img/icons/unlike-heart.svg";
    }
});