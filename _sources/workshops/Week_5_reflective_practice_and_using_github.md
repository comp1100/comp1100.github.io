# Week 5: Reflect, synthesise and organise

## Studio abstract

> In this studio, you will prepare for Iteration 1 by reflecting on your project experience, checking the quality and safety of your interview material, synthesising evidence across interviews, and organising the resulting project records in your team repository. You will finish by updating GitHub Projects so that it is clear who will do what and by when.

By the end of the studio, your team should have:

- applied Gibbs' Reflective Cycle to a specific project experience;
- checked that interview evidence is relevant, deidentified and handled safely;
- identified themes, contradictions and uncertainties across interviews;
- updated hypotheses, learning cards, customer segments and the business model canvas where the evidence supports a change;
- stored project records in the structure supplied by the starter repository; and
- assigned the remaining Iteration 1 work in GitHub Projects.

## Before you begin

Open your assigned private repository and read its root `README.md`, `guides/getting-started.md`, and the index for any area you change.

Bring your team's deidentified interview notes or evidence records. Keep participant names, contact details, consent records, raw recordings and identifiable transcripts in your team's approved secure Microsoft Teams storage. They must not be committed to GitHub, included in a repository ZIP, or supplied to a hosted AI service.

The starter repository contains a `create-interview-record` skill. Using AI is optional: you may use a hosted agent, use an agent with a local model, or follow the skill manually. Every pathway uses real, already-deidentified material and requires the same human review.

## Gibbs' Reflective Cycle

⏱️ 30 minutes — individual, pair and class

<p style="text-align:center; font-weight:bold;">Devices closed after selecting your questions</p>

A short individual reflection is required for each major submission. Reflection is more than describing what happened: it should identify what you learnt, what you would change, and what you will do next.

Gibbs' Reflective Cycle provides six prompts:

1. **Description:** What happened?
2. **Feelings:** What were you thinking and feeling?
3. **Evaluation:** What went well and what did not?
4. **Analysis:** Why did events unfold that way?
5. **Conclusion:** What did you learn and what could you have done differently?
6. **Action plan:** What specific action will you take next time?

### Activity

1. Read the [Gibbs' Reflective Cycle guidance](https://reflection.ed.ac.uk/reflectors-toolkit/reflecting-on-experience/gibbs-reflective-cycle) and select one helpful question for each stage.
2. Choose one specific experience from the first four weeks of the project. Good examples include conducting an interview, responding to refuting evidence, resolving a Git conflict, or managing a team commitment.
3. Discuss the experience with a partner from another team. Use the six selected questions to move from description to a specific action plan, then swap roles.
4. Write down one action you will take before the Iteration 1 deadline.

## Interview quality and safety audit

⏱️ 15 minutes — team

Thank you to Richard, one of our legends, for sharing an interview checklist that informed this reminder.

Choose two recent interviews and check:

- **Purpose:** Was each interview connected to a clear hypothesis or learning goal?
- **Questions:** Did you ask open-ended questions about real past behaviour and experiences rather than hypothetical future behaviour?
- **Interviewing:** Did you listen, allow silence, ask useful follow-up questions and avoid pitching a solution?
- **Evidence:** Did you retain refuting, contradictory and uncertain evidence rather than selecting only confirming responses?
- **Consent:** Was consent obtained before the interview and separately before recording?
- **Privacy:** Is the repository material deidentified, with participant codes that are not derived from names or student numbers?
- **Storage:** Are raw recordings, consent records and identifiable transcripts only in approved Teams storage?

Record any corrective action as a GitHub Project task. Do not alter source evidence to make it appear cleaner or more supportive of a hypothesis.

## From an interview to a repository record

⏱️ 25 minutes — individual and peer review

The repository should contain the minimum deidentified evidence needed to support the team's reasoning, not the raw research source.

Each team member should process or review at least one interview:

1. Start with real, already-deidentified notes or a safely deidentified transcript excerpt.
2. Use the `create-interview-record` skill through a hosted agent, local agent, or its manual workflow.
3. Save the record under `docs/discovery/interviews/` using a stable participant code and date.
4. Keep these sections visibly separate:
   - **Evidence:** exact, safely deidentified statements supported by the source;
   - **Observations:** a faithful summary of what the participant said or did;
   - **Interpretation and implications:** what the team thinks the evidence may mean; and
   - **Hypotheses considered:** supported, refuted or still unclear in this interview.
5. Compare the completed record with the securely held source.
6. Ask a teammate to review privacy, traceability, accuracy and overclaiming before merging it.
7. Disclose material AI assistance in the record or pull request.

An agent can help structure or check a record. It cannot conduct the interview, decide what the evidence means, or replace human verification.

## Take a break

⏱️ 10 minutes

## Synthesise evidence across interviews

⏱️ 40 minutes — individual and team

One interview is evidence, not validation by itself. Your team now needs to compare evidence across participants.

### Individual review

Each person reviews their own interview records and at least one other team member's records. Write down:

- recurring behaviours, problems, workarounds or goals;
- evidence that contradicts an apparent pattern;
- important differences between possible customer segments;
- surprising or unclear responses; and
- limitations in who the team interviewed or what was asked.

Do not count repeated words alone as a theme. A useful theme captures a meaningful pattern related to the team's learning goals.

### Team synthesis

Compare the candidate themes and agree on a concise set that represents the evidence. For each theme, record:

- a short, descriptive name;
- the evidence records that support or challenge it;
- which customer segment or context it applies to;
- contradictions, uncertainty and limitations; and
- what the team should investigate or decide next.

Save the synthesis under `docs/discovery/synthesis/`. Avoid claims such as "all users" unless the evidence genuinely supports them. Numbers can describe the interviews completed, but a small convenience sample does not establish a population statistic.

## Update the project evidence chain

⏱️ 35 minutes — team, with individual commits

Use the synthesis to update project records only where the evidence supports a change.

The intended evidence chain is:

```text
Business model assumption
  -> hypothesis and test card
  -> deidentified interview records
  -> cross-interview synthesis
  -> learning card
  -> retain, refine, reject or investigate further
  -> updated business model canvas
```

Relevant starter-repository locations include:

- `docs/discovery/assumptions/` for hypotheses and test cards;
- `docs/discovery/interviews/` for deidentified interview records;
- `docs/discovery/synthesis/` for cross-interview themes and limitations;
- `docs/discovery/experiments/` for learning cards and experiment results;
- `docs/product/business-model-canvas.md` for the current business model canvas;
- `docs/product/value-propositions/` when the team needs a separate value proposition canvas for a customer segment; and
- `docs/team/` for team agreements and meeting records that are not already represented in GitHub Projects.

Create only the folders and files your project needs. Keep one current version of each artefact and use Git history to show how it changes; do not create `final`, `final-2` or similar copies.

Each team member must make their own meaningful contribution on a branch, open or participate in a pull request, and review the rendered Markdown before it is merged.

## Plan the remaining Iteration 1 work

⏱️ 20 minutes — team

Open your GitHub Project and check that every remaining Iteration 1 task states:

- **Who:** one person accountable for completing it;
- **What:** a measurable outcome, including where the result will be recorded; and
- **By when:** a specific date and time before the submission deadline.

Create tasks for unresolved evidence gaps, missing reviews, incomplete project records and submission preparation. Move current work to **In progress**, close completed work, and update any missed due dates rather than leaving them stale.

## Exit ticket

Before leaving, show your legend:

1. one deidentified interview record that has been checked against its secure source;
2. the team's cross-interview synthesis, including at least one contradiction or limitation;
3. one traceable path from a hypothesis through evidence to a learning-card or BMC decision;
4. a meaningful commit or pull-request contribution from each team member; and
5. the GitHub Project tasks for the remaining Iteration 1 work.
