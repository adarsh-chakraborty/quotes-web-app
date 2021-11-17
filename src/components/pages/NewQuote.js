import QuoteForm from '../quotes/QuoteForm';
import { useNavigate } from 'react-router-dom';

const NewQuote = () => {
	const navigate = useNavigate();
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
		// navigate('/quotes', { replace: true });
		navigate('/quotes');
	};
	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
