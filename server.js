//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/rsocial'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname+'/dist/rsocial/index.html'));
});

// Start the app by listening on the default Heroku port
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});