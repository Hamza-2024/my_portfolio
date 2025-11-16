#!/usr/bin/env bash
# Cloudflare Pages build script - prevents auto-detection issues

echo "Building Next.js static export..."
npm ci
npm run build
echo "Build complete! Output directory: out"
ls -la out/
