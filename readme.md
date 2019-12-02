# has-content


Returns true if the given value has meaningful content.



## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/has-content@1.1.0");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof has-content.default
```

## Documentation

* [has-content](#module_has-content)
    * [~isEmpty(value)](#module_has-content..isEmpty) ⇒ <code>boolean</code>
    * [~default(value)](#module_has-content..default) ⇒ <code>boolean</code>

Returns `false` if the given value is truthy or has any kind of content

**Kind**: inner method of [<code>has-content</code>](#module_has-content)  
**Returns**: <code>boolean</code> - `false` if `value` is truthy or has content, `true` otherwise  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```javascript
import {isEmpty} from "has-content"
const result = hasContent(" ")
result === true
```
**Example**  
```javascript
import {isEmpty} from "has-content"
const result = hasContent("a")
result === false
```
Returns `true` if the given value is truthy or has any kind of content

**Kind**: inner method of [<code>has-content</code>](#module_has-content)  
**Returns**: <code>boolean</code> - `true` if `value` is truthy or has content  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```javascript
import hasContent from "has-content"
const result = hasContent(" ")
result === false
```
**Example**  
```javascript
import hasContent from "has-content"
const result = hasContent("a")
result === true
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
