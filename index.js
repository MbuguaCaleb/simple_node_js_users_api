/*More modern way of handling Imports in My Application*/
import express from 'express';
import bodyParser from 'body-parser';

/*When using default imports i can use any name to my routes*/
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

//Helps me parse my POST Request
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.get('/', (req, res) => res.send('Hallo from Home Page'));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
