import {createContext, useState} from 'react';

const AppContext = createContext({});

function AppProvider(props) {
	const [cartList, setCartList] = useState([]);

	return (
		<AppContext.Provider value={{cartList, setCartList}}> {props.children}</AppContext.Provider>
	);
}

export {AppContext, AppProvider};
