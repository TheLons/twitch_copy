import { useState, React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Home' element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
