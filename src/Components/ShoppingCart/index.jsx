import {useContext} from 'react';
import {AppContext} from '../../Context/AppContext';

function ShoppingCart({showShoppingCart}) {
	const [cartList, setCartList] = useContext(AppContext);

	return (
		<aside className={`product-sidebar ${showShoppingCart && 'show-sidebar'}`}>
			{/* <button className='close-detail-button' onClick={onClickCloseSideBarButton}>
				<img src='/src/assets/icons/icon_close.png' alt='close-button' />
			</button> */}
		</aside>
	);
}

export {ShoppingCart};
