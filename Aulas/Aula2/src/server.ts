import express, { Application, Request, Response, response } from "express";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

//Rota GET (Buscar dados)
app.get(`/usuarios`, (req: Request, res: Response) => {
  res.status(200).json({ mensagem: `Lista de usuários` });
});

// Rota POST (Criar novo usuário)
app.post(`/usuarios`, (req: Request, res: Response) => {
  const { nome } = req.body;
  if (!nome) {
    res.status(400).json({ mensagem: `Nome é obrigatório!` });
  }
  res.status(201).json({
    mensagem: `Usuario ${nome} criado com sucesso!`});
});


//Atividade


//SOBRE
app.post(`/sobre`, (req: Request, res: Response) => {
  const { nome, idade, desc } = req.body;
  if (!nome || !idade || !desc) {
    res.status(400).json({ mensagem: `Insira nome, idade e descrição!` });
  }
  res.status(201).json({
    mensagem: `Usuario ${nome} de idade ${idade} de descrição ${desc} foi criado com sucesso!`});

});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//Comentários
app.post(`/comentarios`, (req: Request, res: Response) => {
  const {text} = req.body;
  if(!text) {
    res.status(400).json({mensagem: "Erro"});
  }
  res.status(201).json({mensagem: `${text}`});
});
