const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const methodOverride = require('method-override');
const fs = require('fs');

const app = express();

//CAPTURE INFORMATION JSON
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

//SETUP STATIC FILES
app.use(express.static(path.resolve(__dirname, 'public')));

//SERVER RUNNING
app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000')   
});

//SETUP TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MAIN ROUTES
app.use('/', mainRoutes);

//ERROR 404
//app.use((req, res, next) => {
//    res.status(404).render('./views/not-found')
//});
