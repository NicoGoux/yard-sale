import {useNavigate} from 'react-router-dom';
import {LogoYardSale} from '/src/assets/logos/LogoYardSale';

function NotFound() {
	const navigate = useNavigate();
	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale className='logo-login' otherClass={'logo-login'}></LogoYardSale>
				<p className='title-center'>NOT FOUND</p>
				<p className='text-info'>the page was not found</p>

				<button
					className='primary-button login-button'
					onClick={() => {
						navigate('/home/all', {replace: true});
					}}
				>
					Back to Home
				</button>
			</div>
		</div>
	);
}

export {NotFound};
