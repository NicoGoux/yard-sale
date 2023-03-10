import {NavLink, useNavigate} from 'react-router-dom';
import {LogoYardSale} from '/src/assets/logos/LogoYardSale';
import './Login.scss';
import {useRef} from 'react';

function Login() {
	const form = useRef('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		};
		data;
	};

	const onClickSignUpButton = () => {
		navigate('/login/create-account');
	};

	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<form className='form' ref={form}>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='text'
						name='email'
						placeholder='platzi@example.com'
						className='input input-email'
					/>

					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='*********'
						className='input input-password'
					/>

					<input
						type='submit'
						value='Log in'
						className='primary-button login-button'
						onClick={handleSubmit}
					/>
					<NavLink to='/login/recovery'>Forgot my password</NavLink>
				</form>

				<button className='secondary-button signup-button' onClick={onClickSignUpButton}>
					Sign up
				</button>
			</div>
		</div>
	);
}

export {Login};
