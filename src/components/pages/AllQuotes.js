import QuoteList from '../quotes/QuoteList';

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

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
