import fs from "fs";
import path from "path";
import { removeDuplicates } from "./utils_001";

const fetch_dirs = (p_th = ".") =>
  fs.readdirSync(p_th, { encoding: "utf-8", withFileTypes: true });

const invalid_folders = [".git", "node_modules", ".vscode", "dist"];
const invalid_file_types = [".txt"];

const filter_invalid_dirs = (v: any) =>
  v.isDirectory() && !invalid_folders.includes(v.name);

const add_dir = (p: string) => {
  let d = fetch_dirs(p).filter(filter_invalid_dirs);
  let j: string[] = [];
  for (let k of d) {
    if (k.isDirectory()) {
      let n = `${p}/${k.name}`;
      j.push(n, ...add_dir(n));
    }
  }
  return j;
};

export const store: { files: string[]; dirs: string[] } = {
  files: [],
  dirs: [],
};

if (!fs.existsSync("./dev/data"))
  fs.mkdirSync("./dev/data", { recursive: true });

setInterval(() => {
  read_dirs()
    .then(() =>
      fs.writeFileSync("./dev/data/fileslist.json", JSON.stringify(store), {
        flag: "w",
        encoding: "utf-8",
      })
    )
    .then(() => console.log("files_list updated"));
}, 60 * 1000);

export const read_dirs = async (Path = ".") => {
  store.dirs = add_dir(Path);
  store.dirs.forEach((k) =>
    store.files.push(
      ...fetch_dirs(k)
        .filter((v) => !v.isDirectory())
        .map((v) => `${k}/${v.name}`)
        .filter((v) => {
          for (let k of invalid_file_types) if (v.includes(k)) return false;
          return true;
        })
    )
  );
  store.dirs = removeDuplicates(...store.dirs);
  store.files = removeDuplicates(...store.files);
};

read_dirs();
