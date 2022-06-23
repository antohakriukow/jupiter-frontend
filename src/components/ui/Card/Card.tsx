import { FC } from 'react'
import { useCard } from '../../../hooks/useCard'
import { ICard } from './card.interface'
import styles from './Card.module.scss'
import cn from 'classnames'
import { useActions } from '../../../hooks/useActions'

const Card: FC<ICard> = ({ _id, name, category, url }) => {
	const { activeCard, setActiveCard } = useCard()
	const isActive = !!(activeCard === _id)
	const { setCurrentCategory } = useActions()

	return (
		<div
			onClick={() => setActiveCard(_id)}
			className={cn(styles.card, {
				[styles.card_active]: isActive,
			})}
		>
			<img
				id={_id}
				alt={url}
				src={url}
				className={styles.card__img}
				draggable={false}
			/>
			<div
				className={styles.card__category}
				onClick={(e) => {
					setCurrentCategory(category)
					e.stopPropagation()
				}}
			>
				{category}
			</div>
			<p className={styles.card__name}>{name}</p>
		</div>
	)
}
export default Card
