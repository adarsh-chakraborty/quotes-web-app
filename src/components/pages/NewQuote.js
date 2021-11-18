import { useEffect } from 'react';
import QuoteForm from '../quotes/QuoteForm';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { addQuote } from '../../lib/api';

const NewQuote = () => {
	const { sendRequest, status, error } = useHttp(addQuote);

	const navigate = useNavigate();

	useEffect(() => {
		if (!error && status === 'completed') {
			navigate('/quotes');
		}
	}, [status, navigate, error]);

	if (error) {
		return <p className="centered focused red">Request Failed. Try again :/</p>;
	}

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);
		// navigate('/quotes', { replace: true });
	};
	return (
		<QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
	);
};

export default NewQuote;
