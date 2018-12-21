import express, { Request, Response } from 'express';
import Controller from './controller';
import config from './config';
const app = express();
app.use((req: Request, res: Response, next: Function) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.get('/categories', new Controller().getCategory);

app.listen(config.port, ()=>{
    console.log(`App listening in port ${config.port}`)
});

export default app;