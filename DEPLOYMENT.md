# Portfolio Deployment Instructions

## Cloudflare Pages Configuration

To deploy this Next.js static export to Cloudflare Pages, use the following settings:

### Build Configuration
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (leave empty/default)

### Environment Variables
None required for static build.

### Important Notes
- This project uses Next.js static export (`output: 'export'`)
- Do NOT use `npx @cloudflare/next-on-pages` - it's deprecated and causes build errors
- The build command should be simply `npm run build`

## Local Development
```bash
npm install
npm run dev
```

## Local Build Test
```bash
npm run build
```

## Deployment
Changes pushed to the `master` branch will automatically deploy to Cloudflare Pages.
