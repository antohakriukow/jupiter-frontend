import { useEffect, useState } from 'react'

interface IWidth {
	width: number | undefined
}

export const useWidth = (): IWidth => {
	const [width, setWidth] = useState<IWidth>({ width: undefined })

	useEffect(() => {
		const handleResize = () => setWidth({ width: window.innerWidth })

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return width
}
