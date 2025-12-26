# Contributing Guide

Thanks for your interest in contributing! This guide covers local setup,
project workflows, and the expectations for changes.

## Repository Overview

This repo contains:

- A Python CLI (`main.py`) for adaptive filtering of PCG signals.
- A Next.js client under `client/` for project documentation and content.

## Development Setup

### Python CLI

1. Create and activate a virtual environment (recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: .\venv\Scripts\activate
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the CLI:

   ```bash
   python main.py
   ```

### Client Application

1. Install dependencies:

   ```bash
   cd client
   pnpm install
   ```

2. Start the dev server:

   ```bash
   pnpm dev
   ```

## Code Documentation Expectations

- Add or update docstrings for Python functions when behavior changes.
- Add JSDoc-style comments for React components if they represent a page-level
  view or a complex layout.
- Keep markdown docs in sync with updated behaviors or flags.

## Commit & Pull Request Workflow

1. Create a feature branch from `main`.
2. Make focused, testable changes with clear commit messages.
3. Run relevant checks (see Testing).
4. Open a pull request with:
   - A summary of changes.
   - Screenshots for any UI changes, when applicable.
   - Steps to verify.

## Testing

- Python: Run the CLI with a sample MP3 file and verify output is created in
  `outputs/`.
- Client: `pnpm lint` (optional) and `pnpm dev` for local verification.

If you cannot run a check, note the limitation in the PR description.
