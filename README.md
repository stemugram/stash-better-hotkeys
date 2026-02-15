# Stash Better Hotkeys

Simplified keyboard shortcuts for Stash media server.

## Features

* **n** - Next scene
* **b** - Previous scene (Back)
* **r** - Random scene

No need to press `p` before each navigation command!

## Installation

### Method 1: Plugin Repository (Recommended)

1. Go to Stash → **Settings** → **Plugins**
2. In the "Available Plugins" section, click **Add Source**
3. Fill in the fields:
   * **Name:** `Better Hotkeys`
   * **Source URL:** `https://stemugram.github.io/stash-better-hotkeys/stable/index.yml`
   * **Local Path:** *(leave empty)*
4. Click **Confirm**
5. Find "Better Hotkeys" in the Available Plugins list and click **Install**
6. Reload the page (**F5**)

### Method 2: Manual Installation

1. Copy the contents of `stash-better-hotkeys.js`
2. Go to Stash → Settings → Interface → Custom Javascript
3. Paste the code into the Custom Javascript box
4. Click "Save"
5. Reload the page (F5)

## Usage

Simply press on any scene viewing page:

* `n` - next scene
* `b` - previous scene
* `r` - random scene

Does not work in input fields (input, textarea) or when modifier keys (Ctrl/Alt/Shift) are pressed.

## Technical Details

* Uses Stash's built-in Mousetrap.js library
* Only active on `/scenes/*` URLs
* 100% client-side JavaScript - no server restart required
* No external dependencies

## Compatibility

* Stash version: v0.20+
* Tested with Stash v0.30.1

## Building

The plugin repository is automatically built and deployed via GitHub Actions.
To build locally:

```bash
./build.sh
```

This creates `_site/stable/index.yml` and `_site/stable/stash-better-hotkeys.zip`.

## License

MIT

## Author

MM

## Contributing

Pull requests are welcome! Feel free to submit issues or feature requests.
