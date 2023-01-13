import {useParams} from 'react-router-dom';
import {ProductGrid} from '../../Components/ProductGrid';
import './Home.scss';

function Home() {
	const {slug} = useParams();

	console.log(slug);

	return (
		<section className='Home'>
			<input type='text' className='input search-input' />
			<p className='title-center'>
				Order: <span className='text-info'>Most Relevant</span>
			</p>

			<ProductGrid />
		</section>
	);
}

export {Home};
