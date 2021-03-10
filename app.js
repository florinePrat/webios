if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

const url = process.env.MONGODB_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  });
const db = mongoose.connection;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
db.once('open', _ => {
    console.log('Database connected')
});
db.on('error', err => {
    console.error('connection error:', err)
});
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(cors());

//routes accessible without being authenticated are redirected in routes
//app.use("/api", require('./server/routes/visitorRoutes'));

//routes accessible without being authenticated are redirected in routes
app.use("/api", require('./server/routes/authRoutes'));

//All routes with retricted content pass trough the isAuth middleware to verify authentication and if have organizer rights
// app.use("/api", require('./server/middleware/auth'), require('./server/routes/organizerRoutes'));

//All routes with retricted content pass trough the isAuth middleware to verify authentication and if have admin rights
// app.use("/api", require('./server/middleware/admin'), require('./server/routes/adminRoutes'));

/* Handling errors */
app.use((req,res,next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.json({
        error : {
            message : err.message,
            status : err.status
        }
    });
});

module.exports = app;
