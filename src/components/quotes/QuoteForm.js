import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

import { useState } from 'react';

const QuoteForm = (props) => {
	const authorInputRef = useRef();
	const textInputRef = useRef();

	const [error, setError] = useState(null);

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here
		if (enteredAuthor.trim().length === 0) {
			setError('author');
			return;
		}

		if (enteredText.trim().length === 0) {
			setError('text');
			return;
		}

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitFormHandler}>
				{props.isLoading && (
					<div className={classes.loading}>
						<LoadingSpinner />
					</div>
				)}
				{error && <p className="bg-red">Please enter {error}</p>}
				<div className={classes.control}>
					<label htmlFor="author">Author</label>
					<input
						type="text"
						id="author"
						ref={authorInputRef}
						className={error === 'author' ? classes.err : ''}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="text">Text</label>
					<textarea
						id="text"
						rows="5"
						ref={textInputRef}
						className={error === 'text' ? classes.err : ''}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button className="btn">Add Quote</button>
				</div>
			</form>
		</Card>
	);
};

export default QuoteForm;
