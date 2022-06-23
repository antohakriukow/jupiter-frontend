import { FC } from 'react'
import styles from './SelectorItem.module.scss'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { TypeRootState } from '../../../store/store'

interface ISelectorItem {
	category: string
}

const SelectorItem: FC<ISelectorItem> = ({ category }) => {
	const currentCategory = useSelector(
		(state: TypeRootState) => state.ui.currentCategory
	)
	const isActive = !!(currentCategory === category)
	return (
		<div
			className={cn(styles.selector__item, {
				[styles.active]: isActive,
			})}
		>
			{category}
		</div>
	)
}
export default SelectorItem
