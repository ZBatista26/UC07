
// Importando com (commonjs)
const express = require("express");
const dotenv = require("dotenv");
const alunoRoutes = require("./src/modules/aluno/routes/index")
const enderecoRoutes = require("./src/modules/endereco/routes/index")
const cors =  require ('cors')
dotenv.config();


const port = process.env.PORTA;
const app = express();
app.use(cors());
// Aplicação use express como json(javascript object notation)
app.use(express.json());

// passando as rotas de Aluno do route
app.use(alunoRoutes); // ex.: "/api/oQueEstiverVindoDoRoute"

app.use(enderecoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
