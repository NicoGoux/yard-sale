import {useParams} from 'react-router-dom';
import {ProductGrid} from '../../Components/ProductGrid';
import './Home.scss';

function Home() {
	const {slug} = useParams();

	console.log(slug);

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

			<ProductGrid />
		</section>
	);
}

export {Home};
