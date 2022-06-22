import { FC } from 'react'
import { navItems } from '../../../data/navItems'
import styles from './Navigation.module.scss'
import NavItem from '../NavItem/NavItem'

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
