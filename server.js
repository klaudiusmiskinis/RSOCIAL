const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/rsocial'));
app.get('*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/rsocial/'})
})
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/rsocial/index.html'));});
app.listen(process.env.PORT || 8080);