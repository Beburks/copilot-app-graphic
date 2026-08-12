const pillars = [
  {
    title: "Increase Copilot value",
    tabTitle: "Increase value",
    short: "Extend the investment",
    kicker: "Extend the investment",
    description: "Give licensed developers another way to turn Copilot access into completed work.",
    takeaway: "Enabling the app expands how licensed developers can put Copilot to work.",
    color: "#bc8cff",
    signals: [
      ["AC", "Copilot access", "Licensed developers", "available"],
      ["APP", "Copilot App", "Agent-driven workflow", "enabled"],
      ["OUT", "Completed work", "From access to outcomes", "realized"]
    ]
  },
  {
    title: "Accelerate delivery",
    tabTitle: "Accelerate delivery",
    short: "Move more work",
    kicker: "Create parallel capacity",
    description: "Developers can run parallel tasks and manage work from issue through reviewed pull request.",
    takeaway: "The app helps teams expand delivery capacity without removing developer review and control.",
    color: "#58a6ff",
    signals: [
      ["01", "Issue selected", "Work begins with context", "ready"],
      ["02", "Parallel sessions", "Independent tasks progress", "running"],
      ["03", "Reviewed pull request", "Developer validates work", "controlled"]
    ]
  },
  {
    title: "Maintain governance",
    tabTitle: "Maintain governance",
    short: "Enable with control",
    kicker: "Govern the path",
    description: "Control access through enterprise or organization policies rather than leaving adoption unmanaged.",
    takeaway: "Administrators can make the capability available through established GitHub policy controls.",
    color: "#3fb950",
    signals: [
      ["ENT", "Enterprise policy", "Set organization-wide direction", "managed"],
      ["ORG", "Organization policy", "Control feature availability", "managed"],
      ["USR", "Eligible users", "Access follows policy", "governed"]
    ]
  },
  {
    title: "Prepare teams now",
    tabTitle: "Prepare teams now",
    short: "Build readiness",
    kicker: "Start before urgency",
    description: "Build experience with agent-driven development before it becomes a competitive necessity.",
    takeaway: "Early enablement gives teams time to learn, establish practices, and adapt intentionally.",
    color: "#d29922",
    signals: [
      ["NOW", "Enable access", "Remove the first barrier", "start"],
      ["EXP", "Build experience", "Learn through real workflows", "grow"],
      ["RDY", "Create readiness", "Prepare for what comes next", "ready"]
    ]
  }
];

let activeIndex = 0;

const elements = {
  card: document.querySelector("#value-card"),
  tabs: document.querySelector("#value-tabs"),
  copy: document.querySelector("#value-copy"),
  count: document.querySelector("#value-count"),
  kicker: document.querySelector("#value-kicker"),
  title: document.querySelector("#value-title"),
  description: document.querySelector("#value-description"),
  takeaway: document.querySelector("#value-takeaway"),
  panel: document.querySelector("#signal-panel"),
  progress: document.querySelector("#progress-bar")
};

function buildTabs() {
  elements.tabs.innerHTML = pillars.map((pillar, index) => `
    <button
      class="value-tab"
      id="value-tab-${index}"
      type="button"
      role="tab"
      aria-selected="${index === 0}"
      aria-controls="value-copy"
      tabindex="${index === 0 ? 0 : -1}"
      data-index="${index}"
    >
      <span class="tab-number">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${pillar.tabTitle}</strong><small>${pillar.short}</small></span>
      <i class="tab-state"></i>
    </button>
  `).join("");
}

function renderPanel(pillar) {
  elements.panel.innerHTML = `
    <div class="panel-heading">
      <span>${pillar.tabTitle} / Organization signal</span>
      <i></i>
    </div>
    <div class="signal-list">
      ${pillar.signals.map((signal, index) => `
        <div class="signal-row ${index === 1 ? "active" : ""}">
          <span class="signal-icon">${signal[0]}</span>
          <span><strong>${signal[1]}</strong><small>${signal[2]}</small></span>
          <span class="signal-state">${signal[3]}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function activatePillar(index, focusTab = false) {
  activeIndex = (index + pillars.length) % pillars.length;
  const pillar = pillars[activeIndex];

  elements.card.style.setProperty("--feature", pillar.color);
  elements.copy.style.animation = "none";
  elements.panel.style.animation = "none";
  void elements.copy.offsetHeight;
  elements.copy.style.animation = "";
  elements.panel.style.animation = "";

  elements.count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / 04`;
  elements.kicker.textContent = pillar.kicker;
  elements.title.textContent = pillar.title;
  elements.description.textContent = pillar.description;
  elements.takeaway.textContent = pillar.takeaway;
  elements.progress.style.width = `${((activeIndex + 1) / pillars.length) * 100}%`;
  renderPanel(pillar);

  document.querySelectorAll(".value-tab").forEach((tab, tabIndex) => {
    const selected = tabIndex === activeIndex;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  if (focusTab) {
    document.querySelector(`#value-tab-${activeIndex}`).focus();
  }
}

elements.tabs.addEventListener("click", event => {
  const tab = event.target.closest(".value-tab");
  if (tab) activatePillar(Number(tab.dataset.index));
});

document.querySelector("#previous-button").addEventListener("click", () => activatePillar(activeIndex - 1));
document.querySelector("#next-button").addEventListener("click", () => activatePillar(activeIndex + 1));

document.addEventListener("keydown", event => {
  if (event.target.matches("a, input, textarea, select")) return;
  if (event.key === "ArrowRight") activatePillar(activeIndex + 1, true);
  if (event.key === "ArrowLeft") activatePillar(activeIndex - 1, true);
  if (event.key === "Home") activatePillar(0, true);
  if (event.key === "End") activatePillar(pillars.length - 1, true);
});

buildTabs();
activatePillar(0);
