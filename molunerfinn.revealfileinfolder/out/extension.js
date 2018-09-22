function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "revealfileinfolder" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.commands.registerCommand('extension.revealFileInFolder', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World!')
        vscode.commands.executeCommand('revealFileInOS');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.revealFileInSidebar', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World!')
        vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer');
    }));
}