# xsharp-lang README
This file briefly describes the content of this grammar extension.

## Files

The main file is `syntaxes/xsharp.tmLanguage.json`. It is used to define the grammar and the styling. All used patterns must be placed in the inital `patterns` block. A pattern can be referenced with the `include: #<pattern>` keyword. All referenced patterns should be located in the `repository` block. A pattern consist of two main keywords `name` and `match` (See references to lookup all keywords).
`match` is used to select text from the file by a regex. `name` specifies the style of the matched text.
To find appropriate `name` values you can lookup other languages using the scope inspector (See info). 
Multiple `match` are placed in `patterns`. With `captures` regex groups can be addressed and handled inside the json block.

## Install your extension

* To start using your extension with Visual Studio Code copy the `xsharp-lang` folder into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.

## Info
VsCode offers a scope inspector to inspect the tokens. It is useful to check if the correct pattern matched. It can be used with `CTRL + SHIFT + P` and `Developer: Inspect Editor Tokens and Scopes`.

## References
`vsc-extension-quickstart.md`
Syntax Highlight Guide: https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
TextMate Grammar (tmLanguage.json): https://macromates.com/manual/en/language_grammars
