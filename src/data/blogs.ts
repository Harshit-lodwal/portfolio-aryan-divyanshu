import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'about-me-journey',
    title: 'Building While Learning: My Journey in AI and Development',
    readTime: '6 min read',
    externalUrl: '',
    author: 'Obiwankenobi699',
    date: '2026-03-22',
    image: '/mag4.jpg',
    tags: ['Journey', 'Learning', 'Hackathons', 'Growth'],
    content: `I am a Computer Science student building across AI, systems, and full-stack development. My learning has never followed a straight line. It has been shaped by curiosity, frustration, a lot of failed builds, and the constant need to start over better.

This is not a story of knowing everything from the start. It is a story of figuring things out by building — and breaking — real things.

---

### How It Started

Like most developers, I started with web development. HTML, CSS, JavaScript — the usual entry point.

It was satisfying at first. Seeing something render in a browser, deploying a project, getting something to actually work — that feeling does not get old quickly.

But it did get old.

Over time I started to feel like I was moving surface to surface without ever going deeper. I wanted to understand what sits underneath — how systems make decisions, how models learn, how the problems that actually matter in the real world get solved with code.

That pull toward depth changed everything.

---

### Linux: Where I Started Thinking Differently

Switching to Linux was not just a tooling decision. It rewired how I approach problems.

I eventually moved to Arch Linux with Hyprland. Configuring it manually, debugging without a safety net, controlling every layer of the system instead of trusting defaults — it forced a different kind of discipline. You cannot ignore complexity on Arch. You have to engage with it.

That mindset transferred directly into how I write software. I became more comfortable sitting with uncertainty, more willing to read documentation instead of hoping something works, and far less afraid of things breaking.

---

### Moving Away from Traditional Web Dev

There was a point where I made a deliberate decision to step back from conventional full-stack work.

Not because it lacks value — but because I needed more friction. More problems where the answer was not one search away. I wanted to work in spaces where reasoning and systems thinking mattered as much as syntax.

That is when I started moving seriously into AI and Machine Learning.

---

### Learning ML by Building, Not by Watching

I did not start with heavy theory. I started with building things that did not work, then figuring out why.

Training models on wrong assumptions, testing datasets that exposed every flaw in my pipeline, deploying small inference systems that fell apart under real conditions — all of that taught me more than any course did.

Over time I moved through computer vision, vision-language models, and real-time inference. The process never really changed: build, break, fix, understand. Repeat until the thing actually works.

---

### The Part I Avoided for Too Long: DSA

For a long time, Data Structures and Algorithms felt disconnected from real work.

I avoided it. I built around it.

Then I started hitting walls — operations that were slow for no obvious reason, systems that did not scale the way I expected, code that worked but felt wrong. That is when DSA stopped being abstract and started being useful.

I still do not enjoy grinding competitive problems for their own sake. But I now reach for the right structure when the problem actually calls for it, and that makes a visible difference in what I build.

---

### Performance, GPUs, and Real Constraints

Machine learning introduced me to a category of constraints that web development never had — GPU memory limits, inference latency, model optimization, the gap between what works on paper and what runs in production.

Working with CUDA setups, optimizing model pipelines, shaving latency without sacrificing accuracy — these forced me to think about performance as a first-class concern, not an afterthought.

That shift in thinking made me a better systems builder overall.

---

### When Everything Connected: Cloud and DevOps

As my projects grew in complexity, I had to learn infrastructure. Docker for reproducibility, cloud deployments, CI/CD pipelines that actually caught problems before they reached production.

The interesting thing that happened was that AI, backend systems, and infrastructure stopped feeling like separate disciplines and started feeling like one continuous system. That unified view is something I keep coming back to.

---

### What Hackathons Actually Taught Me

Winning national-level hackathons forced a kind of clarity that regular project work does not.

You cannot overthink at 3 AM with 4 hours left. You cannot debate architecture when the demo is in 90 minutes. You learn to make decisions fast, own them, and execute cleanly.

The most useful thing hackathons taught me: you do not need to know everything. You need to figure things out quickly, under pressure, with the people next to you.

---

### The Honest Part: What I Am Still Working On

I am not consistent across everything. There are still areas where I slow down, where my implementation lags behind my understanding, where I need more experience to match my intuition.

What I have learned to do is not wait until I feel ready. I build, I hit the wall, I work through it. Progress built that way sticks in a way that preparation alone does not.

---

### Where I Stand Now

I do not define myself by a single stack or a single domain.

I work across AI and ML, full-stack systems, and infrastructure — not as separate tracks but as one system that I am still learning to see more clearly.

Every project is another step in that direction.
`
  },

  {
    id: 'winning-nationals',
    title: 'Two National Wins. One Team. What We Actually Did.',
    readTime: '7 min read',
    externalUrl: '',
    author: 'Obiwankenobi699',
    date: '2026-03-20',
    image: '/win.jpg',
    tags: ['Hackathon', 'Team', 'ML', 'Product Thinking', 'Pitching'],
    content: `There is a photo on my phone. A gold trophy with "HackGyanverse" on the medallion, held up in a fluorescent-lit room somewhere around 2 AM. The photo does not show the 36 hours before it.

We have won two national-level hackathons now with the same team. This is everything we did — and everything we learned.

---

### We Read a Research Paper. Most Teams Did Not.

For one of our builds, we based the core system directly on a published ML paper — Meta's V-JEPA 2, which stands for Joint Embedding Predictive Architecture.

The idea behind V-JEPA 2 is that instead of learning by reconstructing raw pixels, the model predicts abstract features in a learned latent space. It reasons about what is happening rather than what the frame looks like. That shift makes perception tasks significantly more robust under real-world conditions.

We paired this with Moondream — a lightweight vision-language model — to translate those structured visual embeddings into natural language output. The pipeline in its simplest form looked like this:

\`\`\`python
# Conceptual architecture — not production code
visual_encoder = VJEPA2Encoder()
latent_repr    = visual_encoder(frames)      # Abstract feature space, not pixel reconstruction
description    = moondream.describe(latent_repr)  # Natural language from structured embeddings
\`\`\`

What this gave us during judging was something most teams could not offer: we could explain exactly why the architecture worked, not just what it did. We had read the paper. We understood the design decisions. When judges pushed on the technical choices, we had answers that went deeper than the demo.

That depth is rare at a hackathon. It is also what judges remember.

---

### The Work That Happens Before the Hackathon Starts

Most teams arrive and start figuring out what to build. We had already done that.

Two weeks before each hackathon, we had a problem scoped, a tech stack agreed upon, and roles assigned. When the clock started, we were building — not debating. That two-week head start is not cheating. It is the actual preparation that most teams skip.

The night cycle is where teams collapse. Around 2 to 3 AM, energy drops, decisions get worse, and code gets sloppy. We handled this by rotating focus rather than pushing everyone through the wall at the same time. Whoever was sharpest drove. Others reviewed, rested for 90 minutes, then came back. No ego about who wrote the most lines.

By the final 4 hours, we had stopped adding features entirely. We were hardening what already existed, running the demo against adversarial inputs, and rehearsing the pitch until every number we planned to say on stage was accurate and defensible.

---

### We Built Products. Not Projects.

This is the clearest difference we have observed between teams that win and teams that submit.

A project answers: what does this do?
A product answers: who needs this, why now, and what is different about the world when they have it?

We did not frame our builds around features. We framed them around a concrete outcome — a measurable cost removed, a workflow replaced, an operation that no longer requires human oversight. The judges are not judging your code. They are judging whether your solution has a credible reason to exist.

Before every hackathon, we ask three questions: who is the user, what pain are we removing, and what does success look like six months after deployment? If we cannot answer all three in under 60 seconds, we are not ready to build.

---

### The Team Did Not Change. That Was Intentional.

We kept the same core team across both wins. That was a deliberate decision, not convenience.

What made the team work was not that everyone shared the same strengths — it was that everyone was strong in a different area. Frontend architecture, backend and systems design, ML research and integration, product framing. No one was bluffing about their domain. And because our interests genuinely sit in different areas, we catch problems from angles that a uniform team simply cannot.

The other thing that held: trust under pressure. When someone made a call at 4 AM — a technical pivot, a scope cut, a decision to drop a feature — the rest of the team executed without a committee meeting. That kind of trust does not assemble overnight. It builds across builds.

We also took feedback from other participants during the hackathon itself. Walking around during build hours, showing people what we were working on, listening to what confused them — the judges would be confused by the same things. We still had time to fix it.

---

### The Pitch

A strong pitch has three layers: the hook, the proof, and the vision.

The hook is one sentence that makes the problem impossible to dismiss. The proof is a live demo with specific, verifiable numbers — not "fast" but "sub-300ms latency." The vision is one sentence about what this becomes at scale, delivered without a roadmap slide.

We never use more than four slides: title, problem, live demo with numbers, team credentials. Everything else is conversation. Judges who are genuinely engaged ask questions. Questions are your opportunity to go deeper than the time limit allows.

Speak slower than feels natural. Stand still. Make eye contact with one person at a time, not the room. Confidence in delivery reads as confidence in the product — they are not the same thing, but in a five-minute window, perception matters.

---

### Why We Keep Going as a Team

The honest reason we kept the same team is that we enjoy what we build together.

When you are solving a real problem with people who care about the same things, it does not feel like grinding through a sleep-deprived competition. It feels like building something that should exist. That energy is visible — to other participants, and to judges.

After every hackathon, win or loss, we spend 30 minutes the next day writing down what broke, what we cut too late, and what we would do differently. That document is where the second win came from.

---

The trophy is gold. What it represents is two weeks of preparation, one night of focused execution, a research paper read and understood, a product framed before a line of code was written, and a team that trusts each other when it counts.

That is the formula. It is not a secret. It is just consistent work.
`
  },

  {
    id: 'View-AI-build-log',
    title: 'NAZAR-AI: How We Built a Surveillance System That Actually Thinks',
    readTime: '8 min read',
    externalUrl: '',
    author: 'Obiwankenobi699',
    date: '2026-01-15',
    image: '/mag1.jpg',
    tags: ['HawkWatch', 'Gemini 2.5 Flash', 'Computer Vision'],
    content: `Most CCTV systems do not think. They record. Someone has to watch the footage, notice the threat, and respond — and by the time that happens, the moment has already passed.

HawkWatch was built to close that gap. Not to replace cameras, but to give them judgment.

---

### The Core Problem

24/7 human monitoring is expensive, inconsistent, and does not scale. A person watching six feeds at 3 AM is not operating at the same level as a person watching one feed at noon. Attention degrades. Threats get missed.

The question we started with was not "can AI detect threats" — it can. The question was whether we could build a system that did it reliably, at low latency, across multiple feeds simultaneously, with a false positive rate low enough to actually be trusted in production.

---

### The Architecture

HawkWatch uses a hybrid processing model. Local computer vision models handle the first pass — fast, lightweight, running on the edge. When something is flagged, the frame is escalated to Gemini 2.5 Flash for deeper visual reasoning and classification.

This split was deliberate. Running everything through a cloud vision model on every frame would introduce unacceptable latency and cost. Running only local models would miss the nuance that a vision-language model brings. The hybrid approach gives you both: speed at the edge, intelligence in the cloud, only when it matters.

\`\`\`typescript
// Simplified detection pipeline
const localResult = await localModel.analyze(frame);

if (localResult.confidence > ESCALATION_THRESHOLD) {
  const deepResult = await gemini.classify(frame, localResult.context);
  await alertSystem.dispatch(deepResult);
}
\`\`\`

The system handles 5 to 10 concurrent camera feeds, dispatches alerts via email and SMS within seconds of detection, and maintains a false positive rate under 4 percent. That last number matters more than people realize — a system that cries wolf loses operator trust fast.

---

### What Building This Taught Me

The hardest part was not the ML. It was the integration — making sure the local model, the cloud escalation layer, the alert system, and the analytics dashboard all behaved as a single coherent system under real conditions.

Performance constraints forced decisions I would not have made otherwise. Latency budgets, frame sampling strategies, batching logic — all of it had to be reasoned through carefully because the margin for error in a real-time security system is essentially zero.

HawkWatch is the project where I started thinking about AI systems as infrastructure, not just applications.
`
  },

  {
    id: 'vakeel-ai-case-research-engine',
    title: 'Inside Vakeel AI: Building Legal Search Across 5.2 Crore Cases',
    readTime: '4 min read',
    externalUrl: '',
    author: 'Obiwankenobi699',
    date: '2025-12-10',
    image: '/mag3.jpg',
    tags: ['LegalTech', 'NLP', 'Semantic Search'],
    content: `Legal research in India is a problem that has not been solved well. The datasets are massive, the language is technical, and keyword search consistently returns results that are accurate by letter but wrong in meaning.

Vakeel AI was built to fix that last part.

---

### Why Keyword Search Fails in Legal Contexts

When a lawyer searches for "wrongful termination without compensation," they are not looking for documents that contain those exact words. They are looking for cases where the legal reasoning addresses that situation — regardless of the specific phrasing used.

Keyword search cannot make that distinction. Semantic search can.

Vakeel AI uses vector embeddings to represent the meaning of legal text, not just its surface form. Queries are matched against case documents by conceptual proximity rather than string matching. A question about employment disputes will surface relevant cases even when the terminology differs significantly.

---

### The Scale Problem

5.2 crore cases is not a dataset you can brute-force. Retrieval has to be fast, and the index has to be structured in a way that supports both broad queries and narrow, highly specific ones.

The pipeline combines embedding generation, vector indexing through Pinecone, and a retrieval layer that re-ranks results before they reach the user. Re-ranking matters at this scale because the first retrieval pass optimizes for recall — getting the relevant cases into the result set. Re-ranking optimizes for precision — putting the right cases at the top.

\`\`\`typescript
// Retrieval pipeline — simplified
const queryEmbedding = await embedText(userQuery);
const candidates    = await pinecone.query(queryEmbedding, { topK: 50 });
const reranked      = await rerankByRelevance(candidates, userQuery);
return reranked.slice(0, 10);
\`\`\`

---

### What This Project Reinforced

Semantic search is not a drop-in replacement for keyword search. Building it well requires understanding the failure modes — when embeddings mislead, when re-ranking overcorrects, when the user's query is too vague for any retrieval strategy to handle cleanly.

Vakeel AI is where I started taking retrieval systems seriously as a design discipline rather than an implementation detail.
`
  },

  {
    id: 'jepa-moondream',
    title: 'V-JEPA 2 and Moondream: What Happens When You Stop Reconstructing Pixels',
    readTime: '3 min read',
    externalUrl: '',
    author: 'Obiwankenobi699',
    date: '2026-03-20',
    image: '/jepa.png',
    tags: ['JEPA', 'Moondream', 'Vision AI'],
    content: `Most vision models learn by reconstructing what they see. Feed them a masked image, ask them to fill in the missing pixels, reward them for getting close. It works — but it optimizes for the wrong thing. Pixel reconstruction encourages models to memorize texture and appearance rather than understand structure and motion.

V-JEPA 2 takes a different approach entirely.

---

### Predicting in Latent Space, Not Pixel Space

V-JEPA 2 — Meta's Joint Embedding Predictive Architecture v2 — learns by predicting abstract representations of masked regions rather than their raw pixel values. The model is trained to answer: what would the embedding of this hidden region look like, given what I can see around it?

This is a harder task in a meaningful way. The model cannot cheat by memorizing appearance patterns. It has to develop genuine structural understanding to predict correctly in embedding space.

The result is a model that generalizes better to novel visual scenarios, handles occlusion more gracefully, and transfers more effectively to downstream perception tasks.

\`\`\`python
# Conceptual: V-JEPA 2 operates in latent space, not pixel space
context_embedding = encoder(visible_patches)      # Encode what is visible
target_embedding  = encoder(masked_patches)       # Encode what is hidden (target)
predicted         = predictor(context_embedding)  # Predict target from context

loss = latent_distance(predicted, target_embedding)  # Loss in embedding space, not pixel space
\`\`\`

---

### Pairing It With Moondream

Moondream is a small, efficient vision-language model designed for resource-constrained environments. What made it an interesting pairing with V-JEPA 2 is that the structured, high-level embeddings V-JEPA 2 produces are exactly the kind of input that a compact language model can interpret without requiring a massive vision backbone.

The combination produces a lightweight pipeline that can do meaningful visual reasoning and describe scene content in natural language — without the computational overhead of larger vision-language systems.

This is the direction I find most interesting in applied ML right now: not bigger models, but smarter composition of smaller, specialized ones.
`
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}