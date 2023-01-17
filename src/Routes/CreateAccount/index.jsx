import {LogoYardSale} from '/src/assets/logos/LogoYardSale';
import {useRef} from 'react';

function CreateAccount() {
	const form = useRef('');

	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<form className='form' ref={form}>
					<label htmlFor='email' className='label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						placeholder='name'
						className='input input-email'
					/>
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

					<input type='submit' value='Create' className='primary-button login-button' />
				</form>
			</div>
		</div>
	);
}

export {CreateAccount};
