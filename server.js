const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist/`));
app.get('*', (req, res) => {
  res.sendFile(`./dist/index.html`);
});
console.log('Console Listening'); 