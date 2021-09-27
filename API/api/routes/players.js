const express = require('express');
const  router = express();

const dbConfig = require("../config/db.config.js");

const { Pool, Client } = require('pg');
const pool = new Pool({
  user: dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD,
  port: 5432,
});

// http://localhost:5000/players/2?name="kurt ove"
// http://adress:port/subadress/param/query
router.get('/:id', (req, res, next) => {

    console.log(req.params.id);
    console.log(req.query);

    if(req.params.id) {
        let id = req.params.id
        pool.query(`SELECT * FROM public."players" WHERE id = ${id}`, (err, response) => {
            if(err) {
                res.send(err);
                console.log(err);
                return;
            }
            res.send(response.rows);
        });
    }
    else 
    res.status(400).json({
        message: 'No id entered.'
    })

})
// http://localhost:5000/players  //Alla spelare
// http://localhost:5000/players?name='Lena Ove'  //Funkar
// http://localhost:5000/players?name="Lena Ove"   //Funkar inte
router.get('/', (req, res) => {
    // console.log(dbConfig.USER);
            if(req.query.name) {
                let query = req.query.name.replace(/'/g, "");
                pool.query(`SELECT * FROM public."players" WHERE UPPER(name) LIKE UPPER('%${query}%')`, (err, response) => {
                    if(err) {
                        res.send(err);
                        console.log(err);
                        return;
                    }
                    res.send(response.rows);
                });
            } else {
                pool.query('SELECT * FROM public."players"', (err, response) => {
                    if(err) {
                        res.send(err);
                        console.log(err);
                        return;
                    }
                    // res.send(response.rows);
                    res.status(200).json({
                        message: 'Hämtar alla värden',
                        items: response.rows
                    })
                });
            }
});


router.post('/', (req, res, next) => {


    //Vill man kan man samla alla req.body... i en variabel som nedan. Då behöver man bara skriva player.name istället för req.body.name när man vill använd värdet.
    // const player={
    //     name: req.body.name,
    //     birthdate: req.body.birthdate
    //     ....
    // }
    // Exempel nedan, i min db så autoskapas id, därav matas det inte in när jag kör post. Har man inte auto id så lägg till detta...  "id":"1",
// {"name":"Ove Andre","birthdate":"1992-02-09T23:00:00.000Z","points":12,"description":"Paddelkungen från kungsan! ","team_id":"1"}

    pool.query(`INSERT INTO public."players" (name, birthdate, points, description, team_id) VALUES ('${req.body.name}'::character varying, '${req.body.birthdate}'::date, '${req.body.points}'::bigint, '${req.body.description}'::character varying, '${req.body.team_id}'::bigint) returning name;`,
        (err, response) => {
            if(err) {
                res.send(err);
                console.log(err);
                return;
            }
               res.status(200).json({
        message: 'New player added',
        Player: response.rows[0].name
    })
    // console.log(response.rows[0].name);
    //         console.log(response);
        }
    );

});

router.patch('/:id', (req, res, next) => {
   //localhost:5000/players/2
   //Kör samma exempel som på post för att skriva över id 2.
    pool.query(`UPDATE public."players" SET  (name, birthdate, points, description, team_id) = ('${req.body.name}'::character varying, '${req.body.birthdate}'::date, '${req.body.points}'::bigint, '${req.body.description}'::character varying, '${req.body.team_id}'::bigint)  WHERE id = ${req.params.id}`,
        (err, response) => {
            if(err) {
                res.send(err);
                console.log(err);
                return;
            }
            console.log(response);
            res.status(200).json({
                message: 'Updated',
                id: req.params.id
            })
        }
    );


    
});


router.delete('/:id', (req, res, next) => {

        if(req.params.id) {
            let id = req.params.id;
            pool.query(`DELETE FROM public."players" WHERE id =  ${id}`, (err, response) => {
                if(err) {
                    res.send(err);
                    console.log(err);
                    return;
                }
                res.status(200).json({
                    message: 'Removed',
                    id: req.params.id
                })
            });
        }
    });

module.exports= router;