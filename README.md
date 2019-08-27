# Tools
* [Motivation](#motivation)
* [Importing](#importing)
* [debounce](#debounce)
* [throttle](#throttle)
* [memoize](#memoize)
* [getCookie](#getcookie)
* [spin](#spin)
* [createArraySpinner](#createarrayspinner)
* [createGetUniqId](#creategetuniqid)

## Motivation
* education
* convenient code sharing between projects
* low size compared to lodash and suchlike

## Importing
If tree shaking enabled:
```js
import { debounce } from '@rqm/tools'
```
otherwise
```js
import debounce from '@rqm/tools/debounce'
```

## debounce
Creates a debounced function that delays callback invoking until after wait milliseconds have elapsed since the last time the debounced function was invoked. 

```js
const debouncedCallback = debounce(callback, [, options])
```
### Options:
* `ms=300`: Delay in milliseconds.
* `onStart=false`: Execute callback on first call without delay.
* `withCancel=false`: Return function that cancels delayed execution. Supplied in array with debounced callback:
```js
const [debouncedCallback, cancel] = debounce(callback, { withCancel: true })
```

## throttle
Creates a throttled function that delays callback invoking until after wait milliseconds have elapsed since the last time the delayed callback was executed. 

```js
const throttledCallback = throttle(callback, [, options])
```
### Options:
* `ms=300`: Delay in milliseconds.
* `onStart=false`: Execute callback on first call without delay.
* `withCancel=false`: Return function that cancels delayed execution. Supplied in array with throttled callback:
```js
const [throttledCallback, cancel] = throttle(callback, { withCancel: true })
```

## memoize
Creates function that invokes passed callback and returns its result if this function invoked first time or its arguments differs with previous call arguments, otherwise its returns previous call result.

```js
const callbackMemoizingResult = memoize(callback)
```

## getCookie
Returns cookie value or empty string on fallback

```js
const cookieValue = getCookie(cookieName)
```

### With Typescript
```ts
type ThemeType = 'dark' | 'light'
const theme = getCookie<ThemeType>('theme')
// typeof theme = '' | 'dark' | 'light'
```

## spin
Accepts array length as first parameter and index as second. Index can be *any* number. It's not matter whether it fits default array index restrictions (`0 <= index < array.length`) or not.
When given index passed this restrictions, `spin` returns index itself, otherwise it'll be index divided with modulo `array.length % index` if index isn't negative. For negative index computations is more complicated, but result is similar: `array[spin(array, -1)] === array[array.length -1]`.
Abstraction for this can be the wheel with array items reeled up on it. You spin it too much or in wrong direction and still get index with valid value.

```js
const arr = ['a', 'b', 'c']
const len = arr.length
arr[spin(len, 3)]   // "a"
arr[spin(len, 30)]  // "a"
arr[spin(len, -30)] // "a"
arr[spin(len, -31)] // "c"
arr[spin(len, -1)]  // "c"
```

## createArraySpinner
Returns passed array wrapped with Proxy that uses [spin](#spin) for getting array items:
```js
const arr = ['a', 'b', 'c']
const arrSpinner = createArraySpinner(arr)
arrSpinner[-1] // 'c'
```

## createGetUniqId
Creates function that always returns unique string based on passed `radix`, `minLength` and time it was called.
```js
const getId = createGetUniqId(2, 3)
const id1 = getId() // '100'
const id2 = getId() // '101'
```

### Options:
* `radix=16`: base for id computation
* `minLength=1`: minimal length for id

## lastOf
Returns last item of given array and undefined if array has no items.
```js
const arr = ['a', 'b', 'c']
const lastItem = lastOf(arr) // 'c'
lastOf([]) // undefined
```
