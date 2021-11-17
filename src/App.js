import { Route, Routes } from 'react-router-dom';

import AllQuotes from './components/pages/AllQuotes.js';
import NewQuote from './components/pages/NewQuote.js';
import QuoteDetail from './components/pages/QuoteDetail.js';

function App() {
	return (
		<Routes>
			<Route path="/quotes" element={<AllQuotes />} />
			<Route path="/quotes/:quoteId" element={<QuoteDetail />} />
			<Route path="/new-quote" element={<NewQuote />} />
			<Route path="/*" element={<AllQuotes />} />
		</Routes>
	);
}

export default App;
