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

    var x = JSON.parse(localStorage.getItem("favVendors"));

    if(x[String(selectedVendor)]){
        document.getElementById("heart").src="../../Assets/img/icons/liked-heart.svg";
    }
    else{
        document.getElementById("heart").src="../../Assets/img/icons/unlike-heart.svg";
    }
});