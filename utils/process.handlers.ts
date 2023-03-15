import { stringify, ErrorLog } from "./utils_001";

process.on("uncaughtException", (e: Error) => {
  ErrorLog(stringify(e));
});

process.on("unhandledRejection", (e: any) => {
  ErrorLog(stringify(e));
});

export {};
