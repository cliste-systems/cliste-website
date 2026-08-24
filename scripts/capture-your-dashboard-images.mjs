/**
 * Renders desktop dashboard mockups and saves PNGs to public/your-dashboard/.
 * Run: node scripts/capture-your-dashboard-images.mjs
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/your-dashboard");
const TMP_DIR = path.join(__dirname, ".your-dashboard-capture");
const VIEWPORT = { width: 1536, height: 1024 };

const SHARED_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #eef0f3;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
  }
  .shell {
    width: 1536px;
    height: 1024px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }
  .browser {
    width: 100%;
    max-width: 1320px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    background: #fff;
    box-shadow: 0 40px 120px rgba(15, 23, 42, 0.12);
    overflow: hidden;
  }
  .browser-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 18px;
    border-bottom: 1px solid #f1f5f9;
    background: #f8fafc;
  }
  .dot { width: 12px; height: 12px; border-radius: 999px; }
  .dot-r { background: #fca5a5; }
  .dot-y { background: #fcd34d; }
  .dot-g { background: #86efac; }
  .url {
    margin-left: 12px;
    flex: 1;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 8px 14px;
    font-size: 13px;
    color: #64748b;
  }
  .dash {
    display: flex;
    min-height: 720px;
    background: #fbfcfe;
  }
  .sidebar {
    width: 220px;
    flex-shrink: 0;
    border-right: 1px solid #f1f5f9;
    background: #fff;
    padding: 24px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
  }
  .logo-mark {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: #0f172a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
  }
  .logo-title { font-weight: 600; font-size: 14px; }
  .logo-sub { font-size: 12px; color: #64748b; }
  .nav { display: flex; flex-direction: column; gap: 4px; }
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 10px 12px;
    font-size: 14px;
    color: #64748b;
  }
  .nav-item.active {
    background: #fff;
    color: #0f172a;
    font-weight: 500;
    box-shadow: 0 1px 0 rgba(15,23,42,0.04);
    outline: 1px solid #e2e8f0;
  }
  .badge {
    border-radius: 999px;
    background: #0f172a;
    color: #fff;
    font-size: 10px;
    padding: 2px 6px;
  }
  .main { flex: 1; padding: 32px 40px; }
  .title { font-size: 28px; font-weight: 600; letter-spacing: -0.02em; }
  .subtitle { margin-top: 8px; font-size: 14px; color: #64748b; line-height: 1.5; }
  .card {
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    background: #fff;
    box-shadow: 0 1px 0 rgba(15,23,42,0.04);
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    border-bottom: 1px solid #f1f5f9;
  }
  .row:last-child { border-bottom: none; }
  .row.highlight { background: #f8fafc; }
  .meta { font-size: 12px; color: #94a3b8; }
  .name { font-size: 14px; font-weight: 600; }
  .pill {
    display: inline-flex;
    border-radius: 6px;
    background: #f1f5f9;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #64748b;
  }
  .summary {
    font-size: 15px;
    line-height: 1.6;
    color: #334155;
  }
  .transcript {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #f1f5f9;
    font-size: 13px;
    line-height: 1.7;
    color: #64748b;
  }
  .tabs { display: flex; gap: 8px; margin-bottom: 24px; }
  .tab {
    border-radius: 999px;
    border: 1px solid #e2e8f0;
    background: #fff;
    padding: 8px 16px;
    font-size: 13px;
    color: #64748b;
  }
  .tab.active { background: #0f172a; color: #fff; border-color: #0f172a; }
  .field {
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background: #fff;
    padding: 14px 16px;
    margin-bottom: 12px;
  }
  .field label {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #94a3b8;
    margin-bottom: 6px;
  }
  .field .value { font-size: 14px; color: #0f172a; }
  .ticket {
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    background: #fff;
    padding: 20px;
    max-width: 520px;
  }
  .ticket h3 { font-size: 16px; font-weight: 600; }
  .ticket p { margin-top: 8px; font-size: 14px; color: #64748b; }
  .status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    font-size: 12px;
    font-weight: 600;
    color: #ea580c;
  }
  .status-dot { width: 8px; height: 8px; border-radius: 999px; background: #ea580c; }
  textarea {
    width: 100%;
    min-height: 96px;
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    padding: 12px 14px;
    font: inherit;
    font-size: 14px;
    color: #334155;
    resize: none;
  }
`;

function sidebar(active) {
  const items = [
    "Home",
    "Action Inbox",
    "Calls",
    "Contacts",
    "Call flow",
    "Cara Setup",
    "Usage",
    "Support",
    "Settings",
  ];
  return `
    <aside class="sidebar">
      <div class="logo">
        <div class="logo-mark">C</div>
        <div>
          <div class="logo-title">HelloCara</div>
          <div class="logo-sub">Dashboard</div>
        </div>
      </div>
      <nav class="nav">
        ${items
          .map((item) => {
            const isActive = item === active;
            const count =
              item === "Calls" || item === "Action Inbox"
                ? '<span class="badge">2</span>'
                : "";
            return `<div class="nav-item${isActive ? " active" : ""}"><span>${item}</span>${count}</div>`;
          })
          .join("")}
      </nav>
    </aside>
  `;
}

function browserChrome(url, inner) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><style>${SHARED_CSS}</style></head>
<body>
  <div class="shell">
    <div class="browser">
      <div class="browser-bar">
        <span class="dot dot-r"></span>
        <span class="dot dot-y"></span>
        <span class="dot dot-g"></span>
        <div class="url">${url}</div>
      </div>
      ${inner}
    </div>
  </div>
</body>
</html>`;
}

const MOCKUPS = {
  "not-an-app.png": browserChrome(
    "app.hellocara.ie/dashboard",
    `<div class="dash">
      ${sidebar("Home")}
      <main class="main">
        <h1 class="title">Today at a glance</h1>
        <p class="subtitle">How many calls came in, and what's waiting on you.</p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px;">
          ${["Calls handled", "Actions open", "Avg handle", "Line status"]
            .map(
              (t, i) => `<div class="card" style="padding:20px;${i === 3 ? "background:#0f172a;color:#fff;" : ""}">
                <div style="font-size:14px;font-weight:500;${i === 3 ? "color:#fff;" : ""}">${t}</div>
                <div style="margin-top:36px;font-size:42px;font-weight:300;${i === 3 ? "color:#fff;" : ""}">${i === 3 ? "On" : i === 0 ? "7" : i === 1 ? "2" : "48s"}</div>
              </div>`,
            )
            .join("")}
        </div>
      </main>
    </div>`,
  ),

  "call-lands.png": browserChrome(
    "app.hellocara.ie/dashboard/calls",
    `<div class="dash">
      ${sidebar("Calls")}
      <main class="main">
        <h1 class="title">Calls</h1>
        <p class="subtitle">Every call, newest first.</p>
        <div class="card" style="margin-top:28px;overflow:hidden;">
          <div class="row highlight">
            <div>
              <div class="name">Sarah Murphy</div>
              <div class="meta" style="margin-top:4px;">+353 87 123 4567 · Today, 3:14 pm</div>
              <div class="meta" style="margin-top:8px;">Asked about Sunday delivery</div>
            </div>
            <span class="pill">NEW</span>
          </div>
          <div class="row">
            <div>
              <div class="name">Martin Walsh</div>
              <div class="meta" style="margin-top:4px;">+353 86 555 0192 · Today, 1:40 pm</div>
              <div class="meta" style="margin-top:8px;">Quote request for cake order</div>
            </div>
          </div>
          <div class="row">
            <div>
              <div class="name">Aoife Byrne</div>
              <div class="meta" style="margin-top:4px;">+353 85 221 8841 · Today, 11:02 am</div>
              <div class="meta" style="margin-top:8px;">Opening hours question</div>
            </div>
          </div>
        </div>
      </main>
    </div>`,
  ),

  "read-the-call.png": browserChrome(
    "app.hellocara.ie/dashboard/calls",
    `<div class="dash">
      ${sidebar("Calls")}
      <main class="main">
        <h1 class="title">Sarah Murphy</h1>
        <p class="subtitle">+353 87 123 4567 · Today, 3:14 pm</p>
        <div class="card" style="margin-top:28px;padding:24px;max-width:760px;">
          <div style="font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#94a3b8;">Summary</div>
          <p class="summary" style="margin-top:10px;">Caller asked if you deliver on Sundays. Cara took the details for a callback.</p>
          <div class="transcript">
            <div style="font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#94a3b8;margin-bottom:10px;">Transcript</div>
            Caller: Do you deliver on Sundays?<br>
            Cara: I'll need to check that for you. Can I take your name and number?<br>
            Caller: Sarah Murphy, 087 123 4567.
          </div>
        </div>
      </main>
    </div>`,
  ),

  "action-inbox.png": browserChrome(
    "app.hellocara.ie/dashboard/action-inbox",
    `<div class="dash">
      ${sidebar("Action Inbox")}
      <main class="main">
        <h1 class="title">Action Inbox</h1>
        <p class="subtitle">The few things that need a person.</p>
        <div class="card" style="margin-top:28px;overflow:hidden;">
          <div class="row highlight">
            <div>
              <div class="name">Brandon</div>
              <div style="margin-top:8px;"><span class="pill">CALLBACK</span></div>
              <div class="meta" style="margin-top:8px;">Wants a call back about bulk order</div>
            </div>
            <div class="meta">Today, 3:12 pm</div>
          </div>
          <div class="row">
            <div>
              <div class="name">Martin</div>
              <div style="margin-top:8px;"><span class="pill">QUOTE REQUEST</span></div>
              <div class="meta" style="margin-top:8px;">Birthday cake for Saturday</div>
            </div>
            <div class="meta">Today, 1:40 pm</div>
          </div>
        </div>
      </main>
    </div>`,
  ),

  "teach-cara.png": browserChrome(
    "app.hellocara.ie/dashboard/cara-setup",
    `<div class="dash">
      ${sidebar("Cara Setup")}
      <main class="main">
        <h1 class="title">New question</h1>
        <p class="subtitle">Sunday delivery?</p>
        <div class="ticket">
          <h3>Caller asked about Sunday delivery</h3>
          <p>Cara opened this from today's call with Sarah Murphy.</p>
          <div class="status"><span class="status-dot"></span> OPEN</div>
          <textarea>Yes, we deliver on Sundays between 10am and 2pm within 5km.</textarea>
          <div style="margin-top:16px;display:flex;gap:10px;">
            <div style="border-radius:999px;background:#0f172a;color:#fff;padding:10px 18px;font-size:13px;">Approve answer</div>
            <div style="border-radius:999px;border:1px solid #e2e8f0;padding:10px 18px;font-size:13px;color:#64748b;">Save draft</div>
          </div>
        </div>
      </main>
    </div>`,
  ),

  "change-cara.png": browserChrome(
    "app.hellocara.ie/dashboard/cara-setup",
    `<div class="dash">
      ${sidebar("Cara Setup")}
      <main class="main">
        <h1 class="title">Cara Setup</h1>
        <p class="subtitle">Your hours, prices, answers, rules.</p>
        <div class="tabs">
          <div class="tab active">Hours</div>
          <div class="tab">Prices</div>
          <div class="tab">Answers</div>
          <div class="tab">Rules</div>
        </div>
        <div style="max-width:640px;">
          <div class="field"><label>Monday</label><div class="value">9:00 am – 6:00 pm</div></div>
          <div class="field"><label>Tuesday</label><div class="value">9:00 am – 6:00 pm</div></div>
          <div class="field"><label>Sunday</label><div class="value">Closed</div></div>
        </div>
      </main>
    </div>`,
  ),
};

await mkdir(OUT_DIR, { recursive: true });
await mkdir(TMP_DIR, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: VIEWPORT });

for (const [filename, html] of Object.entries(MOCKUPS)) {
  const htmlPath = path.join(TMP_DIR, filename.replace(".png", ".html"));
  const outPath = path.join(OUT_DIR, filename);
  await writeFile(htmlPath, html, "utf8");
  await page.goto(`file://${htmlPath}`);
  await page.waitForTimeout(200);
  await page.screenshot({ path: outPath, type: "png" });
  console.log(`Wrote ${outPath}`);
}

await browser.close();
console.log("Done.");
