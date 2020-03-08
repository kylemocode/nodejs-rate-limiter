import express, { Application, Request, Response, NextFunction } from 'express';
import rateLimiter from './middleware/rateLimiter';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json());

app.get('/', rateLimiter, (req: Request, res: Response) => {
	res.send('test');
})

app.listen(5000, () => {
	console.log('server running on port 5000');
})