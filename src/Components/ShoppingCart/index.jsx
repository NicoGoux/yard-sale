import {useContext} from 'react';
import {AppContext} from '../../Context/AppContext';
import './ShoppingCart.scss';

function ShoppingCart({setShowShoppingCart}) {
	const {cartList, setCartList} = useContext(AppContext);

	const onClickCloseSideBarButton = () => {
		setShowShoppingCart(false);
	};

	const onClickRemoveProduct = (product) => {
		let newCartList = [...cartList];
		newCartList.splice(newCartList.indexOf(product), 1);
		setCartList(newCartList);
	};

	return (
		<aside className='shopping-cart-sidebar'>
			<div className='shopping-cart-title-container'>
				<button className='x-button' onClick={onClickCloseSideBarButton}>
					<img src='/src/assets/icons/icon_close.png' alt='close-button' />
				</button>
				<h2>Shopping cart</h2>
			</div>

			{cartList.length !== 0 ? (
				cartList.map((product) => (
					<div
						key={`shopping-cart-product ${product.id}`}
						className='shopping-cart-product'
					>
						<div className='shopping-cart-product-image'>
							<img src={product.images[0]} alt='product-image' />
						</div>

						<p className='text-info product-title'>{product.title}</p>
						<p className='text-info product-price'>$ {product.price}</p>
						<button className='x-button' onClick={onClickRemoveProduct}>
							<img src='/src/assets/icons/icon_close.png' alt='remove-button' />
						</button>
					</div>
				))
			) : (
				<h2> Shopping cart is empty</h2>
			)}
		</aside>
	);
}

export {ShoppingCart};
