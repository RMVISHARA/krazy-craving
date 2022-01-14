$(document).ready(function(){
    var pastOrders = [
            {
                "cardId": 1,
                "RestaurentId": 4,
                "image": "../../Assets/img/pizza.jpg",
                "name": "Arthur's Pizza",
                "date": "12/12/2021",
                "orderNo": 10129
            },
            {
                "cardId": 2,
                "RestaurentId": 1,
                "image": "../../Assets/img/pizzaHut.jpg",
                "name": "Pizza Hut",
                "date": "10/12/2021",
                "orderNo": 10012
            },
            {
                "cardId": 3,
                "RestaurentId": 1,
                "image": "../../Assets/img/pizzaHut.jpg",
                "name": "Pizza Hut",
                "date": "10/12/2021",
                "orderNo": 10008
            },
            {
                "cardId": 4,
                "RestaurentId": 10,
                "image": "../../Assets/img/kamaSutra.jpg",
                "name": "Kaema Sutra",
                "date": "09/12/2021",
                "orderNo": 9989
            },
            {
                "cardId": 5,
                "RestaurentId": 7,
                "image": "../../Assets/img/kottu.jpg",
                "name": "Kottu Kottu",
                "date": "04/12/2021",
                "orderNo": 9740
            },
            {
                "cardId": 6,
                "RestaurentId": 4,
                "image": "../../Assets/img/pizza.jpg",
                "name": "Arthur's Pizza",
                "date": "02/12/2021",
                "orderNo": 9680
            },
            {
                "cardId": 7,
                "RestaurentId": 2,
                "image": "../../Assets/img/sohaniRestaurent.jpg",
                "name": "Sohani Restaurent",
                "date": "02/12/2021",
                "orderNo": 9675
            },
            {
                "cardId": 8,
                "RestaurentId": 12,
                "image": "../../Assets/img/gingerkafe.jpeg",
                "name": "Ginger Kafe",
                "date": "28/11/2021",
                "orderNo": 9245
            },
    ];

    pastOrders.forEach(e => {
            document.getElementById("pastOrdersContainer").innerHTML +=`
                        <div class="card col-xs-4 col-sm-4 col-md-4 col-lg-4" id="cardItem${e.cardId}" style="background-image: url('${e.image}');">
                            <div class="imageContent">
                                <p class="name"><b>${e.name}</b></p>
                                <p class="detail">${e.date}</p>
                                <p class="detail">Order#: ${e.orderNo}</p>
                                <a  href="" data-role="button" class="rate" onclick="rateSelectedOrder(${e.RestaurentId})" >Rate Order</a>
                            </div>
                        </div>
            `;
    });
});

