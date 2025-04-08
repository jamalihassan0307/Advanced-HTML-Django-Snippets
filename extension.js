/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Advanced HTML & Django Snippets is now active!');
}

function deactivate() {
    console.log('Advanced HTML & Django Snippets is now deactivated.');
}

module.exports = {
    activate,
    deactivate
}