# Tools
* [Debounce](#debounce)
* [Throttle](#throttle)
* [Memoize](#memoize)
* [Importing](#importing)
* [Motivation](#motivation)

## Debounce
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

## Throttle
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

## Memoize
Creates function that invokes passed callback and returns its result if this function invoked first time or its arguments differs with previous call arguments, otherwise its returns previous call result.

```
import { memoize } from '@rqm/tools'

const callbackMemoizingResult = memoize(callback)
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