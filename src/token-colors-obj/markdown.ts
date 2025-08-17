import type jsType = require('../js.type');

/*
Code Examples:

Markdown:
# Main Heading
## Sub Heading
### Small Heading

**Bold text**
*Italic text*
***Bold and italic***

- List item 1
- List item 2
  - Nested item

[Link text](https://example.com)
![Image](image.jpg)

```typescript
const code = "syntax highlighted";
```

> This is a blockquote
> with multiple lines

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |

→ Color affects: 
  - # Main Heading, ## Sub Heading, ### Small Heading (headings - bold styling)
  - **Bold text** (bold formatting)
  - *Italic text* (italic formatting)
  - Other markdown elements get default text color
*/

export const markdown: jsType.TokenColorInterface[] = [
        // MARKDOWN
        {
                scope: [
                        "markup.heading",
                        "entity.name.section.markdown"
                ],
                settings: {
                        foreground: "#569cd6",
                        fontStyle: "bold"
                }
        },

        {
                scope: [
                        "markup.bold"
                ],
                settings: {
                        fontStyle: "bold"
                }
        },

        {
                scope: [
                        "markup.italic"
                ],
                settings: {
                        fontStyle: "italic"
                }
        }
];
