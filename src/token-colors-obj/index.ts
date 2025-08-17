import { variables } from './variables';
import { constants } from './constants';
import { operators } from './operators';
import { punctuation } from './punctuation';
import { properties } from './properties';
import { imports } from './imports';
import { html } from './html';
import { css } from './css';
import { regex } from './regex';
import { markdown } from './markdown';
import { json } from './json';
import { validation } from './validation';
import { annotations } from './annotations';
import { classesTypes } from './classes-types';
import { keywords } from './keywords';
import { strings } from './strings';
import { comments } from './comments';
import { numbers } from './numbers';
import { functionsMethods } from './fuctions-methods';

export const allTokenColors = [
        ...keywords,
        ...strings,
        ...numbers,
        ...comments,
        ...functionsMethods,
        ...classesTypes,
        ...variables,
        ...constants,
        ...operators,
        ...punctuation,
        ...properties,
        ...imports,
        ...html,
        ...css,
        ...regex,
        ...markdown,
        ...json,
        ...validation,
        ...annotations
];
