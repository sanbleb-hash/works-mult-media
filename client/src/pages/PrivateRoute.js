import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	const [loggedIn, setLoggedIn] = useState(true);

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) setLoggedIn(true);
		});
	}, [auth]);

	return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
