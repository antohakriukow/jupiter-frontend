import { FC } from 'react'
import styles from './Card.module.scss'

export interface ICard {
	_id: string
	name: string
	category: string
	url: string
}

const Card: FC<ICard> = ({ _id, name, category, url }) => {
	return (
		<div className={styles.card}>
			<img id={_id} alt={url} src={url} className={styles.card__img} />
			<div className={styles.card__category}>{category}</div>
			<p className={styles.card__name}>{name}</p>
		</div>
	)
}
export default Card
