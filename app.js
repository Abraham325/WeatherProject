const express = require("express");
const https =  require("https");

const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos,Nigeria&appid=37a923e5849b45934fe4926b38b2c8ec&units=metric"

    https.get(url, function(response){
        console.log(response.statusCode);
    });





    res.send("server is up and running.");

});
 




app.listen(3000, function(){

    console.log("server is running on port 3000");
})