import { FC } from 'react'
import { cards } from '../../../data/cards'
import CardArea from '../../ui/CardArea/CardArea'
import Selector from '../../ui/Selector/Selector'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<>
			<Selector />
			<CardArea cards={cards} />
		</>
	)
}
export default Home
