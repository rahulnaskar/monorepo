import express, {Request, Response} from 'express';
import { addNumbers } from '@repeatmono/utils';


const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello`);
})

app.listen(port, () => {
    console.log(`Express listening on port http://localhost:${port}`);
    console.log(`Adding numbers from local package ${addNumbers(3, 4)}`);
})
