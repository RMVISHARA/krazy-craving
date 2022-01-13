var hiddenItems;
var favs = [
    {"iphoneId":"item3","ipadId":'item33','image':"../../Assets/img/kottu.jpg","name":"Kottu Kottu","address":"No.4, W A Mawatha, Wellawatte","amend":3},
    {"iphoneId":"item2","ipadId":'item22','image':"../../Assets/img/cupcakes.jpg","name":"Cream Cakes","address":"No.6, Marine Drive, Colpetty","amend":2},
    {"iphoneId":"item1","ipadId":'item11','image':"../../Assets/img/pizzaHut.jpg","name":"Pizza Hut","address":"228A1/1 Colombo - Kandy Rd, 11300","amend":1},
];

$(document).ready(function() {
    document.getElementById("empty").style.display="none";

    var customFav = localStorage.getItem("isFavourite");
    customFav = (customFav) ? JSON.parse(customFav) : false;
    if(customFav){
        localStorage.setItem("favItems", 3)
    }else{
        localStorage.setItem("favItems", 2)
        favs.splice(2,1);
    };

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
        let ipadHtml = `
                        <ul id="di" class="ipadClass" data-filter="true" data-input="#divOfPs-input" data-filter-placeholder="Search">
                        <div class="row">
        `;

        favs.forEach((item,index) =>
        {
            if(index <2){
                ipadHtml += `
                            <div  class="col-md-6">
                                <div id="${item.ipadId}" class="ui-child uu">
                                    <a href="#"  style="padding:0px;" data-ajax="false">
                                        <div style="position: relative;">
                                            <img src="${item.image}" id="img-fav">
                                            <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${item.amend})">
                                        </div >
                                        <h2 id="prod-n">${item.name}</h2>
                                        <span id="address">${item.address}</span>
                                        
                                    </a>
                                </div>       
                            </div>
                `;
            };
        });

        ipadHtml += `</div>`
        if(favs[2]){
            ipadHtml += `
                        <div class="row">
                            <div  class="col-md-6">
                                <div id="${favs[2].ipadId}" class="ui-child uu">
                                    <a href="#"  style="padding:0px;" data-ajax="false">
                                        <div style="position: relative;">
                                            <img src="${favs[2].image}" id="img-fav">
                                            <img src="../../Assets/img/icons/liked-heart.svg" id="heart-unheart" class="heart-icon" width="33" height="33" onclick="amend(${favs[2].amend})">
                                        </div >
                                        <h2 id="prod-n">${favs[2].name}</h2>
                                        <span id="address">${favs[2].address}</span>
                                        
                                    </a>
                                </div>       
                            </div>
                        </div>    
            `;
        };
        ipadHtml += `</ul>`

        document.getElementById("ipadDiv").innerHTML = ipadHtml;
  };