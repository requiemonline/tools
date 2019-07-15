const spin = (len: number, i: number) => (i >= len ? i % len : i < 0 ? len + (i % len || -len) : i)

export default spin
