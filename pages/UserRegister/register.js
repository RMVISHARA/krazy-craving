function Save() {
    var favVendors = {
        '1':false,
        '2':false,
        '3':false,
        '4':true,
        '5':false,
        '6':false,
        '7':true,
        '8':true,
        '9':false,
        '10':false,
        '11':false,
        '12':false,
    };
    localStorage.setItem("favVendors",JSON.stringify(favVendors));

    var locationObj = [{lat: 6.898122099999999,lng: 79.9543546,name: "993/A gonawatta road malabe"}];
    localStorage.setItem("locs",JSON.stringify(locationObj));
    window.location.href = "../HomeUser"
}