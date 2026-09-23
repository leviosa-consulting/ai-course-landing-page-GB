---
name: Root Next preview workflow
description: Environment-specific guidance for serving a root Next.js app in Replit preview.
---

Root Next.js apps served by a manually configured Replit workflow may not receive a usable `$PORT` value in the workflow command. Configure the workflow to bind explicitly to the same port it waits for, such as `3000`, and bind to `0.0.0.0`.

**Why:** A workflow using `--port $PORT` started Next.js with an empty port argument even though the workflow had `waitForPort` configured, while the explicit `3000` command started cleanly.

**How to apply:** For a root Next app, use the project’s dev command with `--hostname 0.0.0.0 --port 3000`, set the workflow wait port to `3000`, and verify both the workflow logs and an HTTP 200 response before publishing.