# VsCode X# syntax highlighting
To publish an extension make sure that you are in the correct subfolder.
To publish the highlighting-extension move to `xsharp-lang`.

Follow the guide at: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

## Publish a new version

* Go to the `xsharp-lang` directory
* Update the version in the Packages.json file
* Update the Changelog
* Run the command `npx @vscode/vsce package`