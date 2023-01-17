import {Bt_add_to_cart} from '../../assets/icons/Bt_add_to_cart';
import {Bt_added_to_cart} from '/src/assets/icons/Bt_added_to_cart';
import './Product.scss';

function Product({product, onClick, cartList, setCartList}) {
	const onClickAddToCart = () => {
		setCartList([...cartList, product]);
	};

	const onClickAddedToCart = () => {
		let newCartList = [...cartList];
		newCartList.splice(newCartList.indexOf(product), 1);
		setCartList(newCartList);
	};

	return (
		<div className='product-card'>
			<div className='product-img-container' onClick={onClick}>
				<img
					src={product.images[0] ? product.images[0] : product.images[1]}
					alt='product'
				/>
			</div>
			<div className='product-info-container'>
				<div className='product-info'>
					<p className='title-center'>$ {product.price}</p>
					<p className='text-info'>{product.title}</p>
				</div>
				{cartList.indexOf(product) >= 0 ? (
					<button className='cart-button' onClick={onClickAddedToCart}>
						<Bt_added_to_cart />
					</button>
				) : (
					<button className='cart-button' onClick={onClickAddToCart}>
						<Bt_add_to_cart />
					</button>
				)}
			</div>
		</div>
	);
}

export {Product};
