# CRITICAL: Cloudflare Pages Build Configuration

## ⚠️ IMPORTANT - Manual Configuration Required

Cloudflare Pages is auto-detecting Next.js and using the WRONG (deprecated) build command.
You MUST manually override this in the Cloudflare Pages dashboard.

## Quick Fix Steps:

1. **Go to Cloudflare Dashboard**
   - https://dash.cloudflare.com → **Workers & Pages** → **myprofile2**

2. **Update Build Settings**
   - Go to **Settings** → **Builds & deployments**
   - Click **Edit configuration**

3. **Set These EXACT Values:**
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: out
   Root directory: (leave empty or /)
   ```

4. **Save and Retry Deployment**

## Why This Happens

Cloudflare auto-detects Next.js and runs the **deprecated** adapter:
```bash
npx @cloudflare/next-on-pages@1  # ❌ WRONG - causes stack overflow
```

We need it to run the simple static build instead:
```bash
npm run build  # ✅ CORRECT - uses Next.js static export
```

## This Project Uses Static Export

Your `next.config.mjs` has `output: 'export'` which generates plain HTML/CSS/JS files.
No server-side rendering, no API routes, no adapters needed - just static files!
