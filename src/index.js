/** @module has-content */

import {isNil, isString, isNumber, isFunction, isObject, isBoolean} from "lodash"

/**
 * Returns `true` if the passed value is truthy or has any kind of content
 * @example
 * import hasContent from "has-content"
 * const result = hasContent(" ")
 * result === false
 * @example
 * import hasContent from "has-content"
 * const result = hasContent("a")
 * result === true
 * @returns {boolean} `true` if `value` is truthy or has content
 */
export default value => {
  if (value |> isNil) {
    return false
  }
  if (value |> isFunction) {
    return true
  }
  if (value |> isNumber) {
    return true
  }
  if (value |> isBoolean) {
    return value === true
  }
  if (value |> isString) {
    return value.trim().length > 0
  }
  if (value.length |> isNumber) {
    return value.length > 0
  }
  if (value.length |> isFunction) {
    return value.length() > 0
  }
  if (value |> isObject) {
    return Object.keys(value).length > 0
  }
  return false
}