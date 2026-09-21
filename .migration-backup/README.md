# AI at Work for Retail — Gentle Bamboo Solutions

A Next.js + Tailwind landing page in the Gentle Bamboo brand. The main buttons open a WhatsApp chat with a pre-filled message; every one of them also has an email option (`hello@gentlebamboosolutions.com`).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Editing content

**All text, links and settings live in [`src/content/course.ts`](src/content/course.ts).** Search the file for `TODO`. Anything in `[square brackets]` is a placeholder that must be replaced before launch.

| What | Where in `course.ts` |
|---|---|
| **Which sections appear** | `sections` — set any to `false` to drop that section and its navbar link |
| The four experiences and their expandable details | `experiences` (blocks can be `text`, `list`, `chips`, `flow`, `quote` or `case`) |
| The pilot invitation and its four steps | `pilot` |
| First screen, Glass Box photo and caption | `hero` |
| The band of functions under the first screen | `audienceStrip` |
| About us | `about` |
| WhatsApp number and pre-filled messages | `whatsapp` (includes the "Request a callback" message) |
| Email address and subject lines | `email` |
| Next batch date and seats left | `cohort` (after `startDate` passes, the page switches to `closedMessage` automatically) |
| YouTube video | `video.youtubeUrl` (any YouTube link format works; `video.poster` sets a custom thumbnail) |
| Price, discount badge, guarantee stamp | `pricing` |
| Certificate image | `certificate.image.src` (a branded sample is shown until you add one) |
| Free bonuses | `bonuses` (only list what you actually provide) |
| LinkedIn post links on testimonials | `linkedinUrl` on each testimonial |
| Page title and description for Google and link previews | `meta` |
| Bold words in headings | wrap them in `**double asterisks**` |

### Photos and logos
1. Put files in `public/images/`, e.g. `public/images/gallery-1.jpg`.
2. Set `src: "/images/gallery-1.jpg"` on the matching item in `course.ts`, and write a real `alt` description.

Until `src` is set, a labelled placeholder is shown. Use photos about 1600px wide, as JPG or WebP. Next.js resizes them automatically.

### Link preview image
`src/app/opengraph-image.tsx` generates a branded 1200×630 preview for WhatsApp and LinkedIn shares. To use a designed image instead, delete that file and add `src/app/opengraph-image.png`.

## Review mode (turn this off before launch)

While `review.mode` is `true` in [`src/content/course.ts`](src/content/course.ts), every unfinished section carries a black-and-amber label:

- **"Needs content"** — the section still has `[placeholder]` text, missing photos or no video link. The label counts them, e.g. *5 photos missing*.
- **"Check draft"** — the copy reads as finished but nobody has approved it. These come from `review.draftNotes`; delete an entry once you've signed that section off.

Each label also names the switch that removes the section, e.g. `off: sections.gallery`.

The labels update themselves as you add real content, and they're hidden from screen readers. **Set `review.mode: false` before the page goes live** — nothing about them is then sent to the browser.

## Tracking

Copy `.env.example` to `.env.local`, or set the same variables in your hosting dashboard:

```
NEXT_PUBLIC_GA4_ID=G-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890
```

Each WhatsApp click sends a `whatsapp_click` event to GA4 and a `Contact` event to the Meta Pixel. Both include `cta_location` (which button) and `enquiry_type` (`individual` / `team` / `syllabus`). Video plays send a `video_play` event.

Each chat message also ends with a reference like `(ref: pricing · utm_source=meta · utm_campaign=launch)`, so the WhatsApp inbox shows which button and which ad produced the chat. Turn this off with `whatsapp.includeRef: false`.

## Deploying

The easiest option is [Vercel](https://vercel.com): import the repo and add the two env variables. To run the page inside the main gentlebamboo.com site instead, copy `src/components`, `src/content`, `src/lib`, `public/brand` and the theme block from `src/app/globals.css` into that project. Then move `src/app/page.tsx` to `app/ai-course/page.tsx`.
