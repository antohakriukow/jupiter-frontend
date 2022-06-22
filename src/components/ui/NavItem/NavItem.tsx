import { FC } from 'react'
import styles from './NavItem.module.scss'

interface INavItem {
	title: string
}
const NavItem: FC<INavItem> = ({ title }) => {
	return (
		<li className={styles.nav__li}>
			<a href="/" className={styles.nav__item}>
				{title}
			</a>
		</li>
	)
}
export default NavItem
