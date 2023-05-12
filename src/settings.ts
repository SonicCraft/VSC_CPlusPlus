import * as vscode from 'vscode';
// This function doesn't need to be in settings.ts
export function getLink(path: string): string {
  if (path === "") {
    return 'https://cplusplus.com/reference/';
  } else {
    return `https://cplusplus.com/search.do?q=${path}#gsc.tab=0&gsc.q=${path}&gsc.page=1`;
  }
}

export function shouldInvert() {
  return vscode.workspace.getConfiguration("cplplref").get("invertColorInDarkTheme", false);
}
