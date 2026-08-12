const steps = [
  {
    title: "Scan",
    short: "Find what needs attention",
    kicker: "Find the signal",
    description: "Use My work to identify an issue or pull request requiring attention.",
    value: "Start with a clear view of what needs attention before deciding where an agent can help.",
    color: "#58a6ff",
    items: [
      ["#184", "Update authentication flow", "Issue", "attention"],
      ["PR 92", "Improve error handling", "Pull request", "review"],
      ["PR 87", "Add usage dashboard", "CI passing", "ready"]
    ]
  },
  {
    title: "Prioritize",
    short: "Choose delegable work",
    kicker: "Choose with intent",
    description: "Choose work that is well-defined and appropriate to delegate.",
    value: "Clear scope and success criteria give an agent the best chance of producing a useful result.",
    color: "#bc8cff",
    items: [
      ["01", "Clear desired outcome", "Defined", "confirmed"],
      ["02", "Useful repository context", "Available", "confirmed"],
      ["03", "Review criteria", "Documented", "confirmed"]
    ]
  },
  {
    title: "Delegate",
    short: "Start a focused session",
    kicker: "Create focused capacity",
    description: "Start a dedicated agent session with a clear outcome.",
    value: "A dedicated session keeps the agent focused and isolates its code changes on a separate branch.",
    color: "#f778ba",
    items: [
      ["S1", "Update authentication flow", "Interactive session", "active"],
      ["BR", "beburks/auth-flow", "Isolated branch", "created"],
      ["GO", "Tests passing", "Success criteria", "set"]
    ]
  },
  {
    title: "Parallelize",
    short: "Move independent tasks",
    kicker: "Expand your throughput",
    description: "Start another session when tasks can progress independently.",
    value: "Parallel sessions let independent tasks move at the same time without sharing a branch or blocking one another.",
    color: "#d29922",
    items: [
      ["S1", "Update authentication flow", "Running", "62%"],
      ["S2", "Improve error handling", "Running", "44%"],
      ["S3", "Draft API documentation", "Running", "71%"]
    ]
  },
  {
    title: "Review",
    short: "Inspect before accepting",
    kicker: "Keep judgment in the loop",
    description: "Inspect changes, CI status, and pull requests before accepting the work.",
    value: "Agents accelerate execution; you remain responsible for validating quality, intent, and readiness.",
    color: "#3fb950",
    items: [
      ["DF", "Review proposed diff", "14 files changed", "open"],
      ["CI", "Check validation", "All checks passed", "passed"],
      ["PR", "Approve pull request", "Ready for review", "decide"]
    ]
  },
  {
    title: "Repeat",
    short: "Return to the next priority",
    kicker: "Make it your workflow",
    description: "Return to My work to select the next priority.",
    value: "Repeating the cycle turns a successful task into a sustainable agent-driven development practice.",
    color: "#58a6ff",
    items: [
      ["01", "Scan My work", "New signal", "next"],
      ["02", "Select a priority", "Clear outcome", "choose"],
      ["03", "Start the next session", "Keep moving", "repeat"]
    ]
  }
];

let activeIndex = 0;

const elements = {
  card: document.querySelector("#command-card"),
  rail: document.querySelector("#step-rail"),
  copy: document.querySelector("#detail-copy"),
  count: document.querySelector("#step-count"),
  kicker: document.querySelector("#step-kicker"),
  title: document.querySelector("#step-title"),
  description: document.querySelector("#step-description"),
  value: document.querySelector("#step-value"),
  panel: document.querySelector("#mission-panel"),
  progress: document.querySelector("#progress-bar")
};

function buildTabs() {
  elements.rail.innerHTML = steps.map((step, index) => `
    <button
      class="step-tab"
      id="step-tab-${index}"
      type="button"
      role="tab"
      aria-selected="${index === 0}"
      aria-controls="detail-copy"
      tabindex="${index === 0 ? 0 : -1}"
      data-index="${index}"
    >
      <span class="tab-number">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${step.title}</strong><small>${step.short}</small></span>
      <i class="tab-state"></i>
    </button>
  `).join("");
}

function renderPanel(step) {
  elements.panel.innerHTML = `
    <div class="panel-heading">
      <span>${step.title} / Mission control</span>
      <i></i>
    </div>
    <div class="work-list">
      ${step.items.map((item, index) => `
        <div class="work-item ${index === 0 ? "active" : ""}">
          <span class="work-icon">${item[0]}</span>
          <span><strong>${item[1]}</strong><small>${item[2]}</small></span>
          <span class="work-state">${item[3]}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function activateStep(index, focusTab = false) {
  activeIndex = (index + steps.length) % steps.length;
  const step = steps[activeIndex];

  elements.card.style.setProperty("--feature", step.color);
  elements.copy.style.animation = "none";
  elements.panel.style.animation = "none";
  void elements.copy.offsetHeight;
  elements.copy.style.animation = "";
  elements.panel.style.animation = "";

  elements.count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / 06`;
  elements.kicker.textContent = step.kicker;
  elements.title.textContent = step.title;
  elements.description.textContent = step.description;
  elements.value.textContent = step.value;
  elements.progress.style.width = `${((activeIndex + 1) / steps.length) * 100}%`;
  renderPanel(step);

  document.querySelectorAll(".step-tab").forEach((tab, tabIndex) => {
    const selected = tabIndex === activeIndex;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  if (focusTab) {
    document.querySelector(`#step-tab-${activeIndex}`).focus();
  }
}

elements.rail.addEventListener("click", event => {
  const tab = event.target.closest(".step-tab");
  if (tab) activateStep(Number(tab.dataset.index));
});

document.querySelector("#previous-button").addEventListener("click", () => activateStep(activeIndex - 1));
document.querySelector("#next-button").addEventListener("click", () => activateStep(activeIndex + 1));

document.addEventListener("keydown", event => {
  if (event.target.matches("a, input, textarea, select")) return;
  if (event.key === "ArrowRight") activateStep(activeIndex + 1, true);
  if (event.key === "ArrowLeft") activateStep(activeIndex - 1, true);
  if (event.key === "Home") activateStep(0, true);
  if (event.key === "End") activateStep(steps.length - 1, true);
});

buildTabs();
activateStep(0);
