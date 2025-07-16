# MacDeskWeb - Hello World Mac App

A beautiful Hello World Mac application built with web technology using Electron.

![Hello World Mac App](https://img.shields.io/badge/Platform-macOS-blue.svg)
![Built with](https://img.shields.io/badge/Built%20with-Electron-green.svg)
![Web Tech](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-orange.svg)

## 🚀 Features

- **Modern UI**: Beautiful gradient backgrounds with glassmorphism effects
- **Interactive Elements**: Responsive buttons with smooth animations
- **Mac-native Feel**: Designed specifically for macOS with proper styling
- **Web Technology**: Built with HTML, CSS, and JavaScript
- **Cross-platform Ready**: Easily adaptable to other platforms

## 📦 What's Included

- `index.html` - Main application interface
- `styles.css` - Modern styling with animations and gradients
- `renderer.js` - Frontend JavaScript logic
- `main.js` - Electron main process
- `app.js` - Simple browser launcher
- `package.json` - Project configuration and dependencies

## 🛠 Installation & Running

### Option 1: Using Electron (Recommended)

1. **Clone the repository:**
   ```bash
   git clone git@github.com:JKevinXu/MacDeskWeb.git
   cd MacDeskWeb
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the app:**
   ```bash
   npm start
   # or
   pnpm start
   # or
   yarn start
   ```

### Option 2: Browser Version (Quick Start)

If you're having issues with Electron installation:

1. **Run the browser launcher:**
   ```bash
   node app.js
   ```

2. **Or open directly:**
   - Double-click `index.html` in Finder
   - Or open `file:///path/to/index.html` in your browser

## 🔧 Build for Distribution

To create a distributable Mac app:

```bash
npm run build
# or
npm run dist
```

This will create a `.app` file in the `dist` folder that can be distributed to other Mac users.

## 📁 Project Structure

```
MacDeskWeb/
├── index.html          # Main UI
├── styles.css          # Styling and animations
├── renderer.js         # Frontend logic
├── main.js            # Electron main process
├── app.js             # Browser launcher
├── package.json       # Project config
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🎨 Customization

### Styling
Edit `styles.css` to customize:
- Colors and gradients
- Animations and transitions
- Layout and typography

### Functionality
Edit `renderer.js` to add:
- New interactive features
- API integrations
- Local storage

### Window Settings
Edit `main.js` to customize:
- Window size and position
- Menu bar options
- App behavior

## 🐛 Troubleshooting

### Electron Installation Issues
If you encounter issues installing Electron:

1. Try using different package managers (npm, pnpm, yarn)
2. Use the browser version: `node app.js`
3. Install Electron globally: `npm install -g electron`

### App Won't Start
1. Ensure all dependencies are installed
2. Check that Node.js is properly installed
3. Try the browser version as a fallback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 🙏 Acknowledgments

- Built with [Electron](https://electronjs.org/)
- Uses modern CSS features including CSS Grid and Flexbox
- Inspired by macOS design principles

---

**Enjoy your Hello World Mac app! 🎉** 