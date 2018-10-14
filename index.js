const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/frontend'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});

const port  = process.env.PORT || '8080';
app.set('port', port);

app.listen(port, () => {
	console.log(port);
});