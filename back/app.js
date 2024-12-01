import express from 'express';
import cors from 'cors';
import { pool } from './server/pool.js';

const puerto = 3000;
const app = express();


//middlewares
app.use(express.json());
app.use(cors());

app.listen(puerto, ()=> {
    console.log(`Servidor funcionando en puerto ${puerto}`)
});


app.get("/posts", async(req,res) => {
    const { rows } = await pool.query('SELECT * FROM posts');

    res.json(rows)
});

app.post("/posts", async(req,res) => {
    const { titulo, img, descripcion } = req.body;

    const consulta = 'INSERT INTO posts VALUES(DEFAULT,$1,$2,$3,DEFAULT)';
    const values = [titulo, img, descripcion];

    const insert = await pool.query(consulta,values);

    if(insert) {
        res.send('Nuevo cancion creada');
    }
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "../front/index.html")
});