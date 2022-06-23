import { ICard } from '../../components/ui/Card/card.interface'

export interface IUiState {
	cards: ICard[]
	categories: string[]
	currentCard: string
	currentCategory: string
	cardsCount: number
	noMoreCards: boolean
	isDropDownOpened: boolean
}
