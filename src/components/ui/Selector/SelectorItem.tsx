import { FC } from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import { TypeRootState } from '../../../store/store'

import styles from './Selector.module.scss'

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
