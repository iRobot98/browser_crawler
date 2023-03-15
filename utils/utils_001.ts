import express from "express";
import fs from "fs";
import ash from "express-async-handler";
import path from "path";

export const removeDuplicates = (...args: any[]) => {
  let tmp: string[] = [];
  for (let k of args) {
    if (tmp.includes(k)) continue;
    tmp.push(k);
  }
  return tmp;
};

export const stringify = function (line: any, depth: number = 0): string {
  let ltt = Array(depth).fill("  ").join("");
  switch (typeof line) {
    case "string":
      return `"${line}"`;
    case "number":
      return line.toString();
    case "bigint":
      return line.toString();
    case "undefined":
      return "undefined";
    case "boolean":
      return line ? "true" : "false";
    case "function":
      const { name } = line;
      let lj = line
        .toString()
        .split("\n")
        .map((v: string) => `  ${ltt}${v}`)
        .join("\n");
      return `${name ? name : "anonymous"}:\n${lj}`;
    case "object":
      if (Array.isArray(line)) {
        return `[\n${line
          .map((v) => `${ltt}  ${stringify(v, depth++)}`)
          .join(",\n")}\n${ltt}]`;
      }
      let jl = Object.keys(line);

      let output = `{\n${jl
        .map((v) => ` ${ltt}${v}: ${stringify(line[v], depth++)},`)
        .join("\n")}\n${ltt}}`;
      return output;
    default:
      return "NotAString";
  }
};

let j = {
  ji: "hi",
  k: { a: "a", b: ["hallelujah", "you", "have", "overcome", "the", "grave"] },
};

const dev_logs = "./dev/logs";

if (!fs.existsSync(dev_logs)) {
  try {
    fs.mkdirSync(dev_logs, { recursive: true });
  } catch (err) {}
}

export const Log = async function (line: string): Promise<string> {
  let date = Date();
  line = `${date} ${line}`;
  fs.writeFileSync(`${dev_logs}/log_.txt`, line + "\n", {
    encoding: "utf-8",
    flag: "a+",
  });
  console.log(line);
  return line;
};

export const ErrorLog = async function (line: string | Error) {
  Log(`Error: ${stringify(line)}`).then((v) =>
    fs.writeFileSync(`${dev_logs}/log_errors.txt`, line + "\n", {
      encoding: "utf-8",
      flag: "a+",
    })
  );
};

export const RequestLog = ash(async function (
  req: express.Request,
  res: express.Response,
  callNext: express.NextFunction
) {
  let { originalUrl, ip, method } = req;
  res.on("finish", () => {
    const { statusCode } = res;
    Log(`${statusCode}  ${method}  ${ip}  ${originalUrl}`).then(
      (line: string) => {
        fs.writeFileSync(`${dev_logs}/log_requests.txt`, line + "\n", {
          encoding: "utf-8",
          flag: "a+",
        });
      }
    );
  });
  callNext();
});

export const DataLog = async function (
  file_name: string,
  line: string | Error
) {
  Log(`Data Log: ${stringify(line)}`).then((v) => {
    let isTextFile = file_name.endsWith(".txt");
    fs.writeFileSync(
      `${dev_logs}/${isTextFile ? file_name : file_name + ".txt"}`,
      line + "\n",
      {
        encoding: "utf-8",
        flag: "a+",
      }
    );
  });
};
