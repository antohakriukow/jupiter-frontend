import { FC } from 'react'
import { useActions } from '../../../hooks/useActions'
import SelectorItem from '../SelectorItem/SelectorItem'
import styles from './Selector.module.scss'

export interface ISelector {
	categories: string[]
}

const Selector: FC<ISelector> = ({ categories }) => {
	const { setCurrentCategory } = useActions()

	return (
		<ul className={styles.selector}>
			<li onClick={() => setCurrentCategory('Show All')}>
				<SelectorItem category="Show All" key="Show All" />
			</li>
			{categories.map((category) => (
				<li
					className={styles.active}
					onClick={() => setCurrentCategory(category)}
				>
					<SelectorItem category={category} key={category} />
				</li>
			))}
		</ul>
	)
}
export default Selector
