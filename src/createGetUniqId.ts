const createGetUniqId = (radix = 16, minLength = 1) => {
	let n = minLength > 1 ? parseInt(`1${'0'.repeat(minLength - 1)}`) : 0
	return () => (n++).toString(radix)
}

export default createGetUniqId
