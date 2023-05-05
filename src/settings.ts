import vscode from "vscode";

// This function doesn't need to be in settings.ts
export function getLink(path: string): string {
  return `https://cplusplus.com/search.do?q=${path}`;
}

export function getSearchEnginePath(word: string) {
  const encodedWord = encodeURIComponent("site:cppreference.com " + word);
  type SearchEngineEnum = "Google" | "Bing" | "DuckDuckGo" | "Baidu";
  const searchEngine: SearchEngineEnum = vscode.workspace
    .getConfiguration("cppref")
    .get("searchEngine") as SearchEngineEnum;
  switch (searchEngine) {
    case "DuckDuckGo":
      return `https://duckduckgo.com/${encodedWord}`;
    case "Google":
      return `https://google.com/search?q=${encodedWord}`;
    case "Bing":
      return `https://www.bing.com/search?q=${encodedWord}`;
    case "Baidu":
      return `https://www.baidu.com/s?wd=${encodedWord}`;
  }
}

export function shouldInvert() {
  return vscode.workspace.getConfiguration("cppref").get("invertColorInDarkTheme", false);
}
