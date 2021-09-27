
const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log("Listening on port", PORT));
require("dotenv").config({ path: "./.env" })

 const bodyparser = require('body-parser');
 const playerRoutes= require('./api/routes/players');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
 app.use('/players', playerRoutes);
app.use('',(req, res, next) => {
    res.status(200).json({
        message: 'Working'
    });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method=== 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT','POST', 'PATCH','DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    const error = new Error('Not found.');
    error.status= 404;
    next(error);
});

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});




// app.post('/terrorists', (req, res) => {
//     pool.query(`INSERT INTO public."Terrorists" (name, sex, reward, citizenship, birthplace, ranking) VALUES ('${req.body.name}'::character varying, '${req.body.sex}'::character varying, '${req.body.reward}'::bigint, '${req.body.citizenship}'::character varying, '${req.body.birthplace}'::character varying, '${req.body.ranking}'::bigint) returning name;`,
//         (err, response) => {
//             if(err) {
//                 res.send(err);
//                 console.log(err);
//                 return;
//             }
//             res.redirect('http://localhost:5000/terrorists')
//             console.log(response);
//         }
//     );
// });

// app.delete('/terrorists', (req, res) => {
//     if(req.query.name) {
//         let query = req.query.name.replace(/'/g, "");
//         console.log(query);
//         pool.query(`DELETE FROM public."Terrorists" WHERE UPPER(name) LIKE UPPER('%${query}%')`, (err, response) => {
//             if(err) {
//                 res.send(err);
//                 console.log(err);
//                 return;
//             }
//             res.send(response.rows);
//         });
//     }
// })



// const express = require('express');
// const app = express();
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());
// const morgan = require('morgan');
// const bodyparser = require('body-parser');
// const productsRoutes= require('./api/routes/products');
// const ordersRoutes= require('./api/routes/orders');

// //för att skicka filer
// const busboy = require('connect-busboy');
// const busboyBodyParser = require('busboy-body-parser');
// app.use(busboy());
// app.use(busboyBodyParser());

// app.use(morgan('dev'));
// app.use(bodyparser.urlencoded({extended: false}));
// app.use(bodyparser.json());

// // require('./api/routes')(app);
// app.use('/products', productsRoutes);
// app.use('/orders', ordersRoutes);
// /*app.use('',(req, res, next) => {
//     res.status(200).json({
//         message: 'Working'
//     });
// });*/

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if (req.method=== 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods','PUT','POST', 'PATCH','DELETE');
//         return res.status(200).json({});
//     }
//     next();
// });

// app.use((req, res, next) => {
//     const error = new Error('Not found.');
//     error.status= 404;
//     next(error);
// });

// app.use((error,req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message: error.message
//         }
//     });
// });

module.exports= app;
