/*const vendorList = localStorage.getItem('vendorList');

if(vendorList == null) {
    vendorList = [
        {'Id':'1','imageurl':'../../Assets/img/pizza.jpg','name':'Arthur\'s Pizza','address':'No 10, Temple\'s Road, Rathmalana', 'rating':'4.5'},
        {'Id':'2','imageurl':'../../Assets/img/burger.jpg','name':'Burger Palace','address':'No 4, 3rd Lane, Koswatta', 'rating':'4.2'},
        {'Id':'3','imageurl':'../../Assets/img/drinks.jpg','name':'Udeni\'s Juice Bar','address':'169, High level Rd, Nugegoda', 'rating':'4.8'},
        {'Id':'1','imageurl':'../../Assets/img/pizza.jpg','name':'Arthur\'s Pizza','address':'No 10, Temple\'s Road, Rathmalana', 'rating':'4.5'},
        {'Id':'2','imageurl':'../../Assets/img/burger.jpg','name':'Burger Palace','address':'No 4, 3rd Lane, Koswatta', 'rating':'4.2'}
    ]
}*/

localStorage.setItem("isFavourite", false);

$(document).ready(function(){
    var menuItems = [
        {'id':'1','imageurl':'../../Assets/img/cheese.jpg','name':'Pizza 1','price':'1790', 'rating':'4.5'},
        {'id':'2','imageurl':'../../Assets/img/cheese.jpg','name':'Pizza 2','price':'2150', 'rating':'4.2'},
        {'id':'3','imageurl':'../../Assets/img/cheese.jpg','name':'Pizza 3','price':'1970', 'rating':'4.8'},
        {'id':'4','imageurl':'../../Assets/img/cheese.jpg','name':'Pizza 4','price':'2700', 'rating':'4.5'},
        {'id':'5','imageurl':'../../Assets/img/cheese.jpg','name':'Pizza 5','price':'1470', 'rating':'4.2'}
    ]
    menuItems.forEach(function(obj) {
        document.getElementById("cardList").innerHTML +='<a href="../Product/">\n' +
            '                <div class="card" id="cardItem">\n' +
            '                    <div class="row no-gutters">\n' +
            '                        <div class="image">\n' +
            '                            <img src="'+obj.imageurl+'" class="card-img" style="border-radius: 10px" alt="...">\n' +
            '                        </div>\n' +
            '                        <div class="desc">\n' +
            '                            <div class="card-body">\n' +
            '                                <h5 class="card-title">'+obj.name+'</h5>\n' +
            '                               <p class="card-text">Rs. '+obj.price+'</p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="next">\n' +
            '                            <div class="nextImage">\n' +
            '                                <img src="../../Assets/img/icons/next.svg" class="nextIcon"alt="...">\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </a><hr>';

    });
});