import * as fs from 'fs';
import * as path from 'path';
import * as chokidar from 'chokidar';
import type jsType = require('./js.type');
import { allTokenColors } from './token-colors-obj';

const theme: jsType.ThemeInterface = {
        name: 'JetSilence',
        type: 'dark',
        colors: {

                //editor color settings
                "editor.background": "#1E1F22",
                "editor.foreground": "#D4D4D4",
                "editor.lineHighlightBackground": "#2A2A2A",
                "editor.selectionForeground": "#FFFFFF",
                "editorCursor.foreground": "#aeafad",
                "editorWhitespace.foreground": "#404040",

                //activity bar color settings
                "activityBar.background": "#2C2C2C",
                "activityBar.foreground": "#c9d1d9",
                "activityBarBadge.background": "#000000",
                "activityBarBadge.foreground": "#ffffff",

                //status bar (bottom bar) color settings
                "statusBar.background": "#2C2C2C",
                "statusBar.foreground": "#c9d1d9",
                "statusBar.debuggingBackground": "#da3633",
                "statusBar.noFolderBackground": "#0d1117",

                //side bar color settings
                "sideBar.background": "#000000",
                "sideBar.foreground": "#c9d1d9",
                "sideBarTitle.foreground": "#8b949e",

                //tabs color settings
                "tab.activeBackground": "#0d1117",
                "tab.inactiveBackground": "#0d1117",
                "tab.activeForeground": "#ffffff",
                "tab.inactiveForeground": "#8b949e",

                //terminal color settings
                "panel.background": "#0d1117",
                "panel.border": "#30363d",
                "panelTitle.activeForeground": "#ffffff",
                "panelTitle.inactiveForeground": "#8b949e",

                // scroll bar color settings
                "scrollbarSlider.background": "#6e768166",
                "scrollbarSlider.hoverBackground": "#6e7681aa",
                "scrollbarSlider.activeBackground": "#8b949eaa",

                // dropdowns, button, input color settings
                "dropdown.background": "#0d1117",
                "dropdown.foreground": "#c9d1d9",
                "dropdown.border": "#30363d",

                "button.background": "#238636",
                "button.foreground": "#ffffff",
                "button.hoverBackground": "#2ea043",

                "input.background": "#0d1117",
                "input.foreground": "#c9d1d9",
                "input.border": "#30363d"

        },

        tokenColors: allTokenColors
}

const sourceFile = __filename
const outputPath = path.join(__dirname, "..", "themes", "JetSilence-color-theme.json")

fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2))

console.log(`Theme written successfully to ${outputPath}`)

// Your theme configuration
const createTheme = (): jsType.ThemeInterface => (theme);


// Function to generate theme
const generateTheme = () => {
        const theme = createTheme();

        // Ensure themes directory exists
        const themesDir = path.dirname(outputPath);
        if (!fs.existsSync(themesDir)) {
                fs.mkdirSync(themesDir, { recursive: true });
        }

        // Write theme file
        fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));

        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] Theme updated successfully!`);

        // This requires the theme to already be selected in VS Code
        setTimeout(() => {
                console.log("Tip: If theme didn't auto-update, press Ctrl+Shift+P → 'Developer: Reload Window'");
        }, 1000);
};

// Initial generation
generateTheme();

// Watch for file changes
const watcher = chokidar.watch(sourceFile, {
        persistent: true,
        ignoreInitial: true
});

console.log(`Watching ${path.basename(sourceFile)} for changes...`);
console.log(`Output: ${outputPath}`);
console.log(`Make changes to this file to see live theme updates!\n`);

watcher.on('change', (filePath) => {
        console.log(`File changed: ${path.basename(filePath)}`);

        // Clear require cache to reload the module
        delete require.cache[require.resolve(__filename)];

        try {
                generateTheme();
        } catch (error: any) {
                console.error('Error generating theme:', error.message);
        }
});

// Handle process termination
process.on('SIGINT', () => {
        console.log('\n Stopping theme watcher...');
        watcher.close();
        process.exit(0);
});

// Keep the process running
console.log('Press Ctrl+C to stop watching\n');