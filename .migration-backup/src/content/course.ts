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
    experiences: true,
    video: true,
    logos: true,
    audience: true,
    outcomes: true,
    curriculum: true, // course
    howItWorks: true,
    gallery: true,
    facilitators: true,
    testimonials: true,
    certificate: true, // course
    bonuses: true, // course
    pricing: true, // course
    pilot: true,
    team: true,
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
      experiences: "subheading is draft copy",
      audience: "persona cards are draft copy",
      outcomes: "draft copy — confirm or replace",
      curriculum: "modules are draft copy",
      howItWorks: "steps are draft copy",
      team: "draft copy — confirm or replace",
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
    eyebrow: "AI at Work for Retail",
    headline: "AI is changing what people can do. **Is it changing how your business works?**",
    lead: "We help retail organisations turn AI from individual experimentation into better everyday work — without outsourcing human judgement.",
    primaryCta: "Discuss an AI at Work pilot",
    secondaryCta: "Explore the experiences",
    ctaNote: "", // optional line under the buttons
    // TODO: add the Glass Box kit photograph to /public/images and set `src`
    image: { src: "", alt: "The Glass Box learning kit" },
    imageCaption: "The Glass Box learning kit: participants play through how language models work.",
    facts: [], // optional chips, e.g. { icon: "clock", label: "2–3 hours" }
    trustLine: "", // optional proof line
  },

  audienceStrip: {
    heading: "From individual experimentation to better everyday work",
    items: ["Merchandising", "Store operations", "Marketing", "Customer experience", "Supply chain", "People teams"],
  },

  experiences: {
    heading: "The **experiences**",
    subheading: "Four ways to move your teams from talking about AI to working differently with it.", // TODO: confirm or remove
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

  // TODO: replace
  audience: {
    heading: "Who these experiences are **for**",
    subheading: "Built for the retail teams who own the work, whatever their title.",
    personas: [
      {
        icon: "users",
        title: "First-time managers",
        description: "You've just stepped into leading a team and want to use AI to work smarter from day one.",
        outcome: "Confidence using AI for everyday management",
      },
      {
        icon: "briefcase",
        title: "Senior leaders & CXOs",
        description: "You need to make sharp calls about where AI fits in your function, without drowning in hype.",
        outcome: "A clear view of what AI can and can't do",
      },
      {
        icon: "graduationCap",
        title: "HR & L&D leaders",
        description: "You're responsible for helping people across the organisation adopt AI well.",
        outcome: "Practical ways to guide AI adoption",
      },
      {
        icon: "rocket",
        title: "Founders & business owners",
        description: "You wear many hats and want AI to take real work off your plate, safely.",
        outcome: "Workflows that save you hours every week",
      },
    ],
    notForYouTitle: "It's probably not for you if…",
    notForYou: [
      "You're looking for a coding or data-science course",
      "You want a self-paced video library to watch alone",
      "You can't join the live sessions",
    ],
  },

  // TODO: replace
  outcomes: {
    heading: "What teams take **back to work**",
    subheading: "Practical habits people rehearse in the room and use the next Monday.",
    items: [
      {
        title: "Make better decisions with AI",
        description: "Use AI to frame problems, test options and challenge your own thinking — without handing over your judgement.",
      },
      {
        title: "Write prompts that actually work",
        description: "Get useful first drafts of emails, plans, reports and presentations in minutes instead of hours.",
      },
      {
        title: "Lead your team through AI adoption",
        description: "Run honest conversations about AI, handle resistance and set clear norms for how your team uses it.",
      },
      {
        title: "Spot risks before they bite",
        description: "Recognise hallucinations, bias, and data-privacy pitfalls, and know when not to use AI.",
      },
      {
        title: "Redesign one real workflow",
        description: "Leave with one process from your own work rebuilt with AI, tested with your peers.",
      },
      {
        title: "Build a 90-day AI plan",
        description: "A practical, personal roadmap for bringing AI into how you and your team work.",
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

  // TODO: replace
  howItWorks: {
    heading: "Learn it. Rehearse it. **Use it on Monday.**",
    subheading: "The same approach Gentle Bamboo uses with leadership teams: play, reflect, share.",
    steps: [
      { title: "Learn", description: "Short, practical live sessions — no slides marathons, no jargon." },
      { title: "Rehearse", description: "Games and simulations where you use AI on realistic leadership scenarios." },
      { title: "Reflect", description: "Facilitated debriefs with peers on what worked and what didn't." },
      { title: "Apply", description: "A weekly challenge you try at work, then bring back to discuss." },
    ],
    details: [
      { label: "Live sessions", value: "[2 × 90 min / week]" },
      { label: "Time needed", value: "[~4 hrs / week]" },
      { label: "Recordings", value: "[Yes, for 6 months]" },
      { label: "Certificate", value: "[On completion]" },
    ],
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
        name: "[Facilitator name]",
        role: "[Role, Gentle Bamboo]",
        bio: "[Two or three lines about their experience with leadership development and AI.]",
        credentials: ["[Credential or past company]", "[Credential or certification]"],
        linkedin: "",
        photo: { src: "", alt: "[Facilitator name]" },
      },
      {
        name: "[Facilitator name]",
        role: "[Role, Gentle Bamboo]",
        bio: "[Two or three lines about their experience with leadership development and AI.]",
        credentials: ["[Credential or past company]", "[Credential or certification]"],
        linkedin: "",
        photo: { src: "", alt: "[Facilitator name]" },
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
    eyebrow: "Start a conversation",
    heading: "Where could AI make the biggest difference in **your business?**",
    text: "Tell us where work is getting stuck. We will help you choose a focused first experience and agree on what it should deliver.",
    cta: "Discuss an AI at Work pilot",
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
    heading: "We make difficult decisions **easier to practise.**",
    text: "Gentle Bamboo Solutions designs game-based learning, simulations and facilitated experiences for organisations. Our participants experiment safely, notice their assumptions and bring what they learn into the work they do. That is the foundation of our AI experiences.",
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
        question: "Do I need a technical background?",
        answer: "No. The course is built for leaders and managers, not engineers. If you can use email and a browser, you're ready.",
      },
      {
        question: "What if I miss a live session?",
        answer: "Every session is recorded, and you can catch up with a short 1:1 check-in with a facilitator.",
      },
      {
        question: "Which AI tools will we use?",
        answer: "Mainstream tools such as ChatGPT, Claude, Gemini and Copilot. You'll learn skills that carry over as the tools change.",
      },
      {
        question: "How much time do I need each week?",
        answer: "About [4 hours]: two live sessions plus a short on-the-job challenge.",
      },
      {
        question: "Is the course live or recorded?",
        answer: "Live. Every session is run by a Gentle Bamboo facilitator in a small group, so you get to practise and get feedback. Recordings are shared afterwards.",
      },
      {
        question: "When do the live sessions happen?",
        answer: "[Weekday evenings, 7:00–8:30 pm IST.] Exact dates are shared when you message us.",
      },
      {
        question: "Will I get a certificate?",
        answer: "Yes, you'll receive a Gentle Bamboo certificate once you complete the course and your 90-day plan.",
      },
      {
        question: "Can my company pay for the course?",
        answer: "Yes. We provide a GST invoice in your company's name. Message us on WhatsApp and we'll set it up.",
      },
      {
        question: "Do you offer group or team pricing?",
        answer: "[Yes, for 3 or more participants from the same organisation.] We also run private cohorts for teams. Tap “Enquire for your team” to get details.",
      },
      {
        question: "Can I talk to someone before enrolling?",
        answer: "Of course. Tap “Request a callback” and we'll call you at a time that suits you.",
      },
      {
        question: "What is the refund policy?",
        answer: "[Describe your refund policy here.]",
      },
    ],
    stillQuestions: "Still have a question?",
    stillQuestionsCta: "Ask us on WhatsApp",
  },

  // TODO: replace
  finalCta: {
    heading: "Ready to put AI **to work in your business?**",
    text: "Tell us where work is getting stuck. We will suggest a focused first experience and what it should deliver.",
    cta: "Chat with us on WhatsApp",
  },

  footer: {
    name: "Gentle Bamboo Solutions | AI at Work for Retail",
    linkedin: "https://in.linkedin.com/company/gentlebamboo",
    solutionsUrl: "https://gentlebamboo.com/solutions",
  },
};
