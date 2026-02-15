#!/bin/bash
# Build script for Stash Better Hotkeys plugin repository
# Creates ZIP package and index.yml for Stash plugin installer

set -e

PLUGIN_ID="stash-better-hotkeys"
PLUGIN_NAME="Better Hotkeys"
PLUGIN_VERSION="1.0.0"
PLUGIN_DESCRIPTION="Simplified keyboard shortcuts for scene navigation. Press n (next), b (back), r (random) without needing to press p first."

# Create output directory
SITE_DIR="_site/stable"
mkdir -p "$SITE_DIR"

# Create ZIP with plugin files (YML + JS inside a folder matching plugin ID)
TEMP_DIR=$(mktemp -d)
PLUGIN_DIR="$TEMP_DIR/$PLUGIN_ID"
mkdir -p "$PLUGIN_DIR"
cp stash-better-hotkeys.yml "$PLUGIN_DIR/"
cp stash-better-hotkeys.js "$PLUGIN_DIR/"
(cd "$TEMP_DIR" && zip -r "$PLUGIN_ID.zip" "$PLUGIN_ID/")
mv "$TEMP_DIR/$PLUGIN_ID.zip" "$SITE_DIR/"
rm -rf "$TEMP_DIR"

# Calculate SHA256
SHA256=$(sha256sum "$SITE_DIR/$PLUGIN_ID.zip" | awk '{print $1}')

# Get current date
DATE=$(date -u '+%Y-%m-%d %H:%M:%S')

# Generate index.yml
cat > "$SITE_DIR/index.yml" << EOF
- id: ${PLUGIN_ID}
  name: ${PLUGIN_NAME}
  metadata:
    description: "${PLUGIN_DESCRIPTION}"
  version: ${PLUGIN_VERSION}
  date: ${DATE}
  path: ${PLUGIN_ID}.zip
  sha256: ${SHA256}
EOF

echo "Build complete!"
echo "  ZIP: $SITE_DIR/$PLUGIN_ID.zip"
echo "  Index: $SITE_DIR/index.yml"
echo "  SHA256: $SHA256"
