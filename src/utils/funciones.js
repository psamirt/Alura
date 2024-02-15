export const encriptador = text => {
	const palabraEncriptada = text
		.split('')
		.map(letra => {
			switch (letra.toLowerCase()) {
				case 'e':
					return 'enter'
				case 'i':
					return 'imes'
				case 'a':
					return 'ai'
				case 'o':
					return 'ober'
				case 'u':
					return 'ufat'
				default:
					return letra
			}
		})
		.join('')

	return palabraEncriptada
}

export const desencriptador = text => {
	const palabraDesencriptada = []
	let i = 0
	while (i < text.length) {
		let letraDesencriptada = ''
		if (text[i] === 'a' && text[i + 1] === 'i') {
			letraDesencriptada = 'a'
			i += 2
		} else if (
			text[i] === 'e' &&
			text[i + 1] === 'n' &&
			text[i + 2] === 't' &&
			text[i + 3] === 'e' &&
			text[i + 4] === 'r'
		) {
			letraDesencriptada = 'e'
			i += 5
		} else if (
			text[i] === 'i' &&
			text[i + 1] === 'm' &&
			text[i + 2] === 'e' &&
			text[i + 3] === 's'
		) {
			letraDesencriptada = 'i'
			i += 4
		} else if (
			text[i] === 'o' &&
			text[i + 1] === 'b' &&
			text[i + 2] === 'e' &&
			text[i + 3] === 'r'
		) {
			letraDesencriptada = 'o'
			i += 4
		} else if (
			text[i] === 'u' &&
			text[i + 1] === 'f' &&
			text[i + 2] === 'a' &&
			text[i + 3] === 't'
		) {
			letraDesencriptada = 'u'
			i += 4
		} else {
			letraDesencriptada = text[i]
			i++
		}
		palabraDesencriptada.push(letraDesencriptada)
	}
	return palabraDesencriptada.join('')
}
