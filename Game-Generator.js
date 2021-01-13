    function gameGenerator(year){
    var APIKEY = "client_id=jZtAMxMBRH";
    var queryURL = " https://api.boardgameatlas.com/api/search?" + APIKEY + "&order_by=popularity&limit=5&year_published=" + year + "&lt_msrp=US";

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(response) {
        
        console.log(response)
        console.log(response.games[0].name)
        console.log(response.games[0].image_url)

        var gameIMG = $("<img>").attr("src", response.games[0].image_url);
        var gameName = $("<h1>").text(response.games[0].name)
        $("#game-div").append(gameIMG, gameName);
      });
    }

  $("#game-results").on("click", function(event) {
    event.preventDefault();

    const greatestGen = "1924 or earlier";
    const silentGen = "1925-1942";
    const babyBoomers = "1943-1964";
    const genX = "1965-1979";
    const millennials = "1980-2000";
    const genZ = "2001-2021"; 

    var gameResults = $("#birth-field").val().trim();

   
    var results = gameResults
    if( results == 1900, results <= 1924){
        msg = ("You were born in the Greatest Generation:" + (greatestGen));
      } else if (results >= 1925, results <= 1942){
        msg = ("You were born in the Silent Generation:" + (silentGen));
      } else if (results >= 1943, results <= 1964){
        msg = ("You were born in the Baby Boomer Generation:" + (babyBoomers) + response.filter.years[i].filter);
      } else if (results >= 1965, results <= 1979){
        msg = ("You were born in the Generation X Era:" + (genX));
      } else if (results >= 1980, results <= 2000){
        msg = ("You were born in the Millennials Generation:" + (millennials));
      } else if (results >= 2001, results <= 2021){
        msg = ("You were born in the Generation Z Era:" + (genZ));
      } else {
        msg = ("Your parents are going to be surprised with your arrival!");
      }
    var genRen = document.getElementById('game-div');
    genRen.textContent = msg;
    var generation = $("#birth-field").val().trim();
    gameGenerator(generation);
  });
