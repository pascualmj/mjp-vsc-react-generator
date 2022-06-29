// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { generator } from "./generator";
import { Gens } from "./types";

const capitalizeFirstLetter = (str: string) =>
  (str.charAt(0).toUpperCase() + str.slice(1)).replace(/ /g, "");

const registerGenCommands = (context: vscode.ExtensionContext, gen: Gens) => {
  return vscode.commands.registerCommand("mjpgen." + gen, (uri: vscode.Uri) => {
    vscode.window
      .showInputBox({
        title: "Enter file name",
      })
      .then((res) => {
        if (res && res.length > 2) {
          generator(gen, capitalizeFirstLetter(res), uri.fsPath);
        } else {
          vscode.window.showInformationMessage(
            "component name must be >= 3 chars"
          );
        }
      });
  });
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "mjp-generator" is now active!');

  context.subscriptions.push(
    registerGenCommands(context, "generatorEmpty"),
    registerGenCommands(context, "generatorNew"),
    registerGenCommands(context, "generatorDumb"),
    registerGenCommands(context, "generatorProvider"),
    registerGenCommands(context, "generatorPrimeReact")
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
