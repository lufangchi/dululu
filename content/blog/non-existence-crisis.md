---
title: "Non-Existence Crisis of a Day Job"
date: "2026-10-01"
tag: "9 to 5"
excerpt: "Three months of sitting with one question: what's left for a data person once AI can do most of the execution layer."
---

I started my first full-time job this year. A year or two ago, I never
really questioned the value of becoming a data scientist. It felt like
a natural extension of statistics into product and business:
experiments, dashboards, funnels, metrics.

One week into the job, I noticed something slightly funny — probably
not something I would tell anyone hiring me directly, though I am sure
they already know: a large part of the work I thought I was supposed to
do had already been automated by AI, with very little last mile left.

That made me curious: what is the value of a data person going forward?

I spent the next three months carrying that question around as a side
project. I did not find one clean answer, but I kept running into a few
situations that felt worth writing down.

## 1. Establishing a new source of truth

As products and operations scale, the problem is often not too little
data. It is too many versions of reality.

Logs say one thing. Product events say another. Operations have their
own understanding. Model outputs, policies, and business rules each
capture only part of the system.

Someone still has to connect them.

Sometimes that means building pipelines. Sometimes it means reading
logs, talking across five functions, and finding slightly hacky ways to
validate what actually happened.

The output may be a dataset, a metric, or a taxonomy.

The real product is clarity.

## 2. Measuring things that were hard to measure before

Some of the most important things are inherently hard to measure:
safety, quality, health, integrity, trust.

AI makes this harder because the object itself is changing.

Traditional product analytics dealt with relatively clean events:
clicks, purchases, retention, churn.

Agents produce behavior.

Was the answer correct but unhelpful? Did the agent follow policy but
still fail the user? Did it solve the problem, or just end the
conversation? Was the behavior consistent across contexts?

These are not naturally binary outcomes.

So the work shifts from analyzing existing signals to designing them.

What should count as evidence? What is a reasonable proxy? Where do
humans still disagree? What does "better" mean when one dimension
improves and another gets worse?

Measurement becomes less like querying a database and more like
building an instrument.

## 3. Admitting that reality is not clean

Reality does not always come with a ground truth.

Some edge cases are not failures of the data. They reflect genuinely
hard questions in the real world — where definitions blur, values
conflict, and multiple interpretations can all be reasonable.

The instinct is often to clean these cases up: force a label, draw a
boundary, make the metric consistent.

But sometimes the more honest thing is to acknowledge the edge.

Not every ambiguity should be resolved. Some should be preserved,
documented, and carried forward as part of how we understand the
system.

Good measurement is not about pretending reality is perfectly defined.

It is about knowing where it is not.

---

AI is already very good at much of the execution layer of data work:
writing SQL, building charts, summarizing patterns, debugging code,
even end-to-end analyses including the experimentation lifecycle and
stakeholder communication.

What remains is different. Someone still has to decide what's worth
measuring, what should count as evidence, what people should trust, and
where a clean number would hide something important.

Analytics either becomes a capability — embedded in every role, not a
job of its own — or it stays a dedicated function that does only one
thing: hold the hard questions.

That function doesn't disappear. Someone still has to be the third
party who frames the question nobody else is positioned to ask. But
it's a much bigger luxury to make analytics, data, or even inference
your main job, not just a skill you carry into some other purpose.
