"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTokenColors = void 0;
const variables_1 = require("./variables");
const constants_1 = require("./constants");
const operators_1 = require("./operators");
const punctuation_1 = require("./punctuation");
const properties_1 = require("./properties");
const imports_1 = require("./imports");
const html_1 = require("./html");
const css_1 = require("./css");
const regex_1 = require("./regex");
const markdown_1 = require("./markdown");
const json_1 = require("./json");
const validation_1 = require("./validation");
const annotations_1 = require("./annotations");
const classes_types_1 = require("./classes-types");
const keywords_1 = require("./keywords");
const strings_1 = require("./strings");
const comments_1 = require("./comments");
const numbers_1 = require("./numbers");
const fuctions_methods_1 = require("./fuctions-methods");
exports.allTokenColors = [
    ...keywords_1.keywords,
    ...strings_1.strings,
    ...numbers_1.numbers,
    ...comments_1.comments,
    ...fuctions_methods_1.functionsMethods,
    ...classes_types_1.classesTypes,
    ...variables_1.variables,
    ...constants_1.constants,
    ...operators_1.operators,
    ...punctuation_1.punctuation,
    ...properties_1.properties,
    ...imports_1.imports,
    ...html_1.html,
    ...css_1.css,
    ...regex_1.regex,
    ...markdown_1.markdown,
    ...json_1.json,
    ...validation_1.validation,
    ...annotations_1.annotations
];
