import { FC } from 'react'

import ContactBtn from '../../ui/ContactBtn/ContactBtn'
import Logo from '../../ui/Logo/Logo'
import Navigation from '../../ui/Navigation/Navigation'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__nav}>
				<Logo />
				<Navigation />
				<ContactBtn />
			</div>
			<div className={styles.header__text}>
				<h1 className={styles.header__title}>Portfolio</h1>
				<p className={styles.header__subtitle}>
					Agency provides a full service range including technical
					skills, design, business understanding.
				</p>
			</div>
		</div>
	)
}
export default Header
