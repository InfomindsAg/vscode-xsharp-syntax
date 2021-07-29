# xsharp-lang README
This file briefly describes the content of this repository.

## Extensions
There are two extensions: xsharp-lang and xsharp-formatter. As the names suggests xsharp-lang defines the grammar of X# which is used for syntax highlighting and xsharp-formatter describes a vscode formatter. The formatter is not finished yet. The following readme describes the xsharp-lang extension.

## xsharp-lang
### Files

The main file is `syntaxes/xsharp.tmLanguage.json`. It is used to define the grammar and the highlighting. 
The `language-configuration.json` file can be used to define tokens for brackets and comments.

### xsharp.tmLanguage.json

All used patterns must be placed in the initial `patterns` block. A pattern can be referenced with the `include: #<pattern>` keyword. These referenced patterns should be located in the `repository` block. A pattern mainly consists of two keywords `name` and `match`.
`match` is used to select text from the file by a regex and `name` specifies the style of the matched text.
To find appropriate `name` values you can look at other languages using the scope inspector (See [Info](#info)). 
Multiple `match` are placed in `patterns`. With `captures` regex groups can be addressed and handled inside the json block.

The two links in [Further help](#further-help) provide a more extensive explanation. 

### Info
VsCode offers a scope inspector to inspect the tokens. It is useful to check if the correct pattern matched. It can be used with `CTRL + SHIFT + P` and `Developer: Inspect Editor Tokens and Scopes`.

### Install your extension

* To start using your extension with Visual Studio Code copy the `xsharp-lang` folder into the `<user home>/.vscode/extensions` folder and restart Code.
* To debug your extension start debugging the project with vsCode.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.

### Further help
- `vsc-extension-quickstart.md`
- Syntax Highlight Guide: https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
- TextMate Grammar (tmLanguage.json): https://macromates.com/manual/en/language_grammars
