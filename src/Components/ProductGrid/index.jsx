import {Product} from '../Product';
import './ProductGrid.scss';
import '/src/styles/loading.scss';
import {useGetProducts} from '../../Hooks/useGetProducts';
import {useContext, useEffect, useState} from 'react';
import {ProductDetail} from '../ProductDetail';
import {AppContext} from '../../Context/AppContext';

function ProductGrid({slug}) {
	const {
		cartList,
		setCartList,
		searchValue,
		setSearchValue,
		showProductSideBar,
		setShowProductSideBar,
	} = useContext(AppContext);

	const [productDetail, setProductDetail] = useState(null);

	const {products, loading} = useGetProducts(slug);

	useEffect(() => {
		if (productDetail !== null) {
			productDetail;
			setShowProductSideBar(false);
			setShowProductSideBar(true);
		}
	}, [productDetail]);

	useEffect(() => {
		setSearchValue('');
	}, [slug]);

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
						{products
							.filter((product) =>
								product.title.toLowerCase().includes(searchValue.toLowerCase())
							)
							.map((product) => (
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
