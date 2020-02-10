// import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from "cors";
import * as http from "http";
// import { paths } from "./paths";
import authorized from "./routes/app-protected-routes";

var app = express();
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"
};

  createConnection({
    type: "mysql",
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    username: "b092c43fefd2d3",
    password: "d3b9ec6e",
    database: "heroku_6059c3025ddf733",
    entities: [__dirname + "/entity/*.{ts,js}"],
    synchronize: true,
    logging: false
  })
  .then((connection) => {
    app.use(cors(options));
    app.use("/api/v1", authorized);

    const PORT = process.env.PORT || 3000;
    http.createServer(app).listen(PORT);
    console.log("database connected sucessfully");
    console.log("connected sucessfully on port 3000");
  })
  .catch((error) => console.log(error));
