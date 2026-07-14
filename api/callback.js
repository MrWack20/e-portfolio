// Completes the GitHub OAuth flow and hands the token back to the Decap CMS window.
module.exports = async (req, res) => {
  const code = req.query && req.query.code;
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  function send(status, content) {
    const html =
      "<!doctype html><html><head><meta charset=\"utf-8\"></head><body>" +
      "<script>(function(){" +
      "function receive(e){" +
      "window.opener.postMessage('authorization:github:" + status + ":" + content + "', e.origin);" +
      "window.removeEventListener('message', receive, false);" +
      "}" +
      "window.addEventListener('message', receive, false);" +
      "window.opener && window.opener.postMessage('authorizing:github', '*');" +
      "})();</script>" +
      "<p>" + (status === "success" ? "Logged in — you can close this window." : "Authentication failed.") + "</p>" +
      "</body></html>";
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(html);
  }

  if (!code) return send("error", JSON.stringify({ error: "missing code" }));
  if (!clientId || !clientSecret) return send("error", JSON.stringify({ error: "missing oauth env vars" }));

  try {
    const r = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await r.json();
    if (data.access_token) {
      send("success", JSON.stringify({ token: data.access_token, provider: "github" }));
    } else {
      send("error", JSON.stringify({ error: data.error || "no token returned" }));
    }
  } catch (err) {
    send("error", JSON.stringify({ error: String(err) }));
  }
};
