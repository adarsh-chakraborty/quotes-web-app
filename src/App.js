import React, { Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import AllQuotes from './components/pages/AllQuotes.js';

import QuoteDetail from './components/pages/QuoteDetail.js';
import Comments from './components/comments/Comments.js';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound.js';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./components/pages/NewQuote.js'));

function App() {
	return (
		<Layout>
			<Suspense
				fallback={
					<div className="centered">
						<LoadingSpinner />
					</div>
				}
			>
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
			</Suspense>
		</Layout>
	);
}

export default App;
