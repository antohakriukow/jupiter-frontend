import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cards } from '../../data/cards'
import { categories } from '../../data/categories'
import { IUiState } from './ui.interface'

const initialState: IUiState = {
	cards: cards,
	categories: categories,
	currentCard: '',
	currentCategory: 'Show All',
	cardsCount: 9,
	noMoreCards: false,
	isDropDownOpened: false,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showMoreCards: (state) => {
			state.cardsCount = state.cardsCount + 9
			if (state.cardsCount > state.cards.length) state.noMoreCards = true
		},
		setCurrentCategory: (state, action: PayloadAction<string>) => {
			state.currentCategory = action.payload
			state.currentCard = ''
		},
		setCurrentCard: (state, action: PayloadAction<string>) => {
			if (state.currentCard === action.payload) {
				state.currentCard = ''
				return
			}
			state.currentCard = action.payload
		},
		deleteCard: (state) => {
			state.cards = state.cards.filter(
				(card) => card._id !== state.currentCard
			)
			state.currentCard = ''
		},
		toggleDropDownOpened: (state) => {
			state.isDropDownOpened = !state.isDropDownOpened
		},
		closeDropDown: (state) => {
			state.isDropDownOpened = false
		},
	},
})

export const {
	showMoreCards,
	setCurrentCategory,
	deleteCard,
	setCurrentCard,
	toggleDropDownOpened,
	closeDropDown,
} = uiSlice.actions
export const uiReducer = uiSlice.reducer
