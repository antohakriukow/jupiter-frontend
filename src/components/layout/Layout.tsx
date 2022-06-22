import { FC } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'

interface ILayout {
	children?: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			{children}
		</div>
	)
}
export default Layout
