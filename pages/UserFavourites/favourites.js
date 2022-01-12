var hiddenItems;
window.onload = function() {
   console.log(localStorage.getItem("isFavourite"));
    if(localStorage.getItem("isFavourite")){
        if(JSON.parse(localStorage.getItem("isFavourite"))===true){
            document.getElementById("item1").style.display="block";
            localStorage.setItem("favItems", 3);
            document.getElementById("empty").style.display="none";
        }
        else if(JSON.parse(localStorage.getItem("isFavourite"))===false){
            document.getElementById("item1").style.display="none";
            localStorage.setItem("favItems", 2);
            document.getElementById("empty").style.display="none";
        }
    }
    else{
        localStorage.setItem("isFavourite", false);
        document.getElementById("item1").style.display="none";
        localStorage.setItem("favItems", 2);
        document.getElementById("empty").style.display="none";
    }
  };

