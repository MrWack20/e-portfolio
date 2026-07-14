// Starts the GitHub OAuth flow for the Decap CMS admin.
// Requires env vars OAUTH_GITHUB_CLIENT_ID + OAUTH_GITHUB_CLIENT_SECRET (set in Vercel).
module.exports = (req, res) => {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.statusCode = 500;
    res.end("Missing OAUTH_GITHUB_CLIENT_ID environment variable.");
    return;
  }
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  const redirectUri = `${proto}://${host}/api/callback`;
  const state = Math.random().toString(36).slice(2);
  const url =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    "&scope=repo" +
    `&state=${state}`;
  res.statusCode = 302;
  res.setHeader("Location", url);
  res.end();
};
