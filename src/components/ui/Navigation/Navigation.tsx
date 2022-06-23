import { FC } from 'react'

import { navItems } from '../../../data/navItems'
import NavItem from './NavItem'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<ul className={styles.navigation}>
			{navItems.map((title) => (
				<NavItem title={title} key={title} />
			))}
		</ul>
	)
}
export default Navigation
