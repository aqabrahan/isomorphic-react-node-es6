import path from 'path';
import express from 'express';

const app = express();

const publicPath = express.static(path.resolve(__dirname, '../'));
const indexPath = path.resolve(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (req, res) => {
  res.sendFile(indexPath);
})

export default app;