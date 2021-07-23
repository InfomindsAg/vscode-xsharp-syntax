'use strict';

import * as vscode from 'vscode';
import { XsharpFormatter } from './FormatterProvider';

export function activate(context: vscode.ExtensionContext) {
	const formatter = new XsharpFormatter();

	vscode.languages.registerDocumentFormattingEditProvider('xsharp', formatter);
}


