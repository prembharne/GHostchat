# Google wallet onboarding

On /start, users can open the browser wallet chooser or choose **Create or restore with Google**. Google wallet creation and restoration use the same wallet-signed GhostChat session and profile flow as an external wallet.

The backend validates Google's signed ID token and stores a password-encrypted V3 keystore against the Google subject. The browser generates the wallet key, signs the backup ownership challenge and unlocks the key locally. A wallet password is required for recovery. Google wallet signing currently supports MST Testnet and MST Mainnet, subject to the app's existing feature restrictions. Supported browser extensions use the broader EVM network list.

The Google wallet locks after ten minutes of signing inactivity, on Google-session expiry and on wallet disconnect. Reloading requires sign-in and unlock again. Each signature or transaction opens a review dialog. Keep a test balance while evaluating the feature.

## Environment setup

1. In the Google OAuth Web client, authorize the exact app origin. For production use https://ghostchat-rho.vercel.app. For local development use the localhost origin you actually open, including its port. Add eligible test users if the OAuth app is in testing mode.
2. Set GOOGLE_CLIENT_ID to that public Web client ID in the local root .env or EC2 relay.env. Preserve the existing PROFILE_ENCRYPTION_KEY and the accounts SQLite database. The JavaScript callback flow uses a public client ID and requires no OAuth client secret.
3. Restart the local server. For a hosted release, build the relay with `node scripts/build-relay.mjs`, deploy the relay to EC2 using the existing persistent volume and recreate the API container. Build and sync the frontend, preserving any existing operational assets, then deploy the Vercel site with its matching relay allowlist.
4. Smoke-test /api/google-wallet/config for a client ID and profileConfigured=true. Exercise new signup and recovery with a test Google account and verify the restored address is identical before attempting a testnet transaction. Check both Google and extension onboarding.

[Google Identity Services setup](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)
