//======IMPORTS
const express = require('express');

//====== APP ======
const app = express();
app.use( express.static('./public') );

require('dotenv').config();
//====== CONSTANTS ======

const PORT = process.env.PORT || 3000 ;

//====== ROUTES ======

const appRouter = require('./src/routes/appRoute')

//====== OTHERS ======
app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/' , appRouter );

app.listen( PORT , ()=>{
    console.log(`Server App listening on port ${PORT}`);
} )