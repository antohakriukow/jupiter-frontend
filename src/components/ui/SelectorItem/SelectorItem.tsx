import { FC } from 'react'
import styles from './SelectorItem.module.scss'

interface ISelectorItem {
	category: string
}

const SelectorItem: FC<ISelectorItem> = ({ category }) => {
	return (
		<li>
			<div className={styles.selector__item}>{category}</div>
		</li>
	)
}
export default SelectorItem
