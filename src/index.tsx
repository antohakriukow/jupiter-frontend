import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'
import Home from './components/pages/home/Home'
import './index.css'
import 'typeface-epilogue'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
)
