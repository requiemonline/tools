export const spin = <A extends any[]>(arr: A, i: number) => {
	const len = arr.length
	return i > len ? arr[i % len] : i < 0 ? arr[len + (i % len || -len)] : arr[i]
}

export const createArraySpinner = <A extends any[]>(arr: A) => new Proxy(arr, { get: spin })
