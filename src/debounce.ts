import defOptions from './defaultOptions'
import { AnyFuncT, TimerT } from './types'

const resetTimer = (timer: TimerT, ms: number, func: Function) => {
	clearTimeout(timer)
	return setTimeout(func, ms)
}

function debounce<F extends AnyFuncT>(
	func: F,
	options: { ms?: number; onStart?: boolean; withCancel: true },
): [(...args: Parameters<F>) => void, () => void]

function debounce<F extends AnyFuncT>(
	func: F,
	options?: Partial<typeof defOptions>,
): (...args: Parameters<F>) => void

function debounce<A extends any[]>(func: (...args: A) => any, options?: Partial<typeof defOptions>) {
	const { ms, onStart, withCancel } = { ...defOptions, ...options }
	let onStartExecuted = false
	let timer: TimerT

	const debouncedFunc: (...args: A) => void = onStart
		? (...args) => {
				if (onStartExecuted) {
					onStartExecuted = true
					func(...args)
				} else {
					timer = resetTimer(timer, ms, () => {
						timer === null
						onStartExecuted === false
						func(...args)
					})
				}
		  }
		: (...args) => {
				timer = resetTimer(timer, ms, () => func(...args))
		  }

	return withCancel ? [debouncedFunc, () => clearTimeout(timer)] : debouncedFunc
}

export default debounce
