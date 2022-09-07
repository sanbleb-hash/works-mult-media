import { createContext, useReducer } from 'react';

export const articleContext = createContext();

const INITIAl_STATE = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null,
	articleID: localStorage.getItem('article')
		? JSON.parse(localStorage.getItem('article'))
		: null,
	loading: false,
	error: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INITIAL_STAGE':
			return {
				loading: true,
			};
		case 'USER_LOGIN':
			return {
				...state,
				loading: false,
				payload: action.payload,
			};
		case 'LOGIN_OUT_USER':
			return {
				...state,
				loading: false,
				user: localStorage.removeItem('user'),
			};
		case 'USER_ERROR':
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case 'ARTICLE_PAYLOAD':
			return {
				...state,
				isLoading: false,
				articleID: action.payload,
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
