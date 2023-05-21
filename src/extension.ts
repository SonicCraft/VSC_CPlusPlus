// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { getWvContent } from "./webview";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
  let wvPanel: vscode.WebviewPanel | undefined = undefined;
  async function main(manually: boolean): Promise<void> {
    try {
      const content: string = await getWvContent(manually);
      if (wvPanel) {
        wvPanel.reveal(vscode.ViewColumn.Beside);
      } else {
        wvPanel = vscode.window.createWebviewPanel(
          "docs",
          "CPlusPlus.com",
          {
            viewColumn: vscode.ViewColumn.Beside,
            preserveFocus: false,
          },
          {
            enableScripts: true,
            enableFindWidget: true,
            retainContextWhenHidden: true,
          }
        );
        wvPanel.onDidDispose(
          () => {
            wvPanel = undefined;
          },
          null,
          context.subscriptions
        );
      }
      wvPanel.webview.html = content;
    } catch (error) {
      if (error instanceof Error) {
          vscode.window.showInformationMessage(error.message);
      }
    }
  }
  const open = vscode.commands.registerCommand("cplplref.open", () => {
    main(false);
  });
  const search = vscode.commands.registerCommand("cplplref.search", () => {
    main(true);
  });
}
// This method is called when your extension is deactivated
export function deactivate() {}
