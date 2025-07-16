#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

console.log('🚀 Starting Hello World Mac App...');

// Get the absolute path to index.html
const htmlFile = path.join(__dirname, 'index.html');

// Open in browser (this works like a native Mac app)
exec(`open "${htmlFile}"`, (error) => {
    if (error) {
        console.error('Error opening app:', error);
        console.log('Manually open: file://' + htmlFile);
    } else {
        console.log('✅ App opened successfully!');
        console.log('The app is now running in your default browser');
    }
});
