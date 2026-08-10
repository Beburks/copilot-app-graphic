const icons = {
  parallel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM5.5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 13.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6 12h2v1.5a2.5 2.5 0 0 0 2.5 2.5H12v2h-1.5A4.5 4.5 0 0 1 6 13.5V12Zm12-1V9.5A2.5 2.5 0 0 0 15.5 7H14V5h1.5A4.5 4.5 0 0 1 20 9.5V11h-2Z"/></svg>`,
  place: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4.75C3 3.78 3.78 3 4.75 3h14.5c.97 0 1.75.78 1.75 1.75v14.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 21 3 20.22 3 19.25V4.75ZM5 8h14V5H5v3Zm0 2v9h4v-9H5Zm6 0v9h8v-9h-8Z"/></svg>`,
  fast: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2 4 13.5h7L10.5 22 20 10.5h-7L13.5 2Zm2.24 10.5-2.75 3.33.32-4.33H8.26l2.75-3.33-.32 4.33h5.05Z"/></svg>`,
  control: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h2v3h2v2H5V6h2V3Zm8 0h2v8h2v2h-6v-2h2V3ZM7 10h2v11H7V10Zm8 5h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2Z"/></svg>`,
  canvas: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.75 3h14.5C20.22 3 21 3.78 21 4.75v14.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 21 3 20.22 3 19.25V4.75C3 3.78 3.78 3 4.75 3ZM5 5v14h14V5H5Zm2 2h5v5H7V7Zm2 2v1h1V9H9Zm5-2h3v2h-3V7Zm0 4h3v2h-3v-2Zm-7 3h10v3H7v-3Z"/></svg>`,
  issue: `<svg viewBox="0 0 16 16"><path d="M8 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 3h2v3H7V3Zm1-2a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 8 3Z"/></svg>`,
  agent: `<svg viewBox="0 0 16 16"><path d="M5 2h6v2h2.5A1.5 1.5 0 0 1 15 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-6A1.5 1.5 0 0 1 2.5 4H5V2Zm2 2h2V3H7v1ZM3 6v5h10V6H3Zm2 1h2v2H5V7Zm4 0h2v2H9V7Z"/></svg>`,
  review: `<svg viewBox="0 0 16 16"><path d="M2.75 2A1.75 1.75 0 0 0 1 3.75v7.5C1 12.22 1.78 13 2.75 13H5l3 2v-2h5.25c.97 0 1.75-.78 1.75-1.75v-7.5C15 2.78 14.22 2 13.25 2H2.75ZM3 4h10v7H7.4L6 11.93V11H3V4Zm2 2h6v1.5H5V6Zm0 2.5h4V10H5V8.5Z"/></svg>`,
  merge: `<svg viewBox="0 0 16 16"><path d="M5 3.5a2.5 2.5 0 1 0-3 2.45v4.1a2.5 2.5 0 1 0 2 0v-4.1A2.5 2.5 0 0 0 5 3.5Zm-2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm.5 8.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 1v3.5A2.5 2.5 0 0 1 8.5 7H7v2h1.5A4.5 4.5 0 0 0 13 4.5V1h-2Z"/></svg>`
};

const features = [
  {
    title: "Work in parallel.",
    kicker: "More progress. Less waiting.",
    description: "Run multiple agent sessions at the same time, each isolated on its own branch. Move several tasks forward without creating conflicts—or a queue.",
    tags: ["Concurrent sessions", "Isolated branches", "Zero idle time"],
    color: "#bc8cff",
    icon: icons.parallel,
    demo: "parallel"
  },
  {
    title: "Stay in one place.",
    kicker: "One surface. Full workflow.",
    description: "Triage issues, direct agents, review changes, and land pull requests without bouncing between your terminal, IDE, and browser.",
    tags: ["Issue triage", "Code review", "Pull requests"],
    color: "#58a6ff",
    icon: icons.place,
    demo: "workflow"
  },
  {
    title: "Start fast.",
    kicker: "Native from the first click.",
    description: "Your GitHub repositories, branches, issues, and pull requests work out of the box. No extra integrations or setup rituals required.",
    tags: ["GitHub native", "No setup", "Instant context"],
    color: "#3fb950",
    icon: icons.fast,
    demo: "terminal"
  },
  {
    title: "Stay in control.",
    kicker: "Your work. Your operating mode.",
    description: "Choose how much autonomy each agent gets—from close collaboration to independent execution. Tune the model and reasoning effort session by session.",
    tags: ["Flexible autonomy", "Model choice", "Reasoning control"],
    color: "#d29922",
    icon: icons.control,
    demo: "control"
  },
  {
    title: "Collaborate on a shared surface.",
    kicker: "Interfaces for people and agents.",
    description: "Use canvases to create custom, interactive spaces where people and agents can shape ideas, inspect work, and make decisions together.",
    tags: ["Custom canvases", "Shared context", "Human + agent"],
    color: "#f778ba",
    icon: icons.canvas,
    demo: "canvas"
  }
];

const sessionNames = [
  ["Add passkey support", "beburks/passkeys"],
  ["Fix billing webhook", "beburks/webhook-fix"],
  ["Review launch copy", "beburks/launch-copy"],
  ["Build usage chart", "beburks/usage-chart"],
  ["Update API docs", "beburks/api-docs"]
];

let activeIndex = 0;

const elements = {
  commandCenter: document.querySelector("#command-center"),
  featureContent: document.querySelector(".feature-content"),
  demoPanel: document.querySelector("#demo-panel"),
  icon: document.querySelector("#feature-icon"),
  kicker: document.querySelector("#feature-kicker"),
  title: document.querySelector("#feature-title"),
  description: document.querySelector("#feature-description"),
  tags: document.querySelector("#feature-tags"),
  index: document.querySelector("#feature-index"),
  progress: document.querySelector("#progress-bar"),
  tabs: document.querySelector("#benefit-tabs"),
  sessions: document.querySelector("#session-list")
};

function renderSessions() {
  elements.sessions.innerHTML = sessionNames.map((session, index) => `
    <div class="session-item ${index === activeIndex ? "active" : ""}">
      <i class="session-state"></i>
      <span><strong>${session[0]}</strong><small>${session[1]}</small></span>
      <span class="session-badge">${index === activeIndex ? "active" : "ready"}</span>
    </div>
  `).join("");
}

function renderDemo(type) {
  const demos = {
    parallel: `
      <span class="demo-label">Live agent activity</span>
      <div class="connector"></div>
      ${sessionNames.slice(0, 3).map((session, index) => `
        <div class="agent-card">
          <span class="agent-symbol">0${index + 1}</span>
          <span><strong>${session[0]}</strong><small>${session[1]}</small></span>
          <span class="check">✓</span>
        </div>
      `).join("")}
    `,
    workflow: `
      <span class="demo-label">From signal to shipped</span>
      <div class="flow-stack">
        ${[
          [icons.issue, "Triage issue"],
          [icons.agent, "Direct agent"],
          [icons.review, "Review diff"],
          [icons.merge, "Merge PR"]
        ].map(item => `<div class="flow-item"><span class="flow-icon">${item[0]}</span><span>${item[1]}</span></div>`).join("")}
      </div>
    `,
    terminal: `
      <span class="demo-label">Repository connection</span>
      <div class="terminal-card">
        <div class="terminal-bar">copilot-app / launchpad</div>
        <div class="terminal-body">
          <div><span class="prompt">›</span> Connecting to GitHub...</div>
          <div><span class="success">✓</span> Repository detected <span>octo-org/launchpad</span></div>
          <div><span class="success">✓</span> 14 branches available</div>
          <div><span class="success">✓</span> 8 open issues synced</div>
          <div><span class="success">✓</span> 3 pull requests ready for review</div>
          <div><span class="prompt">›</span> Workspace ready <span class="typing-cursor">_</span></div>
        </div>
      </div>
    `,
    control: `
      <span class="demo-label">Session configuration</span>
      <div class="control-card">
        <div class="control-row"><span>Operating mode<small>How the agent works with you</small></span><span class="select-chip">Autopilot ▾</span></div>
        <div class="control-row"><span>Model<small>Choose per session</small></span><span class="select-chip">GPT-5.4 ▾</span></div>
        <div class="control-row"><span>Reasoning effort<small>Balance speed and depth</small></span><span class="select-chip">High ▾</span></div>
        <div class="autonomy-track"></div>
      </div>
    `,
    canvas: `
      <span class="demo-label">Shared product canvas</span>
      <div class="canvas-board">
        <div class="canvas-node main">Interactive launch plan<br><small>People + agents editing together</small></div>
        <div class="canvas-node note-one">Check metrics</div>
        <div class="canvas-node note-two">Agent updated</div>
        <div class="cursor person">You</div>
        <div class="cursor agent">Copilot</div>
      </div>
    `
  };
  elements.demoPanel.innerHTML = demos[type];
}

function activateFeature(index, focusTab = false) {
  activeIndex = (index + features.length) % features.length;
  const feature = features[activeIndex];

  elements.commandCenter.style.setProperty("--feature-color", feature.color);
  elements.featureContent.style.animation = "none";
  elements.demoPanel.style.animation = "none";
  void elements.featureContent.offsetHeight;
  elements.featureContent.style.animation = "";
  elements.demoPanel.style.animation = "";

  elements.icon.innerHTML = feature.icon;
  elements.kicker.textContent = feature.kicker;
  elements.title.textContent = feature.title;
  elements.description.textContent = feature.description;
  elements.tags.innerHTML = feature.tags.map(tag => `<span>${tag}</span>`).join("");
  elements.index.textContent = `${String(activeIndex + 1).padStart(2, "0")} / 05`;
  elements.progress.style.width = `${(activeIndex + 1) * 20}%`;

  renderSessions();
  renderDemo(feature.demo);

  document.querySelectorAll(".benefit-tab").forEach((tab, tabIndex) => {
    const selected = tabIndex === activeIndex;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  if (focusTab) {
    document.querySelectorAll(".benefit-tab")[activeIndex].focus();
  }
}

function buildTabs() {
  elements.tabs.innerHTML = features.map((feature, index) => `
    <button
      class="benefit-tab"
      id="tab-${index}"
      type="button"
      role="tab"
      aria-controls="feature-title"
      aria-selected="${index === 0}"
      tabindex="${index === 0 ? 0 : -1}"
      data-index="${index}"
    >
      <span class="tab-number">0${index + 1}</span>
      <span class="tab-title">${feature.title}</span>
    </button>
  `).join("");

  elements.tabs.addEventListener("click", event => {
    const tab = event.target.closest(".benefit-tab");
    if (tab) activateFeature(Number(tab.dataset.index));
  });
}

document.querySelector("#previous-button").addEventListener("click", () => activateFeature(activeIndex - 1));
document.querySelector("#next-button").addEventListener("click", () => activateFeature(activeIndex + 1));
document.querySelector("#explore-button").addEventListener("click", () => {
  elements.commandCenter.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("keydown", event => {
  const target = event.target;
  if (target.matches("input, textarea, select")) return;
  if (event.key === "ArrowRight") activateFeature(activeIndex + 1, target.closest(".benefit-tab"));
  if (event.key === "ArrowLeft") activateFeature(activeIndex - 1, target.closest(".benefit-tab"));
});

buildTabs();
activateFeature(0);
