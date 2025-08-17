# Contributing to JetSilence Theme

## 🎯 Primary Goal: Fork & Customize!

**JetSilence is designed to be forked and customized!** The main purpose of this open source project is for developers to:

1. **Fork the repository** to their own GitHub account
2. **Customize the theme** to match their personal preferences
3. **Build and install** their own personalized version
4. **Make it truly their own**

## 🍴 How to Fork & Customize

### Step 1: Fork the Repository

- Click the "Fork" button on GitHub to create your own copy
- This gives you full ownership of your version

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/JetSilence.git
cd JetSilence
npm install
```

### Step 3: Customize to Your Heart's Content

- **Change colors**: Edit files in `src/token-colors-obj/`
- **Modify UI**: Update the `colors` object in `src/build-theme.ts`
- **Rename the theme**: Update `name` in `src/build-theme.ts` and `package.json`
- **Add languages**: Include support for languages you use
- **Create variants**: Make light mode, high contrast, or branded versions

### Step 4: Build & Install Your Custom Theme

```bash
npm run build
code --install-extension jetsilence-0.0.1.vsix
```

### Step 5: Keep Customizing!

Your fork is **yours to modify freely**. No need to submit changes back unless you want to!

## 🔄 Contributing Back (Optional)

While the main goal is personal customization, we do welcome certain types of contributions back to the original project:

### ✅ Welcome Contributions:

- **Bug fixes** that affect core functionality
- **New language support** that benefits all users
- **Performance improvements** to the build process
- **Documentation improvements**
- **Accessibility enhancements**

### ❌ Keep in Your Fork:

- **Personal color preferences**
- **Custom branding/naming**
- **Workflow-specific modifications**
- **Experimental features**

### How to Contribute Back:

1. Work on your fork (you should already have one!)
2. Create a branch for the specific improvement:
   ```bash
   git checkout -b feature/language-support-rust
   ```
3. Make focused changes that benefit everyone
4. Test thoroughly with multiple file types
5. Submit a Pull Request with clear description

## 🎨 Customization Guidelines

### Color Modifications

```typescript
// In your fork, feel free to change any colors!
// src/token-colors-obj/keywords.ts
export const keywords: jsType.TokenColorInterface[] = [
  {
    scope: ["keyword", "keyword.control"],
    settings: {
      foreground: "#YOUR_COLOR_HERE", // Make it yours!
      fontStyle: "regular",
    },
  },
]
```

### Adding New Token Types

1. Create a new file in `src/token-colors-obj/`
2. Export your token configuration
3. Import it in `src/token-colors-obj/index.ts`
4. Add it to the `allTokenColors` array

### Renaming Your Theme

```typescript
// src/build-theme.ts
const theme: jsType.ThemeInterface = {
  name: "YourAwesomeTheme", // Your custom name!
  type: "dark",
  // ... rest of your customizations
}
```

## 🆘 Getting Help

### For Customization Help:

- 📚 Check the code examples in token files
- 💬 Use [GitHub Discussions](../../discussions) for questions
- 🔍 Look at VS Code's [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)

### For Contributing Back:

- 🐛 [Open an issue](../../issues) for bugs
- 💡 [Start a discussion](../../discussions) for feature ideas
- 📋 [Submit a PR](../../pulls) for improvements

## 📄 Your Rights

Since this is MIT licensed, you have the right to:

- ✅ Use the code commercially
- ✅ Modify it however you want
- ✅ Distribute your modified version
- ✅ Private use without restrictions
- ✅ Sublicense your modifications

**Just remember to include the original license in your fork!**

---

**Happy customizing! Make JetSilence truly yours! 🎨✨**
