# has-content


<a href="https://raw.githubusercontent.com/Jaid/has-content/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/has-content?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/has-content/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fhas-content%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/has-content/commits"><img src="https://img.shields.io/github/commits-since/Jaid/has-content/v1.1.0?style=flat-square&logo=github" alt="Commits since v1.1.0"/></a> <a href="https://github.com/Jaid/has-content/commits"><img src="https://img.shields.io/github/last-commit/Jaid/has-content?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/has-content/issues"><img src="https://img.shields.io/github/issues/Jaid/has-content?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/has-content"><img src="https://img.shields.io/npm/v/has-content?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/has-content/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/has-content?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/has-content"><img src="https://img.shields.io/npm/dm/has-content?style=flat-square&logo=npm" alt="Downloads"/></a>

**Returns true if the given value has meaningful content.**















## Installation
<a href="https://npmjs.com/package/has-content"><img src="https://img.shields.io/badge/npm-has--content-C23039?style=flat-square&logo=npm" alt="has-content on npm"/></a>
```bash
npm install --save has-content@^1.1.0
```
<a href="https://yarnpkg.com/package/has-content"><img src="https://img.shields.io/badge/Yarn-has--content-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="has-content on Yarn"/></a>
```bash
yarn add has-content@^1.1.0
```
<a href="https://jsdelivr.com/package/npm/has-content/"><img src="https://img.shields.io/badge/jsDelivr-has--content-orange?style=flat-square&logo=html5&logoColor=white" alt="has-content on jsDelivr"/></a> <a href="https://unpkg.com/browse/has-content/"><img src="https://img.shields.io/badge/UNPKG-has--content-orange?style=flat-square&logo=html5&logoColor=white" alt="has-content on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/has-content@1.1.0/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/has-content@1.1.0/index.js");
document.querySelector("head").appendChild(scriptElement);
```

has-content is now stored in the global variable `hasContent`. The following console expression should return something other than `"undefined"`.

```javascript
typeof hasContent.default
```






## Development



Setting up:
```bash
git clone git@github.com:Jaid/has-content.git
cd has-content
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
