$(document).ready(function() {
    let totalPoint = localStorage.getItem("totalPoint");
    totalPoint = Number(totalPoint);
    totalPoint == null || totalPoint == undefined ? totalPoint = 0 : totalPoint = totalPoint
    localStorage.setItem("totalPoint", totalPoint);
    // console.log('totalPoint : ', totalPoint)
    $('#totalPoint').text(totalPoint);
})

$(document).ready(function() {
    var allVendors = localStorage.getItem("vendors");
    
    allVendors = (allVendors) ? JSON.parse(allVendors) : [
        { 
            'id': '1', 
            'imageurl': '../../Assets/img/pizzaHut.jpg', 
            'name': 'Pizza Hut', 
            'address': '228A1/1 Colombo - Kandy Rd, 11300', 
            'rating': '4.5', 
            'time': 20, 
            'deliveryPrice': 90,
            'menu': [
                {'id':'1','imageurl':'../../Assets/img/cheeseLovers.jpg','name':'Cheese Lovers','price':'750', 'rating':'4.5'},
                {'id':'2','imageurl':'../../Assets/img/sausageDelight.jpg','name':'Sausage Delight','price':'750', 'rating':'4.2'},
                {'id':'3','imageurl':'../../Assets/img/blackChicken.jpg','name':'Black Chicken','price':'750', 'rating':'4.8'},
                {'id':'4','imageurl':'../../Assets/img/hawaiianChicken.jpg','name':'Hawaiian Chicken','price':'750', 'rating':'4.5'},
                {'id':'5','imageurl':'../../Assets/img/popcornChicken.jpg','name':'Popcorn Chicken','price':'750', 'rating':'4.2'}
            ]
        },
        { 
            'id': '2', 
            'imageurl': '../../Assets/img/sohaniRestaurent.jpg', 
            'name': 'Sohani Restaurant', 
            'address': '376/2/A, 5th Lane, Kelaniya', 
            'rating': '4.2', 
            'time': 30, 
            'deliveryPrice': 100 ,
            'menu': [
                {'id':'6','imageurl':'../../Assets/img/sohaniRice.jpg','name':'Rice & Curry','price':'150', 'rating':'4.0'},
                {'id':'7','imageurl':'../../Assets/img/sohaniChickenKottu.jpg','name':'Chicken Kottu','price':'400', 'rating':'4.1'},
                {'id':'8','imageurl':'../../Assets/img/sohaniVegeKottu.jpeg','name':'Vegi Kottu','price':'300', 'rating':'4.1'},
                {'id':'9','imageurl':'../../Assets/img/sohaniCheeseKottu.jpg','name':'Cheese Kottu','price':'550', 'rating':'4.2'},
                {'id':'10','imageurl':'../../Assets/img/sohaniBiriyani.jpg','name':'Biriyani','price':'800', 'rating':'4.5'}
            ]
        },
        { 
            'id': '3', 
            'imageurl': '../../Assets/img/drinks.jpg', 
            'name': 'Udeni\'s Juice Bar', 
            'address': '169, High level Rd, Nugegoda', 
            'rating': '4.8', 
            'time': 50, 
            'deliveryPrice': 90,
            'menu': [
                {'id':'11','imageurl':'../../Assets/img/udeniEnergizer.jpg','name':'Energizer','price':'150', 'rating':'4.9'},
                {'id':'12','imageurl':'../../Assets/img/udeniStressdown.jpg','name':'Stress Down','price':'250', 'rating':'4.2'},
                {'id':'13','imageurl':'../../Assets/img/udeniVeggi.jpg','name':'Veggie Focus','price':'250', 'rating':'4.2'},
                {'id':'14','imageurl':'../../Assets/img/udeniHangoverHeaven.jpg','name':'Hangover Heaven','price':'400', 'rating':'4.8'},
                {'id':'15','imageurl':'../../Assets/img/udeniCshot.jpg','name':'C-Shot Sweet','price':'250', 'rating':'4.0'}
            ] 
        },
        { 
            'id': '4', 
            'imageurl': '../../Assets/img/pizza.jpg', 
            'name': 'Arthur\'s Pizza', 
            'address': 'No 10, Temple\'s Road, Rathmalana', 
            'rating': '4.5', 
            'time': 120, 
            'deliveryPrice': 60,
            'menu': [
                {'id':'16','imageurl':'../../Assets/img/artItalian.jpg','name':'Italian Tomato Pie','price':'750', 'rating':'4.5'},
                {'id':'17','imageurl':'../../Assets/img/artSicilian.jpg','name':'Sicilian Pizza','price':'750', 'rating':'4.2'},
                {'id':'18','imageurl':'../../Assets/img/artChicago.jpg','name':'Chicago-style','price':'750', 'rating':'4.8'},
                {'id':'19','imageurl':'../../Assets/img/artDetroit.jpg','name':'Detroit-style','price':'750', 'rating':'4.5'},
                {'id':'20','imageurl':'../../Assets/img/artStuffedcrust.jpg','name':'Stuffed-Crust','price':'750', 'rating':'4.2'}
            ]
        },
        { 
            'id': '5', 
            'imageurl': '../../Assets/img/burger.jpg', 
            'name': 'Burger Palace', 
            'address': 'No 4, 3rd Lane, Koswatta', 
            'rating': '4.2', 
            'time': 120, 
            'deliveryPrice': 120,
            'menu': [
                {'id':'21','imageurl':'../../Assets/img/burgerChicken.jpg','name':'Chicken Burger','price':'250', 'rating':'4.5'},
                {'id':'22','imageurl':'../../Assets/img/burgerEgg.jpg','name':'Egg Burger','price':'200', 'rating':'4.5'},
                {'id':'23','imageurl':'../../Assets/img/burgerBeef.jpg','name':'Beef Burger','price':'450', 'rating':'4.5'},
                {'id':'24','imageurl':'../../Assets/img/burgerVeggie.jpg','name':'Veggie Burger','price':'250', 'rating':'4.0'},
                {'id':'25','imageurl':'../../Assets/img/burgerSalmon.jpg','name':'Salmon Burger','price':'250', 'rating':'4.0'}
            ] 
        },
        { 
            'id': '6', 
            'imageurl': '../../Assets/img/omik.jpg', 
            'name': 'Omik', 
            'address': '342 Waragoda Rd, Peliyagoda', 
            'rating': '4.3', 
            'time': 30, 
            'deliveryPrice': 60,
            'menu': [
                {'id':'26','imageurl':'../../Assets/img/omikEgg.jpg','name':'Egg Kottu Roti','price':'320', 'rating':'4.5'},
                {'id':'27','imageurl':'../../Assets/img/omikChicken.jpg','name':'Chicken Kottu Roti','price':'400', 'rating':'4.5'},
                {'id':'28','imageurl':'../../Assets/img/omikFish.jpg','name':'Fish Kottu Roti','price':'400', 'rating':'4.5'},
                {'id':'29','imageurl':'../../Assets/img/omikMix.jpg','name':'Mix Kottu Roti','price':'460', 'rating':'4.0'},
                {'id':'30','imageurl':'../../Assets/img/omikCheese.jpg','name':'Cheese Kottu Roti','price':'450', 'rating':'4.0'}
            ] 
        },
        { 
            'id': '7', 
            'imageurl': '../../Assets/img/kottu.jpg', 
            'name': 'Kottu Kottu', 
            'address': "No 10, Temple's Road, Dompe", 
            'rating': '4.5', 
            'time': 20, 
            'deliveryPrice': 90,
            'menu': [
                {'id':'31','imageurl':'../../Assets/img/omikEgg.jpg','name':'Egg Kottu','price':'300', 'rating':'4.3'},
                {'id':'32','imageurl':'../../Assets/img/omikChicken.jpg','name':'Chicken Kottu ','price':'400', 'rating':'4.3'},
                {'id':'33','imageurl':'../../Assets/img/omikFish.jpg','name':'Fish Kottu','price':'350', 'rating':'4.3'},
                {'id':'34','imageurl':'../../Assets/img/omikMix.jpg','name':'Mix Kottu','price':'460', 'rating':'4.0'},
                {'id':'35','imageurl':'../../Assets/img/porkKottu.jpg','name':'Pork Kottu','price':'450', 'rating':'4.0'}
            ] 
        },
        { 
            'id': '8', 
            'imageurl': '../../Assets/img/cupcakes.jpg', 
            'name': 'Cream Cakes', 
            'address': 'No ,5 4th Lane, Kottawa', 
            'rating': '4.2', 
            'time': 40, 
            'deliveryPrice': 120,
            'menu': [
                {'id':'36','imageurl':'../../Assets/img/cakeChoco.jpg','name':'Chocolate Cake','price':'800', 'rating':'4.3'},
                {'id':'37','imageurl':'../../Assets/img/cakeCoco.jpg','name':'Coconut Cake','price':'800', 'rating':'4.3'},
                {'id':'38','imageurl':'../../Assets/img/cakeStraw.jpg','name':'Strawberry Cake','price':'800', 'rating':'4.5'},
                {'id':'39','imageurl':'../../Assets/img/cakeCup.jpg','name':'Cupcakes','price':'200', 'rating':'4.0'},
                {'id':'40','imageurl':'../../Assets/img/cakeRed.jpg','name':'Red Velvet','price':'1000', 'rating':'4.8'}
            ] 
        },
        { 
            'id': '9', 
            'imageurl': '../../Assets/img/rajaBojun.jpg', 
            'name': 'Raja Bojun', 
            'address': '61 Robert Gunawardena Mawatha, Colombo 00500', 
            'rating': '4.0', 
            'time': 40, 
            'deliveryPrice': 140,
            'menu': [
                {'id':'41','imageurl':'../../Assets/img/rajaKottu.jpg','name':'Kottu Roti','price':'320', 'rating':'4.3'},
                {'id':'42','imageurl':'../../Assets/img/rajaString.jpg','name':'String Hoppers','price':'150', 'rating':'3.9'},
                {'id':'43','imageurl':'../../Assets/img/rajaHoppers.jpg','name':'Hoppers','price':'150', 'rating':'4.1'},
                {'id':'44','imageurl':'../../Assets/img/rajaRice.jpeg','name':'Rice & Curry','price':'150', 'rating':'4.0'},
                {'id':'45','imageurl':'../../Assets/img/rajaLamp.jpg','name':'Lamprais','price':'500', 'rating':'4.8'}
            ] 
        },
        { 
            'id': '10', 
            'imageurl': '../../Assets/img/kamaSutra.jpg', 
            'name': 'Kaema Sutra', 
            'address': 'Independence Ave, Colombo 00700', 
            'rating': '4.8', 
            'time': 120, 
            'deliveryPrice': 120,
            'menu': [
                {'id':'46','imageurl':'../../Assets/img/kamaPork.jpg','name':'Pork Clay Pot','price':'1500', 'rating':'4.3'},
                {'id':'47','imageurl':'../../Assets/img/kamaChicken.jpg','name':'Chicken Clay Pot','price':'1300', 'rating':'4.9'},
                {'id':'48','imageurl':'../../Assets/img/kamaTuna.jpg','name':'Ambulthiyal','price':'1500', 'rating':'4.3'},
                {'id':'49','imageurl':'../../Assets/img/kamaMutton.jpg','name':'Mutton Clay Pot','price':'1700', 'rating':'4.2'},
                {'id':'50','imageurl':'../../Assets/img/kamaEgg.jpeg','name':'Veggies with Egg','price':'1300', 'rating':'4.2'}
            ] 
        },
        { 
            'id': '11', 
            'imageurl': '../../Assets/img/palmyrah.jpeg', 
            'name': 'Palmyrah', 
            'address': '328 Galle Road, Kollupitiya, Colombo 3', 
            'rating': '4.5', 
            'time': 100, 
            'deliveryPrice': 140,
            'menu': [
                {'id':'51','imageurl':'../../Assets/img/palRice.jpg','name':'Thai Chicken Rice','price':'850', 'rating':'4.2'},
                {'id':'52','imageurl':'../../Assets/img/palChicken.jpg','name':'Devilled Chicken','price':'900', 'rating':'4.5'},
                {'id':'53','imageurl':'../../Assets/img/palCuttle.jpg','name':'Buttered Cuttlefish','price':'1000', 'rating':'4.3'},
                {'id':'54','imageurl':'../../Assets/img/palPrawns.jpg','name':'Garlic Prawn','price':'1100', 'rating':'4.3'},
                {'id':'55','imageurl':'../../Assets/img/palLamb.jpg','name':'Lamb Chops','price':'1650', 'rating':'4.2'}
            ] 
        },
        { 
            'id': '12', 
            'imageurl': '../../Assets/img/gingerkafe.jpeg', 
            'name': 'Ginger Kafe', 
            'address': 'Dharmapala Mawatha, 145, Colombo 00700', 
            'rating': '4.3', 
            'time': 120, 
            'deliveryPrice': 90,
            'menu': [
                {'id':'56','imageurl':'../../Assets/img/kafeFish.jpg','name':'Tandoori Salmon','price':'4000', 'rating':'4.5'},
                {'id':'57','imageurl':'../../Assets/img/kafeChicken.jpg','name':'Ginger Chicken','price':'2200', 'rating':'4.5'},
                {'id':'58','imageurl':'../../Assets/img/kafeBroccoli.jpg','name':'Broccoli Salad','price':'1800', 'rating':'4.1'},
                {'id':'59','imageurl':'../../Assets/img/kafeModha.jpg','name':'Pan Fried Modha','price':'2900', 'rating':'4.3'},
                {'id':'60','imageurl':'../../Assets/img/kafeChoco.jpg','name':'Chocolate Nemesis','price':'1200', 'rating':'4.2'}
            ] 
        },
    ];

    localStorage.setItem("vendors", JSON.stringify(allVendors));

    var vendorList = allVendors;
    var topVendorList = vendorList.splice(6);

    vendorList.forEach(function(obj) {
        document.getElementById("favourites").innerHTML += `
                <a class="link" href="" onclick="restaurent(${obj.id})">
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

    topVendorList.forEach(function(obj) {
        document.getElementById("topOutlets").innerHTML += `
                <a class="link" href="" onclick="restaurent(${obj.id})">
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