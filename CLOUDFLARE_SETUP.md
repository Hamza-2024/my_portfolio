# CRITICAL: Cloudflare Pages Build Configuration

## ⚠️ IMPORTANT - Manual Configuration Required

Cloudflare Pages is auto-detecting Next.js and using the wrong build command.
You MUST manually override this in the Cloudflare Pages dashboard.

## Steps to Fix:

### 1. Go to Cloudflare Dashboard
- Log in to https://dash.cloudflare.com
- Navigate to **Workers & Pages**
- Select your **myprofile2** project

### 2. Update Build Settings
- Click **Settings** → **Builds & deployments**
- Click **Edit configuration** or **Configure build settings**

### 3. Set These EXACT Values:

```
Framework preset: None (or if not available, select "Next.js (Static HTML Export)")
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
Node version: 22
```

### 4. Environment Variables
- No environment variables needed

### 5. Save and Retry
- Click **Save**
- Go to **Deployments** tab
- Click **Retry deployment** on the latest failed build

## Why This is Necessary

Cloudflare Pages is currently auto-detecting Next.js and running:
```
npx @cloudflare/next-on-pages@1
```

This tool is:
- Deprecated (as shown in the warning)
- Uses Vercel's build system
- Causes "Maximum call stack size exceeded" errors
- Not compatible with static exports in your directory structure

By manually setting the build command to `npm run build`, you force Cloudflare
to use the simple static export configuration we've set up, which works perfectly.

## Verification

After the build succeeds, you should see in the logs:
```
Executing user command: npm run build
```

NOT:
```
Executing user command: npx @cloudflare/next-on-pages@1
```
