# Content drafts

Blog articles and LinkedIn posts for Kodamas, written with the `kodamas-blog-writer` skill (`.claude/skills/kodamas-blog-writer/`).

**Nothing in this folder is published on the site.** It sits outside `src/`, so Astro never builds it. When a blog exists, articles can be moved into it with their frontmatter as is.

## Folders

Every article has its own folder, `articles/<slug>/`, with everything about it:

```
articles/<slug>/
  <slug>.md            the article, always the latest version
  <slug>.txt           the same article as plain text
  <slug>.schema.json   JSON-LD, created when the article is final
  interview.md         interview notes
  linkedin.md          short LinkedIn version
  versions/            earlier versions, kept before each round of edits:
                       <slug>.v1.md, <slug>.v1.txt, then v2…
```

## Article frontmatter

```yaml
---
title: "Full article title (the H1)"
seoTitle: "Max 60 characters, includes the primary keyword"
description: "Meta description, max 155 characters, includes the primary keyword."
slug: "primary-keyword-based-slug"
primaryKeyword: "primary keyword"
secondaryKeywords:
  - "secondary keyword one"
  - "secondary keyword two"
date: 2026-01-31
tags:
  - "product management"
author: "Daniela Contessa"
status: draft # draft | final
why: "Why we are writing this article"
relevance: "Why it matters to the reader now"
learning: "What the reader learns or can do after reading"
---
```
