# Stash Better Hotkeys

Simplified keyboard shortcuts for Stash media server.

## Features

- **n** - Next scene
- **b** - Previous scene (Back)
- **r** - Random scene

No need to press `p` before each navigation command!

## Installation

### Method 1: Via Stash UI (Recommended)

1. Go to Stash → Settings → Plugins
2. Scroll to "Available Sources"
3. Click "Add Source"
4. Fill in the fields:
   - **Name:** Better Hotkeys
   - **Source URL:** `https://raw.githubusercontent.com/stemugram/stash-better-hotkeys/main/stash-better-hotkeys.yml`
   - **Local Path:** leave empty
5. Click "Confirm"
6. Find the plugin in the list and click "Install"
7. Reload the page (F5)

### Method 2: Manual Installation

1. Copy the contents of `stash-better-hotkeys.js`
2. Go to Stash → Settings → Interface → Custom Javascript
3. Paste the code into the Custom Javascript box
4. Click "Save"
5. Reload the page (F5)

## Usage

Simply press on any scene viewing page:
- `n` - next scene
- `b` - previous scene
- `r` - random scene

Does not work in input fields (input, textarea) or when modifier keys (Ctrl/Alt/Shift) are pressed.

## Technical Details

- Uses Stash's built-in Mousetrap.js library
- Only active on `/scenes/*` URLs
- 100% client-side JavaScript - no server restart required
- No external dependencies

## Compatibility

- Stash version: v0.20+
- Tested with Stash v0.30.1

## License

MIT

## Author

MM

## Contributing

Pull requests are welcome! Feel free to submit issues or feature requests.
```

### `.gitignore`
```
*.zip
.DS_Store
node_modules/
```

### `LICENSE`
```
MIT License

Copyright (c) 2025 MM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
