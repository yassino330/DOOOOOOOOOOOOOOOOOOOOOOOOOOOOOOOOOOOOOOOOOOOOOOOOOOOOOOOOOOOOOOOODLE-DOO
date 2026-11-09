# Dood__le doo

A developer-suite foundation built with Electron, React, TypeScript, Vite, and Monaco Editor. The first packaging target is a Windows x64 NSIS installer.

## Development

- Install Node.js 22 or newer.
- Run `npm install`.
- Run `npm run dev`.

## Build a Windows installer

Run `npm run dist` on Windows. The installer is written to `release/`.

## GitHub Actions

Relevant pushes to `main` trigger the **Build Windows installer** workflow. Open the repository's **Actions** tab, open the latest successful run, and download the `Doodle-doo-Windows-Setup` artifact. The artifact is a ZIP containing the `.exe` installer.

## Current scope

This is the initial desktop shell: classic IDE-style workspace, project explorer placeholder, Monaco code editor, output panel, and secure Electron renderer/preload separation. File operations, real terminal/process execution, project management, compilers, debugging, Git, API/database tools, and AI features still need implementation. Toolbar actions are currently UI foundations, not finished functionality.
