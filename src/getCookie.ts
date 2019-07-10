export default (cookiePropName: string): string => {
	const cookie = document.cookie
	const cookieStart = cookie.indexOf(cookiePropName) + cookiePropName.length + 1
	if (cookieStart === cookiePropName.length) return ''
	let cookieEnd = cookie.indexOf(';', cookieStart)
	if (cookieEnd === -1) cookieEnd = cookie.length
	const cookieProp = cookie.slice(cookieStart, cookieEnd)
	return cookieProp
}
