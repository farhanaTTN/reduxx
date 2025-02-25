// redux/actions/index.js
import axios from "axios";

export const fetchQuotes = () => async (dispatch) => {
    dispatch({ type: 'FETCH_QUOTES_REQUEST' });

    try {
        const response = await axios.get('https://dummyjson.com/quotes');
        dispatch({ type: 'FETCH_QUOTES_SUCCESS', payload: response.data.quotes });
    } catch (error) {
        dispatch({ type: 'FETCH_QUOTES_FAILURE', payload: error.message });
    }
};
