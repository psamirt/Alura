import { AiFillExclamationCircle } from 'react-icons/ai'
import { desencriptador, encriptador } from '../utils/funciones.js'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Home = () => {

    const [text, setText] = useState('')
	const [encriptado, setEncriptado] = useState('')
	const [desencriptado, setDesencriptado] = useState('')

	const handleEncriptar = text => {
		const texto = encriptador(text)
		setEncriptado(texto)
		setDesencriptado('')
	}

	const handleDesencriptar = text => {
		const texto = desencriptador(text)
		setDesencriptado(texto)
		setEncriptado('')
	}

	const handleCopiarTexto = () => {
		navigator.clipboard
			.writeText(encriptado)
			.then(() => {
				toast.success('¡Texto encriptado copiado al portapapeles!')
			})
			.catch(err => {
				console.error('Error al copiar el texto encriptado:', err)
			})
	}

	const handleChangeText = e => {
		const newText = e.target.value
		const regex = /^[a-z\s]+$/
		if (regex.test(newText) || newText === '') {
			setText(newText)
		} else {
			toast.error(
				'El texto debe contener solo letras minúsculas y sin acentos.',
			)
		}
	}
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-[375px] h-[933px] md:w-[768px] md:h-[1174px] lg:w-[1440px] lg:h-[1024px] flex flex-col md:flex lg:flex '>
        <div className=''>
            <div className='mt-[55px] ml-[0px] lg:mt-[40px] lg:ml-[40px] md:mt-[73px] md:ml-[10px] absolute items-center justify-center flex'>
                <img src='/svg/Logo.svg' alt='logo' />
            </div>
            <div className='mt-[152px] ml-[16px] lg:mt-[168px] lg:ml-[240px] md:mt-[200px] md:ml-[40px] absolute '>
                <textarea
                    placeholder='Ingrese el texto aquí'
                    type='text'
                    className='placeholder-[#0A3871] bg-[#F3F5FC] font-medium lg:p-3 lg:w-[577px] lg:h-[400px] md:w-[688px] font-inter text-[32px] lg:mim-h-[48px] md:min-h-[300px]'
                    value={text}
                    onChange={handleChangeText}
                />
            </div>
            <div className='mt-[451px] ml-[16px] lg:mt-[851px] lg:ml-[240px] md:mt-[836px] flex items-center opacity-[80%] absolute text-[#495057] lg:text-black'>
                <AiFillExclamationCircle size={16} />
                <p className='ml-2  '>Solo letras minúsculas y sin acentos</p>
            </div>
            <div
                className='mt-[485px] ml-[25px] flex flex-col absolute h-[158px] lg:mt-[885px] lg:ml-[240px] lg:w-[688px] lg:h-[67px] lg:flex-row md:mt-[870px]
             md:flex-row md:justify-between md:w-[710px] justify-between'
            >
                <button
                    className='w-[342px] h-[67px] lg:w-[328px] rounded-3xl bg-[#0A3871] text-white text-[16px] font-medium mb-[10px] lg:mb-0 lg:mr-4'
                    onClick={() => handleEncriptar(text)}
                >
                    Encriptar
                </button>
                <button
                    className='w-[342px] h-[67px] lg:w-[328px] rounded-3xl border-[#0A3871] border bg-[#D8DFE8] text-[#0A3871] text-[16px] font-medium'
                    onClick={() => handleDesencriptar(text)}
                >
                    Desencriptar
                </button>
            </div>
        </div>
        <div className='bg-white w-[327px] lg:w-[400px] h-[186px] mt-[707px] ml-[24px] lg:h-[944px] absolute lg:mt-[40px] lg:ml-[1000px] md:mt-[1001px] md:w-[688px] md:shadow-xl md:h-[133px] rounded-3xl '>
            {encriptado ? (
                <div className='items-center flex flex-col'>
                    <div className='lg:w-[336px] lg:h-[781px] lg:m-6'>
                        <div className='font-inter text-[24px] p-3 overflow-auto break-words md:w-[624px]'>
                            {encriptado}
                        </div>
                    </div>

                    <button
                        className='lg:w-[328px] w-[279px] h-[67px] rounded-3xl border-[#0A3871] items-center justify-center border bg-white text-[#0A3871]
                         text-[16px] font-medium borde-black border-spacing-1 mt-4
                        md:flex md:w-[624px] md:h-[67px]'
                        onClick={handleCopiarTexto}
                    >
                        Copiar
                    </button>
                </div>
            ) : desencriptado ? (
                <div className='items-center flex flex-col'>
                    <div className='lg:w-[336px] lg:h-[781px] m-6'>
                        <p className='font-inter text-[24px] '>{desencriptado}</p>
                    </div>
                    <button
                        className='w-[328px] h-[67px] rounded-3xl border-[#0A3871] border bg-white text-[#0A3871] text-[16px] font-medium borde-black border-spacing-1 mt-4
                        md:flex '
                        onClick={handleCopiarTexto}
                    >
                        Copiar
                    </button>
                </div>
            ) : (
                <div className=''>
                    <div className='hidden lg:flex justify-center mt-[283px]'>
                        <img src='/svg/Muñeco.svg' alt='imagen' />
                    </div>
                    <div className='flex justify-center '>
                        <div className='w-[336px] md:w-[624px] lg:w-[336px] h-[112px] md:h-[69px] mt-6 gap-4 justify-between flex flex-col '>
                            <h1 className='font-inter text-[24px] text-center text-[#343A40] font-extrabold'>
                                Ningún mensaje fue encontrado
                            </h1>
                            <p className='font-inter text-center text-[16px]'>
                                Ingresa el texto que desees encriptar o desencriptar.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    <Toaster />
</div>
  )
}

export default Home