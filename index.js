const express = require('express');
const path = require('path');

const app = express();

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname)));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/frontend/index.html'));
});

const port  = process.env.PORT || '8080';
app.set('port', port);

app.listen(port, () => {
	console.log(port);
});