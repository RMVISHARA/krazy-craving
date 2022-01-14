var favs = [];

$(document).ready(function() 
{
    var customFav = localStorage.getItem("favVendors");
    customFav = (customFav) ? JSON.parse(customFav) : {};
    var favIds = [];

    Object.entries(customFav).forEach(element => {
        element[1] == true ? favIds.push(Number(element[0])) : "";
    });

    var allVendors = JSON.parse(localStorage.getItem("vendors"));

    allVendors.forEach(e => {
        if(favIds.includes(Number(e.id))){
            var obj = {};
            obj.iphoneId = `item${e.id}`;
            obj.ipadId = `item${e.id}${e.id}`;
            obj.image = e.imageurl;
            obj.name = e.name;
            obj.address = e.address;
            obj.amend = e.id;
            favs.push(obj);
        }
    });

    localStorage.setItem("favItems", favs.length);
    favs.length > 0 ? document.getElementById("empty").style.display="none" : document.getElementById("empty").style.display="block";
    
    addPhoneCards();
    addipadCards();
  });

  function addPhoneCards()
  {
        let phoneHtml = `<ul id="di" data-filter="true" data-input="#divOfPs-input" data-filter-placeholder="Search">`;
        favs.forEach(item =>
        {
            phoneHtml += `
                        <div id="${item.iphoneId}" class="ui-child uu">
                            <a href="#"  style="padding:0px;" data-ajax="false">
                                <div style="position: relative;">
                                    <img src="${item.image}" id="img-fav">
                                    <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${item.amend})">
                                </div >
                                <h2 id="prod-n">${item.name}</h2>
                                <span id="address">${item.address}</span>
                                
                            </a>
                        </div>
            `
        });
        phoneHtml += `</ul>`
        document.getElementById("iphoneDiv").innerHTML = phoneHtml;
  };

  function addipadCards()
  {
        var i, j;
        var chunks = [];
        var perRow = 2;

        for (i = 0,j = favs.length; i < j; i += perRow) {
            chunks.push(favs.slice(i, i + perRow));
        }

        let ipadHtml = `<ul id="di" class="ipadClass" data-filter="true" data-input="#divOfPs-input" data-filter-placeholder="Search">`;
        chunks.forEach(row => {
            ipadHtml += `<div class="row">`
            
            row.forEach(col => {
                ipadHtml += `
                    <div  class="col-md-6">
                        <div id="${col.ipadId}" class="ui-child uu">
                            <a href="#"  style="padding:0px;" data-ajax="false">
                                <div style="position: relative;">
                                    <img src="${col.image}" id="img-fav">
                                    <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${col.amend})">
                                </div >
                                <h2 id="prod-n">${col.name}</h2>
                                <span id="address">${col.address}</span>
                                
                            </a>
                        </div>       
                    </div>
                `;
            });

            ipadHtml += `</div>`
        });
        ipadHtml += `</ul>`
        document.getElementById("ipadDiv").innerHTML = ipadHtml;
  };