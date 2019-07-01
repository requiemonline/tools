import defOptions from './defaultOptions'
import { AnyFuncT, TimerT } from './types'

function throttle<F extends AnyFuncT>(
	func: F,
	options: { ms?: number; onStart?: boolean; withCancel: true },
): [(...args: Parameters<F>) => void, () => void]
function throttle<F extends AnyFuncT>(
	func: F,
	options?: Partial<typeof defOptions>,
): (...args: Parameters<F>) => void
function throttle<A extends any[], R>(func: (...args: A) => R, options?: Partial<typeof defOptions>) {
	const { ms, onStart, withCancel } = { ...defOptions, ...options }
	let nextArgs = ([] as unknown) as A
	let doNext = false
	let onGoing = false
	let timer: TimerT

	const next = () => {
		if (doNext) {
			func(...nextArgs)
			doNext = false
			timer = (setTimeout(next, ms) as unknown) as number
		} else onGoing = false
	}

	const throttledFunc = (...args: A) => {
		if (!onGoing) {
			onGoing = true
			if (onStart) func(...args)
			else {
				nextArgs = args
				doNext = true
			}
			setTimeout(next, ms)
		} else {
			doNext = true
			nextArgs = args
		}
	}

	return withCancel ? [throttledFunc, () => clearTimeout(timer)] : throttledFunc
}

export default throttle
