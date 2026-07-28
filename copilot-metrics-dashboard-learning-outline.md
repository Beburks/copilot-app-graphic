# Copilot metrics dashboard: From data to enablement decisions

## Learning purpose

Help GitHub Copilot administrators and engineering leaders move beyond reporting active-user counts. Learners will use the Copilot usage and impact dashboards to identify adoption depth, diagnose friction, target training, and evaluate whether enablement is changing behavior and delivery outcomes.

GitHub positions the dashboards as tools for understanding adoption, engagement, code generation, and pull request lifecycle trends. The impact dashboard adds adoption cohorts, an adoption multiplier, six-month trends, and recommended next steps so leaders can connect usage patterns to practical action. Sources: [GitHub Copilot usage metrics](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics), [New Copilot usage metrics impact dashboard](https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/)

## Audience

- Enterprise administrators and organization owners responsible for Copilot rollout, policy, access, or reporting
- Engineering, transformation, and learning leaders responsible for adoption, productivity, or capability development
- Enablement partners who design onboarding, role-based learning, office hours, and champion programs

## Format

**Recommended delivery:** 60–75-minute self-paced course made up of six short modules. Learners can complete the course in one sitting or pause between modules. Each module includes a purpose, WIIFM, core content, an individual practice activity, and immediate feedback or a model answer.

**Prerequisite:** Dashboard access is helpful but not required. Learners with access should open **Insights > Copilot usage** and **Insights > Copilot impact** in a separate tab. Learners without access can use the included scenarios and planning template. The **Copilot usage metrics** policy must be enabled for live access. Organization-only access can be delegated through a custom role with the **View organization Copilot metrics** permission. Sources: [Viewing the Copilot usage metrics dashboard](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/view-usage-and-adoption), [Viewing the Copilot impact dashboard](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/view-impact-dashboard), [GitHub Copilot usage metrics](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics)

**Learner artifacts:** A one-page **Copilot Enablement Decision Brief** and a companion **Enablement Planning Checklist**, completed progressively throughout the course.

## The why

License assignment answers, “Who can use Copilot?” Usage metrics answer, “Are people using it, how deeply are they using it, and where should we intervene?” A strong enablement plan needs both.

The learning opportunity is to replace broad, one-size-fits-all training with evidence-informed enablement:

- **Adoption signals** show whether Copilot has become part of regular work.
- **Engagement and feature signals** show whether learners are progressing beyond initial use.
- **Acceptance signals** offer a view into relevance and trust.
- **Language, model, and mode signals** help tailor examples to real workflows.
- **Adoption cohorts and pull request signals** help leaders explore whether deeper usage is associated with changes in delivery flow.

Source: [Interpreting usage and adoption metrics for GitHub Copilot](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics)

## WIIFM

| Learner | What is in it for me? |
| --- | --- |
| Copilot administrator | Prioritize configuration, onboarding, communication, and license follow-up using visible adoption gaps instead of assumptions. |
| Engineering leader | Tell a more credible adoption story that connects capability use with pull request throughput and cycle-time signals without reducing success to a single activity metric. |
| Learning or enablement leader | Segment learners by maturity, select the next skill each group needs, and measure behavior change after an intervention. |
| Team leader or champion | Use feature, language, and workflow patterns to deliver examples that match the team’s day-to-day work. |

## GitHub Learn Copilot proficiency levels

[GitHub Learn’s Copilot Proficiency framework](https://learn.github.com/proficiencies/copilot/justification) determines proficiency from observable signals across GitHub.com, the IDE, CLI, and mobile during everyday work. It organizes each level into **What to know** and **What to do**.

| Level | GitHub Learn subtitle | GitHub Learn definition |
| --- | --- | --- |
| **Beginner** | Early engagement and awareness | “The Beginner level represents first contact and early hands-on engagement with GitHub Copilot. A Beginner has used the chat panel on GitHub.com across multiple sessions and projects, and is aware of IDE features such as inline suggestions, inline chat, and the panel sidebar. At this stage, a learner understands what Copilot is, where it can be used, and how it might fit into everyday development workflows.” |
| **Intermediate** | Broad theoretical understanding, some applied use, and awareness of extended features | “The Intermediate level has moved beyond first contact, having now experimented with Copilot in different situations and surfaces. An Intermediate is familiar with web-based collaboration features, core IDE features, model management, agent configuration, customization options, and techniques for managing context.” |
| **Proficient** | Practical ability to work on projects | “The Proficient level represents a developer who can practically apply GitHub Copilot across typical scenarios, demonstrated through consistent hands-on usage across multiple repositories and extended periods. A Proficient user can use many web and IDE features, select appropriate models, and apply customizations to tailor Copilot for specific project needs. They have experimented with extended features and are aware of extensibility/integration options.” |
| **Advanced** | Coming Soon | “The Advanced level is currently under development.” |
| **Expert** | Coming Soon | “The Expert level is currently under development.” |

Do not create local definitions for Advanced or Expert while GitHub Learn marks them as under development.

## Learning objectives

By the end of the course, learners will be able to:

1. Explain the difference between license, adoption, engagement, acceptance, code-generation, and pull request lifecycle data.
2. Interpret dashboard trends and adoption cohorts without treating a single metric as proof of productivity or causation.
3. Diagnose at least one likely adoption or enablement gap from a dashboard scenario.
4. Use dashboard evidence alongside GitHub Learn’s Beginner, Intermediate, and Proficient definitions without treating proficiency levels and adoption cohorts as equivalent.
5. Create a 30/60/90-day enablement experiment with a baseline, action, audience, success signals, and review cadence.

## Course map

| Module | Time | Learner outcome | Evidence of learning |
| --- | ---: | --- | --- |
| 1. Start with the decision | 8 minutes | Write a decision question that metrics can inform | Decision question |
| 2. Know the data | 12 minutes | Identify coverage, attribution, and freshness caveats | Scenario response |
| 3. Read the adoption journey | 15 minutes | Interpret cohorts and select a priority audience | Cohort diagnosis |
| 4. Diagnose an enablement need | 12 minutes | Match a pattern to a targeted intervention | Signal-to-action choice |
| 5. Build an enablement experiment | 18 minutes | Create a measurable 30/60/90-day plan | Draft decision brief and planning checklist |
| 6. Tell the story responsibly | 7 minutes | Communicate an evidence-based conclusion with a caveat | Executive summary |

## Self-paced learning outline

### Module 1: Start with the decision, not the dashboard — 8 minutes

**Why:** Metrics create value only when they improve a decision.

**WIIFM:** You gain a repeatable way to turn reporting into action.

**Learn**

- Frame the business question first: activation, sustained use, capability depth, trust, workflow fit, or delivery flow.
- Separate observation, interpretation, and action: What happened? What might explain it? What will we test?
- Use multiple signals and qualitative feedback rather than declaring success from one number.

**Try it:** Rewrite “Increase Copilot usage” as a decision question. Record your answer in the **Decision** section of the Copilot Enablement Decision Brief.

**Check your work:** A strong response identifies an audience, a behavior, and a measurable signal. Model answer: “Which adoption cohort needs which next skill, and what signal would show that the intervention worked?”

### Module 2: Know what the data can and cannot tell you — 12 minutes

**Why:** Sound decisions depend on understanding coverage, attribution, freshness, and limitations.

**WIIFM:** You can avoid misleading comparisons and explain caveats confidently to stakeholders.

**Learn**

- The usage dashboard visualizes 28-day trends; the impact dashboard uses a trailing 28-day window for cohort assignment.
- Data is primarily derived from IDE telemetry and supplemented by server-side signals. Some dimensional fields may be empty when richer client telemetry is unavailable.
- Copilot Chat on GitHub.com and GitHub Mobile are not included in the documented usage coverage.
- License and seat management data comes from the Copilot user management API, not the usage metrics reports.
- Organization metrics use organization membership and can include the same user in multiple organizations; enterprise totals deduplicate users.
- Dashboard and API data is not real-time. Allow for the documented processing lag before evaluating an intervention.

**Try it:** Choose one scenario and write the first fact you would verify before taking action: a sudden usage decline, an organization total that does not match the enterprise total, or a large Passive cohort.

**Immediate feedback**

| Scenario | First checks |
| --- | --- |
| Sudden decline | Data freshness, telemetry delivery, supported IDE and extension versions, policy or configuration changes |
| Organization-to-enterprise mismatch | Membership-based attribution and enterprise-level deduplication |
| Large Passive cohort | License and setup status, telemetry coverage, GitHub.com-only use, and whether users met the two-day engagement threshold |

Source: [GitHub Copilot usage metrics](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics)

### Module 3: Read the dashboard as an adoption journey — 15 minutes

**Why:** Active-user counts do not distinguish initial trial from deeper, agent-enabled workflows.

**WIIFM:** You can see where users are in the adoption journey and choose a relevant next step.

**Learn**

| Cohort | Documented behavior | Enablement question |
| --- | --- | --- |
| Passive | The user has not met a phase threshold in the trailing 28-day period. This does not necessarily mean no activity. | Is the issue access, setup, awareness, workflow relevance, telemetry coverage, or too little repeated use? |
| Phase 1: Code first | The user engaged with code completions and/or IDE agent mode. | How do we build confidence with context, prompting, chat modes, and repeatable coding tasks? |
| Phase 2: Agent first | The user engaged with one GitHub-based agent surface, such as Copilot cloud agent, code review, or CLI. | Which agent workflow should become a consistent team habit next? |
| Phase 3: Multi-agent | The user engaged with two or more GitHub-based agent surfaces, or with the GitHub Copilot app. | How do we scale advanced practices, governance, measurement, and peer coaching? |

Users must have qualifying activity on at least two days in the trailing 28-day window to enter a phase. Assignment is recalculated daily, so cohort movement can reflect days rolling into or out of the window rather than an immediate behavior change.

**Keep the frameworks separate:** Adoption cohorts classify product-surface activity in a rolling 28-day window. GitHub Learn proficiency uses observable signals across GitHub.com, IDE, CLI, and mobile. Because the usage dashboard does not cover every proficiency signal or surface, do not infer a proficiency level directly from a dashboard cohort.

**Try it:** Review this scenario: 45% Passive, 40% Phase 1, 12% Phase 2, and 3% Phase 3. Choose one priority audience. Record the evidence, one plausible explanation, and one fact you still need before acting.

**Model response:** Prioritize Passive users if the immediate goal is activation, or Phase 1 users if the goal is deeper agent adoption. The distribution alone does not explain the cause. Verify setup and telemetry coverage for Passive users, or agent availability, awareness, and workflow relevance for Phase 1 users.

Sources: [GitHub Copilot usage metrics: Understanding adoption cohorts](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics#understanding-adoption-cohorts), [Copilot usage metrics API adds cohorts for AI adoption](https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption/)

### Module 4: Turn signals into a training diagnosis — 12 minutes

**Why:** Different patterns point to different enablement needs.

**WIIFM:** You can spend enablement time where it is most likely to remove friction or deepen capability.

**Learn**

| Signal or pattern | Investigate before concluding | Possible enablement response |
| --- | --- | --- |
| Low or declining active use | License assignment, IDE and extension setup, policy, telemetry, role relevance, recent organizational changes | Setup clinic, role-based onboarding, manager nudge, or license follow-up |
| Stable use but low acceptance | Task fit, language, context quality, extension version, developer feedback | Context-setting and prompt practice using the team’s languages and repositories |
| Heavy concentration in one chat mode | Whether learners know when to use Ask, Edit, Plan, or Agent | Mode-selection lab built around real development scenarios |
| Phase 1 share is high and Phase 2 growth has stalled | Agent availability, permissions, awareness, trust, and suitable workflows | Guided agent workflow, such as code review, CLI, or cloud agent |
| Phase 2 growth but little Phase 3 progression | Whether a second agent surface is enabled and relevant | Multi-surface workflow lab and champion-led demonstrations |
| Large Passive segment | Setup, access, telemetry coverage, GitHub.com-only use, or low repeated engagement | Re-onboarding, workflow discovery, targeted nudges, and office hours |
| Language-specific adoption gaps | Team composition, supported workflows, examples, and local champions | Language- and framework-specific labs |
| Pull request review latency or cycles remain high | Review policy, repository complexity, team mix, change size, and non-Copilot bottlenecks | Code review workflow training plus a broader process review |

GitHub’s July 2026 API updates added total merged pull requests, time to first review, and review-cycle measures by adoption phase. These can help learners explore where enablement may influence delivery flow, but they should be interpreted with cohort composition and work complexity in mind. Sources: [Track total merges by adoption phase](https://github.blog/changelog/2026-06-26-track-total-merges-by-adoption-phase-in-enterprise-and-organization-reports/), [Add review cycles and time to adoption phases](https://github.blog/changelog/2026-07-07-add-review-cycles-and-time-to-adoption-phases-in-the-usage-api/)

**Apply the GitHub Learn levels without redefining them**

| Proficiency level | How the metrics experience can support planning |
| --- | --- |
| Beginner | Use dashboard evidence to identify early engagement patterns, then use GitHub Learn’s **What to know** and **What to do** items to select foundational support. Do not rely on the usage dashboard alone because the Beginner definition includes GitHub.com activity. |
| Intermediate | Examine breadth across features, modes, models, and agent adoption, then compare the learning plan with GitHub Learn’s Intermediate knowledge and activity items. |
| Proficient | Examine sustained usage patterns and breadth of practical application over time, supplementing dashboard trends with repository, user, and qualitative evidence. |
| Advanced | Do not define or design level-specific requirements yet; GitHub Learn marks this level as under development. |
| Expert | Do not define or design level-specific requirements yet; GitHub Learn marks this level as under development. |

**Try it:** Select the best initial response when Phase 1 is stable but Phase 2 is not growing.

1. Run the same introductory prompting course for everyone.
2. Deliver a guided workflow using one relevant agent surface and verify that access and policy support it.
3. Reassign licenses immediately.

**Answer:** Option 2. The pattern points to a possible gap between code-first and agent-first behavior. Confirm availability and workflow relevance before choosing the specific agent experience.

### Module 5: Build an enablement experiment — 18 minutes

**Why:** A dashboard observation is not an enablement plan.

**WIIFM:** You leave with an immediately usable action plan and a way to evaluate it.

**Build your decision brief**

| Element | Prompt |
| --- | --- |
| Decision | What decision are we trying to improve? |
| Audience | Which organization, team, role, or cohort needs support? |
| Baseline | Which two or three signals describe the current state? |
| Hypothesis | What behavior or friction might explain the pattern? |
| Intervention | What specific skill, workflow, communication, or configuration change will we test? |
| Leading indicators | Which adoption, engagement, mode, feature, or acceptance signals should move first? |
| Outcome indicators | Which pull request throughput, time-to-merge, review-latency, or review-cycle signals will we monitor? |
| Qualitative evidence | What survey, interview, office-hours, or retrospective feedback will test the explanation? |
| Guardrail | What would prevent an overclaim or unintended incentive? |
| Review cadence | When will we compare the baseline and trend, allowing for the rolling window and data lag? |

**Recommended 30/60/90-day structure**

- **Days 0–30: Baseline and diagnose.** Establish the cohort mix and supporting signals, collect developer feedback, verify configuration, and select one audience.
- **Days 31–60: Intervene and observe.** Deliver one focused learning experience, reinforce it through champions or office hours, and monitor leading indicators.
- **Days 61–90: Evaluate and adapt.** Compare trends, review delivery-flow signals and feedback, document what changed, and decide whether to scale, revise, or stop.

**Try it:** Complete every row in the planning template and the companion Enablement Planning Checklist using your live dashboard or the Module 3 scenario. Then write a two-minute executive readout covering the evidence, action, expected value, and caveat.

**Completion check:** Your plan is ready when it names one audience, one intervention, at least two quantitative signals, one qualitative signal, one caveat, a reinforcement mechanism, and a review date.

### Module 6: Tell the story responsibly — 7 minutes

**Why:** Metrics can inform decisions without becoming individual performance surveillance or unsupported proof of causation.

**WIIFM:** You can communicate value credibly and preserve trust.

**Learn**

- Say “associated with” rather than “caused by” when comparing cohorts.
- The adoption multiplier compares different populations, not the same users before and after. Team composition, seniority, and work complexity may affect the result.
- Lines of code are directional output signals, not quality or productivity scores.
- Prefer trends, multiple measures, and feedback over rankings or isolated snapshots.
- Use individual-level data to provide support and diagnose enablement needs, not as a standalone performance measure.

**Try it:** Evaluate this statement: “Phase 3 users merged pull requests faster, so multi-agent use caused the improvement.”

**Answer:** The statement overclaims causation. A responsible version is: “In this period, deeper Copilot adoption was associated with faster merges. We will compare team composition, work complexity, cohort trends, and qualitative feedback before deciding whether the enablement intervention contributed.”

**Reflection:** What decision will this data improve, what evidence supports it, and what caveat belongs beside the conclusion?

Source: [Interpreting usage and adoption metrics: Reviewing the adoption multiplier](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics#reviewing-the-adoption-multiplier)

## Capstone deliverable

Complete the one-page **Copilot Enablement Decision Brief**:

1. The business or learner problem
2. The dashboard evidence and relevant caveats
3. The target cohort or workflow
4. One focused learning intervention
5. Leading, outcome, and qualitative measures
6. A 30/60/90-day review plan
7. The decision requested from the sponsor

## Companion enablement planning checklist

Use this checklist after Module 3 to shape the intervention, revisit it in Module 5, and include it with the final decision brief. Its structure is adapted from the outcome-first, audience-readiness, measurement, reinforcement, and dependency patterns in [Copilot Enablement Planning](https://microsoft-my.sharepoint.com/personal/lbosnjak_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B344D2C49-F137-4646-B4C8-A66CEB157D1D%7D&file=Copilot%20Enablement%20Planning.docx&action=default&mobileredirect=true).

### 1. Impact and desired outcomes

- [ ] I defined the business or learner outcome that matters most.
- [ ] I described the behavior that should change, not only the metric that should increase.
- [ ] I stated what meaningful progress should look like in 30, 60, and 90 days.

### 2. Measures of success

- [ ] I selected leading signals for adoption, engagement, feature use, or acceptance.
- [ ] I selected outcome signals for throughput, time to merge, review latency, or review cycles where relevant.
- [ ] I included qualitative evidence such as surveys, interviews, retrospectives, or office-hours themes.
- [ ] I documented the baseline, data source, owner, review date, and known limitation for each measure.

### 3. Audience and readiness

- [ ] I identified the target organization, team, role, or adoption cohort.
- [ ] I distinguished access or setup needs from skill, confidence, and workflow needs.
- [ ] I selected the applicable GitHub Learn level: Beginner, Intermediate, Proficient, Advanced, or Expert.
- [ ] I used GitHub Learn’s exact definition and **What to know** and **What to do** items without creating a local definition.
- [ ] If I selected Advanced or Expert, I recorded that the level is under development and did not invent requirements.
- [ ] I considered dashboard cohort evidence without assuming a one-to-one mapping between cohort and proficiency level.

### 4. Learning culture and time

- [ ] I know how this audience prefers to learn and how much time they can realistically commit.
- [ ] I selected examples that reflect the audience’s languages, repositories, roles, and workflows.
- [ ] I chose a format that fits the need: self-paced content, guided practice, peer learning, office hours, or a blend.

### 5. Infrastructure and tracking

- [ ] The required Copilot policies, licenses, IDEs, extensions, and agent surfaces are available.
- [ ] Learners know where to access the learning content and practical exercises.
- [ ] The owner can retrieve the required dashboard, API, export, survey, or learning-platform data.
- [ ] Data coverage, attribution, privacy, and retention expectations are understood.

### 6. Perception, trust, and change readiness

- [ ] I identified concerns about quality, security, job impact, measurement, or individual monitoring.
- [ ] The learning experience explains responsible use and where human review is required.
- [ ] Stakeholders understand that dashboard associations do not prove causation or individual productivity.
- [ ] Managers and leaders are prepared to reinforce learning without creating counterproductive usage targets.

### 7. Enablement scope and approach

- [ ] The intervention addresses the diagnosed gap rather than defaulting to generic prompting training.
- [ ] Prerequisites and expected time commitment are clear.
- [ ] Learners practice a real workflow and receive immediate feedback or a model answer.
- [ ] The experience includes a job aid, reusable example, or next-step resource.

### 8. Champions, community, and reinforcement

- [ ] A manager, champion, or community channel will reinforce the target behavior.
- [ ] Learners know where to ask questions, share examples, and report friction.
- [ ] A follow-up nudge, office hour, challenge, or peer demonstration is scheduled.
- [ ] Useful examples and lessons will be captured for reuse.

### 9. Constraints, dependencies, and timing

- [ ] I documented policy, access, technical, privacy, localization, and scheduling dependencies.
- [ ] I identified the owner and due date for each dependency.
- [ ] The measurement window accounts for dashboard data lag and rolling 28-day cohort assignment.
- [ ] I defined the decision that will be made at the next review: scale, revise, pause, or stop.

### Readiness and progression rule

Do not treat course completion or a dashboard cohort as a proficiency score. Use the GitHub Learn framework as the source of truth: proficiency is determined from observable signals across GitHub.com, IDE, CLI, and mobile, and each published level specifies **What to know** and **What to do**. Use dashboard metrics as supporting evidence, not as a replacement calculation.

For Beginner, Intermediate, and Proficient, compare the planned learning experience and observed behavior with the published level content. For Advanced and Expert, wait for GitHub Learn to publish the level requirements.

## Final self-assessment

Use this checklist before marking the course complete:

- I can distinguish license, adoption, engagement, acceptance, code-generation, and pull request lifecycle data.
- I can explain why a Passive user is not necessarily an inactive user.
- I can distinguish GitHub Learn proficiency levels from dashboard adoption cohorts.
- I checked coverage, attribution, cohort timing, and data freshness before interpreting a trend.
- I selected an intervention that matches the observed pattern rather than defaulting to generic training.
- I used more than one dashboard signal and included qualitative feedback.
- I described association without claiming unsupported causation.
- I completed the Copilot Enablement Decision Brief and Enablement Planning Checklist with a review date.

**Completion standard:** All eight statements are true; the decision brief contains an audience, evidence, intervention, measures, caveat, and next decision; and the checklist identifies reinforcement, dependencies, and progression evidence.

## Content assets to build

| Asset | Purpose |
| --- | --- |
| Short dashboard walkthrough | Show where to find Copilot usage and Copilot impact without turning the course into a feature tour |
| Annotated dashboard screenshots | Support learners who do not have live access |
| Three branching scenarios | Practice activation, cohort progression, and delivery-flow diagnosis |
| Fillable decision brief | Capture learner work across all six modules |
| Fillable enablement planning checklist | Confirm outcomes, readiness, measurement, infrastructure, trust, reinforcement, and dependencies |
| Immediate-feedback panels | Explain why an answer is appropriate and which caveat matters |
| Final knowledge check | Confirm interpretation, intervention selection, and responsible storytelling |

## Core source set

- [GitHub Copilot usage metrics](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/copilot-usage-metrics/copilot-metrics)
- [Viewing the Copilot usage metrics dashboard](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/view-usage-and-adoption)
- [Viewing the Copilot impact dashboard](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/view-impact-dashboard)
- [Interpreting usage and adoption metrics for GitHub Copilot](https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/copilot-usage-metrics/interpret-copilot-metrics)
- [New Copilot usage metrics impact dashboard — July 22, 2026](https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/)
- [Copilot usage metrics API adds cohorts for AI adoption — May 29, 2026](https://github.blog/changelog/2026-05-29-copilot-usage-metrics-api-adds-cohorts-for-ai-adoption/)
- [Track total merges by adoption phase — June 26, 2026](https://github.blog/changelog/2026-06-26-track-total-merges-by-adoption-phase-in-enterprise-and-organization-reports/)
- [Add review cycles and time to adoption phases — July 7, 2026](https://github.blog/changelog/2026-07-07-add-review-cycles-and-time-to-adoption-phases-in-the-usage-api/)
- [GitHub Learn Copilot Proficiency](https://learn.github.com/proficiencies/copilot/justification)

## Learning-design reference

- [Copilot Enablement Planning](https://microsoft-my.sharepoint.com/personal/lbosnjak_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B344D2C49-F137-4646-B4C8-A66CEB157D1D%7D&file=Copilot%20Enablement%20Planning.docx&action=default&mobileredirect=true) — used for its outcome-first planning sequence, readiness segmentation, checklist structure, reinforcement model, and progression criteria.
