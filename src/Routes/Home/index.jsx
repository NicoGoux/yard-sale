import { useContext, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Icon_arrow } from '../../assets/icons/Icon_arrow';
import { Icon_search } from '../../assets/icons/Icon_search';
import { ShoppingCart } from '../../Components/ShoppingCart';
import { AppContext } from '../../Context/AppContext';
import './Home.scss';

function Home() {
	const { searchValue, setSearchValue, showShoppingCart, setShowShoppingCart } =
		useContext(AppContext);

	const [params, setParams] = useSearchParams();

	useEffect(() => {
		if (params.getAll('search').length !== 0) {
			setSearchValue(params.getAll('search')[0]);
		}
	}, [params]);

	const onSearchInputChange = (event) => {
		setSearchValue(event.target.value);
		setParams({ search: event.target.value });
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
				<div className='search-icon'>
					<Icon_search />
				</div>
			</div>
			<div className='order-text-container'>
				<p className='title-center'>
					Order: <span className='text-info'>Most Relevant</span>
				</p>
				<div className='arrow-container'>
					<Icon_arrow />
				</div>
			</div>

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

export { Home };
