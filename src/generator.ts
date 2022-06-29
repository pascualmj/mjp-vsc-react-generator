import path = require("path");
import fs = require("fs");
import { dumbFiles } from "./FileTypes/dumb.files";
import { emptyFiles } from "./FileTypes/empty.files";
import { GeneratorFile, Gens } from "./types";

const fileTypes = ["component", "bloc", "style"];

export const generator = (gen: Gens, name: string, fsPath: string) => {
  let filesToGen: GeneratorFile = {};
  let fileName = name;
  switch (gen) {
    case "generatorDumb":
      filesToGen = dumbFiles;
      break;
    case "generatorEmpty":
      filesToGen = emptyFiles;
      break;
    default:
      filesToGen = emptyFiles;
      break;
  }
  const splits = fsPath.split("/") || [""];
  const dirPath =
    (splits[splits.length - 1].indexOf(".") > 0
      ? path.dirname(fsPath)
      : fsPath) + `/${fileName}`;
  fs.mkdirSync(dirPath);
  fileTypes.forEach((ft) => {
    if (filesToGen[ft]) {
      const file = filesToGen[ft]
        ?.replace(/{{NAME}}/g, name)
        ?.replace(/{{LNAME}}/g, name.toLocaleLowerCase());
      const ext = ft === "component" ? "" : `.${ft}`;
      fs.writeFile(`${dirPath}/${fileName}${ext}.tsx`, file, (err) => {
        console.error(err);
      });
    }
  });
};
