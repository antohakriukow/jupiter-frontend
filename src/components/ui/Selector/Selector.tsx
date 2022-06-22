import { FC } from 'react'
import { categories } from '../../../data/categories'
import SelectorItem from '../SelectorItem/SelectorItem'
import styles from './Selector.module.scss'

const Selector: FC = () => {
	return (
		<ul className={styles.selector}>
			<SelectorItem category="Show All" key="Show All" />
			{categories.map((category) => (
				<SelectorItem category={category} key={category} />
			))}
		</ul>
	)
}
export default Selector
