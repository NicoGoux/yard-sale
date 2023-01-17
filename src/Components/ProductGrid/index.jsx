import {Product} from '../Product';
import './ProductGrid.scss';
import '/src/styles/loading.scss';
import {useGetProducts} from '../../Hooks/useGetProducts';
import {useContext, useEffect, useState} from 'react';
import {ProductDetail} from '../ProductDetail';
import {AppContext} from '../../Context/AppContext';

function ProductGrid({slug}) {
	const {cartList, setCartList} = useContext(AppContext);

	const [productDetail, setProductDetail] = useState(null);

	const [showProductSideBar, setShowProductSideBar] = useState(false);

	const {products, loading} = useGetProducts(slug);

	useEffect(() => {
		if (productDetail !== null) {
			productDetail;
			setShowProductSideBar(false);
			setShowProductSideBar(true);
		}
	}, [productDetail]);

	useEffect(() => {
		console.log(cartList);
	}, [cartList]);

	const onClickProductCard = (product) => {
		setProductDetail(product);
		product;
	};

	return (
		<>
			{loading ? (
				<div className='sk-chase home-loading'>
					<div className='sk-chase-dot'></div>
					<div className='sk-chase-dot'></div>
					<div className='sk-chase-dot'></div>
					<div className='sk-chase-dot'></div>
					<div className='sk-chase-dot'></div>
					<div className='sk-chase-dot'></div>
				</div>
			) : (
				<>
					<div className='ProductGrid'>
						{products.map((product) => (
							<Product
								key={product.id}
								product={product}
								onClick={() => onClickProductCard(product)}
								cartList={cartList}
								setCartList={setCartList}
							/>
						))}
					</div>
					{showProductSideBar && (
						<ProductDetail
							showProductSideBar={showProductSideBar}
							setShowProductSideBar={setShowProductSideBar}
							productDetail={productDetail}
							setProductDetail={setProductDetail}
							cartList={cartList}
							setCartList={setCartList}
						/>
					)}
				</>
			)}
		</>
	);
}

export {ProductGrid};
