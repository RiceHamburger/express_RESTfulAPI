import express from "express";
// HTTP 請求解析
import bodyParser from 'body-parser';
// 跨來源資源共享CORS
import cors from 'cors';
// 連線存取紀錄200、404 等狀態碼
import morgan from 'morgan';
import config from "./config";
import index from "../server/routes/index.route";

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// HTTP request logger middleware for node.js
app.use(morgan('dev'));

/* GET home page. */
app.get("/", (req, res) => {
  res.send(
    `server started on  port http://127.0.0.1:${config.port} (${config.env})`
  );
});

app.use("/api", index);

export default app;
