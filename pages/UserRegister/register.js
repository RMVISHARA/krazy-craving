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

    var locationObj = {lat: 6.9271,lng:79.8612,name:"Colombo, Sri Lanka"};
    localStorage.setItem("locs",JSON.stringify(locationObj));
    window.location.href = "../HomeUser"
}