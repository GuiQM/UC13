import express, {Application, Request, Response} from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send
});

app.get("/nome", (req: Request, res: Response) => {
    res.send("<h1>Olá pessoa<h1>")
})

app.listen(3000, () => {
    console.log("Projeto rodando na porta 3000");
  
})