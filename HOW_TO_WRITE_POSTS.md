# Guide to Writing Blog Posts

To write a new blog post, simply create a new `.mdx` or `.md` file in the `data/blog/` directory.
Example: `my-first-post.mdx`

## Required Structure (Frontmatter)

Every post must start with a YAML frontmatter block at the top of the file:

```yaml
---
title: 'Your Post Title Here'
date: '2024-10-15'
tags: ['react', 'nextjs', 'ai']
draft: false
summary: 'A short 2-3 sentence summary of the post to be displayed on the homepage and SEO meta tags.'
---
```

[Your main content in Markdown goes here...]

## AI Prompt Suggestion

If you want to use AI (like ChatGPT or Claude) to generate or format a post for you, you can use this prompt:

> "You are an expert technical writer. Write a comprehensive blog post about [Your Topic].
> Output the result strictly in MDX format. Start the file with a YAML frontmatter block containing:
>
> - title (catchy and SEO-friendly)
> - date (YYYY-MM-DD format)
> - tags (array of lower-case string tags, e.g., ['react', 'python', 'front-end'])
> - draft (set to false)
> - summary (a 2-3 sentence overview of the post)
>
> The body of the post should use Markdown styling, clear headings (h2, h3), code blocks with specific languages (e.g., ```js), and emphasize important concepts. Keep the tone professional, educational, and engaging. Do not include markdown code block backticks around the entire output if possible."
