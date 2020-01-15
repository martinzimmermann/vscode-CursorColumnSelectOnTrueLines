// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TextEditor, TextEditorEdit, Position } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "CursorColumnSelectOnTrueLines" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('onTrueLines.cursorColumnSelectUpOnTrueLines',
	(textEditor: TextEditor, edit: TextEditorEdit, args: any[]) => {
		var first_selection = textEditor.selections[0];
		var last_selection = textEditor.selections[textEditor.selections.length - 1];

		if (last_selection.start.line == 0)
			return;

		if (first_selection.start.line < last_selection.start.line) {
			textEditor.selections.pop()
		}
		else {
			textEditor.selections.push(new vscode.Selection(last_selection.start.line - 1, first_selection.start.character, last_selection.start.line - 1, first_selection.start.character));
		}
		textEditor.selections = textEditor.selections;
	}));
	
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('onTrueLines.cursorColumnSelectDownOnTrueLines', 
	(textEditor: TextEditor, edit: TextEditorEdit, args: any[]) => {
		
		var first_selection = textEditor.selections[0];
		var last_selection = textEditor.selections[textEditor.selections.length - 1];

		if (last_selection.start.line == textEditor.document.lineCount - 1)
			return;
		
		if (first_selection.start.line > last_selection.start.line) {
			textEditor.selections.pop()
		}
		else {
			textEditor.selections.push(new vscode.Selection(last_selection.start.line + 1, first_selection.start.character, last_selection.start.line + 1, first_selection.start.character));
		}

		textEditor.selections = textEditor.selections;
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
