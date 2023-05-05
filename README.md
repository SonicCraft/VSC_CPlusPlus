# cplusplus.com Reference - VS Code Extension


This extension is inspired by [Cpp Reference - VS Code Extension](https://github.com/Guyutongxue/VSC_CppReference) which was inspired by [Cpp Reference and Documentation](https://github.com/FederAndInk/search-cpp-documentation) which was a fork of [library-documentation-cpp](https://github.com/gursahani/search-cpp-documentation)

This will be a tool to browse [cplusplus.com](https://cplusplus.com) from within vscode essentially updating the original [library-documentation-cpp](https://github.com/gursahani/search-cpp-documentation) to work with VSCode webview, as the original does not.
You will be able to use this extension to search for library and methods documentation of the C++ standard.

## TODO:

1. Learn how to use TypeScript
2. Remove irrelevant code
3. Change basic variables (cppreference.com to cplusplus.com, etc.)
4. Figure out how to take advantage of cplusplus.com's working search
5. Edit .json files to match new project
6. Make dark mode on by default
7. Update this README again (instruction gif, edit description, etc.)

## Planned Features:

1. Make dark mode copy VSCode colors
2. implement cplusplus search suggestions (as an option, I want the default to drop whatever you have selected into cplusplus.com's search bar)
## Usage

Set your cursor position onto the word you want search for, then press <kbd>Ctrl+Shift+A</kbd> on Linux/Windows or <kbd>Command+Shift+A</kbd> on macOS.
<!-- ![](https://s1.ax1x.com/2020/09/02/w9nkKf.gif) format for how to include a gif, keep for later -->
You can also search manually by opening Command Palette (<kbd>Ctrl+Shift+P</kbd>, <kbd>Command+Shift+P</kbd>) and execute command `CPlusPlus.com: Search manually`.

## Settings

### `cppref.lang`
### `cppref.alternative.enabled`
### `cppref.alternative.url`

These settings will be depreciated soon, as cplusplus.com only supports English and has no alternative urls.
### `cppref.invertColorInDarkTheme`

When using vscode's Dark Theme or Dark High Contrast Theme, invert the page's color.
This I might change to have a default of on.
Possibly grab the colors of the editor background for a nice matching effect?

**Warning**: This feature is implemented using CSS filter and may result in sharper text edges, making it difficult to read.

## About indexing
Currently:
Repo [Guyutongxue/cppreference-index](https://github.com/Guyutongxue/cppreference-index) stores code for generating search index.
But cplusplus.com has a working search index, so I might be able to switch to that instead.
