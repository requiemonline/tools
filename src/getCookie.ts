const getCookie = <T extends string>(cookieName: string) => {
	const cookie = document.cookie

	const cookieStart = cookie.indexOf(cookieName) + cookieName.length + 1
	if (cookieStart === cookieName.length) return ''

	let cookieEnd = cookie.indexOf(';', cookieStart)
	if (cookieEnd === -1) cookieEnd = cookie.length

	const cookieValue = cookie.slice(cookieStart, cookieEnd)
	return cookieValue as T
}

export default getCookie
