import * as vsc from 'vscode';

const KEYWORDS = "CLASS";
const BLOCK = `(END (${KEYWORDS})?)|(${KEYWORDS})`;
const REGEX = new RegExp(`((.|\n)*?)((${BLOCK}).*)((.|\n)*)`, "i");
const TAB_INDENT = "\t";

export class XsharpFormatter implements vsc.DocumentFormattingEditProvider {

    private format(text: string): string {
        const matches = text.match(REGEX);

        if (matches === null) {
            return text;
        }
        const keyword = matches[4].toLowerCase();
        let strKeywordLine = matches[3];
        let strBeforeKeyword = matches[1];
        let strAfterKeyword = matches[8];

        if (keyword.includes("end")) {
            strBeforeKeyword = this.addTabIndent(strBeforeKeyword);
        }
        strAfterKeyword = this.format(strAfterKeyword);


        let result = strBeforeKeyword.concat(strKeywordLine, strAfterKeyword);

        return result;
    }

    private addTabIndent(text: string): string {
        let lines = text.split("\n");

        lines = lines.map(line => {
            if (line === "") {
                return line;
            } else {
                return TAB_INDENT.concat(line);
            }
        }
        );
        const result = lines.join("\n");

        return result;
    }

    private formatDocument(document: vsc.TextDocument): string {
        let text = document.getText();
        let lines = text.split("\n");

        lines = lines.map(line => line.trim());
        text = lines.join("\n");
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