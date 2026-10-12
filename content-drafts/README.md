# Content drafts

Blog articles and LinkedIn posts for Kodamas, written with the `kodamas-blog-writer` skill (`.claude/skills/kodamas-blog-writer/`).

**Nothing in this folder is published on the site.** It sits outside `src/`, so Astro never builds it. When a blog exists, articles can be moved into it with their frontmatter as is.

## Folders

- `articles/`: long-form articles, one file per article: `<slug>.md`, plus `<slug>.schema.json` (JSON-LD, created when the article is final)
- `interviews/`: interview notes for each article: `<slug>.md`
- `linkedin/`: short LinkedIn version of each article: `<slug>.md`

The same slug is used across all three folders.

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
---
```
