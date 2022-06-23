import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TypeRootState } from '../store/store'
import { useActions } from './useActions'

export const useCard = () => {
	const { setCurrentCard, deleteCard } = useActions()
	const activeCard = useSelector(
		(state: TypeRootState) => state.ui.currentCard
	)

	const setActiveCard = (_id: string) => setCurrentCard(_id)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Delete') deleteCard()
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [deleteCard])

	return { activeCard, setActiveCard }
}
