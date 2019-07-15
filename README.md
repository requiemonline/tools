# Tools
* [debounce](#debounce)
* [throttle](#throttle)
* [memoize](#memoize)
* [getCookie](#getcookie)
* [spin](#spin)
* [createArraySpinner](#createarrayspinner)
* [Importing](#importing)
* [Motivation](#motivation)

## debounce
Creates a debounced function that delays callback invoking until after wait milliseconds have elapsed since the last time the debounced function was invoked. 

```
import { debounce } from '@rqm/tools'
const debouncedCallback = debounce(callback, [, options])
```
### Options:
* `ms=300`: Delay in milliseconds.
* `onStart=false`: Execute callback on first call without delay.
* `withCancel=false`: Return function that cancels delayed execution. Supplied in array with debounced callback:
```
const [debouncedCallback, cancel] = debounce(callback, { withCancel: true })
```

## throttle
Creates a throttled function that delays callback invoking until after wait milliseconds have elapsed since the last time the delayed callback was executed. 

```
import { throttle } from '@rqm/tools'

const throttledCallback = throttle(callback, [, options])
```
### Options:
* `ms=300`: Delay in milliseconds.
* `onStart=false`: Execute callback on first call without delay.
* `withCancel=false`: Return function that cancels delayed execution. Supplied in array with throttled callback:
```
const [throttledCallback, cancel] = throttle(callback, { withCancel: true })
```

## memoize
Creates function that invokes passed callback and returns its result if this function invoked first time or its arguments differs with previous call arguments, otherwise its returns previous call result.

```
import { memoize } from '@rqm/tools'

const callbackMemoizingResult = memoize(callback)
```

## getCookie
Returns cookie value or empty string on fallback

```
import { getCookie } from '@rqm/tools'

const cookieValue = getCookie(cookieName)
```

### With Typescript
```
type ThemeType = 'dark' | 'light'
const theme = getCookie<ThemeType>('theme')
// typeof theme = '' | 'dark' | 'light'
```

## spin
Accepts array length as first parameter and index as second. Index can be *any* number. It's not matter whether it fits default array index restrictions (`0 <= index < array.length`) or not.
When given index passed this restrictions, `spin` returns index itself, otherwise it'll be index divided with modulo `array.length % index` if index isn't negative. For negative index computations is more complicated, but similar: `array[spin(array, -1)] === array[array.length -1]`.
Abstraction for this can be the wheel with array items reeled up on it. You spin it too much or in wrong direction and still get index with valid value.

```
import { spin } from '@rqm/tools'

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
```
import { createArraySpinner } from '@rqm/tools'

const arr = ['a', 'b', 'c']
const arrSpinner = createArraySpinner(arr)
arrSpinner[-1] // 'c'
```

## Importing
If tree shaking enabled:
```
import { debounce } from '@rqm/tools'
```
otherwise
```
import debounce from '@rqm/tools/debounce'
```


## Motivation
* self education
* convenient
* low size compared to lodash and suchlike