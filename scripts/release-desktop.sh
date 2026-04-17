#!/usr/bin/env bash
set -e

TAURI_CONF="piipaya-desktop/src-tauri/tauri.conf.json"
CARGO_TOML="piipaya-desktop/src-tauri/Cargo.toml"

# ── 1. Bump version ──────────────────────────────────────────────────────────
CURRENT=$(node -e "console.log(require('./$TAURI_CONF').version)")
MAJOR=$(echo "$CURRENT" | cut -d. -f1)
MINOR=$(echo "$CURRENT" | cut -d. -f2)
PATCH=$(echo "$CURRENT" | cut -d. -f3)

BUMP="${BUMP:-patch}"
case "$BUMP" in
  major) MAJOR=$((MAJOR+1)); MINOR=0; PATCH=0 ;;
  minor) MINOR=$((MINOR+1)); PATCH=0 ;;
  patch) PATCH=$((PATCH+1)) ;;
  *) echo "Unknown BUMP value: $BUMP (use patch/minor/major)"; exit 1 ;;
esac

NEW="$MAJOR.$MINOR.$PATCH"
TAG="desktop-v$NEW"

echo "→ Bumping $CURRENT → $NEW"

node -e "
  const fs = require('fs');
  const conf = JSON.parse(fs.readFileSync('$TAURI_CONF', 'utf8'));
  conf.version = '$NEW';
  fs.writeFileSync('$TAURI_CONF', JSON.stringify(conf, null, 2) + '\n');
"
sed -i '' "s/^version = \"$CURRENT\"/version = \"$NEW\"/" "$CARGO_TOML"

# ── 2. Build locally (universal: arm64 + x86_64) ─────────────────────────────
echo "→ Building sidecar..."
(cd piipaya-desktop && bash scripts/build-sidecar.sh)

echo "→ Ensuring Rust targets..."
rustup target add aarch64-apple-darwin x86_64-apple-darwin

echo "→ Building app (universal binary)..."
(cd piipaya-desktop && bun run tauri build --target universal-apple-darwin)

# ── 3. Find the DMG ──────────────────────────────────────────────────────────
DMG=$(find piipaya-desktop/src-tauri/target/universal-apple-darwin/release/bundle/dmg -name "*.dmg" | head -1)
if [ -z "$DMG" ]; then
  echo "Error: no .dmg found. Build may have failed." && exit 1
fi
echo "→ Found: $DMG"

# ── 4. Commit, tag, push ─────────────────────────────────────────────────────
git add "$TAURI_CONF" "$CARGO_TOML"
git commit -m "chore(desktop): release v$NEW"
git tag "$TAG"
git push origin HEAD
git push origin "$TAG"

# ── 5. Create GitHub release and upload DMG ──────────────────────────────────
echo "→ Creating GitHub release $TAG..."
gh release create "$TAG" "$DMG" \
  --title "PIIPAYA Desktop v$NEW" \
  --notes "## PIIPAYA Desktop v$NEW

### Install
Download the \`.dmg\` below and drag PIIPAYA to your Applications folder.

> Built on $(uname -m) macOS $(sw_vers -productVersion) — universal binary (Apple Silicon + Intel).

### What's new
See [commits](../../commits/$TAG) for full changelog."

echo "✓ Released $TAG → $(gh release view "$TAG" --json url -q .url)"
