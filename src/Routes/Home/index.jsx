import {useContext} from 'react';
import {Outlet, useSearchParams} from 'react-router-dom';
import {ShoppingCart} from '../../Components/ShoppingCart';
import {AppContext} from '../../Context/AppContext';
import './Home.scss';

function Home() {
	const {searchValue, setSearchValue, showShoppingCart, setShowShoppingCart} =
		useContext(AppContext);

	const [params, setParams] = useSearchParams();

	if (params.getAll('search').length !== 0) {
		setSearchValue(params.getAll('search')[0]);
	}

	const onSearchInputChange = (event) => {
		setSearchValue(event.target.value);
		setParams({search: event.target.value});
	};

	return (
		<section className='Home'>
			<div className='search-input-container'>
				<input
					placeholder='Search product'
					type='text'
					className='input search-input'
					value={searchValue}
					onChange={onSearchInputChange}
				/>
				<img
					className='search-icon'
					src='/src/assets/icons/icon_search.svg'
					alt='search-icon'
				/>
			</div>
			<p className='title-center'>
				Order: <span className='text-info'>Most Relevant</span>
			</p>

			<Outlet />

			{showShoppingCart && (
				<ShoppingCart
					showShoppingCart={showShoppingCart}
					setShowShoppingCart={setShowShoppingCart}
				/>
			)}
		</section>
	);
}

export {Home};
