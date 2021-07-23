import * as vsc from 'vscode';


const BLOCK = new Map<string, string>([
    ["(?<!END )CLASS", "END CLASS"],
    ["(?<!END)IF|ELSE|ELSEIF", "ELSEIF|ENDIF|END"]
]);
const KEYS = [...BLOCK.keys()];
const VALS = [...BLOCK.values()];

const TAB_INDENT = "\t";

export class XsharpFormatter implements vsc.DocumentFormattingEditProvider {

    // TODO exclude comments for formatting

    private containsKeyword(line: string, keywords: string[]): boolean {
        return keywords.some(keyword => line.toUpperCase().match(`(${keyword})`));
    }

    private format(text: string): string {
        let numIndents = 0;
        let lines = text.split("\n");
        let result;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            if (this.containsKeyword(line, VALS)) {
                numIndents--;
            }

            line = this.addTabIndent(line, numIndents);

            if (this.containsKeyword(line, KEYS)) {
                numIndents++;
            }

            lines[i] = line;
        }

        result = lines.join("\n");
        return result;
    }

    private addTabIndent(line: string, numIndents: number): string {
        if (numIndents <= 0) {
            return line;
        }
        const indents = TAB_INDENT.repeat(numIndents);
        const result = indents.concat(line);

        return result;
    }

    private trimLines(text: string): string {
        let lines = text.split("\n");
        let result;

        lines = lines.map(line => line.trim());
        result = lines.join("\n");

        return result;
    }

    private formatDocument(document: vsc.TextDocument): string {
        let text = document.getText();

        text = this.trimLines(text);
        text = this.format(text);

        return text;
    }

    public provideDocumentFormattingEdits(document: vsc.TextDocument): vsc.TextEdit[] {
        const documentRange = new vsc.Range(
            document.lineAt(0).range.start,
            document.lineAt(document.lineCount - 1).range.end
        );
        const formattedDocument = this.formatDocument(document);

        return [vsc.TextEdit.replace(documentRange, formattedDocument)];
    }

}