import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'
import Home from './components/pages/home/Home'
import './index.css'
import 'typeface-epilogue'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout>
				<Home />
			</Layout>
		</Provider>
	</React.StrictMode>
)
