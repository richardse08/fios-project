var express = require("express"); // Require express
var app = express();
var port = process.env.PORT || 5000; // Set the port


app.use("/", express.static(__dirname + "/public")); // This will serve the public docs
app.set("view engine", "ejs"); // Set view engine and give extension
app.set("views", "./views"); // Rename views a folder called views



// Render ejs for homepage
app.get("/", function(request, response) {

    // Use render to run through ejs and then send up the index.ejs (which is my homepage)
    response.render('index');

});



// Render ejs for index homepage
app.get("/index", function(request, response) {
    // Use render to run through ejs and then send up the index.ejs
    response.render('index');
});



// Render ejs for shop fios
app.get("/shop-fios", function(request, response) {
    // Use render to run through ejs and then send up the shop-fios.ejs
    response.render('shop-fios');
});



// Render ejs for why fios
app.get("/why-fios", function(request, response) {
    // Use render to run through ejs and then send up the why-fios
    response.render('why-fios');
});



// Render ejs for why fios
app.get("/support", function(request, response) {
    // Use render to run through ejs and then send up the why-fios
    response.render('support');
});




//Open browser to “localhost:<port>” to view pages
app.listen(port);
