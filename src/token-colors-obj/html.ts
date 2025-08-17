import type jsType = require('../js.type');

/*
Code Examples:

HTML/XML:
<div class="container">
    <h1>Welcome</h1>
    <p>Hello World</p>
    <img src="image.jpg" alt="Image" />
</div>
→ Color affects: div, h1, p, img (tag names), <, >, </, /> (tag punctuation)

JSX (TypeScript/React):
<div className="container">
    <h1>{title}</h1>
    <button onClick={handleClick}>Click me</button>
</div>
→ Color affects: div, h1, button (tag names), <, >, </, /> (tag punctuation)

PHP (with HTML):
<div class="user-info">
    <h2><?php echo $user->name; ?></h2>
    <p><?= $user->email ?></p>
</div>
→ Color affects: div, h2, p (tag names), <, >, </, /> (tag punctuation)

XML:
<user>
    <name>John Doe</name>
    <email>john@example.com</email>
</user>
→ Color affects: user, name, email (tag names), <, >, </, /> (tag punctuation)
*/

export const html: jsType.TokenColorInterface[] = [
        // HTML/XML TAGS
        {
                scope: [
                        "entity.name.tag",
                        "punctuation.definition.tag"
                ],
                settings: {
                        foreground: "#569cd6",
                        fontStyle: "medium"
                }
        }
];
