import { read_dirs, store } from "./utils/directory_walk";
import http from "http";
import http2 from "http2";
import https from "https";
import express from "express";

import { Log, RequestLog } from "./utils/utils_001";
import router from "./routes";

const app = express();
app.use(RequestLog);
const port = 450;
app.use(router);
app.listen(port, () => Log(`listening on: ${port}`));
