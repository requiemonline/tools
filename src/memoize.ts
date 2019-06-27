export default <A extends any[], R>(func: (...args: A) => R) => {
	let prevArgs = [] as unknown as A
	let prevReturn: R
	const newReturn = (args: A) => {
		const newReturn = func(...args)
		prevArgs = args
		prevReturn = newReturn
		return newReturn
	}
	const memoizedFunc = (...args: A) => {
		if (args.length !== prevArgs.length) return newReturn(args) 
		else {
			const argsChanged = args.some((arg, i) => arg !== prevArgs[i])
			return argsChanged ? newReturn(args) : prevReturn
		}
	}
	return memoizedFunc
}
