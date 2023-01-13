import {NavLink} from 'react-router-dom';
import {LogoYardSale} from '/src/assets/logos/LogoYardSale';
import './Login.scss';

function Login() {
	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<form className='form'>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='text'
						id='email'
						placeholder='platzi@example.cm'
						className='input input-email'
					/>

					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='*********'
						className='input input-password'
					/>

					<input type='submit' value='Log in' className='primary-button login-button' />
					<NavLink to='/recovery'>Forgot my password</NavLink>
				</form>

				<button className='secondary-button signup-button'>Sign up</button>
			</div>
		</div>
	);
}

export {Login};
