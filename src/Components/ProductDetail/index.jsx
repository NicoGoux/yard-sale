import {DetailImage} from '../DetailImage';
import {Bt_add_to_cart} from '/src/assets/icons/Bt_add_to_cart';
import {Bt_added_to_cart} from '/src/assets/icons/Bt_added_to_cart';
import './ProductDetail.scss';

function ProductDetail({
	setShowProductSideBar,
	productDetail,
	setProductDetail,
	cartList,
	setCartList,
}) {
	const onClickCloseSideBarButton = () => {
		setProductDetail(null);
		setShowProductSideBar(false);
	};

	const onClickAddToCart = () => {
		setCartList([...cartList, productDetail]);
	};

	const onClickAddedToCart = () => {
		let newCartList = [...cartList];
		newCartList.splice(newCartList.indexOf(productDetail, 1));
		setCartList(newCartList);
	};

	return (
		<aside className='product-sidebar'>
			<DetailImage productDetail={productDetail} images={productDetail.images} />
			<div className='product-detail-container'>
				<h2 className='title-center price-text'>$ {productDetail.price}</h2>
				<h2 className='title-center title-text'>{productDetail.title}</h2>
				<p className='text-info'>{productDetail.description}</p>

				{cartList.indexOf(productDetail) >= 0 ? (
					<button
						className='secondary-button add-to-cart-button'
						onClick={onClickAddedToCart}
					>
						<Bt_added_to_cart />
						Added to cart
					</button>
				) : (
					<button
						className='primary-button add-to-cart-button'
						onClick={onClickAddToCart}
					>
						<Bt_add_to_cart />
						Add to cart
					</button>
				)}
			</div>

			<button className='close-detail-button' onClick={onClickCloseSideBarButton}>
				<img src='/src/assets/icons/icon_close.png' alt='close-button' />
			</button>
		</aside>
	);
}

export {ProductDetail};
