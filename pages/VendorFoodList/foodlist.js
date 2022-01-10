$(document).on("pageinit", function() {
    $("#add-food-item").on({
        popupafterclose: function() {
            if (buttonClick) {
                console.log("Opening 2nd Popup.");
                setTimeout(function() {
                    $("#v-promo-popup-success").popup("open", {
                        positionTo: "#add-food-item"
                    })
                }, 100);
                buttonClick = false;
            } else {
                console.log(buttonClick);
            }
        }
    });
});