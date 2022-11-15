import  express from "express";
import morgan  from "morgan";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions"

import citeRoutes from "./routes/task";

const cors = require('cors');
const specs = swaggerJSDoc(options);

const app = express();


app.use(cors());

app.use(morgan('dev'));

app.use(express.json())

app.use(citeRoutes);


app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))


export default app;