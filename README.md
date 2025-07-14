# Find on.. - Browser Extension

A simple and efficient Chrome extension that allows you to quickly search selected text across multiple popular platforms directly from the context menu.

## 🚀 Features

- **Quick Search**: Right-click on any selected text to search across multiple platforms
- **Multiple Search Engines**: Search on Google Maps, Wikipedia, and Google Search
- **Clean Interface**: Minimal, unobtrusive design that integrates seamlessly with your browser
- **Manifest V3**: Built with the latest Chrome extension standards for better performance and security

## 📱 Supported Platforms

- **Google Maps** - Find locations, addresses, and places
- **Wikipedia** - Search for encyclopedic information
- **Google Search** - General web search

## 🛠 Installation

### From Source (Developer Mode)

1. **Download or Clone** this repository to your local machine
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by toggling the switch in the top-right corner
4. **Click "Load unpacked"** and select the folder containing the extension files
5. **The extension is now installed** and ready to use!

### From Chrome Web Store

*Coming soon - this extension is not yet published to the Chrome Web Store*

## 📖 Usage

1. **Select any text** on a webpage by highlighting it
2. **Right-click** on the selected text
3. **Choose** from the context menu options:
   - "Google Maps" - Search for the text as a location
   - "Wikipedia" - Look up the text in Wikipedia
   - "Google" - Perform a general Google search
4. **A new tab** will open with the search results

## 🗂 Project Structure

```
find-on-browser-extension/
├── manifest.json          # Extension configuration (Manifest V3)
├── main.js                # Background service worker with core functionality
├── README.md              # Project documentation
└── assets/
    └── icon.png           # Extension icon
```

## 🔧 Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: 
  - `contextMenus` - Create right-click context menu items
  - `host_permissions: ["<all_urls>"]` - Open search results in new tabs
- **Background Script**: Service worker for handling context menu events
- **Minimum Chrome Version**: 88+ (Manifest V3 requirement)

## 🛡 Privacy

This extension:
- ✅ **Does NOT collect** any personal data
- ✅ **Does NOT track** your browsing activity
- ✅ **Does NOT store** your search queries
- ✅ **Only processes** text you explicitly select and choose to search

The extension simply takes your selected text and opens search URLs in new tabs - no data is sent to our servers.

## 🔄 Version History

### v0.0.1
- Initial release with Manifest V3
- Support for Google Maps, Wikipedia, and Google Search
- Context menu integration

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Bug Reports & Feature Requests

If you encounter any issues or have suggestions for improvements:

1. Check if the issue already exists in the [Issues](../../issues) section
2. If not, create a new issue with:
   - Clear description of the problem or feature request
   - Steps to reproduce (for bugs)
   - Your Chrome version and OS
   - Screenshots if applicable

## 📞 Support

Need help? Here are your options:

- 📖 Check this README for basic usage instructions
- 🐛 Report bugs in the Issues section
- 💡 Suggest features in the Issues section

---

**Made with ❤️ for productivity and quick access to information**
