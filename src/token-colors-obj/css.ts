import type jsType = require('../js.type');

/*
Code Examples:

CSS:
.container {
    display: flex;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 16px;
}
→ Color affects: display, background-color, border-radius, padding (property names)
→ Color affects: flex, #ffffff, 8px, 16px (property values)

SCSS:
$primary-color: #007bff;
.button {
    background-color: $primary-color;
    &:hover {
        opacity: 0.8;
    }
}
→ Color affects: background-color, opacity (property names)
→ Color affects: $primary-color, 0.8 (property values)

TypeScript (styled-components):
const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.background};
`;
→ Color affects: display, background-color (property names)
→ Color affects: flex, ${props => props.theme.background} (property values)

PHP (inline styles):
<div style="display: flex; color: red;">Content</div>
→ Color affects: display, color (property names)
→ Color affects: flex, red (property values)
*/

export const css: jsType.TokenColorInterface[] = [
        // CSS PROPERTIES
        {
                scope: [
                        "support.type.property-name.css",
                        "meta.property-name"
                ],
                settings: {
                        foreground: "#9cdcfe",
                        fontStyle: "medium"
                }
        },

        // CSS VALUES
        {
                scope: [
                        "support.constant.property-value.css",
                        "meta.property-value"
                ],
                settings: {
                        foreground: "#ce9178",
                        fontStyle: "medium"
                }
        }
];
