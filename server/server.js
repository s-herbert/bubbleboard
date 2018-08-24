const express = require('express');
const bodyParser = require('body-parser'); //to access req.body

//create express server
const app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + './../'))

//create server routers
const router = require('./router');
router(app);

app.listen(3000, () => console.log('backend server up! this is run on port 3000, but visit 8080 for the dev server'))
