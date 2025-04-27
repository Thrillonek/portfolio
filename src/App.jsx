import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<nav>
				<div className='flex items-center gap-4'>
					<img src='/logo.svg' alt='Logo' className='w-12' />
					<h1 className='text-3xl serif'>Jindřich Kraina</h1>
				</div>

				<div className='text-xl'>
					<Link to='/reference'>Reference</Link>
				</div>
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/reference' element={<h1>Reference</h1>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
