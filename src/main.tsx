import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'src/assets/index.scss';
import App from './App.js';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
