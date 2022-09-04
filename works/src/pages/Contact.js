import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articleContext } from '../utils/store';

const Contact = () => {
	const { state } = useContext(articleContext);

	const { user } = state;
	const navigate = useNavigate();
	useEffect(() => {
		user && navigate('/create');
	}, [user, navigate]);
	return (
		<div>
			Contact
			<Link to='/login'>log in</Link>
		</div>
	);
};

export default Contact;
