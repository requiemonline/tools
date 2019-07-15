import spin from './spin'

const createArraySpinner = <A extends any[]>(arr: A) =>
	new Proxy(arr, {
		get: (target, prop) => {
			const int = Number(prop)
			return Number.isInteger(int) ? target[spin(target.length, int)] : target[prop as any]
		},
	})

export default createArraySpinner
