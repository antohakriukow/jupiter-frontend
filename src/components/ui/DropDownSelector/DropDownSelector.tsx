import { FC } from 'react'
import cn from 'classnames'

import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useActions'
import { TypeRootState } from '../../../store/store'
import { ISelector } from '../Selector/Selector'
import DropdownItem from './DropDownItem'

import styles from './DropDownSelector.module.scss'

const DropDownSelector: FC<ISelector> = ({ categories }) => {
	const renderCategories = ['Show All', ...categories]

	const { currentCategory, isDropDownOpened } = useSelector(
		(state: TypeRootState) => state.ui
	)
	const otherCategories = renderCategories.filter(
		(c) => c !== currentCategory
	)

	const { setCurrentCategory, toggleDropDownOpened, closeDropDown } =
		useActions()

	return (
		<ul className={styles.selector__area}>
			<li className={styles.dropdown__li} onClick={toggleDropDownOpened}>
				<div
					className={cn(cn(styles.dropdown__item, styles.current), {
						[styles.dropdown__opened]: isDropDownOpened,
					})}
				>
					<p className={styles.text}>{currentCategory}</p>
					<div className={styles.triangle} />
				</div>
			</li>
			{isDropDownOpened &&
				otherCategories.map((category) => (
					<li
						className={styles.dropdown__li}
						onClick={() => {
							setCurrentCategory(category)
							closeDropDown()
						}}
					>
						<DropdownItem category={category} key={category} />
					</li>
				))}
		</ul>
	)
}
export default DropDownSelector
