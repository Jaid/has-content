# has-content


<a href="https://raw.githubusercontent.com/jaid/has-content/master/license.txt"><img src="https://img.shields.io/github/license/jaid/has-content?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor has-content"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/has-content/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fhas-content%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/has-content/commits"><img src="https://img.shields.io/github/commits-since/jaid/has-content/v1.1.0?style=flat-square&logo=github" alt="Commits since v1.1.0"/></a> <a href="https://github.com/jaid/has-content/commits"><img src="https://img.shields.io/github/last-commit/jaid/has-content?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/has-content/issues"><img src="https://img.shields.io/github/issues/jaid/has-content?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/has-content"><img src="https://img.shields.io/npm/v/has-content?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/has-content/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/has-content?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/has-content"><img src="https://img.shields.io/npm/dm/has-content?style=flat-square&logo=npm" alt="Downloads"/></a>

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

<a href="https://github.com/jaid/has-content/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/has--content-24282e?style=flat-square&logo=github" alt="@jaid/has-content on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/has-content@^1.1.0
```



## Example

```javascript
import hasContent from "has-content"

const result = hasContent({})
```

Variable `result` will now be:

```javascript
false
```













## Development



Setting up:
```bash
git clone git@github.com:jaid/has-content.git
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
