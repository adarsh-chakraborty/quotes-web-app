import { Navigate, Route, Routes } from 'react-router-dom';

import AllQuotes from './components/pages/AllQuotes.js';
import NewQuote from './components/pages/NewQuote.js';
import QuoteDetail from './components/pages/QuoteDetail.js';
import Comments from './components/comments/Comments.js';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound.js';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate to="/quotes" />} />
				<Route path="/quotes">
					<Route index element={<AllQuotes />} />

					<Route path=":quoteId" element={<QuoteDetail />}>
						<Route path="comments" element={<Comments />} />
					</Route>
				</Route>

				<Route path="/new-quote" element={<NewQuote />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
