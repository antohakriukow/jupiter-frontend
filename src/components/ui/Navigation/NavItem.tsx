import { FC } from 'react'

import styles from './Navigation.module.scss'

interface INavItem {
	title: string
}
const NavItem: FC<INavItem> = ({ title }) => {
	return (
		<li className={styles.navigation__li}>
			<a href="/" className={styles.navigation__item}>
				{title}
			</a>
		</li>
	)
}
export default NavItem
