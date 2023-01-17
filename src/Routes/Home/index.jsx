import {Outlet} from 'react-router-dom';
import './Home.scss';

function Home() {
	return (
		<section className='Home'>
			<div className='search-input-container'>
				<input placeholder='Search product' type='text' className='input search-input' />
				<img
					className='search-icon'
					src='/src/assets/icons/icon_search.svg'
					alt='search-icon'
				/>
			</div>
			<p className='title-center'>
				Order: <span className='text-info'>Most Relevant</span>
			</p>

			<Outlet />
		</section>
	);
}

export {Home};
