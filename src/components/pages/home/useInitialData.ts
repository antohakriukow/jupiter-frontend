import { useSelector } from 'react-redux'
import { TypeRootState } from '../../../store/store'

export const useInitialData = () => {
	const cardsCount = useSelector(
		(state: TypeRootState) => state.ui.cardsCount
	)

	const currentCategory = useSelector(
		(state: TypeRootState) => state.ui.currentCategory
	)

	const cards = useSelector((state: TypeRootState) => state.ui.cards)

	const categories = useSelector(
		(state: TypeRootState) => state.ui.categories
	)

	return { cards, categories, currentCategory, cardsCount }
}
