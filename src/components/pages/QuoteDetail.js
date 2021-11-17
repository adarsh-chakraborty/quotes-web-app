import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Adarsh Chakraborty', text: 'React is a Mess' },
	{
		id: 'q2',
		author: 'Random User',
		text: "If It's not worth it, Don't do it."
	},
	{ id: 'q3', author: 'Doge', text: 'I want food' },
	{ id: 'q4', author: 'SexyDoge69', text: 'Hii girls' }
];

const QuoteDetail = () => {
	const { quoteId } = useParams();
	const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
	const location = useLocation();

	if (!quote) {
		console.log(quote, ' not found');
		return <h1>No Quote with this ID found.</h1>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
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
