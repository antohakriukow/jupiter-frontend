import { FC } from 'react'

import Card from '../Card/Card'
import { ICard } from '../Card/card.interface'

import styles from './CardArea.module.scss'

interface ICardArea {
	cards: ICard[] | []
}

const CardArea: FC<ICardArea> = ({ cards }) => {
	return (
		<ul className={styles.cardArea}>
			{cards.map((card) => (
				<Card
					key={card._id}
					_id={card._id}
					name={card.name}
					category={card.category}
					url={card.url}
				/>
			))}
		</ul>
	)
}
export default CardArea
