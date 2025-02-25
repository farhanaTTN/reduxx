// pages/quotes.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../redux/actions';

const QuotesPage = () => {
    const dispatch = useDispatch();
    const { quotes, loading, error } = useSelector((state) => state.quotes);

    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Quotes</h1>
            <ul>
                {quotes.map((quote) => (
                    <li key={quote.id}>
                        "{quote.quote}" - {quote.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuotesPage;
