import { FC } from 'react'

import { useWidth } from '../../../hooks/useWidth'
import { useInitialData } from './useInitialData'
import CardArea from '../../ui/CardArea/CardArea'
import IncrementBtn from '../../ui/IncrementBtn/IncrementBtn'
import DropDownSelector from '../../ui/DropDownSelector/DropDownSelector'
import Selector from '../../ui/Selector/Selector'

const Home: FC = () => {
	const { width } = useWidth()

	const { cards, categories, currentCategory, cardsCount } = useInitialData()

	const renderCards =
		currentCategory === 'Show All'
			? cards.slice(0, cardsCount)
			: cards
					.filter((card) => card.category === currentCategory)
					.slice(0, cardsCount)

	return (
		<>
			{width && width <= 1040 ? (
				<DropDownSelector categories={categories} />
			) : (
				<Selector categories={categories} />
			)}
			<CardArea cards={renderCards} />
			<IncrementBtn />
		</>
	)
}
export default Home
