# CPlusPlus.com Reference - VS Code Extension

## Description:
This is a tool to browse [cplusplus.com](https://cplusplus.com) from within vscode essentially updating the original [library-documentation-cpp](https://github.com/gursahani/search-cpp-documentation) to work with VSCode webview, as the original does not.
You will be able to use this extension to search for library and methods documentation of the C++ standard.

## Planned Features:

1. Make dark mode copy VSCode colors ([get colors](https://stackoverflow.com/questions/47117621/how-to-get-the-vscode-theme-color-in-vscode-extensions), [set specific colors](https://blog.hubspot.com/website/change-background-color-html), and [get complementary color](https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color))
2. Block ads? ([unload ad part](https://stackoverflow.com/questions/39240278/how-to-block-ads-with-html-js))
## Usage:

### Intended usage:

Press <kbd>Ctrl+Shift+A</kbd> on Linux/Windows or <kbd>Command+Shift+A</kbd> on macOS, either with your cursor position onto the word you want search for, or at the end of a line to open the main page.
<!-- ![](https://s1.ax1x.com/2020/09/02/w9nkKf.gif) format for how to include a gif, keep for later -->
### Backup commands:

By opening Command Palette (<kbd>Ctrl+Shift+P</kbd>, <kbd>Command+Shift+P</kbd>), you can execute the commands `CPlusPlus.com: Search for the current word` and `CPlusPlus.com: Search manually`

## Settings:

### `cplplref.invertColorInDarkTheme`

When using vscode's Dark Theme or Dark High Contrast Theme, invert the page's color.

**Warning**: This feature is implemented using CSS filter and may result in sharper text edges, making it difficult to read.

## Credits:

This extension is inspired by [Cpp Reference - VS Code Extension](https://github.com/Guyutongxue/VSC_CppReference) which was inspired by [Cpp Reference and Documentation](https://github.com/FederAndInk/search-cpp-documentation) which was a fork of [library-documentation-cpp](https://github.com/gursahani/search-cpp-documentation)
