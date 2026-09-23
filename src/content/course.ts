import type { Course } from "./types";

/**
 * ALL landing page content lives in this file.
 *
 * Search for "TODO" to find what still needs real content.
 * Anything in [square brackets] is a placeholder that must not go live —
 * especially numbers, testimonials, names and logos.
 */
export const course: Course = {
  meta: {
    siteUrl: "https://gentlebamboosolutions.com", // TODO: confirm the final URL
    title: "AI at Work for Retail | Gentle Bamboo Solutions",
    description:
      "Gentle Bamboo Solutions helps retail organisations turn AI from individual experimentation into better everyday work without outsourcing human judgement.",
  },

  /**
   * Switch any section off in one line. The page and the navbar update automatically.
   * Sections marked "course" only make sense if you sell a public, paid cohort.
   */
  sections: {
    audienceStrip: true,
    problem: true,
    experiences: true,
    video: true,
    logos: true,
    audience: true,
    outcomes: true,
    curriculum: false, // removed on request
    howItWorks: true,
    gallery: true,
    facilitators: true,
    testimonials: true,
    certificate: false, // removed on request
    bonuses: false, // removed on request
    pricing: false, // removed on request
    pilot: true,
    team: false, // removed on request ("Training your leadership team?")
    faq: true,
    about: true,
    finalCta: true,
  },

  /**
   * Review labels. While `mode` is true, any section still holding placeholders,
   * missing photos or unconfirmed draft copy shows a label saying what's pending.
   * SET `mode: false` BEFORE THE PAGE GOES LIVE.
   */
  review: {
    mode: true,
    draftNotes: {
      faq: "questions are drafts",
    },
  },

  email: {
    address: "hello@gentlebamboosolutions.com",
    subjects: {
      pilot: "AI at Work pilot — retail",
      general: "AI at Work for Retail — enquiry",
    },
    cta: "Email us",
    navCta: "Talk to us",
  },

  whatsapp: {
    number: "910000000000", // TODO: your WhatsApp Business number, digits only with country code
    messages: {
      individual: "Hi Gentle Bamboo Solutions! I'd like to discuss an AI at Work pilot for our retail team.",
      team: "Hi Gentle Bamboo Solutions! I'd like to explore the AI at Work experiences for my organisation.",
      syllabus: "Hi Gentle Bamboo Solutions! Could you please send me an overview of the AI at Work experiences?",
      callback:
        "Hi Gentle Bamboo Solutions! I'd prefer a quick call about the AI at Work experiences. Please call me on this number. Best time to reach me: ",
    },
    callbackCta: "Prefer a call? Request a callback",
    includeRef: true,
  },

  cohort: {
    startDate: "2026-10-12", // TODO: real start date
    seatsTotal: 30, // TODO: real number
    seatsLeft: 12, // TODO: real number — keep this honest and up to date
    showSeats: true,
    closedMessage: "Next batch opening soon — chat with us to reserve a seat",
  },

  hero: {
    eyebrow: "Human capability for an AI-first future",
    headline: "AI is changing what your people can do. **Is it changing how your business works?**",
    lead: "Gentle Bamboo Solutions helps organisations build the human capability needed for an AI-first future — turning individual experimentation into better workflows, decisions and business outcomes without outsourcing human judgement.",
    primaryCta: "Build Your Hum[AI]n Workforce",
    secondaryCta: "Explore the Four Experiences",
    ctaNote: "", // optional line under the buttons
    image: { src: "/images/glass-box.jpeg", alt: "The Glass Box learning kit: ten decks of cards, printed game sheets and a participant handout" },
    imageCaption: "The Glass Box learning kit: participants play through how language models work.",
    facts: [], // optional chips, e.g. { icon: "clock", label: "2–3 hours" }
    trustLine: "", // optional proof line
  },

  audienceStrip: {
    heading: "From individual experimentation to better everyday work",
    items: ["Merchandising", "Store operations", "Marketing", "Customer experience", "Supply chain", "People teams"],
  },

  problem: {
    heading: "AI access does not automatically create **AI-enabled work.**",
    text: "Across organisations, people are experimenting with AI. They are writing prompts, generating content and discovering new tools. But much of this activity remains individual, inconsistent and disconnected from how work actually gets done.",
    listIntro: "The bigger opportunity is to help people:",
    points: [
      "Understand what AI can and cannot do",
      "Apply it to meaningful business tasks",
      "Redesign workflows around AI and human judgement",
      "Rehearse decisions in realistic situations",
      "Identify where AI can create organisational value",
    ],
    closing: "That is how individual experimentation becomes organisational capability.",
  },

  experiences: {
    heading: "Building Human Capability for an **AI-First Future**",
    subheading:
      "Four experiential offerings that help organisations move from understanding AI to redesigning work, practising Human × AI decisions and prioritising business opportunities.",
    pathway: ["Understand", "Redesign", "Rehearse", "Prioritise"],
    outcomeLabel: "Outcome",
    expandLabel: "Details",
    items: [
      {
        number: "01",
        duration: "2–3 hours",
        title: "AI Playground",
        summary: "See how AI works by playing the game: Glassbox.",
        outcome: "“I understand enough about AI to use it intelligently and safely.”",
        blocks: [
          {
            type: "text",
            label: "What happens",
            body: "Participants play through how language models predict, respond to context and sometimes produce convincing mistakes. Then they connect those lessons to their own tasks and practise checking AI output.",
          },
          {
            type: "text",
            label: "Why it matters",
            body: "People gain a working picture of what the tool does, where it can help and when an answer needs verification.",
          },
          {
            type: "text",
            label: "Takeaway",
            body: "Practical prompting and verification habits, plus one suitable task to try at work.",
          },
        ],
      },
      {
        number: "02",
        duration: "One day",
        title: "AI @ Work Lab",
        summary: "Redesign recurring work around AI and human judgement.",
        outcome: "Up to three redesigned workflows per participant, depending on task complexity.",
        blocks: [
          {
            type: "flow",
            label: "The working canvas",
            steps: ["Task", "Current workflow", "AI opportunity", "Redesigned workflow", "Human checkpoint", "Productivity measure"],
          },
          {
            type: "case",
            label: "Retail example",
            title: "A merchandising manager's weekly competitor scan",
            rows: [
              { label: "Today", value: "3 hours" },
              { label: "AI assists with", value: "Research and synthesis" },
              { label: "Manager verifies", value: "Pricing evidence" },
              { label: "Test target", value: "45 minutes" },
            ],
            note: "The example is illustrative. Each client sets a baseline and tests whether the new workflow saves time while maintaining quality.",
          },
          {
            type: "text",
            label: "Takeaway",
            body: "Workflows to test, a clear human checkpoint and a measure of improvement.",
          },
        ],
      },
      {
        number: "03",
        duration: "Role-based simulations",
        title: "Retail AI",
        summary: "Practise AI decisions in a realistic retail situation.",
        outcome: "Clearer choices about what to delegate, augment or keep human.",
        blocks: [
          {
            type: "text",
            label: "The AI Store Manager",
            body: "Participants face a simulated retail week with AI available. The week brings staff absenteeism, customer complaints, sales reports, inventory issues, a competitor promotion and a regional manager request.",
          },
          {
            type: "quote",
            label: "The central question",
            body: "What should I delegate to AI, what should I augment with AI, and what should remain a human decision?",
          },
          {
            type: "chips",
            label: "Role-based versions",
            items: ["Merchandising", "Store Operations", "Marketing", "HR", "L&D", "Customer Experience", "Supply Chain", "Finance"],
          },
          {
            type: "text",
            label: "Takeaway",
            body: "Participants see where AI helps, where it lacks context and where a person owns the consequence.",
          },
        ],
      },
      {
        number: "04",
        duration: "Executive teams",
        title: "AI Leadership Lab",
        summary: "Decide where AI could create value across the business.",
        outcome: "An AI Opportunity Blueprint with priorities, owners and next steps.",
        blocks: [
          {
            type: "text",
            label: "The AI Leadership Room",
            body: "In a facilitated, card-based conversation, your executive team moves through:",
          },
          { type: "flow", steps: ["Friction", "Possibility", "Judgement", "Challenge", "Experiment"] },
          {
            type: "text",
            body: "Leaders bring business context. The cards help them surface opportunities, challenge assumptions and decide which ideas deserve validation.",
          },
          {
            type: "list",
            label: "The blueprint",
            items: [
              "Priority AI opportunities",
              "Expected value",
              "Feasibility questions",
              "Risks",
              "Human judgement requirements",
              "Accountable owners",
              "Next steps to validate each idea",
            ],
          },
        ],
      },
    ],
  },

  video: {
    heading: "See an experience **in action**", // TODO
    subheading: "A short look at how a session runs.", // TODO
    youtubeUrl: "", // TODO: paste your YouTube link
    poster: "", // optional: a custom thumbnail, e.g. "/images/video-poster.jpg"
    title: "AI at Work for Retail",
  },

  // TODO: add client logo files to /public/images/logos and set `src`
  logos: {
    heading: "Leaders from these organisations have played with us",
    items: [
      { name: "[Client 1]", src: "" },
      { name: "[Client 2]", src: "" },
      { name: "[Client 3]", src: "" },
      { name: "[Client 4]", src: "" },
      { name: "[Client 5]", src: "" },
      { name: "[Client 6]", src: "" },
    ],
  },

  audience: {
    heading: "Is your organisation ready for **the next step?**",
    intro: "These experiences are relevant if:",
    conditions: [
      "Your people have access to AI, but usage is inconsistent",
      "Teams are experimenting without redesigning the underlying work",
      "Leaders see possibilities but are unsure where to focus",
      "You want productivity gains without weakening accountability",
      "You need people to practise AI decisions in realistic business situations",
      "You want a shared language for Human × AI collaboration",
    ],
  },

  outcomes: {
    heading: "What becomes **possible**",
    subheading: "",
    items: [
      { title: "More meaningful AI adoption", description: "AI becomes connected to business tasks rather than isolated experimentation." },
      { title: "Better everyday workflows", description: "Teams identify where AI can reduce effort, accelerate cycles or improve quality." },
      { title: "Stronger human judgement", description: "People learn when to use AI, when to challenge it and when not to use it." },
      {
        title: "Clearer organisational priorities",
        description: "Leaders separate interesting AI ideas from opportunities capable of creating meaningful value.",
      },
      {
        title: "Safer experimentation",
        description: "Verification, accountability, confidentiality and escalation are designed into the way AI is used.",
      },
    ],
  },

  // TODO: replace with the real curriculum
  curriculum: {
    heading: "Inside a longer **programme**",
    subheading: "When a pilot grows into a programme, this is how the weeks are shaped.", // TODO
    stats: [
      { value: "6", label: "modules" },
      { value: "[12]", label: "live sessions" },
      { value: "6", label: "simulations" },
      { value: "[~24 hrs]", label: "of practice" },
    ],
    modules: [
      {
        label: "Week 1",
        title: "AI for leaders: what's real, what's hype",
        topics: ["How today's AI tools actually work", "Where AI helps leaders — and where it doesn't", "Setting up your AI toolkit"],
        simulation: "The Hype Check — separate signal from noise under time pressure",
      },
      {
        label: "Week 2",
        title: "Prompting like a leader",
        topics: ["Prompt patterns for writing, analysis and planning", "Giving AI context and constraints", "Reviewing and improving AI output"],
        simulation: "The Monday Inbox — clear a leader's week with AI as your co-pilot",
      },
      {
        label: "Week 3",
        title: "Better decisions with AI",
        topics: ["Framing problems and options", "Using AI as a devil's advocate", "Avoiding over-reliance"],
        simulation: "The Boardroom Brief — make a high-stakes call with AI support",
      },
      {
        label: "Week 4",
        title: "Leading people through AI change",
        topics: ["Talking to your team about AI", "Handling fear and resistance", "Setting team norms and guardrails"],
        simulation: "The Town Hall — handle tough questions from a worried team",
      },
      {
        label: "Week 5",
        title: "Risk, ethics and trust",
        topics: ["Data privacy and confidentiality", "Bias and hallucinations", "When a human must decide"],
        simulation: "The Leak — respond when an AI shortcut goes wrong",
      },
      {
        label: "Week 6",
        title: "Your 90-day AI plan",
        topics: ["Redesigning one real workflow", "Peer review and feedback", "Presenting your plan"],
        simulation: "The Pitch — present your AI plan to a sceptical leadership panel",
      },
    ],
    syllabusTitle: "Want the detailed syllabus?",
    syllabusText: "Session-by-session plan, tools covered and time commitment — sent straight to your WhatsApp.",
    syllabusCta: "Get the syllabus on WhatsApp",
  },

  howItWorks: {
    heading: "People do not become AI-ready by **watching more content.**",
    subheading: "They become ready by experimenting, making decisions, seeing consequences and reflecting on what should change at work.",
    steps: [
      { title: "Experience", description: "Participants encounter AI through games, simulations and real work." },
      { title: "Examine", description: "They question assumptions, outputs, risks and limitations." },
      { title: "Redesign", description: "They rework tasks, workflows and decisions around Human × AI collaboration." },
      { title: "Apply", description: "They leave with practical behaviours, redesigned work or organisational priorities." },
    ],
    closing: "Learn it. Test it. Question it. Put it to work.",
  },

  // TODO: add photos to /public/images and set `src`
  gallery: {
    heading: "Inside a Gentle Bamboo **session**",
    subheading: "Real rooms, real leaders, real conversations.",
    images: [
      { src: "", alt: "Participants discussing during a simulation" },
      { src: "", alt: "Facilitator leading a debrief" },
      { src: "", alt: "Leaders working on a challenge in small groups" },
      { src: "", alt: "Game board and materials from a session" },
      { src: "", alt: "Participants presenting their plan" },
    ],
  },

  // TODO: replace
  facilitators: {
    heading: "Your **facilitators**",
    subheading: "Every session is personally facilitated by Gentle Bamboo's leadership-development team, not handed off to assistants.",
    stats: [
      { value: "[XX]+ yrs", label: "in leadership development" },
      { value: "[X,XXX]+", label: "workshops facilitated" },
      { value: "[XX]+", label: "industries served" },
    ],
    people: [
      {
        name: "Namitha",
        role: "[Role, Gentle Bamboo Solutions]",
        bio: "[Two or three lines on Namitha's background in experiential learning, simulations and AI.]",
        credentials: ["[Credential or past organisation]", "[Credential or certification]"],
        linkedin: "",
        photo: { src: "", alt: "Namitha" },
      },
      {
        name: "Abhilash",
        role: "[Role, Gentle Bamboo Solutions]",
        bio: "[Two or three lines on Abhilash's background in experiential learning, simulations and AI.]",
        credentials: ["[Credential or past organisation]", "[Credential or certification]"],
        linkedin: "",
        photo: { src: "", alt: "Abhilash" },
      },
      {
        name: "Rakshit",
        role: "[Role, Gentle Bamboo Solutions]",
        bio: "[Two or three lines on Rakshit's background in experiential learning, simulations and AI.]",
        credentials: ["[Credential or past organisation]", "[Credential or certification]"],
        linkedin: "",
        photo: { src: "", alt: "Rakshit" },
      },
    ],
  },

  // TODO: real testimonials only
  testimonials: {
    heading: "They Came. They Played. **They Shared**",
    subheading: "What leaders said, and posted on LinkedIn, after our sessions.",
    stats: [
      { value: "[X,XXX]+", label: "leaders trained" },
      { value: "[XX]+", label: "organisations" },
      { value: "[4.X]/5", label: "average rating" },
    ],
    // Tip: add `linkedinUrl` to link each quote to the participant's original LinkedIn post.
    featured: {
      quote: "[A strong, specific quote from a past participant about what changed for them after the course.]",
      name: "[Participant name]",
      role: "[Role, Company]",
      linkedinUrl: "",
    },
    items: [
      { quote: "[Short testimonial quote.]", name: "[Participant name]", role: "[Role, Company]", linkedinUrl: "" },
      { quote: "[Short testimonial quote.]", name: "[Participant name]", role: "[Role, Company]", linkedinUrl: "" },
      { quote: "[Short testimonial quote.]", name: "[Participant name]", role: "[Role, Company]", linkedinUrl: "" },
    ],
  },

  // TODO: replace
  certificate: {
    eyebrow: "Certificate of completion",
    heading: "Earn your Gentle Bamboo **certificate**",
    text: "Complete the course and your 90-day AI plan to receive a personalised certificate that shows you've practised, not just watched.",
    points: ["Add it to your LinkedIn profile in one click", "Verified certificate with a unique ID", "Issued by Gentle Bamboo on completion"],
    image: { src: "", alt: "Sample Gentle Bamboo AI for Leaders certificate" },
  },

  // TODO: only list bonuses you actually provide, with honest values
  bonuses: {
    heading: "Included **free** with your seat",
    subheading: "Extra resources to keep you practising long after the last session.",
    items: [
      {
        icon: "book",
        title: "AI Prompt Playbook for Leaders",
        description: "Ready-to-use prompts for decisions, feedback, planning and communication.",
        value: "[Worth ₹X,XXX]",
      },
      {
        icon: "fileText",
        title: "Team AI Policy Template",
        description: "An editable template to set clear, safe AI guidelines for your team.",
        value: "[Worth ₹X,XXX]",
      },
      {
        icon: "messageCircle",
        title: "Alumni community",
        description: "Stay connected with fellow leaders, share wins and swap use cases.",
        value: "[Worth ₹X,XXX]",
      },
      {
        icon: "phone",
        title: "1:1 follow-up call",
        description: "A 30-minute call with a facilitator to review your 90-day AI plan.",
        value: "[Worth ₹X,XXX]",
      },
    ],
    totalValue: "Total bonus value: **₹[XX,XXX]**",
  },

  // TODO: replace
  pricing: {
    heading: "Reserve your **seat**",
    subheading: "Small cohorts so every participant gets to play, practise and get feedback.",
    badge: "Early-bird pricing",
    planName: "[Public cohort] AI at Work",
    price: "₹[XX,XXX]",
    originalPrice: "₹[XX,XXX]",
    discountLabel: "[XX]% OFF",
    priceNote: "+ GST · EMI available",
    priceValue: null,
    currency: "INR",
    includes: [
      "6 live, facilitated sessions",
      "Weekly games and simulations",
      "Peer learning circle",
      "Session recordings and toolkits",
      "Personal 90-day AI plan",
      "Certificate of completion",
    ],
    cta: "Chat on WhatsApp to enrol",
    ctaNote: "Get your questions answered first — pay only when you're sure",
    guarantee: "[Not sure after the first session? Get a full refund.]",
    guaranteeStamp: ["[100%]", "refund"],
    nextStepsTitle: "What happens when you message us",
    nextSteps: [
      { title: "We reply with details", description: "Batch dates, schedule and fees — usually within [1 business hour]." },
      { title: "Ask us anything", description: "Chat, or hop on a quick 10-minute call if that's easier." },
      { title: "Secure your seat", description: "We send a secure payment link once you're ready." },
    ],
  },

  pilot: {
    eyebrow: "How an engagement starts",
    heading: "What happens after **you get in touch**",
    text: "A short path from first conversation to a decision about what comes next.",
    steps: [
      { title: "First call", description: "Discuss the team, its current AI access and the business problem worth working on." },
      { title: "Scope", description: "Agree on participants, format, approved tools, outcomes and commercial terms." },
      { title: "Delivery", description: "Facilitate the chosen experience using work and decisions that feel familiar to your people." },
      { title: "Next decision", description: "Review what people learned or tested and decide whether a wider rollout makes sense." },
    ],
    note: "Technical feasibility, platform decisions and approvals remain with your responsible teams and partners.",
  },

  about: {
    eyebrow: "Who we are",
    heading: "Designed by people who understand **how adults learn and work changes.**",
    text: "Gentle Bamboo Solutions designs game-based learning experiences, business simulations and facilitated interventions for organisations. We create spaces where people can experiment safely, notice their assumptions and practise difficult decisions before making them at work.",
    closing: "Built on years of designing experiential learning and business simulations. Now applied to the decisions and behaviours an AI-first workplace demands.",
  },

  // TODO: replace
  team: {
    eyebrow: "For organisations",
    heading: "Training your leadership **team?**",
    text: "We run private cohorts for companies, tailored to your context, tools and challenges.",
    points: ["Private batch for your team", "Scenarios built around your industry", "Flexible schedule, online or in person", "GST invoice for your company"],
    cta: "Enquire for your team",
  },

  // TODO: replace
  faq: {
    heading: "Questions, **answered**",
    items: [
      {
        question: "How long does each experience take?",
        answer:
          "The AI Playground runs 2–3 hours. The AI @ Work Lab is a full day. Retail AI is a set of role-based simulations and the AI Leadership Lab is built around an executive team's schedule. We agree the exact shape with you while scoping.",
      },
      {
        question: "Who should take part?",
        answer:
          "The people who own the work: merchandising, store operations, marketing, customer experience, supply chain and people teams. No technical background is needed — if you can use a browser, you can take part.",
      },
      {
        question: "Do you run these on-site or online?",
        answer: "[Both. Tell us which suits your team and we'll confirm during scoping.]",
      },
      {
        question: "Which AI tools do participants use?",
        answer:
          "Whichever tools your organisation has already approved. We agree the tool list while scoping, so nobody is asked to use something your IT team hasn't cleared.",
      },
      {
        question: "How many people can join one session?",
        answer: "[The Glass Box kit is built for 25–30 people. Larger groups run as multiple sessions.]",
      },
      {
        question: "What do we walk away with?",
        answer:
          "It depends on the experience: prompting and verification habits from the AI Playground, redesigned workflows with a human checkpoint and a measure from the AI @ Work Lab, clearer delegate-or-keep-human choices from Retail AI, and an AI Opportunity Blueprint from the AI Leadership Lab.",
      },
      {
        question: "Do you handle the technical implementation?",
        answer:
          "No. We focus on how your people work with AI. Technical feasibility, platform decisions and approvals stay with your own teams and partners.",
      },
      {
        question: "How do we start, and what does it cost?",
        answer:
          "Start with a call about your team and the business problem worth working on. Cost depends on the experience, group size and format, and we share commercial terms while scoping. Tap “Request a callback” and we'll call you at a time that suits you.",
      },
    ],
    stillQuestions: "Still have a question?",
    stillQuestionsCta: "Ask us on WhatsApp",
  },

  finalCta: {
    heading: "Where could AI make the biggest difference in **your business?**",
    text: "Tell us where work is getting stuck, where your people are already experimenting and what your organisation needs to achieve. We will help you identify the most useful place to begin.",
    cta: "Explore Your Path to AI Readiness",
    secondaryCta: "Talk to Gentle Bamboo",
    note: "Start with one team, one function or one business challenge.",
  },

  footer: {
    name: "Gentle Bamboo Solutions | AI at Work for Retail",
    linkedin: "https://in.linkedin.com/company/gentlebamboo",
    solutionsUrl: "https://gentlebamboo.com/solutions",
  },
};
