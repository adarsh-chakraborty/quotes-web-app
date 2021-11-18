import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import HighlightedQuote from '../quotes/HighlightedQuote';
import { getSingleQuote } from '../../lib/api';
import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteDetail = () => {
	const { quoteId } = useParams();
	const location = useLocation();

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused red">{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p className="centered focused red">No Quote with this ID found.</p>;
	}

	return (
		<>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			{!location.pathname.endsWith('/comments') && (
				<LoadCommentsBtn quoteId={quoteId} />
			)}
			<Outlet />
		</>
	);
};

const LoadCommentsBtn = ({ quoteId }) => {
	return (
		<div className="centered">
			<Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
				Load Comments
			</Link>
		</div>
	);
};

export default QuoteDetail;
