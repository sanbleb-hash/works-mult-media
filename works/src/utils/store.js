import { createContext, useReducer } from 'react';

export const articleContext = createContext();

const INITIAl_STATE = {
	articleID: localStorage.getItem('article')
		? JSON.parse(localStorage.getItem('article'))
		: null,
	loading: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_ARTICLE':
			return {
				loading: true,
			};
		case 'ARTICLE_PAYLOAD':
			return {
				...state,
				articleID: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};

export const ArticleProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAl_STATE);
	return (
		<articleContext.Provider value={{ state, dispatch }}>
			{children}
		</articleContext.Provider>
	);
};
