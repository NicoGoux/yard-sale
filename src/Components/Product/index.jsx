import {Bt_add_to_cart} from '../../assets/icons/Bt_add_to_cart';
import './Product.scss';

function Product() {
	return (
		<div className='product-card'>
			<div className='product-img-container'>
				<img
					src='https://img.freepik.com/free-vector/black-podium-black-background-realistic-pedestal-dark-background_145391-913.jpg?w=1380&t=st=1673387671~exp=1673388271~hmac=e7c5c5655c1bbdd32ab54c74d3a8c8583bf67bb8112760e55c0adfa939f8fd61'
					alt='product'
				/>
			</div>
			<div className='product-info-container'>
				<div className='product-info'>
					<p className='title-center'>$ 120,00</p>
					<p className='text-info'>Black cube</p>
				</div>
				<button className='add-to-cart'>
					<Bt_add_to_cart />
				</button>
			</div>
		</div>
	);
}

export {Product};
