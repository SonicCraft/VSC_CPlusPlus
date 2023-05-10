import * as vscode from 'vscode';

import { getLink, shouldInvert } from "./settings";

function getCurrentWord(): string {
  const active = vscode.window.activeTextEditor;
  if (!active) {
    throw new Error("No active text editor");
  }
  const range = active.selection.isEmpty
    ? active.document.getWordRangeAtPosition(active.selection.active)
    : active.selection;
  if (range) {
    const word = active.document.getText(range);
    return word;
  } else {
    vscode.window.showInformationMessage("No identifier found, opening main page.");
    return "";
  }
}

export async function getWvContent(manually: boolean): Promise<string> {
  const word = manually ? "" : getCurrentWord();
  const link = getLink(word);
  const invertColor = shouldInvert();
  return `<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CPlusPlus.com</title>
<style>
  body, html
  {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
  }
  ${
    invertColor
      ? `
  body.vscode-dark,
  body.vscode-high-contrast {
    filter: invert(100%) hue-rotate(180deg) brightness(150%) contrast(80%);
  }`
      : ""
  }
  iframe
  {
    border: 0px;
  }
</style> 
<iframe src="${link}" width="100%" height="100%"></iframe>`;
}
