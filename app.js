const express = require ('express');
const app = express();
const heroRoutes = require ('./controllers/heroRoutes')

const PORT = 3000

app.use(express.json()); // Middleware (LEITURA DO JSON)
app.use('/api', heroRoutes);

app.listen(PORT, () =>{
    console.log("Servidor rodando como a nave dos vingadores")
})