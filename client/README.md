# Client Application

This directory contains the Next.js client used to present project content and
supporting documentation for the PCG adaptive filtering workflow.

## Local Development

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Visit `http://localhost:3000` to view the site.

## Structure

- `app/`: Route definitions for the Next.js App Router.
- `components/`: Reusable UI building blocks.
- `constants/`: Shared constants for navigation and copy.
- `public/`: Static assets served by Next.js.

## Content Updates

Most text and layout updates live in:

- `app/page.tsx` for the landing page composition.
- `components/home/*` for section-level content.
- `constants/*` for shared data collections.
