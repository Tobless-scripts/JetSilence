# JetSilence Theme for VS Code

<div align="center">

![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d4.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**Immerse yourself in JetSilence, an ultra-smooth dark theme designed for focus and style.**

</div>

## ✨ Features

- 🎨 **Beautiful Dark Design** - Deep black backgrounds with carefully balanced accents
- 🔧 **Modular Architecture** - Organized token colors in separate files for easy customization
- 🌐 **Multi-Language Support** - Optimized for TypeScript, Python, PHP, Go, Kotlin, Java, and more
- ⚡ **Live Development** - Real-time theme updates while editing
- 👥 **Community-Driven** - Open source and welcoming to contributors
- 👁️ **Eye-Friendly** - Reduces eye strain with thoughtful color choices
- 📝 **Comprehensive Syntax** - Detailed highlighting for all code elements

## 🚀 Installation

### Method 1: From VSIX (Recommended)

1. Download the latest `.vsix` file from [Releases](../../releases)
2. Open VS Code
3. Press `Ctrl+Shift+P` and type "Extensions: Install from VSIX"
4. Select the downloaded `.vsix` file

### Method 2: From Command Line

```bash
code --install-extension jetsilence-0.0.1.vsix
```

### Method 3: Manual Installation

1. Download and extract the theme files
2. Copy to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`

## 🎯 Usage

1. Open VS Code
2. Go to `File > Preferences > Theme > Color Theme` (or press `Ctrl+K Ctrl+T`)
3. Select **JetSilence** from the list
4. Enjoy coding! 🎉

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/)
- [VS Code](https://code.visualstudio.com/)

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Dev-Ridwan16/JetSilence.git
   cd jetsilence-theme
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the theme:

   ```bash
   npm run build
   ```

4. For live development with hot reload:
   ```bash
   npm run dev
   ```

### Project Structure

```
jetsilence/
├── src/
│   ├── token-colors-obj/     # Modular token color definitions
│   │   ├── keywords.ts       # Keywords (if, for, class, etc.)
│   │   ├── strings.ts        # String literals
│   │   ├── comments.ts       # Comments and documentation
│   │   ├── functions.ts      # Function and method names
│   │   ├── variables.ts      # Variable names
│   │   ├── classes-types.ts  # Class and type names
│   │   ├── constants.ts      # Constants and literals
│   │   ├── operators.ts      # Operators (+, -, ==, etc.)
│   │   ├── punctuation.ts    # Brackets, braces, semicolons
│   │   ├── properties.ts     # Object properties
│   │   ├── imports.ts        # Import/export statements
│   │   ├── html.ts          # HTML/XML tags
│   │   ├── css.ts           # CSS properties and values
│   │   ├── json.ts          # JSON keys
│   │   ├── regex.ts         # Regular expressions
│   │   ├── markdown.ts      # Markdown formatting
│   │   ├── validation.ts    # Error and deprecated code
│   │   ├── annotations.ts   # Decorators and annotations
│   │   └── index.ts         # Combines all token colors
│   ├── build-theme.ts       # Main theme builder
│   └── js.type.ts          # TypeScript interfaces
├── themes/
│   └── JetSilence-color-theme.json  # Generated theme file
└── package.json
```

## 🍴 After Forking

When you fork this repository, here's what changes and what you should update:

### What Changes Automatically:

- **Repository URL**: Changes to `https://github.com/YOUR_USERNAME/JetSilence.git`
- **Clone URLs**: All git clone commands will use your username
- **Repository ownership**: The fork belongs to you

### What Stays the Same:

- **Git history**: All commits and contributors remain
- **License**: MIT license stays with original author attribution
- **Original author**: Credit remains with the original creator
- **File contents**: All code and documentation stays identical

### What You Should Update in Your Fork:

1. **README clone URL**: Update the installation section with your username
2. **Theme name**: Consider renaming to make it your own (optional)
3. **Package.json**: Update name, author, and repository fields if publishing
4. **Branding**: Add your own description or modifications

### Example Updates:

```bash
# In your fork, update README.md:
git clone https://github.com/YOUR_USERNAME/JetSilence.git

# Optionally update package.json:
"name": "your-custom-theme-name",
"author": "Your Name",
"repository": "https://github.com/YOUR_USERNAME/JetSilence"
```

## 🤝 Using & Customizing

This theme is **open source** and designed for you to **fork, customize, and make it your own!**

### 🍴 Fork & Customize

1. **Fork this repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/JetSilence.git
   cd JetSilence
   ```
3. **Make it yours** - customize colors, add new language support, modify anything!
4. **Build and install** your custom version:
   ```bash
   npm run build
   npm start
   code --install-extension jetsilence-0.0.1.vsix
   ```

### 🎨 Customization Ideas

- **Change the color palette** to match your style
- **Add support for new languages** you work with
- **Create themed variants** (light mode, high contrast, etc.)
- **Adjust syntax highlighting** for your workflow
- **Brand it with your name** and share with your team

### 🛠️ Quick Customization Guide

- **Colors**: Edit files in `src/token-colors-obj/`
- **UI Colors**: Modify the `colors` object in `src/build-theme.ts`
- **Theme Name**: Update `name` in `src/build-theme.ts` and `package.json`
- **Build**: Run `npm run dev` for live updates or `npm run build` & `npm start` for final build

## 💡 Contributing Back (Optional)

While this project is meant for forking and personal customization, we also welcome contributions:

### 🐛 Bug Reports & Feature Suggestions

- Found a bug? [Open an issue](../../issues)
- Have an idea? [Start a discussion](../../discussions)
- Want to suggest improvements? We'd love to hear from you!

### 🔄 Contributing Improvements

If you've made improvements that could benefit everyone:

1. Fork this repo (you probably already did!)
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Make your changes and test thoroughly
4. Commit: `git commit -m "Add useful improvement"`
5. Push to your fork: `git push origin feature/my-improvement`
6. Open a Pull Request with a clear description

**Note**: Only submit PRs for general improvements, bug fixes, or new language support that benefits all users. Keep your personal customizations in your own fork!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- 🎨 Inspired by the VS Code community
- 💻 Built with love for developers
- 🌟 Thanks to all contributors who help improve this theme

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Dev-Ridwan16/JetSilence?style=social)
![GitHub forks](https://img.shields.io/github/forks/Dev-Ridwan16/JetSilence?style=social)
![GitHub issues](https://img.shields.io/github/issues/Dev-Ridwan16/JetSilence)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Dev-Ridwan16/JetSilence)

---

<div align="center">

**Made with ❤️ for the developer community**

[⭐ Star this repo](../../stargazers) | [🐛 Report Bug](../../issues) | [💡 Request Feature](../../issues)

</div>
