//TODO import { supabase } from "./supabaseClient.js";
import express from "express"
import cors from 'cors'
const app = express()
const PORT = 3000;
app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('<h1>servidor up</h1>')
}) 


//TODO
app.get('/usuario', async (req, res) => {

    const {data, error} = await supabase
    .from('usuario')
    .select('*')
    
    if(error){
        console.error('Error al obtener usuarios:', error)
        return res.status(500).send('Error al obtener usuarios')
    }
    res.json(data)
    })




app.listen(PORT, ()=>{
    console.log("Servidor corriendo en http://localhost:",PORT);
})