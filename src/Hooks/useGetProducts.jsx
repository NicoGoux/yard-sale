import {useEffect, useState} from 'react';
import axios from 'axios';
function useGetProducts(slug) {
	const API = 'https://api.escuelajs.co/api/v1/products';

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const getProducts = async () => {
			let queryFilter;
			if (slug === 'all') {
				queryFilter = '';
			} else {
				switch (slug) {
					case 'clothes':
						queryFilter = '/?categoryId=1';
						break;
					case 'electronics':
						queryFilter = '/?categoryId=2';
						break;
					case '':
						queryFilter = '/?categoryId=2';
						break;
					case 'furniture':
						//TODO no implementado en api
						queryFilter = '/?categoryId=999';
						break;
					case 'toys':
						//TODO no implementado en api
						queryFilter = '/?categoryId=999';
						break;
					case 'others':
						//TODO no implementado en api
						queryFilter = '/?categoryId=5';
						break;
					default:
						queryFilter = '';
				}
			}
			const response = await axios(`${API}${queryFilter}`);
			setProducts(response.data);
			setLoading(false);
		};
		getProducts();
	}, [slug]);

	return {products, loading};
}

export {useGetProducts};
