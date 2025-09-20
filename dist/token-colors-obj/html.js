"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
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

C:
#include <stdio.h>
int main() {
    printf("<html><body>Hello</body></html>");
    return 0;
}
→ Color affects: html, body (tag names within strings), <, >, </, /> (tag punctuation within strings)

C#:
string html = "<div><span>Text</span></div>";
var doc = new XmlDocument();
doc.LoadXml("<root><item>Value</item></root>");
→ Color affects: div, span, root, item (tag names within strings), <, >, </, /> (tag punctuation within strings)

C++:
#include <iostream>
#include <string>
std::string markup = "<header><title>Page</title></header>";
std::cout << "<p>Output</p>" << std::endl;
→ Color affects: header, title, p (tag names within strings), <, >, </, /> (tag punctuation within strings)
*/
exports.html = [
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
