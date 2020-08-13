import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { config } from '@config';
import { ThemeProvider } from '@contexts/themeContext';
import { LocaleProvider } from '@contexts/localeContext';
import Routing from './routing';
import { GlobalHeader, GlobalFooter } from './pages/layout';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

function App() {
	return <LocaleProvider locale={config.language}>
		<ThemeProvider>
			<BrowserRouter>
				<Container>
					<GlobalHeader />
					<Routing config={config} />
					<GlobalFooter />
				</Container>
			</BrowserRouter>
		</ThemeProvider>
	</LocaleProvider>;
}

export default App;