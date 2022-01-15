$(document).ready(function() 
{
    var users = [];
    var points = 10000;

    for (let i = 0; i < 100; i++)
    {
        // let myPromise = new Promise(function(myResolve, myReject) {
        //     $.ajax({
        //         url: 'https://randomuser.me/api/',
        //         dataType: 'json',
        //         success: function(data) {
        //             var userName = `${data.results[0].name.fisrt} ${data.results[0].name.last}`;
        //             myResolve(userName);
        //         }
        //     });
        // });
          
        // myPromise.then(
        //     function(value) {
        //         if( i != 20 ){
        //             users.push({ bgcolor: "ffffff", rank: i, image: "../Assets/img/boy.jpg", name: value, points: points});
        //         }else{
        //             users.push({ bgcolor: "fc9920", rank: i, image: "../Assets/img/boy2.jpg", name: "Udara Nayana", points: points})
        //         }
        //     }
        // );

        if( i != 20 ){
            users.push({ bgcolor: "ffffff", rank: i+1, image: "../../Assets/img/boy.jpg", name: "Jhon Doe", points: points});
        }else{
            users.push({ bgcolor: "fc9920", rank: i+1, image: "../../Assets/img/boy2.jpg", name: "Udara Nayana", points: points})
        }
        
        points = points - ( 1 + Math.floor(Math.random() * 21) );
    }

    outputHtml = ``;
    users.map(x => {
            outputHtml += `
                    <div class="raw">
                        <div class="details" style="background-color: #${x.bgcolor};">
                            <div class="number">#${x.rank}</div>
                            <img src="${x.image}" class="propic">
                            <div class="name">${x.name}</div>
                            <div class="score">${x.points}</div>
                        </div>
                    </div>
        `;
    });

    $("#leaderboardRankings").html(outputHtml);
});

