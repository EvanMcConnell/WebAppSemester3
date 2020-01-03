import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import postsRouter from './api/posts';
import itemsRouter from './api/items';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/contacts', contactsRouter);
app.use(express.static('public'));
app.use('/api/posts', postsRouter);
app.use('/api/items', itemsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});