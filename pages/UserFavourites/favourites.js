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
        var count = 2;

        for (i = 0,j = favs.length; i < j; i += count) {
            chunks.push(favs.slice(i, i + count));
        }

        let ipadHtml = `<ul id="di" class="ipadClass" data-filter="true" data-input="#divOfPs-input" data-filter-placeholder="Search">`;

        chunks.forEach(e => {
            if(e.length == 2)
            {
                ipadHtml += `
                            <div class="row">
                                <div  class="col-md-6">
                                    <div id="${e[0].ipadId}" class="ui-child uu">
                                        <a href="#"  style="padding:0px;" data-ajax="false">
                                            <div style="position: relative;">
                                                <img src="${e[0].image}" id="img-fav">
                                                <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${e[0].amend})">
                                            </div >
                                            <h2 id="prod-n">${e[0].name}</h2>
                                            <span id="address">${e[0].address}</span>
                                            
                                        </a>
                                    </div>       
                                </div>
                                <div  class="col-md-6">
                                    <div id="${e[1].ipadId}" class="ui-child uu">
                                        <a href="#"  style="padding:0px;" data-ajax="false">
                                            <div style="position: relative;">
                                                <img src="${e[1].image}" id="img-fav">
                                                <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${e[1].amend})">
                                            </div >
                                            <h2 id="prod-n">${e[1].name}</h2>
                                            <span id="address">${e[1].address}</span>
                                            
                                        </a>
                                    </div>       
                                </div>
                            </div>
                `;
            }
            else if(e.length == 1)
            {
                ipadHtml += `
                            <div class="row">
                                <div  class="col-md-6">
                                    <div id="${e[0].ipadId}" class="ui-child uu">
                                        <a href="#"  style="padding:0px;" data-ajax="false">
                                            <div style="position: relative;">
                                                <img src="${e[0].image}" id="img-fav">
                                                <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${e[0].amend})">
                                            </div >
                                            <h2 id="prod-n">${e[0].name}</h2>
                                            <span id="address">${e[0].address}</span>
                                            
                                        </a>
                                    </div>       
                                </div>
                            </div>    
                `;
            }
        });

        ipadHtml += `</ul>`

        document.getElementById("ipadDiv").innerHTML = ipadHtml;
  };