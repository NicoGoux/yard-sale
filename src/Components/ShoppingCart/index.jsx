import {useContext} from 'react';
import {Icon_close} from '../../assets/icons/Icon_close';
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

	let totalPrice = 0;

	return (
		<aside className='shopping-cart-sidebar'>
			<div className='shopping-cart-title-container'>
				<button className='x-button' onClick={onClickCloseSideBarButton}>
					<Icon_close />
				</button>
				<h2>Shopping cart</h2>
			</div>
			<div className='shopping-cart-products'>
				{cartList.length !== 0 ? (
					cartList.map((product) => {
						totalPrice += product.price;
						return (
							<div
								key={`shopping-cart-product ${product.id}`}
								className='shopping-cart-product'
							>
								<div className='shopping-cart-product-image'>
									<img src={product.images[0]} alt='product-image' />
								</div>

								<p className='text-info product-title'>{product.title}</p>
								<p className='text-info product-price'>$ {product.price}</p>
								<button
									className='x-button'
									onClick={() => onClickRemoveProduct(product)}
								>
									<Icon_close />
								</button>
							</div>
						);
					})
				) : (
					<h2> Shopping cart is empty</h2>
				)}
			</div>
			<div className='total-price-container'>
				<p className='text-info product-price'>Total</p>
				<p className='text-info product-price'>$ {totalPrice}</p>
			</div>
			<button className='primary-button checkout-button'>Checkout</button>
		</aside>
	);
}

export {ShoppingCart};
