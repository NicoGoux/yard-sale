import {NavLink, useNavigate} from 'react-router-dom';
import {LogoYardSale} from '/src/assets/logos/LogoYardSale';

function PasswordRecovery() {
	const navigate = useNavigate();

	const onSubmit = () => {
		navigate('/login/recovery/sent');
	};

	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<p className='title-center'>Password recovery</p>
				<p className='text-info'>Inform the email address used to create your account</p>
				<form className='form' onSubmit={onSubmit}>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='text'
						id='email'
						placeholder='platzi@example.com'
						className='input input-email'
					/>

					<input type='submit' value='Submit' className='primary-button login-button' />
					<p></p>
					<NavLink to='/login'>Back to log in</NavLink>
				</form>
			</div>
		</div>
	);
}

export {PasswordRecovery};
