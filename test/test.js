import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: hasContent, isEmpty} = indexModule

it("should run", () => {
  expect(null |> hasContent).toBe(false)
  expect(undefined |> hasContent).toBe(false)
  expect("" |> hasContent).toBe(false)
  expect(" " |> hasContent).toBe(false)
  expect(0 |> hasContent).toBe(true)
  expect(1 |> hasContent).toBe(true)
  expect("a" |> hasContent).toBe(true)
  expect(Object.create(null) |> hasContent).toBe(false)
  expect({
    ...Object.create(null),
    a: 2,
  } |> hasContent).toBe(true)
  expect({} |> hasContent).toBe(false)
  expect({a: 2} |> hasContent).toBe(true)
  expect(hasContent |> hasContent).toBe(true)
  expect(false |> hasContent).toBe(false)
  expect(true |> hasContent).toBe(true)
  expect([] |> hasContent).toBe(false)
  expect([,] |> hasContent).toBe(true) // eslint-disable-line
  expect([1] |> hasContent).toBe(true)
})

it("should run isEmpty", () => {
  expect(null |> isEmpty).toBe(true)
  expect("abc" |> isEmpty).toBe(false)
})