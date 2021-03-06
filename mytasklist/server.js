const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./route/index');
const tasks = require('./route/tasks');

const app = express();

const port = 3000;

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

// body parser mw

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);



//start server

app.listen(port, () => console.log(`Server started on port ${port}`));
