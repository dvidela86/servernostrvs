import express from "express";
import cors from "cors";
import PORT from './config.js';
import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/task.routers.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes)
app.use(taskRoutes)
app.listen(PORT)
console.log('server se ejecuta en el puerto: '+PORT)