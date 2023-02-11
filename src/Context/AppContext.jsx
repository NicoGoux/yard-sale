import { createContext, useEffect, useState } from 'react';

const AppContext = createContext({});

function AppProvider(props) {
	const [showShoppingCart, setShowShoppingCart] = useState(false);

	const [showProductSideBar, setShowProductSideBar] = useState(false);

	const [cartList, setCartList] = useState([]);

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		if (showShoppingCart) {
			setShowProductSideBar(false);
		}
	}, [showShoppingCart]);

	useEffect(() => {
		if (showProductSideBar) {
			setShowShoppingCart(false);
		}
	}, [showProductSideBar]);

	return (
		<AppContext.Provider
			value={{
				cartList,
				setCartList,
				searchValue,
				setSearchValue,
				showShoppingCart,
				setShowShoppingCart,
				showProductSideBar,
				setShowProductSideBar,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider };
