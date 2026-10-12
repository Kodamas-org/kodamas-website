# SEO and AI SEO guidelines

**The voice always wins.** SEO must never make the article sound robotic or keyword-stuffed. If a keyword doesn't fit naturally, rephrase or use a variant, don't force it.

## Keyword research (step 2)

- One primary keyword and 3 to 5 secondary keywords per article, agreed with Daniela before the interview.
- There is no access to keyword tools (Ahrefs, Semrush, Google Keyword Planner). **Never invent search volumes, difficulty scores or traffic numbers.**
- Base suggestions on web searches: what people actually search and ask (autocomplete-style phrasing, "People also ask", Reddit and forum questions), what currently ranks (and how good it is), and which angle is missing.
- Always say clearly that keyword suggestions are estimates based on web searches.
- Prefer specific, intent-rich phrases our audience would type ("how to hand over product decisions from founder to team") over broad head terms ("product management").

## Classic SEO

**Primary keyword placement**, used naturally:
- `seoTitle` (max 60 characters)
- `description` (meta description, max 155 characters)
- `slug` (short, lowercase, hyphens, no stop words where possible)
- the first 100 words of the article
- at least one H2

Secondary keywords appear where they fit: H2/H3s, body, FAQ, image alt text.

**Headings**
- One H1 only: the `title`.
- H2 for main sections, H3 for subsections. Never skip levels.
- Headings say what the section is about. A clever line can sit right under the heading, not replace it.

**Structure**
- Short paragraphs (usually 1 to 4 sentences), scannable.
- Lists or tables only where they really help (steps, comparisons, checklists).
- 2,000+ words, because the topic deserves the depth, not padding.

**Links**
- Suggest 2 to 4 internal links to other articles in `content-drafts/articles/` when relevant (check what exists; if none yet, say so). Use descriptive anchor text, never "click here".
- External links only to reputable sources (official docs, research, established publications). Every stat or claim from outside needs a link Daniela can check.

**Images**
- Suggest image ideas at the points where they help, each with alt text that describes the image (and includes a keyword only if it fits naturally). Mark them in the draft like this:

```
<!-- IMAGE: what the image shows. Alt: "descriptive alt text" -->
```

## AI SEO

The goal is to be understood, quoted and cited by ChatGPT, Perplexity, Google AI Overviews, Claude and similar.

- **Answer first.** Answer the main question of the article clearly in the first paragraphs, then go deep.
- **Direct answer under each H2.** Start each H2 section with one or two sentences that directly answer what the heading promises, so they can be quoted on their own.
- **Plain definitions.** Define key concepts in plain words ("A bug reporting flow is…").
- **Visible first-hand experience.** Real examples from Daniela's work, specific numbers she gives, what we actually did and what happened. This is what makes the article different from generic content.
- **Precise naming.** Tools, roles, team sizes, timeframes ("a team of 4 developers and 1 support person, over 3 months, using Linear"), so the context is unambiguous.
- **FAQ section** at the end (H2 "FAQ" or "Frequently asked questions", each question as an H3): 4 to 6 questions people really ask about the topic, based on web searches, with short direct answers in Daniela's voice.
- **Clear authorship.** Daniela Contessa, co-founder of Kodamas, with her background (see `expertise.md`). Add a short author note at the end of the article, after the FAQ (it is not a call to action).

## JSON-LD (step 7)

When the article is final, save `content-drafts/articles/<slug>.schema.json`. Fill it from the frontmatter and the FAQ (FAQ answers must match the article text). Don't add fields with invented data (no image URL until a real one exists). The URL is a placeholder until the blog exists.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "<title>",
      "description": "<description>",
      "datePublished": "<date>",
      "dateModified": "<date>",
      "inLanguage": "en",
      "keywords": ["<primaryKeyword>", "<secondaryKeywords…>"],
      "mainEntityOfPage": "https://kodamas.io/blog/<slug>",
      "author": {
        "@type": "Person",
        "name": "Daniela Contessa",
        "jobTitle": "Co-founder",
        "worksFor": { "@type": "Organization", "name": "Kodamas", "url": "https://kodamas.io" }
      },
      "publisher": { "@type": "Organization", "name": "Kodamas", "url": "https://kodamas.io" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "<question>",
          "acceptedAnswer": { "@type": "Answer", "text": "<answer>" }
        }
      ]
    }
  ]
}
```

## Pre-delivery checklist (step 6)

Run this before showing a draft, fix anything that fails, then show Daniela the SEO part as a short ticked list.

**Usefulness**
- [ ] `why`, `relevance` and `learning` filled in the frontmatter
- [ ] The opening makes clear why this article exists and why it matters to the reader
- [ ] The reader leaves with something concrete they can apply
- [ ] No padding: every section serves the why, relevance or learning

**Voice**
- [ ] Zero em dashes (`—`) and no en dashes (`–`) as punctuation (search the file)
- [ ] No banned words or patterns from `voice.md`
- [ ] Nothing judgmental, self-pitying or bitter
- [ ] Nothing that contradicts `kodamas-values.md`
- [ ] All rules in `learned-corrections.md` applied
- [ ] Every story, number and opinion comes from the interview; every external fact has a working link

**SEO**
- [ ] seoTitle ≤ 60 characters, with primary keyword (give the count)
- [ ] description ≤ 155 characters, with primary keyword (give the count)
- [ ] Slug contains the primary keyword
- [ ] Primary keyword in the first 100 words and in at least one H2
- [ ] One H1, H2/H3 in order, descriptive headings
- [ ] Direct answer in the first paragraphs and under every H2
- [ ] Key concepts defined in plain words
- [ ] FAQ with 4 to 6 real questions
- [ ] 2 to 4 internal link suggestions (or a note that none exist yet), reputable external links
- [ ] Image ideas with alt text
- [ ] Author note present
- [ ] 2,000+ words (give the count)
