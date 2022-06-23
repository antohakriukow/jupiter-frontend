import { FC } from 'react'
import cn from 'classnames'

import styles from './DropDownSelector.module.scss'

interface IDropdownItem {
	category: string
}

const DropdownItem: FC<IDropdownItem> = ({ category }) => {
	return (
		<div
			className={cn(styles.dropdown__item, styles.dropdown__item_dropped)}
		>
			{category}
		</div>
	)
}
export default DropdownItem
