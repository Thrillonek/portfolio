import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './css/App.css';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className='relative flex flex-col min-h-screen'>
			{/* <div className='-z-10'>
				<div className='top-[60%] left-[20%] rotate-[35deg] scale-[800%] glow'></div>
				<div className='top-[20%] left-[80%] rotate-[80deg] scale-[500%] glow'></div>
			</div> */}
			<header>
				<div className='relative flex items-center gap-8'>
					<div className='flex items-center gap-4'>
						<img src='/logo.svg' alt='Logo' className='w-12' />
						<h1 className='text-3xl serif'>Jindřich Kraina</h1>
					</div>
					<div className='self-stretch bg-neutral-600 my-1 w-[2px]'></div>
					<nav>
						<Link className='nav-item' to='/'>
							Domů
						</Link>
						<Link className='nav-item' to='/reference'>
							Reference
						</Link>
						<Link className='nav-item' to='/kontakt'>
							Kontakt
						</Link>
					</nav>
				</div>
			</header>
			<main className='flex flex-grow'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/reference' element={<h1>Reference</h1>} />
					<Route path='/kontakt' element={<h1>Kontakt</h1>} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
