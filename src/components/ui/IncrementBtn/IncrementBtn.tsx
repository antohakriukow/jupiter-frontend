import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useActions'
import { TypeRootState } from '../../../store/store'
import styles from './IncrementBtn.module.scss'

const IncrementBtn: FC = () => {
	const { showMoreCards } = useActions()
	const noMoreCards = useSelector(
		(state: TypeRootState) => state.ui.noMoreCards
	)

	return (
		<div className={styles.btnArea}>
			{!noMoreCards && (
				<button className={styles.btn} onClick={() => showMoreCards()}>
					LOAD MORE
				</button>
			)}
		</div>
	)
}
export default IncrementBtn
