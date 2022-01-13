$(document).ready(function() {
    let totalPoint = localStorage.getItem("totalPoint");
    totalPoint = Number(totalPoint);
    totalPoint == null || totalPoint == undefined ? totalPoint = 0 : totalPoint = totalPoint
    localStorage.setItem("totalPoint", totalPoint);
    // console.log('totalPoint : ', totalPoint)
    $('#totalPoint').text(totalPoint);
})

$(document).ready(function() {
    var vendorList = localStorage.getItem("vendorList");
    vendorList = (vendorList) ? JSON.parse(vendorList) : [
        { 'id': '1', 'imageurl': '../../Assets/img/pizzaHut.jpg', 'name': 'Pizza Hut', 'address': '228A1/1 Colombo - Kandy Rd, 11300', 'rating': '4.5', 'time': 20, 'deliveryPrice' : 90},
        { 'id': '2', 'imageurl': '../../Assets/img/sohaniRestaurent.jpg', 'name': 'Sohani Restaurant', 'address': '376/2/A, 5th Lane, Kelaniya', 'rating': '4.2', 'time': 30, 'deliveryPrice' : 100 },
        { 'id': '3', 'imageurl': '../../Assets/img/drinks.jpg', 'name': 'Udeni\'s Juice Bar', 'address': '169, High level Rd, Nugegoda', 'rating': '4.8', 'time': 50, 'deliveryPrice' : 90 },
        { 'id': '4', 'imageurl': '../../Assets/img/pizza.jpg', 'name': 'Arthur\'s Pizza', 'address': 'No 10, Temple\'s Road, Rathmalana', 'rating': '4.5', 'time': 120, 'deliveryPrice' : 60},
        { 'id': '5', 'imageurl': '../../Assets/img/burger.jpg', 'name': 'Burger Palace', 'address': 'No 4, 3rd Lane, Koswatta', 'rating': '4.2', 'time': 120, 'deliveryPrice' : 120 }
    ];

    localStorage.setItem("vendorList", JSON.stringify(vendorList))
    vendorList.forEach(function(obj) {
        document.getElementById("favourites").innerHTML += `
                <a class="link" href="../Vendor/">
                    <div class="card" id="cardItem">
                        <img src="${obj.imageurl}" class="cardImage">
                        <div class="row" id="customCard">
                            <div class="desc">
                                <p class="name">
                                    <b>${obj.name}</b>
                                </p>
                                <span class="address">Rs.${obj.deliveryPrice}  &#9679 ${obj.time} mins</span>
                            </div>
                            <div class="stars">
                                <span class="fa fa-star checked fa-xs" style="color: #FFCC36;margin-left:19%; font-size: 1rem;"></span>
                                <span class="fa checked fa-xs" style="color: color: #FFCC36;font-size: 1rem;">${obj.rating}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `
        ;
    })

    var topVendorList = localStorage.getItem("topVendorList");
    topVendorList = (topVendorList) ? JSON.parse(topVendorList) : [
        { 'id': '1', 'imageurl': '../../Assets/img/kottu.jpg', 'name': 'Kottu Kottu', 'address': 'No 10, Temple\'s Road, Dompe', 'rating': '4.5', 'time': 20, 'deliveryPrice' : 90 },
        { 'id': '2', 'imageurl': '../../Assets/img/cupcakes.jpg', 'name': 'Cream Cakes', 'address': 'No ,5 4th Lane, Kottawa', 'rating': '4.2', 'time': 40, 'deliveryPrice' : 120 },
        { 'id': '3', 'imageurl': '../../Assets/img/kottu.jpg', 'name': 'Kottu Kottu', 'address': 'No 10, Temple\'s Road, Dompe', 'rating': '4.5', 'time': 20, 'deliveryPrice' : 90 },
        { 'id': '4', 'imageurl': '../../Assets/img/cupcakes.jpg', 'name': 'Cream Cakes', 'address': 'No ,5 4th Lane, Kottawa', 'rating': '4.2', 'time': 40, 'deliveryPrice' : 120 }
    ]
    localStorage.setItem("topVendorList", JSON.stringify(topVendorList))
    topVendorList.forEach(function(obj) {
        document.getElementById("topOutlets").innerHTML += `
                <a class="link" href="../Vendor/">
                    <div class="card" id="cardItem">
                        <img src="${obj.imageurl}" class="cardImage">
                        <div class="row" id="customCard">
                            <div class="desc">
                                <p class="name">
                                    <b>${obj.name}</b>
                                </p>
                                <span class="address">Rs.${obj.deliveryPrice}  &#9679 ${obj.time} mins</span>
                            </div>
                            <div class="stars">
                                <span class="fa fa-star checked fa-xs" style="color: #FFCC36;margin-left:19%; font-size: 1rem;"></span>
                                <span class="fa checked fa-xs" style="color: color: #FFCC36;font-size: 1rem;">${obj.rating}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `
        ;
    });
});