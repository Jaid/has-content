/** @module has-content */

import {isNil, isString, isNumber, isFunction, isObject, isBoolean} from "lodash"

const hasContent = value => {
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

/**
 * Returns `false` if the given value is truthy or has any kind of content
 * @example
 * import {isEmpty} from "has-content"
 * const result = hasContent(" ")
 * result === true
 * @example
 * import {isEmpty} from "has-content"
 * const result = hasContent("a")
 * result === false
 * @function isEmpty
 * @param {*} value
 * @returns {boolean} `false` if `value` is truthy or has content, `true` otherwise
 */
export const isEmpty = value => {
  return !hasContent(value)
}

/**
 * Returns `true` if the given value is truthy or has any kind of content
 * @example
 * import hasContent from "has-content"
 * const result = hasContent(" ")
 * result === false
 * @example
 * import hasContent from "has-content"
 * const result = hasContent("a")
 * result === true
 * @function default
 * @param {*} value
 * @returns {boolean} `true` if `value` is truthy or has content
 */
export default hasContent